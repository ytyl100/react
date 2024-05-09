import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Card, CardBody, Media, Nav, NavItem, NavLink, TabContent, TabPane, } from 'reactstrap';
import CatalogProducts from './CatalogProducts';
import { DownOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import MediaLib from './MediaLib';
import uuid from 'react-uuid';
import { getApiData, saveApiData } from '../../../helpers/handleApi';

import "react-quill/dist/quill.snow.css";

import classNames from 'classnames';
import {
    Button,
    Switch,
    Form,
    Input,
    Select,
    Tree,
    Space,
    Alert,
    Radio
} from 'antd';

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "code"],
        ["clean"],
    ],
};

const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "code",
];

const CatalogEffect = (props) => {
    const [form] = Form.useForm();

    const { treeData, initialValues, onFinish, handleFileListChange, activeTab, fileList, toggleTab, handleTreeSelect, onFormClose,
        catalog_active, catalog_enable, catalog_name, catalog_url, catalog_icon, catalog_intro, catalog_description, onEditorContentChange, initId, vendor } = props;

    const [catalogTree, setCatalogTree] = useState([
        {
            id: initId,
            activate: true,
            title: 'ex-hub-' + initId,
            value: 'ex-hub-' + initId,
            key: '0-0',
            children: [
                {
                    title: '',
                    value: '',
                    key: '0-0-0',
                    children: [

                    ],
                },
            ],
        },
    ]);
    const [catalogNodeSelect, setCatalogNode] = useState([]);
    const [expandedKeys] = useState(['ex-hub-2025']);
    const [newCatalogInfo, setInfo] = useState(false);
    const [topKey, setTopKey] = useState({});
    const [newNode, setNewNode] = useState({});

    const [fileLibraryList, setFileLibraryList] = useState([]);
    const [fileSelectedList, setSelectedList] = useState([]);
    const [neworUpdate, setValueNeworUpdate] = useState('new');
    const [imglocation, setImgLocation] = useState('');
    const [libClicked, setOnlibButtonClick] = useState({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {

        const catalogItemUrl = '/catalog/';
        const catalogDelUrl = '/catalog/delete/:id';

        const vendorid = vendor ? vendor.id ? vendor.id : 5 : 5;
        let currentTree = [];


        if (initId) {
            const getDatas = async () => {

                const response = await getApiData(catalogItemUrl, initId);
                const data = await response;
                let findTopKey = data['key'];
                currentTree.push(data);

                setTopKey(findTopKey);
                setCatalogTree(currentTree);
            }
            getDatas()
        }
        else {
            let firstNode = [
                {
                    title: 'ex-hub 2025',
                    value: 'ex-hub-2025',
                    url: "",
                    icon: "",
                    key: uuid(),
                    vendor_id: vendorid,
                    activate: true,
                    children: []
                }
            ];
            setCatalogTree(firstNode);
            //setCatalogTree(fetchTree);
            setInfo(false);
            setNewNode({
                title: 'newNode1',
                value: 'newNode1',
                url: "",
                icon: "",
                desc: '',
                image_url: '',
                key: '0',
            })
        }
        refreshFilelist(vendorid);

    }, []);

    const refreshFilelist = (vendorid) => {
        const fileListUrl = '/storage/list?category=';
        const categoryStr = 'catalog';
        const getFileData = async () => {

            const response = await getApiData(fileListUrl, categoryStr);
            const data = await response;
            for (let i = 0; i < data.length; i++) {
                if (data[i] && data[i].createdAt) {
                    data[i].createdAt = new Date(data[i].createdAt).toISOString();

                }
            }
            setFileLibraryList(data);
        }
        getFileData()

        const catalogSaveLocation = 'catalog';
        setImgLocation(catalogSaveLocation);
        setOnlibButtonClick(false);
    }

    const handleInnerTreeSelect = (selectedKeys) => {

        console.log('select node:', selectedKeys);

        setInfo(true);
        //setValueNeworUpdate('update');
        toggleTab('detail');
        setCatalogNode(selectedKeys);

        if (neworUpdate === "update") {
            FindCurrentNode(catalogTree, selectedKeys[0]);
            let selectSaveLocation = 'catalog/';
            setImgLocation(selectSaveLocation);
        }

    }

    const handleAddChild = () => {

        let ckNode = findCatalogFromKey(catalogTree)[0];
        console.log('ck node:', ckNode);
        if (ckNode) {
            form.setFieldsValue({
                catalog_active: false,
                catalog_enable: true,
                catalog_name: '',
                catalog_intro: '',
                catalog_url: '',
                catalog_icon: '',
                catalog_description: '',
            });
            setInfo(true);
        }
        else {
            alert('请先选择一个节点录入目录资料。')
        }

    }

    const handleCopyCurrent = () => {
        const catalogSaveUrl = '/catalog/save';
        const copyTree = [...catalogTree];
        copyTree[0].id = 0;
        copyTree[0].key = uuid();

        console.log('final copy tree:', copyTree);
        const saveDatas = async () => {
            let res = await saveApiData(catalogSaveUrl, copyTree[0]);
            console.log('save tree response0:', res.key);
            if (res) {
                console.log('save tree response1:', JSON.stringify(res.id));
            }

        }
        saveDatas()
    }

    const handleDeleteCurrent = (values) => {

        console.log('current tree:', values);
        if (topKey && catalogNodeSelect[0] && topKey === catalogNodeSelect[0]) {
            //not allow update top level node
            alert('顶级节点无法删除。');
        }
        else {
            if (catalogNodeSelect[0]) {
                const copyTree = [...catalogTree];
                let currentTree = DeleteCurrentNode(copyTree, catalogNodeSelect[0]);
                setCatalogTree(currentTree);
            }
            else {
                alert('请选择需要删除的节点');
            }

        }


    }

    const AddNewNode = (data, key, node, chlidnode) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i] && data[i].key === key) {
                if (data[i].children) {
                    data[i].children.push(node);
                }
                else {
                    console.log('copy childnode:', chlidnode);
                    data[i] = { ...data[i], ...chlidnode };
                }
            }
            if (data[i] && data[i].children) {
                AddNewNode(data[i].children, key, node, chlidnode);
            }
        }
        return data;
    };

    const DeleteCurrentNode = (data, key) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i] && data[i].key === key) {
                console.log('current value:', data[i]);
                data.splice(i, 1);
                //delete data[i];
            }
            if (data[i] && data[i].children) {
                DeleteCurrentNode(data[i].children, key);
            }
        }
        return data = data.filter(function (x) { return x !== null });
    };

    const FindCurrentNode = (data, key) => {

        for (let i = 0; i < data.length; i++) {
            if (data[i] && data[i].key === key) {

                let find_activate = neworUpdate === "update" ? data[i].activate : '';
                let find_enable = neworUpdate === "update" ? data[i].enabled : '';
                let find_title = neworUpdate === "update" ? data[i].title : '';
                let find_url = neworUpdate === "update" ? data[i].url : '';
                let find_icon = neworUpdate === "update" ? data[i].icon : '';
                let find_short_desc = neworUpdate === "update" ? data[i].short_desc : '';
                let find_long_desc = neworUpdate === "update" ? data[i].long_desc : '';

                form.setFieldsValue({
                    catalog_active: find_activate,
                    catalog_enable: find_enable,
                    catalog_name: find_title,
                    catalog_url: find_url,
                    catalog_icon: find_icon,
                    catalog_intro: find_short_desc,
                    catalog_description: find_long_desc,
                });
                setSelectedList(data[i].image_url ? data[i].image_url : null);
                break;
            }
            if (data[i] && data[i].children) {
                FindCurrentNode(data[i].children, key);
            }
        }
    };

    const SetCurrentTree = (data, key, values, vendorid, selectedImg) => {
        console.log('find current key0:', key);
        for (let i = 0; i < data.length; i++) {
            console.log('find current selectedImg:', data[i].key);
            if (data[i] && data[i].key === key) {
                const updateNode = {
                    vendor_id: vendorid,
                    activate: values.catalog_active,
                    enabled: values.catalog_enable,
                    title: values.catalog_name,
                    value: values.catalog_name,
                    url: values.catalog_url,
                    icon: values.catalog_icon,
                    short_desc: values.catalog_intro,
                    image_url: selectedImg,
                    key: key,
                }
                console.log('find node:', updateNode);
                data[i] = updateNode;
                break;
            }
            if (data[i] && data[i].children) {
                SetCurrentTree(data[i].children, key, values, vendorid, selectedImg);
            }
        }
    };

    let catalogValue = [];
    const findCatalogFromKey = (originalJson) => {

        for (var key in originalJson) {
            if (originalJson.hasOwnProperty(key)) {
                var value = originalJson[key];
                if (typeof value === 'object' && value !== null) {
                    if (value.key === catalogNodeSelect[0]) {
                        if (typeof value.value !== 'undefined') {
                            console.log('current children3', value.value);
                            catalogValue.push(value.value);
                        }
                    }
                    findCatalogFromKey(value);
                }
            }

        }
        return catalogValue;
    }

    const onDragEnter = (info) => {
        console.log(info);
    };

    const onDrop = (info) => {
        console.log(info);
        const dropKey = info.node.key;
        const dragKey = info.dragNode.key;
        const dropPos = info.node.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
        const loop = (data, key, callback) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i] && data[i].key === key) {
                    return callback(data[i], i, data);
                }
                if (data[i] && data[i].children) {
                    loop(data[i].children, key, callback);
                }
            }
        };
        const data = [...catalogTree];

        // Find dragObject
        let dragObj;
        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });
        if (!info.dropToGap) {
            // Drop on the content
            loop(data, dropKey, (item) => {
                item.children = item.children || [];
                // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
                item.children.unshift(dragObj);
            });
        } else if (
            (info.node.props.children || []).length > 0 &&
            // Has children
            info.node.props.expanded &&
            // Is expanded
            dropPosition === 1 // On the bottom gap
        ) {
            loop(data, dropKey, (item) => {
                item.children = item.children || [];
                // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
                item.children.unshift(dragObj);
                // in previous version, we use item.children.push(dragObj) to insert the
                // item to the tail of the children
            });
        } else {
            let ar = [];
            let i;
            loop(data, dropKey, (_item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                ar.splice(i, 0, dragObj);
            } else {
                ar.splice(i + 1, 0, dragObj);
            }
        }
        console.log('new node after position change:', data);
        setCatalogTree(data);
    };

    const onSubmit = (values) => {
        console.log('Received values of form: ', values);
        console.log('catalogTree:', catalogTree);

        const catalogSaveUrl = '/catalog/save';
        const copyTree = [...catalogTree];
        const vendorid = vendor ? vendor.id ? vendor.id : 5 : 5;
        if (newCatalogInfo) {
            if (neworUpdate === 'new' && !libClicked) {
                const newNode = {
                    vendor_id: vendorid,
                    title: values.catalog_name,
                    value: values.catalog_name,
                    url: values.catalog_url,
                    icon: values.catalog_icon,
                    short_desc: values.catalog_intro,
                    image_url: '',
                    key: uuid(),
                }
                const newchildNode = {
                    children: [newNode]
                };

                let currentTree = AddNewNode(copyTree, catalogNodeSelect[0], newNode, newchildNode);
                console.log('current tree add:', currentTree[0].id);

                const saveDatas = async () => {
                    let postedData = {};
                    postedData = currentTree[0];
                    console.log('posted tree:', postedData);
                    let res = await saveApiData(catalogSaveUrl, postedData);
                    console.log('save tree response0:', res.key);
                    if (res) {
                        console.log('save tree response1:', JSON.stringify(res.id));

                        let responseData = [];
                        responseData.push(res);
                        setCatalogTree(responseData);
                    }

                }
                saveDatas()
            }
            else {
                console.log('newCatalogInfo:', neworUpdate);
                console.log('current tree update0:', copyTree);
                console.log('update values', values);
                console.log('img selected file list:', fileSelectedList);
                console.log('find selected key:', catalogNodeSelect[0]);
                console.log('current lib click', libClicked);
                console.log('top key:', topKey);
                //only update once libclicked is false, which means user either select the image or no selection or cancel selection,
                //if user only click to open lib, no update will be operated.
                if (!libClicked) {
                    if (topKey && catalogNodeSelect[0] && topKey === catalogNodeSelect[0]) {
                        //not allow update top level node
                        alert('Top level node is not allowed update');
                    }
                    else {
                        SetCurrentTree(copyTree, catalogNodeSelect[0], values, vendorid, fileSelectedList)
                        console.log('final copy tree:', copyTree);
                        const saveDatas = async () => {
                            let res = await saveApiData(catalogSaveUrl, copyTree[0]);
                            console.log('save tree response0:', res.key);
                            if (res) {
                                console.log('save tree response1:', JSON.stringify(res.id));

                                let responseData = [];
                                responseData.push(res);
                                setCatalogTree(responseData);
                            }

                        }
                        saveDatas()
                    }
                }
            }
        }
        else {
            // let currentTree = AddNewNode(copyTree, catalogNodeSelect[0], updateNode, updateChildNode);
            console.log('current tree update:', copyTree);
        }


    };

    const onFileSelect = (item) => {
        console.log('selectCallback:', item);
        setSelectedList(item);
        //after user selected the image, we set the media lib click as false
        setOnlibButtonClick(false);
    }

    const onLibbuttonClick = () => {
        //once user click the lib button, we consider it as true;
        setOnlibButtonClick(true);
        console.log('current node:', libClicked);
    }

    const onChangeNeworUpdate = ({ target: { value } }) => {
        let ckNode = findCatalogFromKey(catalogTree)[0];
        console.log('ck node:', ckNode);
        console.log('ck update or new:', value);
        console.log('ck current tree:', catalogTree);
        if (ckNode) {
            if (value === 'new') {
                form.setFieldsValue({
                    catalog_active: false,
                    catalog_enable: true,
                    catalog_name: '',
                    catalog_intro: '',
                    catalog_url: '',
                    catalog_icon: '',
                    catalog_description: '',
                });
                //catalogTree[0].id = 0;
                setInfo(true);
            }
            else {
                let currentUpdatetree = FindCurrentNode(catalogTree, catalogNodeSelect[0]);
                console.log('current updated tree:', currentUpdatetree);
            }

        }
        else {
            alert('请先选择一个节点录入目录资料。')
        }
        setValueNeworUpdate(value);
    };

    const notification = neworUpdate === "update" ?
        "您将在所选择的当前类目[ " + findCatalogFromKey(catalogTree)[0] + " ]更新目录信息，提交信息之后刷新更新菜单。"
        : "您将在所选择的当前类目[ " + findCatalogFromKey(catalogTree)[0] + " ]下建立一个新的子目录，提交信息之后刷新更新菜单。";

    const optionsNeworUpdate = [
        {
            label: '更新当前子节点',
            value: 'update',
        },
        {
            label: '创建新子节点',
            value: 'new',
        },
    ];

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="catalog_form"
            onFinish={onSubmit}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 18,
            }}
            scrollToFirstError
        >
            <Row>
                <Col xl={3}>
                    <Row>
                        <Col md={12}>
                            <Card >
                                <CardBody style={{ backgroundColor: "#f7f7f7" }}>
                                    <Row>
                                        <Col>
                                            <React.Fragment>

                                                <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff" }}>
                                                    <Media body >
                                                        <Form.Item name="catalog_treecatalog" className="mt-0 mb-0 p-2">
                                                            <h6 className="mt-0 mb-2 header-title">选择所属类目</h6>
                                                            <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                                按照建立的类目建立同级类目或者子级类目</p>

                                                            <Tree
                                                                showLine
                                                                switcherIcon={<DownOutlined />}
                                                                defaultExpandedKeys={expandedKeys}
                                                                //defaultSelectedKeys={expandedKeys}
                                                                //defaultExpandedKeys={['0-0-0-2']}
                                                                //defaultExpandParent={['0-0-0-2']}
                                                                //expandedKeys={['0-0-0-2']}
                                                                //defaultExpandAll
                                                                draggable
                                                                //blockNode
                                                                onDragEnter={onDragEnter}
                                                                onDrop={onDrop}
                                                                //defaultSelectedKeys={['0-0-0-2']}
                                                                onSelect={handleInnerTreeSelect}
                                                                treeData={catalogTree}
                                                            />
                                                        </Form.Item>
                                                        {/* <Form.Item {...tailFormItemLayout}> */}
                                                        <Space size="middle">
                                                            <div className="mt-4" style={{ float: "right" }}>
                                                                <span className="dtr-data">
                                                                    {/* <button onClick={handleAddChild} className="btn btn-primary mr-2" data-toggle="modal" data-target="#bs-role-modal-xl">添加当前目录子目录</button> */}
                                                                    {/* <Button htmlType="button" onClick={handleAddRoot}>
                                                                            Reset
                                                                        </Button> */}
                                                                    {/* <Button type="link" htmlType="button" onClick={handleAddRoot(catalogNodeSelect)}>
                                                                            Fill form
                                                                        </Button> */}
                                                                </span>
                                                            </div>
                                                        </Space>
                                                        {/* </Form.Item> */}

                                                    </Media>
                                                </Media>


                                            </React.Fragment>
                                        </Col>

                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Col>
                <Col xl={9}>
                    <Row>
                        <Col md={12}>
                            <Card>
                                <CardBody>
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                href="#"
                                                className={classNames({ active: activeTab === 'detail' })}
                                                onClick={() => { toggleTab('detail'); }}>基本信息</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#"
                                                className={classNames({ active: activeTab === 'advance' })}
                                                onClick={() => { toggleTab('advance'); }}>扩展信息</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#"
                                                className={classNames({ active: activeTab === 'preview' })}
                                                onClick={() => { toggleTab('preview'); }}>产品类目预览</NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="detail">
                                            <Row>
                                                <Col sm="12">
                                                    <Card >
                                                        <CardBody style={{ backgroundColor: "#f7f7f7" }}>
                                                            <Row>
                                                                <Col>
                                                                    <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff", fontSize: "15px" }}>
                                                                        <Media body >
                                                                            <h6 className="mt-0 mb-2 header-title">产品类目信息的录入 </h6>
                                                                            <div style={{ display: 'ruby-text' }}>
                                                                                <div>
                                                                                    <Radio.Group
                                                                                        options={optionsNeworUpdate}
                                                                                        onChange={onChangeNeworUpdate}
                                                                                        value={neworUpdate}
                                                                                        optionType="button"
                                                                                        buttonStyle="solid"
                                                                                    />
                                                                                </div>
                                                                                <div style={{ float: 'right' }}>
                                                                                    <Button type="primary" className="mr-2 ml-2" onClick={handleCopyCurrent} htmlType="button">
                                                                                        复制当前类目
                                                                                    </Button>
                                                                                    <Button type="primary" className="mr-2 ml-2" htmlType="submit">
                                                                                        提交更新信息
                                                                                    </Button>
                                                                                </div>
                                                                            </div>


                                                                            <hr></hr>
                                                                            {newCatalogInfo && findCatalogFromKey(catalogTree)[0] && (
                                                                                <Alert showIcon={true} showLine={true} className="mt-2 mb-2"
                                                                                    message={notification} type="info" />
                                                                            )}

                                                                            <Form.Item name="catalog_active" label="启动产品类目" valuePropName="checked" className="mt-0 mb-0 p-1">
                                                                                <Switch value={catalog_active} />
                                                                            </Form.Item>
                                                                            <Form.Item name="catalog_enable" label="启动类目菜单" valuePropName="checked" className="mt-0 mb-0 p-1">
                                                                                <Switch value={catalog_enable} />
                                                                            </Form.Item>
                                                                            <Form.Item
                                                                                name="catalog_name"
                                                                                label="产品类目标题"
                                                                                value={catalog_name}
                                                                                tooltip="当前的产品类目标题是什么?"
                                                                                rules={[
                                                                                    {
                                                                                        required: true,
                                                                                        message: '请输入产品类目标题',
                                                                                        whitespace: true,
                                                                                    },
                                                                                ]}
                                                                            ><Input />
                                                                            </Form.Item>
                                                                            {/* <Form.Item
                                                                                name="catalog_url"
                                                                                label="产品类目URL"
                                                                                value={catalog_url}
                                                                                tooltip="当前的产品类目URL是什么?"

                                                                            ><Input />
                                                                            </Form.Item>
                                                                            <Form.Item
                                                                                name="catalog_icon"
                                                                                label="产品类目图标"
                                                                                value={catalog_icon}
                                                                                tooltip="当前的产品类目图标是什么?"
                                                                            ><Input />
                                                                            </Form.Item> */}
                                                                            <Form.Item
                                                                                name="catalog_intro"
                                                                                label="系列简单介绍"
                                                                                value={catalog_intro}
                                                                            >
                                                                                <Input.TextArea showCount maxLength={100} />
                                                                            </Form.Item>

                                                                            {/* <Form.Item
                                                                                style={{ minHeight: '230px' }}
                                                                                name="catalog_description"
                                                                                label="系列详细描述"
                                                                            >
                                                                                <ReactQuill style={{ height: 200 }}
                                                                                    theme="snow"
                                                                                    value={catalog_description || ""}
                                                                                    modules={modules}
                                                                                    formats={formats}
                                                                                    onChange={onEditorContentChange}
                                                                                    placeholder={catalog_description}
                                                                                />
                                                                            </Form.Item> */}
                                                                            <Form.Item
                                                                                label="从图片库选择图片"
                                                                            >
                                                                                <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                                                    只允许 *.png, *.jpg and *.jpeg 图片格式</p>
                                                                                <MediaLib htmlType="button"
                                                                                    initId={initId}
                                                                                    vendor={vendor}
                                                                                    refreshMediaLib={refreshFilelist}
                                                                                    fileLibraryList={fileLibraryList}
                                                                                    fileSelectedList={fileSelectedList}
                                                                                    saveLocation={imglocation}
                                                                                    onFileSelect={onFileSelect}
                                                                                    onLibbuttonClick={onLibbuttonClick}
                                                                                ></MediaLib>
                                                                            </Form.Item>
                                                                            <Form.Item {...tailFormItemLayout}>

                                                                                {/* <Button type="primary" className="mr-2 ml-2" htmlType="submit">
                                                                                    提交更新信息
                                                                                </Button> */}
                                                                                <Button type="primary" className="mr-2 ml-2" onClick={handleDeleteCurrent} htmlType="button">
                                                                                    删除当前类目
                                                                                </Button>
                                                                                <Button className='mr-2 ml-2' onClick={onFormClose}>取消提交</Button>
                                                                                {/* <Button type="primary" className="mr-2 ml-2" onClick={handleCopyCurrent} htmlType="button">
                                                                                    复制当前类目
                                                                                </Button> */}
                                                                            </Form.Item>
                                                                        </Media>
                                                                    </Media>
                                                                </Col>

                                                            </Row>
                                                        </CardBody>

                                                        <CardBody style={{ backgroundColor: "#f7f7f7" }}>
                                                            <Row>
                                                                <Col>
                                                                    <React.Fragment>


                                                                    </React.Fragment>
                                                                </Col>

                                                            </Row>
                                                        </CardBody>

                                                    </Card>

                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="advance">
                                            <Row>
                                                <Col sm="12">
                                                    <Card >
                                                        <CardBody style={{ backgroundColor: "#f7f7f7" }}>
                                                            <Row>
                                                                <Col>
                                                                    <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff" }}>
                                                                        <Media body >
                                                                            <CatalogProducts></CatalogProducts>
                                                                        </Media>

                                                                    </Media>
                                                                </Col>

                                                            </Row>
                                                        </CardBody>

                                                        <CardBody style={{ backgroundColor: "#f7f7f7" }}>
                                                            <Row>
                                                                <Col>
                                                                    <React.Fragment>

                                                                    </React.Fragment>
                                                                </Col>

                                                            </Row>
                                                        </CardBody>

                                                    </Card>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="preview">
                                            <Row>
                                                <Col sm="12">
                                                    preview
                                                    {/* <Sessions Sections={currentCourse} SectionBottom={this.state.sectionBottom}></Sessions> */}
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Col>
            </Row>

        </Form>

    );
};

export default CatalogEffect;
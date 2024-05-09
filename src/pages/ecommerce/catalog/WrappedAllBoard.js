/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Media, Nav, NavItem, NavLink, TabContent, TabPane, } from 'reactstrap';
import { Form, Input, Button, Select, Tree, Switch, } from 'antd';
import RichTextEditor from '../../../components/RichTextEditor';
import { MinusCircleOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import PageTitle from '../../../components/PageTitle';
import CatalogEffect from '../utilities/CatalogUseEffect';
import CatalogProducts from './CatalogProducts';
import { Info } from 'react-feather';
import ImageUpload from '../utilities/ImageHandler';



class AllBoard extends Component {
    // eslint-disable-next-line no-useless-constructor
    formRef = React.createRef();
    constructor(props) {
        super(props);
        const { match, } = this.props;
        const { id } = match.params;

        this.state = {
            activeTab: 'detail',
            selectedKeys: [],
            fileList: [
                {
                    uid: '-1',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
            ], // Initialize an empty file list            
            catalogInitVal: null,
            catalog_active: false,
            catalog_enable: true,
            catalog_name: '',
            catalog_intro: '',
            catalog_description: '',
        }
        this.toggleTab = this.toggleTab.bind(this);
    }

    componentDidMount() {
        // Set initial values for the form fields
        this.props.form.setFieldsValue({
            catalog_active: true,
            catalog_enable: true,
            catalog_name: '',
            catalog_intro: '店铺介绍-测试666',
            catalog_description: '店铺地址-测试666',
        });
    }

    toggleTab = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    handleTreeSelect = (selectedKeys) => {
        this.setState({ selectedKeys });

        console.log('formRef:', this.props);

        this.props.form.setFieldsValue({
            catalog_active: true,
            catalog_enable: true,
            catalog_name: selectedKeys[0],
            catalog_intro: '店铺介绍-测试666',
            catalog_description: '店铺地址-测试666',
        });

        // this.formRef.current.setFieldsValue({
        //     catalog_intro: '店铺介绍-测试666',
        //     catalog_description: '店铺地址-测试666',
        // });

        // form.setFieldsValue({
        //     catalog_active: true,
        //     catalog_enable: true,
        //     catalog_name: selectedKeys[0],
        //     catalog_intro: '店铺介绍-测试666',
        //     catalog_description: '店铺地址-测试666',
        // });


        console.log('selectedKeys:', this.state);
    };


    handleTreeSelectOption = (selectedKeys) => {
        //this.props.onTreeSelect(selectedKeys);
        console.log('selectedKeys:', selectedKeys, Info);

    };

    handleTreeCatalogSubmit = (value) => {

    }

    handleFileListChange = (newFileList) => {
        this.setState({ fileList: newFileList });
        console.log('file list change:', newFileList);
    };

    onFormSubmission = (values) => {
        console.log('Received values of form: ', values);
    };

    onFormClose = () => {
        this.props.history.push(`/ecommerce/categoryitems`);
    }

    onEditorContentChange = editorContent => {
        this.setState({ newReplyContent: editorContent });
    }

    render() {

        const treeData = [
            {
                title: 'ex-hub 2024',
                value: 'ex-hub-2024',
                key: '0-0',
                children: [
                    {
                        title: 'Clothing & Apparel',
                        value: 'clothing-apparel',
                        key: '0-0-0',
                        children: [
                            {
                                title: 'Accessories',
                                value: 'accessories',
                                key: '0-0-0-0',
                            },
                            {
                                title: 'Bags',
                                value: 'bags',
                                key: '0-0-0-1',
                            },
                            {
                                title: "Kid's Fashion",
                                value: 'kids-fashion',
                                key: '0-0-0-2',
                            },
                            {
                                title: "Mens",
                                value: 'mens',
                                key: '0-0-0-3',
                            },
                        ],
                    },
                    {
                        title: 'Garden & Kitchen',
                        value: 'garden-kitchen',
                        key: '0-0-1',
                        children: [
                            {
                                title: 'Cookware',
                                value: 'cookware',
                                key: '0-0-1-0',
                            },
                            {
                                title: 'Decoration',
                                value: 'decoration',
                                key: '0-0-1-1',
                            },
                            {
                                title: 'Furniture',
                                value: 'furniture',
                                key: '0-0-1-2',
                            },
                            {
                                title: 'Garden Tools',
                                value: 'garden-tools',
                                key: '0-0-1-3',
                            },
                        ],
                    },
                    {
                        title: 'Consumer Electrics',
                        value: 'consumer-electrics',
                        key: '0-0-2',
                        children: [
                            {
                                title: 'Air Conditioners',
                                value: 'air-conditioners',
                                key: '0-0-2-0',
                            },
                            {
                                title: 'Audios & Theaters',
                                value: 'audios-theaters',
                                key: '0-0-2-1',
                            },
                            {
                                title: 'Car Electronics',
                                value: 'car-electronics',
                                key: '0-0-2-2',
                            },
                            {
                                title: 'Office Electronics',
                                value: 'office-electronics',
                                key: '0-0-2-3',
                            },
                        ],
                    },
                ],
            },
        ];
        const { catalogInitVal, catalog_active, catalog_enable, catalog_name, catalog_intro,
            catalog_description, selectedKeys, fileList } = this.state;

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
        const initialValues = ['0-0-0']; // Set the initial selected value here

        const { getFieldDecorator } = this.props.form;

        console.log('catalog change:', catalog_name);
        return <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Apps', path: '/apps/tasks/list' },
                            { label: 'Tasks', path: '/apps/tasks/list', active: true },
                        ]}
                        title={'类目管理'}
                    />
                </Col>
            </Row>

            {/* filter panel */}
            <Row>
                <Col xl={12}>

                    <Card>
                        <CardBody>
                            <p className="sub-header">
                                电商类目管理可以建立一个或者多个独立的菜单组，在供货商其下的商铺可以选择不同的菜单组展示在电商前端.
                            </p>
                            <Form {...formItemLayout}
                                name="catalog_form"
                                // form={form}
                                // ref={this.formref}
                                onFinish={this.onFormSubmission}
                                initialValues={{
                                    catalog_active: catalog_active,
                                    catalog_enable: catalog_enable,
                                    catalog_name: catalog_name,
                                }}
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
                                                                                    defaultExpandedKeys={['0-0-0']}
                                                                                    defaultSelectedKeys={initialValues}
                                                                                    onSelect={this.handleTreeSelect}
                                                                                    treeData={treeData}
                                                                                />
                                                                            </Form.Item>

                                                                            <Form.Item name="catalog_template" className="mt-0 mb-0 p-2">
                                                                                <h6 className="mt-0 mb-2 header-title">选择商业模板</h6>
                                                                                <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                                                    请选择适合业务的商业模板展示产品</p>

                                                                                <Select name="catalog_template"
                                                                                    className="mb-3 react-select"
                                                                                    options={[
                                                                                        { value: 'wigs', label: 'wigs' },
                                                                                        { value: 'sports', label: 'sports' },
                                                                                        { value: 'furniture', label: 'furniture' },
                                                                                    ]}></Select>
                                                                            </Form.Item>

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
                                                                    className={classNames({ active: this.state.activeTab === 'detail' })}
                                                                    onClick={() => { this.toggleTab('detail'); }}>基本信息</NavLink>
                                                            </NavItem>
                                                            <NavItem>
                                                                <NavLink
                                                                    href="#"
                                                                    className={classNames({ active: this.state.activeTab === 'advance' })}
                                                                    onClick={() => { this.toggleTab('advance'); }}>扩展信息</NavLink>
                                                            </NavItem>
                                                            <NavItem>
                                                                <NavLink
                                                                    href="#"
                                                                    className={classNames({ active: this.state.activeTab === 'preview' })}
                                                                    onClick={() => { this.toggleTab('preview'); }}>产品类目预览</NavLink>
                                                            </NavItem>
                                                        </Nav>
                                                        <TabContent activeTab={this.state.activeTab}>
                                                            <TabPane tabId="detail">
                                                                <Row>
                                                                    <Col sm="12">
                                                                        <Card >
                                                                            <CardBody style={{ backgroundColor: "#f7f7f7" }}>
                                                                                <Row>
                                                                                    <Col>
                                                                                        <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff", fontSize: "15px" }}>
                                                                                            <Media body >
                                                                                                <h6 className="mt-0 mb-2 header-title">产品类目信息的录入</h6>
                                                                                                <hr></hr>
                                                                                                <Form.Item name="catalog_active" label="启动产品类目" valuePropName="checked" className="mt-0 mb-0 p-2">
                                                                                                    <Switch value={catalog_active} />
                                                                                                </Form.Item>
                                                                                                <Form.Item name="catalog_enable" label="启动类目菜单" valuePropName="checked" className="mt-0 mb-0 p-2">
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
                                                                                                <Form.Item
                                                                                                    name="catalog_intro"
                                                                                                    label="系列简单介绍"
                                                                                                    value={catalog_intro}
                                                                                                    rules={[
                                                                                                        {
                                                                                                            required: true,
                                                                                                            message: '请输入系列简单介绍',
                                                                                                        },
                                                                                                    ]}
                                                                                                >
                                                                                                    <Input.TextArea showCount maxLength={100} />
                                                                                                </Form.Item>
                                                                                                <Form.Item
                                                                                                    name="catalog_description"
                                                                                                    label="系列详细描述"
                                                                                                    rules={[
                                                                                                        {
                                                                                                            required: true,
                                                                                                            message: '请输入系列详细描述',
                                                                                                        },
                                                                                                    ]}
                                                                                                >
                                                                                                    <RichTextEditor onEditorContentChange={this.onEditorContentChange} />
                                                                                                </Form.Item>
                                                                                                <Form.Item
                                                                                                    name="catalog_image"
                                                                                                    label="类目图片"
                                                                                                >
                                                                                                    <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                                                                        只允许 *.png, *.jpg and *.jpeg 图片格式</p>
                                                                                                    <ImageUpload onFileListChange={this.handleFileListChange} fileList={fileList}></ImageUpload>
                                                                                                </Form.Item>
                                                                                                <Form.Item
                                                                                                    name="catalog_vendor"
                                                                                                    label="所属供货商"
                                                                                                    rules={[
                                                                                                        {
                                                                                                            required: true,
                                                                                                            message: '请选择你的供货商',
                                                                                                        },
                                                                                                    ]}
                                                                                                >
                                                                                                    <Select placeholder="请选择供货商">
                                                                                                        <Option value="winmax">winmax</Option>
                                                                                                        <Option value="belle">belle</Option>
                                                                                                        <Option value="other">Other</Option>
                                                                                                    </Select>
                                                                                                </Form.Item>

                                                                                                <Form.Item {...tailFormItemLayout}>
                                                                                                    <Button type="primary" htmlType="submit">
                                                                                                        提交信息
                                                                                                    </Button>
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
                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </React.Fragment>
    }
}

const WrappedAllBoard = Form.create()(AllBoard);

export default WrappedAllBoard;
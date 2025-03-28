/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, } from 'reactstrap';
import { Cookies } from 'react-cookie';
import PageTitle from '../../../components/PageTitle';
import CatalogEffect from '../utilities/CatalogUseEffect';
import { Info } from 'react-feather';
import { fetchJSON } from '../../../helpers/api';
import { getLoggedInUser } from '../../../helpers/authUtils';

class Board extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        const { match } = this.props;
        const { id } = match.params ? match.params : 3;
        const vendor = getLoggedInUser() ? getLoggedInUser().vendor ? getLoggedInUser().vendor : null : null;
        console.log('match:', match);
        this.state = {
            activeTab: 'detail',
            selectedKeys: [],
            initId: id,
            vendor: vendor,
            fileList: [
                {
                    uid: '-1',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
            ], // Initialize an empty file list 
            catalog_active: null,
            catalog_enable: null,
            catalog_name: '',
            catalog_url: '',
            catalog_icon: '',
            catalog_intro: '',
            catalog_description: '123',
            display: false,
            fileLibraryList: [
                {
                    _id: 1,
                    title: "Me and my dog",
                    size: 294880,
                    fileName: "img_3549.jpg",
                    type: "image/jpeg",
                    createdAt: new Date("2019-10-17T03:12:29.866Z"),
                    thumbnailUrl:
                        "https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"
                },
                {
                    _id: 2,
                    title: "2019 Summer Vacation",
                    size: 864483,
                    fileName: "201702.jpg",
                    type: "image/jpeg",
                    createdAt: new Date("2019-10-17T03:12:45.018Z"),
                    thumbnailUrl:
                        "https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"
                },
                {
                    _id: 3,
                    title: "Our new baby",
                    size: 586458,
                    fileName: "271092.jpg",
                    type: "image/jpeg",
                    createdAt: new Date("2019-10-17T03:19:33.498Z"),
                    thumbnailUrl:
                        "https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"
                },
                {
                    _id: 4,
                    title: "My new car",
                    size: 894665,
                    fileName: "photo-107.jpg",
                    type: "image/jpeg",
                    createdAt: new Date("2019-10-17T03:28:39.723Z"),
                    thumbnailUrl:
                        "https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg"
                }
            ],
            treeData: []
        }
        this.toggleTab = this.toggleTab.bind(this);
    }

    componentDidMount = async () => {

    }

    getApiData = async (apiUrl, id) => {
        // if(id){
        let cookies = new Cookies();
        let token = cookies.get('token');
        let url = apiUrl;
        if (id) {
            url = apiUrl + id;
        }

        let options = {
            method: "GET",
            headers: {
                'Authorization': token,
            },
        }
        var res = await fetchJSON(url, options);

        return res;
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

        this.setState({
            // catalogInitVal: null,
            catalog_active: true,
            catalog_enable: false,
            catalog_name: selectedKeys[0],
            catalog_url: '',
            catalog_icon: '',
            catalog_intro: '店铺-测试666',
            catalog_description: '店铺-8888',
        })

        console.log('selectedKeys:', selectedKeys);
    };

    handleTreeSelectOption = (selectedKeys) => {
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

    buildNewNestedJson = (selectedKeys) => {
        let newJson = [];
        let newNode = {
            title: 'newNode',
            value: 'newNode',
            url: '',
            icon: '',
            key: '0',
        }
        let originalJson = this.state.treeData;
        for (var key in originalJson) {
            if (originalJson.hasOwnProperty(key)) {
                var value = originalJson[key];

                if (typeof value === 'object' && value !== null) {
                    if (value.key === selectedKeys) {
                        if (typeof value.children !== 'undefined') {
                            value.children.push(newNode);
                        }
                        else {
                            value.children = newNode;
                        }
                    }
                    newJson[key] = this.buildNewNestedJson(value); // Recursively build nested JSON
                }
                else {
                    newJson[key] = value;
                }
            }

        }
        this.setState({ treeData: newJson });
    }

    render() {

        const { treeData, catalogInitVal, catalog_active, catalog_enable, catalog_name, catalog_url, catalog_icon, catalog_intro, catalog_description,
            fileList, toggleTab, activeTab, initId, vendor } = this.state;

        const initialValues = ['0-0-0']; // Set the initial selected value here


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

            <Row>
                <Col xl={12}>

                    <Card>
                        <CardBody>
                            <p className="sub-header">
                                电商类目管理可以建立一个或者多个独立的菜单组，在供货商其下的商铺可以选择不同的菜单组展示在电商前端.
                            </p>

                            <CatalogEffect
                                initId={initId}
                                vendor={vendor}
                                treeData={treeData}
                                onFormClose={this.onFormClose}
                                toggleTab={this.toggleTab}
                                activeTab={activeTab}
                                onFinish={this.onFormSubmission}
                                handleTreeSelect={this.handleTreeSelect}
                                initialValues={initialValues}
                                fileList={fileList}
                                handleFileListChange={this.handleFileListChange}
                                onEditorContentChange={this.onEditorContentChange}
                                catalogInitVal={catalogInitVal}
                                catalog_active={catalog_active}
                                catalog_enable={catalog_enable}
                                catalog_name={catalog_name}
                                catalog_url={catalog_url}
                                catalog_icon={catalog_icon}
                                catalog_intro={catalog_intro}
                                catalog_description={catalog_description}
                            ></CatalogEffect>

                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </React.Fragment>
    }
}


export default Board;
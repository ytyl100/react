/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Media } from 'reactstrap';
import { getLoggedInUser } from '../../../helpers/authUtils';
import { Button, message, Steps } from 'antd';
import uuid from 'react-uuid';
import { saveApiData, getApiData } from '../../../helpers/handleApi';

import PageTitle from '../../../components/PageTitle';
import ProductBaseAll from '../utilities/ProductBaseAll';


class BoardAll extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        const { match } = this.props;
        const { id } = match.params ? match.params : 3;
        const vendor = getLoggedInUser() ? getLoggedInUser().vendor ? getLoggedInUser().vendor : null : null;

        const treeData = [
            {
                "title": "Clothing & Apparel123",
                "value": "0-0-0",
                "key": "0-0-0",
                "children": [
                    {
                        "title": "Accessories",
                        "value": "0-0-0-0",
                        "key": "0-0-0-0",
                    },
                    {
                        "title": "Bags",
                        "value": "0-0-0-1",
                        "key": "0-0-0-1",
                    },
                    {
                        "title": "Kid's Fashion",
                        "value": "0-0-0-2",
                        "key": "0-0-0-2"
                    },
                    {
                        "title": "Mens",
                        "value": "0-0-0-3",
                        "key": "0-0-0-3",
                    }
                ]
            },
            {
                "title": "Garden & Kitchen",
                "value": "0-0-1",
                "key": "0-0-1",
                "children": [
                    {
                        "title": "Cookware",
                        "value": "0-0-1-0",
                        "key": "0-0-1-0"
                    },
                    {
                        "title": "Decoration",
                        "value": "0-0-1-1",
                        "key": "0-0-1-1",
                    },
                    {
                        "title": "Furniture",
                        "value": "0-0-1-2",
                        "key": "0-0-1-2"
                    },
                    {
                        "title": "Garden Tools",
                        "value": "0-0-1-3",
                        "key": "0-0-1-3"
                    }
                ]
            },
            {
                "title": "Consumer Electrics",
                "value": "0-0-2",
                "key": "0-0-2",
                "children": [
                    {
                        "title": "Air Conditioners",
                        "value": "0-0-2-0",
                        "key": "0-0-2-0"
                    },
                    {
                        "title": "Audios & Theaters",
                        "value": "0-0-2-1",
                        "key": "0-0-2-1"
                    },
                    {
                        "title": "Car Electronics",
                        "value": "0-0-2-2",
                        "key": "0-0-2-2"
                    },
                    {
                        "title": "Office Electronics",
                        "value": "0-0-2-3",
                        "key": "0-0-2-3"
                    }
                ]
            }
        ];

        this.state = {
            activeStepIndex: 0,
            initId: id,
            vendor: vendor,
            product_description: '123',
            initData: [],
            treeData: treeData,
            fileList: [
                {
                    uid: '-1',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
            ], // Initialize an empty file list
        };
    }

    componentWillUnmount = async () => {

    }

    // componentDidMount = async () => {
    //     let productUrl = '/product/origin';
    //     const response = await getApiData(productUrl);
    //     const data = await response;
    //     if (data && data.categories) {
    //         this.setState({ treeData: data.categories });
    //     }
    //     console.log('get product origin data:', data);
    // }

    handleFileListChange = (newFileList) => {
        this.setState({ fileList: newFileList });
        console.log('file list change:', newFileList);
    };

    onEditorContentChange = editorContent => {
        this.setState({ newReplyContent: editorContent });
    }

    onFormSubmission = (values) => {
        console.log('Received values of form: ', values);
        //add new product:product/save
        const productSaveUrl = '/product/save';

        let productVal = {
            id: this.state.initId ? this.state.initId : 0,
            vendor_id: this.state.vendor ? this.state.vendor.id ? this.state.vendor.id : 0 : 0,
            // key: values.attribute_name + '_' + uuid(),
            // activate: values.attribute_enable,
            // title: values.attribute_name,
            // intro: values.attribute_intro,
            // type: values.attribute_control,
        }

        const saveDatas = async () => {
            let res = await saveApiData(productSaveUrl, productVal);
            console.log('save tree response0:', res);
            if (res) {
                console.log('save tree response1:', res);
            }
            //onFormClose();
        }
        saveDatas()
    };

    onFormClose = () => {
        this.props.history.push(`/ecommerce/productitems`);
    }

    render() {


        return <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Apps', path: '/apps/tasks/list' },
                            { label: 'Tasks', path: '/apps/tasks/list', active: true },
                        ]}
                        title={'产品管理'}
                    />
                </Col>
            </Row>

            {/* filter panel */}
            <Row>
                <Col xl={12}>

                    <Card>
                        <CardBody>
                            <p className="sub-header">
                                工作部门管理可新建立权限组、用户组，并对权限组的菜单导航功能，模块管理功能权限进行设置之后，按照各个组将用户组分配到对应权限组.
                            </p>
                            <Row>
                                <Col xl={12}>
                                    <React.Fragment >
                                        <ProductBaseAll initId={this.state.initId} treeData={this.state.treeData} onFinish={this.onFormSubmission} handleFileListChange={this.handleFileListChange} fileList={this.state.fileList}
                                            onFormClose={this.onFormClose} onEditorContentChange={this.onEditorContentChange} product_description={this.state.product_description} ></ProductBaseAll>
                                    </React.Fragment>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </React.Fragment>
    }
}


export default BoardAll;
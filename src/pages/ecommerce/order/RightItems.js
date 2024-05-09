/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane, Media } from 'reactstrap';
import classNames from 'classnames';
import { Descriptions, Button } from 'antd';
import { getLoggedInUser } from '../../../helpers/authUtils';
import OrderBaseForm from '../utilities/OrderBaseForm';

class RightItems extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.toggleTab = this.toggleTab.bind(this);
        this.state = {
            activeTab: 'detail',
            initId: this.props.initId,
            vendor: this.props.vendor,
            fileLibraryList: [],
            fileSelectedList: [],
            libAttrImgClicked: false,
            libClicked: false,
            dataSource: [
                {
                    "id": 26,
                    "product_id": 25,
                    "key": "0",
                    "sku": "we0090-988-5-S-white",
                    "attribute": {
                        "size": "S",
                        "color": "white"
                    },
                    "intro": "size:S|color:white",
                    "price": "99.00",
                    "promote_price": "89.00",
                    "stock": 29,
                    "images": []
                },
                {
                    "id": 27,
                    "product_id": 25,
                    "key": "1",
                    "sku": "we0090-988-5-S-Red",
                    "attribute": {
                        "size": "S",
                        "color": "Red"
                    },
                    "intro": "size:S|color:Red",
                    "price": "68.99",
                    "promote_price": "88.88",
                    "stock": 66,
                    "images": [
                        {
                            "_id": 2,
                            "size": 6604,
                            "type": "image/jpeg",
                            "title": "avatar-2",
                            "filename": "avatar-2",
                            "createdAt": "1970-01-20T18:38:00.666Z",
                            "thumbnailUrl": "https://api.xhfair.com/storage/vendor/5/product/avatar-2.jpg"
                        },
                        {
                            "_id": 3,
                            "size": 6660,
                            "type": "image/jpeg",
                            "title": "avatar-4",
                            "filename": "avatar-4",
                            "createdAt": "1970-01-20T18:10:41.296Z",
                            "thumbnailUrl": "https://api.xhfair.com/storage/vendor/5/product/avatar-4.jpg"
                        }
                    ]
                },
            ],
        };
    }

    toggleTab = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    setDataSource = (value) => {
        this.setState({
            dataSource: value
        })
    }

    refreshFilelist = () => {
        const fileListUrl = '/storage/list?category=';
        const categoryStr = 'product';

    }

    onFileSelect = (item, key) => {

        // setSelectedList(item);
        // setOnlibButtonClick(false);
        // let varibles = getImgVal(dataSource, key, item);
        // console.log('genarete varibles:', varibles);
        // setDataSource(varibles);
        this.setState({
            libClicked: false
        })
    }

    onAttrImgSel = (item, key) => {

        // let varibles = getImgVal(dataSource, key, item);
        // console.log('genarete varibles:', varibles);
        // setDataSource(varibles);
        this.setState({
            libAttrImgClicked: false
        })
    }

    onLibbuttonClick = (value) => {
        //once user click the lib button, we consider it as true;
        console.log('setOnlibButtonClick set:', value);
        //setOnlibButtonClick(value);
        this.setState({
            libClicked: false
        })
    }

    onLibAttrImgbuttonClick = (value) => {
        //once user click the lib button, we consider it as true;
        console.log('onLibAttrImgbuttonClick set:', value);
        this.setState({
            libAttrImgClicked: value
        });
    }


    render() {
        const customerItems = [
            {
                key: '1',
                label: '用户名称',
                children: 'educator',
            },
            {
                key: '2',
                label: '用户邮箱',
                children: 'educator@gmail.com',
            },
            {
                key: '3',
                label: '订单时间',
                children: '2024-03-15 18:00:00',
            },
            {
                key: '7',
                label: '用户地址',
                children: (
                    <>
                        体育西路123号之一704
                        <br />
                        天河区 广州 广东 中国
                        <br />
                    </>
                ),
            },
        ];

        const orderItems = [
            {
                key: '4',
                label: '订单总额',
                children: '$80.00',
            },
            {
                key: '5',
                label: '订单折扣',
                children: '$20.00',
            },
            {
                key: '6',
                label: '购买数量',
                children: '3',
            },
            {
                key: '7',
                label: '订单内容',
                children: (
                    <>
                        产品：
                        <br />
                        we0090-988-5-S-white
                        <br />
                        内容：
                        <br />
                        we0090-988-5-S-white 单价：￥1099 数量：2 总额：￥2198
                    </>
                ),
            },
            {
                key: '8',
                label: '订单状态',
                children: (
                    <>
                        产品：有库存
                        <br />
                        订单待确认
                    </>
                ),
            },
        ];

        const deliverItems = [
            {
                key: '1',
                label: '用户名称',
                children: 'educator',
            },
            {
                key: '2',
                label: '用户邮箱',
                children: 'educator@gmail.com',
            },
            {
                key: '3',
                label: '订单时间',
                children: '18:00:00',
            },
            {
                key: '4',
                label: '订单总额',
                children: '$80.00',
            },
            {
                key: '5',
                label: '订单折扣',
                children: '$20.00',
            },
            {
                key: '6',
                label: '购买数量',
                children: '3',
            },
            {
                key: '7',
                label: '用户地址',
                children: (
                    <>
                        体育西路123号之一704
                        <br />
                        天河区
                        <br />
                        广州 广东 中国
                        <br />
                    </>
                ),
            },
        ];

        const paymentItems = [
            {
                key: '1',
                label: '用户名称',
                children: 'educator',
            },
            {
                key: '2',
                label: '用户邮箱',
                children: 'educator@gmail.com',
            },
            {
                key: '3',
                label: '订单时间',
                children: '18:00:00',
            },
            {
                key: '4',
                label: '订单总额',
                children: '$80.00',
            },
            {
                key: '5',
                label: '订单折扣',
                children: '$20.00',
            },
            {
                key: '6',
                label: '购买数量',
                children: '3',
            },
            {
                key: '7',
                label: '用户地址',
                children: (
                    <>
                        体育西路123号之一704
                        <br />
                        天河区
                        <br />
                        广州 广东 中国
                        <br />
                    </>
                ),
            },
        ];


        const { onFormSubmission } = this.props;
        return <React.Fragment>
            <Row>
                <Col md={12}>
                    <Card>
                        <CardBody>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        className={classNames({ active: this.state.activeTab === 'detail' })}
                                        onClick={() => { this.toggleTab('detail'); }}>订单信息</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        className={classNames({ active: this.state.activeTab === 'advance' })}
                                        onClick={() => { this.toggleTab('advance'); }}>品牌关联产品</NavLink>
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
                                                            <React.Fragment>
                                                                <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff" }}>
                                                                    <Media body >
                                                                        <Descriptions
                                                                            bordered
                                                                            title="客户信息"
                                                                            //size={size}
                                                                            extra={<Button type="primary">查看详细信息</Button>}
                                                                            items={customerItems}
                                                                        />
                                                                    </Media>
                                                                </Media>
                                                                <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff" }}>
                                                                    <Media body >
                                                                        <Descriptions
                                                                            bordered
                                                                            title="订单信息"
                                                                            extra={<Button type="primary">查看产品信息</Button>}
                                                                            //size={size}
                                                                            items={orderItems}
                                                                        />
                                                                        <p></p>
                                                                        <OrderBaseForm
                                                                            setDataSource={this.setDataSource}
                                                                            dataSource={this.state.dataSource}
                                                                            initId={this.state.initId}
                                                                            vendor={this.state.vendor}
                                                                            refreshMediaLib={this.refreshFilelist}
                                                                            fileLibraryList={this.state.fileLibraryList}
                                                                            fileSelectedList={this.state.fileSelectedList}
                                                                            onFileSelect={this.onAttrImgSel}
                                                                            onLibbuttonClick={this.onLibAttrImgbuttonClick}
                                                                        ></OrderBaseForm>
                                                                    </Media>
                                                                </Media>
                                                                <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff" }}>
                                                                    <Media body >
                                                                        <Descriptions
                                                                            bordered
                                                                            title="订单配送"
                                                                            extra={<Button type="primary">查看详细信息</Button>}
                                                                            //size={size}
                                                                            items={deliverItems}
                                                                        />
                                                                    </Media>
                                                                </Media>
                                                                <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff" }}>
                                                                    <Media body >
                                                                        <Descriptions
                                                                            bordered
                                                                            title="订单支付"
                                                                            extra={<Button type="primary">查看详细信息</Button>}
                                                                            //size={size}
                                                                            items={paymentItems}
                                                                        />
                                                                    </Media>
                                                                </Media>
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
                                                            <React.Fragment>
                                                                <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff" }}>
                                                                    <Media body >
                                                                        {/* <CollectionASProducts></CollectionASProducts> */}
                                                                    </Media>
                                                                </Media>
                                                            </React.Fragment>
                                                        </Col>

                                                    </Row>
                                                </CardBody>

                                            </Card>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>

                        </CardBody>
                    </Card>
                </Col>
            </Row>



        </React.Fragment >
    }
}


export default RightItems;
/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane, Media } from 'reactstrap';
import classNames from 'classnames';

import PageTitle from '../../../components/PageTitle';
import LeftSettings from './LeftSettings';
import { getLoggedInUser } from '../../../helpers/authUtils';
import AttributesetTransfer from '../utilities/AttributesetTransfer';

class BoardTransfer extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        const { match } = this.props;
        const { id } = match.params ? match.params : 3;
        const vendor = getLoggedInUser() ? getLoggedInUser().vendor ? getLoggedInUser().vendor : null : null;

        this.state = {
            initId: id,
            vendor: vendor,
            activeTab: 'detail',
            fileList: [
                {
                    uid: '-1',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
            ], // Initialize an empty file list
            attributeOptions: [
                { value: 'default', label: 'default', },
                { value: 'custom', label: 'custom' },
            ],
            attributeOrigin: [
                {
                    key: 1,
                    title: '按照产品的尺寸',
                    disabled: false,
                    tag: 'size',
                    status: 1,
                    description: 'Screen-显示器65寸，大屏薄屏高品质',
                },
                {
                    key: 2,
                    title: '按照产品的颜色属性',
                    disabled: false,
                    tag: 'color',
                    status: 2,
                    description: 'Screen-显示器65寸，大屏薄屏高品质',
                },
                {
                    key: 3,
                    title: '按照产品的材质属性',
                    disabled: false,
                    tag: 'material',
                    status: 2,
                    description: 'Screen-显示器65寸，大屏薄屏高品质',
                },
                {
                    key: 4,
                    title: '按照产品的款式属性',
                    disabled: false,
                    tag: 'style',
                    status: 1,
                    description: 'Screen-显示器65寸，大屏薄屏高品质',
                },
                {
                    key: 5,
                    title: '按照产品的型号属性',
                    disabled: false,
                    tag: 'modal',
                    status: 1,
                    description: 'Screen-显示器65寸，大屏薄屏高品质',
                },
            ],
        };
        this.toggleTab = this.toggleTab.bind(this);
    }

    componentDidMount = async () => {

    }

    toggleTab = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    handleFileListChange = (newFileList) => {
        this.setState({ fileList: newFileList });
        console.log('file list change:', newFileList);
    };

    onFormSubmission = (values) => {
        console.log('Received values of form: ', values);

    };

    handleOption = (value) => {
        console.log('file list change:', value.value);

    };

    onFormClose = () => {
        this.props.history.push(`/ecommerce/attributeItems`);
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
                        title={'属性集管理'}
                    />
                </Col>
            </Row>

            {/* filter panel */}
            <Row>
                <Col xl={12}>

                    <Card>
                        <CardBody>
                            品牌管理包括供应商管理的品牌类目的详细资料以及为各个类目下归档的品牌产品，方便用户通过品牌搜寻与浏览。<p className="sub-header">
                            </p>
                            <Row>
                                <Col xl={3}>
                                    <LeftSettings
                                        handleOption={this.handleOption}
                                        attributeOptions={this.state.attributeOptions}
                                        handleFileListChange={this.handleFileListChange}
                                        fileList={this.state.fileList}></LeftSettings>
                                </Col>
                                <Col xl={9}>
                                    {/* <RightItems onFormSubmission={this.onFormSubmission} onFormClose={this.onFormClose} initId={this.state.initId} vendor={this.state.vendor}></RightItems> */}
                                    <Row>
                                        <Col md={12}>
                                            <Card>
                                                <CardBody>
                                                    <Nav tabs>
                                                        <NavItem>
                                                            <NavLink
                                                                href="#"
                                                                className={classNames({ active: this.state.activeTab === 'detail' })}
                                                                onClick={() => { this.toggleTab('detail'); }}>品牌基本信息</NavLink>
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
                                                                                                <AttributesetTransfer
                                                                                                    attributeOrigin={this.state.attributeOrigin}
                                                                                                    onFinish={this.onFormSubmission}
                                                                                                    onFormClose={this.onFormClose}
                                                                                                    initId={this.state.initId}
                                                                                                    vendor={this.state.vendor}></AttributesetTransfer>
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
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </React.Fragment>
    }
}


export default BoardTransfer;
/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane, Media } from 'reactstrap';
import classNames from 'classnames';
import { Form, } from 'antd';
import CatalogProducts from '../utilities/CatalogProducts';
import StoreBaseForm from '../utilities/StoreBase';
import CatalogBaseForm from '../utilities/CatalogBase';
import CatalogDummy from '../utilities/CatalogDummy';
import CatalogEffect from '../utilities/CatalogUseEffect';


class RightItems extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.toggleTab = this.toggleTab.bind(this);
        this.state = {
            activeTab: 'detail',
        };
    }

    toggleTab = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    handleTreeSelect = (selectedKeys) => {
        console.log('bind treeselect Option:', selectedKeys);
        this.updateFormField();
    };
    formRef = React.createRef();
    updateFormField = () => {
        const formInstance = this.formRef.current;
        if (formInstance) {
            const { setFieldsValue } = formInstance.form;
            setFieldsValue({ catalog_name: 'Updated value' });
        }
    };

    render() {

        const { onFormSubmission, fileList, handleFileListChange, catalogInitVal, onFormClose,
            catalog_active, catalog_enable, catalog_name, catalog_intro, catalog_description } = this.props;
        console.log('catalogInitVal:', catalogInitVal);

        const initStore = {
            store_name: '店铺名称',
            store_intro: '店铺介绍-测试22',
            store_address: '店铺地址-测试33',
            store_phone: '店铺电话-测试44',
            store_website: 'www.xhfair.com',
            store_vendor: 'winmax'
        }

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
                                                            <React.Fragment>
                                                                {/* <CatalogDummy ref={this.formRef}
                                                                ></CatalogDummy> */}

                                                                <CatalogEffect
                                                                    onFinish={onFormSubmission} fileList={fileList}
                                                                    handleFileListChange={handleFileListChange}
                                                                    catalogInitVal={catalogInitVal}
                                                                    catalog_active={catalog_active}
                                                                    catalog_enable={catalog_enable}
                                                                    catalog_name={catalog_name}
                                                                    catalog_intro={catalog_intro}
                                                                    catalog_description={catalog_description}
                                                                ></CatalogEffect>
                                                                {/* <CatalogBaseForm
                                                                    onFinish={onFormSubmission} fileList={fileList}
                                                                    handleFileListChange={handleFileListChange}
                                                                    catalogInitVal={catalogInitVal}
                                                                    catalog_active={catalog_active}
                                                                    catalog_enable={catalog_enable}
                                                                    catalog_name={catalog_name}
                                                                    catalog_intro={catalog_intro}
                                                                    catalog_description={catalog_description}
                                                                ></CatalogBaseForm> */}
                                                                {/* <CatalogDummy ref={this.formRef}
                                                                    onFinish={onFormSubmission} fileList={fileList}
                                                                    handleFileListChange={handleFileListChange}
                                                                    catalogInitVal={catalogInitVal}
                                                                    catalog_active={catalog_active}
                                                                    catalog_enable={catalog_enable}
                                                                    catalog_name={catalog_name}
                                                                    catalog_intro={catalog_intro}
                                                                    catalog_description={catalog_description}
                                                                ></CatalogDummy> */}
                                                                {/* <StoreBaseForm onFinish={onFormSubmission} onClose={onFormClose} initStore={initStore}></StoreBaseForm> */}

                                                            </React.Fragment>
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
                                                            <React.Fragment>
                                                                <Form
                                                                    labelCol={{
                                                                        span: 2,
                                                                    }}
                                                                    wrapperCol={{
                                                                        span: 24,
                                                                    }}
                                                                >
                                                                    <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff" }}>
                                                                        <Media body >
                                                                            <CatalogProducts></CatalogProducts>
                                                                        </Media>

                                                                    </Media>
                                                                </Form>
                                                            </React.Fragment>
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



        </React.Fragment >
    }
}


export default RightItems;
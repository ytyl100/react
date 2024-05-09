/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane, Media, ButtonGroup, UncontrolledTooltip } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import classNames from 'classnames';
import RichTextEditor from '../../../components/RichTextEditor';
import { Form, Input, Space, Switch, Divider, TreeSelect, Button, Table } from 'antd';
import InterestProducts from './InterestProducts';
import UpsellProducts from './InterestProducts';

class ThirdStep extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.toggleTab = this.toggleTab.bind(this);
        this.state = {
            activeTab: 'detail',
            selectedRowKeys: [],
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
    };

    onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        this.setState({ selectedRowKeys: newSelectedRowKeys });
    };

    render() {

        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
            },
            {
                title: 'Age',
                dataIndex: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
            },
        ];
        const data = [];
        for (let i = 0; i < 46; i++) {
            data.push({
                key: i,
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
            });
        }

        const rowSelection = {
            selectedRowKeys: this.state.selectedRowKeys,
            onChange: this.onSelectChange,
        };

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
                                        onClick={() => { this.toggleTab('detail'); }}>SEO配置</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        className={classNames({ active: this.state.activeTab === 'advance' })}
                                        onClick={() => { this.toggleTab('advance'); }}>猜你喜欢产品</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        className={classNames({ active: this.state.activeTab === 'preview' })}
                                        onClick={() => { this.toggleTab('preview'); }}>关联产品</NavLink>
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
                                                                            <InterestProducts></InterestProducts>
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
                                                                            <UpsellProducts></UpsellProducts>
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
                            </TabContent>

                        </CardBody>
                    </Card>
                </Col>
            </Row>



        </React.Fragment >
    }
}


export default ThirdStep;
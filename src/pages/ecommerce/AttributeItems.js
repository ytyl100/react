/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Space, Badge, Drawer, } from 'antd';
import {
    Row, Col, Card, CardBody, Button,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import { fetchJSON } from '../../helpers/api';
import PageTitle from '../../components/PageTitle';
import ProductNestedItems from './utilities/ProductNestedItems';
import AttributeQuickBase from './utilities/AttributeQuickBase';
import { getLoggedInUser } from '../../helpers/authUtils';
import { getApiData, deleteApiData } from '../../helpers/handleApi';

class AttributeItems extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            selected: [], // Array to store the selected row keys
            selectedRows: [],
            drawerOpen: false,
            selectedAttribute: null,
            rootdata: [],
        };
    }

    componentDidMount = async () => {

        this.setState({ loading: true });

        const attributeListUrl = '/attribute/list';
        await getApiData(attributeListUrl).then(res => {
            console.log('attribute:', res)
            this.setState({
                rootdata: res,
                loading: false,
            })
        });
    }


    onClose = () => {
        this.setState({
            drawerOpen: false
        });
    }

    showDrawer = (attribute) => {
        console.log('quick attribute:', attribute);
        this.setState({
            drawerOpen: true,
            selectedAttribute: attribute,
        });
    }

    handleAdd = () => {
        //this.props.history.push(`/catalog/${parameterValue}`);
        this.props.history.push(`/ecommerce/attributes/board`);
    }

    handleTransfer = () => {
        //this.props.history.push(`/catalog/${parameterValue}`);
        this.props.history.push(`/ecommerce/attributes/boardtransfer`);
    }

    handleEditItem = (id) => {

        this.props.history.push(`/ecommerce/attributes/board/${id}`);
    };

    handleDelItem = (id) => {
        if (id) {
            const attributeSaveUrl = '/attribute/delete/';
            const saveDatas = async () => {

                await deleteApiData(attributeSaveUrl, id).then((data) => {

                }).catch((error) => {
                    console.log('save error:', error);
                });

            }
            saveDatas()

        }
    };

    onAttributeSubmit = (values) => {
        console.log('Received values of form: ', values);
    }

    render() {

        const columns = [
            {
                title: '属性标签',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '属性编号',
                dataIndex: 'SKU',
                key: 'SKU',
            },
            {
                title: '属性类目',
                dataIndex: 'catalog',
                key: 'catalog',
            },
            {
                title: '属性描述',
                dataIndex: 'intro',
                key: 'intro',
            },
            {
                title: '操作',
                key: 'operation',
                render: (text, record) => {
                    return <div>
                        <Space size="middle">
                            <div className="mt-4" style={{ float: "right" }}>
                                <span className="dtr-data">
                                    <button type="button" onClick={() => { this.handleEditItem(record.id); }} className="btn btn-primary mr-2" data-toggle="modal" data-target="#bs-role-modal-xl">更新属性</button>
                                    <button type="button" onClick={() => { this.handleDelItem(record.id); }} className="btn btn-secondary mr-2" data-toggle="modal" data-target="#bs-role-modal-xl">删除属性</button>
                                </span>
                            </div>
                        </Space>
                    </div>
                },
            },
        ];

        const childColumns = [
            {
                title: '属性标识',
                dataIndex: 'label',
                key: 'label',
            },
            {
                title: '属性内容',
                dataIndex: 'value',
                key: 'value',
            },
            {
                title: '价格设置',
                dataIndex: 'price_setting',
                key: 'price_setting',
            },
            {
                title: '库存设置',
                dataIndex: 'quantity_setting',
                key: 'quantity_setting',
            },
            {
                title: '启动状态',
                key: 'state',
                render: (text, record) => <Badge status="success" text="Finished" />,
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: (text, record) => (
                    <Space size="middle">
                        <div className="mt-4" style={{ float: "right" }}>
                            <span className="dtr-data">
                                <button type="button" onClick={() => { this.showDrawer(record.key); }} className="btn btn-primary mr-2" data-toggle="modal" data-target="#bs-role-modal-xl">快速修改</button>

                                <button type="button" onClick={() => { this.handleDelItem(record.key); }} className="btn btn-secondary mr-2" data-toggle="modal" data-target="#bs-role-modal-xl">删除属性</button>
                            </span>
                        </div>
                    </Space>
                ),
            },
        ];

        const { rootdata } = this.state;

        return <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Apps', path: '/apps/tasks/list' },
                            { label: 'Tasks', path: '/apps/tasks/list', active: true },
                        ]}
                        title={'属性管理列表'}
                    />
                </Col>
            </Row>

            {/* filter panel */}
            <Row>
                <Col xl={12}>

                    <Card>
                        <CardBody>
                            <p className="sub-header">
                                供货商建立属性可以为产品增加定制的属性资料，供货商统一在属性列表中建立属性方便产品建立时选择特殊的属性。
                            </p>
                            <React.Fragment>
                                <Row>
                                    <Col xl={2}>
                                        <Space align='left'>
                                            <Button
                                                onClick={() => { this.handleAdd(); }}
                                                type="primary"
                                                style={{
                                                    marginBottom: 16,
                                                }}
                                            >
                                                添加属性
                                            </Button>
                                            <Button
                                                onClick={() => { this.handleTransfer(); }}
                                                type="primary"
                                                style={{
                                                    marginBottom: 16,
                                                }}
                                            >
                                                配置属性
                                            </Button>
                                        </Space>
                                    </Col>
                                    <Col xl={2} className="text-left">

                                    </Col>
                                    <Col xl={8} className="text-right">
                                        <Space align='end'>
                                            <div className="btn-group mb-2 text-right">
                                                <Button className="btn btn-primary">
                                                    导出 CSV
                                                </Button >
                                                <Button className="btn btn-primary btn btn-secondary">
                                                    导入
                                                </Button>
                                                <Button className="btn btn-primary btn btn-secondary">
                                                    打印
                                                </Button>
                                            </div>
                                        </Space>
                                    </Col>
                                </Row></React.Fragment>


                            <ProductNestedItems columns={columns} childColumns={childColumns} rootdata={rootdata}></ProductNestedItems>

                            <Drawer
                                title="快速修改属性配置值"
                                placement='right'
                                width={800}
                                onClose={this.onClose}
                                open={this.state.drawerOpen}
                                extra={
                                    <Space>
                                        <Button onClick={this.onClose}>取消</Button>
                                        <Button type="primary" onClick={this.onClose}>
                                            保存
                                        </Button>
                                    </Space>
                                }
                            >
                                <AttributeQuickBase attribute={this.state.selectedAttribute} onFinish={this.onAttributeSubmit}></AttributeQuickBase>
                            </Drawer>

                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </React.Fragment>
    }
}

export default withRouter(AttributeItems);
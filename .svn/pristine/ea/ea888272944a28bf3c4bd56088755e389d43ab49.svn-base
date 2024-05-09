/* eslint-disable react/style-prop-object */
import React, { Children, Component, useState } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Space, Tabs, Badge } from 'antd';
import {
    Row, Col, Card, CardBody, Input, Button, ButtonGroup, UncontrolledTooltip, Media
} from 'reactstrap';
import { Spin, Popconfirm } from 'antd';

import { Cookies } from 'react-cookie';
import { fetchJSON } from '../../helpers/api';
import { getLoggedInUser } from '../../helpers/authUtils';
import { getApiData, deleteApiData } from '../../helpers/handleApi';
import TableAllOrders from './utilities/TableAllOrders';
import ProductNestedItems from './utilities/ProductNestedItems';

import { withRouter } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

class InvoiceItems extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            rootdata: [],
            show1: 0,
            show2: 4,
            show3: 2,
            show4: 1,
            show5: 1,
        };

    }

    componentWillUnmount = async () => {
        this.setState({ loading: true });
        const vendor = getLoggedInUser() ? getLoggedInUser().vendor ? getLoggedInUser().vendor : null : null;

        const catalogListUrl = '/catalog/list?vendor_id=';
        //const catalogListUrl = '/catalog/list?vendor_id=6';
        const response = await getApiData(catalogListUrl, vendor ? vendor.id ? vendor.id : 0 : 0);
        const data = await response;

        if (data) {
            for (let i = 0; i < data.length; i++) {

                if (data[i] && data[i].children) {
                    //data.splice(i, 1);
                    delete data[i].children;
                }
            }
            console.log('catelog data:', data);
            // return data = data.filter(function (x) { return x !== null });
            this.setState({
                data: data,
                openConfirm: false,
                setConfirmLoading: false,
                loading: false,
            })
        }
    }

    componentDidMount = async () => {
        this.setState({ loading: true });
        const loggedInUser = getLoggedInUser();
        let venderId = 0;
        if (loggedInUser && loggedInUser.vendor) {
            console.log('current vendor:', loggedInUser.vendor.id);
            venderId = loggedInUser.vendor.id;
        }

        const attributeListUrl = '/attribute/list?vendor_id=' + venderId;
        await getApiData(attributeListUrl).then(res => {
            console.log('attribute:', res)
            this.setState({
                rootdata: res,
                loading: false,
            })
        });
    }

    componentWillReceiveProps = () => {

    }

    showPopconfirm = () => {
        this.setState({
            openConfirm: true,
        })
    };

    handleAdd = () => {
        //this.props.history.push(`/catalog/${parameterValue}`);
        this.props.history.push(`/ecommerce/catalog/board`);
    }

    handleEditItem = (id) => {
        this.props.history.push(`/ecommerce/catalog/board/${id}`);
    };

    handleOk = (id) => {
        this.setState({
            setConfirmLoading: true,
        })
        setTimeout(() => {
            this.setState({
                openConfirm: true,
                setConfirmLoading: true,
            })
        }, 2000);

    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({ openConfirm: false, })
    };

    handleDelItem = (id) => {
        if (id) {
            const catalogeSaveUrl = '/catalog/delete/';
            const saveDatas = async () => {

                await deleteApiData(catalogeSaveUrl, id).then((data) => {

                }).catch((error) => {
                    console.log('save error:', error);
                });
                //return <Redirect to={{ pathname: '/ecommerce/CategoryItems' }} />;
            }
            saveDatas();
        }
    };

    onStatusChange = (key) => {
        switch (key) {
            case '1':
                this.setState({
                    show1: 0,
                });
                break;
            case '2':

                this.setState({
                    show2: 0,
                });
                break;
            case '3':
                this.setState({
                    show3: 0,
                });
                break;
            case '4':
                this.setState({
                    show4: 0,
                });
                break;
            default:
                this.setState({
                    show5: 0,
                });
                break;
        }
    };

    render() {
        const { data, loading, show1, show2, show3, show4, show5 } = this.state;

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
        const items = [
            {
                key: '1',
                label: (
                    <React.Fragment>
                        All Orders
                        <Badge count={show1} />
                    </React.Fragment>
                ),
                children: <TableAllOrders />,
            },
            {
                key: '2',
                label: (
                    <React.Fragment>
                        Pending Payment
                        <Badge count={show2} />
                    </React.Fragment>
                ),
                children: <ProductNestedItems columns={columns} childColumns={childColumns} rootdata={rootdata}></ProductNestedItems>,
            },
            {
                key: '3',
                label: (
                    <React.Fragment>
                        Pending Shipment
                        <Badge count={show3} />
                    </React.Fragment>
                ),
                children: <TableAllOrders />,
            },
            {
                key: '4',
                label: (
                    <React.Fragment>
                        On Delivery
                        <Badge count={show4} />
                    </React.Fragment>
                ),
                children: '<TableAllOrders />',
            },
            {
                key: '5',
                label: (
                    <React.Fragment>
                        Reject/Cancel
                        <Badge count={show5} />
                    </React.Fragment>
                ),
                children: <TableAllOrders />,
            },
        ];

        return <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Apps', path: '/apps/tasks/list' },
                            { label: 'Tasks', path: '/apps/tasks/list', active: true },
                        ]}
                        title={'类目管理列表'}
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
                                工作部门管理分为核心管理员与普通组成员，核心管理成员拥有当前模块所有功能并可以分配组员，组员可以拥有各个级别的管理权限但是没有组员分配权限
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
                                                添加类目
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
                                </Row>
                                <Row>
                                    <Col xl={12}>
                                        <Spin spinning={loading}>
                                            <Tabs
                                                defaultActiveKey="1"
                                                items={items}
                                                onChange={(value) => this.onStatusChange(value)}
                                            />
                                        </Spin>

                                    </Col>
                                </Row>
                            </React.Fragment>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </React.Fragment>
    }
}

export default withRouter(InvoiceItems);
/* eslint-disable react/style-prop-object */
import React, { Children, Component, useState } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Space, Table } from 'antd'; import {
    Row, Col, Card, CardBody, Input, Button, ButtonGroup, UncontrolledTooltip, Media
} from 'reactstrap';
import { Spin, Popconfirm } from 'antd';

import { Cookies } from 'react-cookie';
import { fetchJSON } from '../../helpers/api';
import { getLoggedInUser } from '../../helpers/authUtils';
import { getApiData, deleteApiData } from '../../helpers/handleApi';
import CustomerFilterList from './utilities/CustomerFilterList';

import { withRouter } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

class CustomerItems extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: []
        }
    }

    componentWillUnmount = async () => {
    }

    componentDidMount = async () => {


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
            saveDatas()
            // this.setState({
            //     data: data,
            //     loading: false,
            // })
        }
    };

    render() {


        const columns = [
            {
                title: '类目名称',
                dataIndex: 'title',
                width: '15%',
                key: 'title',
            },
            {
                title: '类目图片',
                dataIndex: 'image_url',
                key: 'image_url',
                width: '20%',
                render: (text, record) => {
                    const imageSrc = record.image;
                    return <div>
                        <Space className="mt-3 p-1" >
                            <img src={imageSrc} className="mr-2 rounded-circle" height="36" alt="" />
                        </Space>
                    </div>
                },
            },
            {
                title: '类目详细信息',
                dataIndex: 'desc',
                key: 'desc',
                width: '15%',
                render: (text, record) => {
                    return <div>
                        <Media className="mt-3 p-1" >
                            <Media body>
                                <h5 className="mt-0 mb-0 font-size-14">
                                    shinne cooker
                                </h5>
                                <p className="mt-1 mb-0 text-muted">Our new project brand new shinne cooker</p>
                            </Media>
                        </Media>
                    </div>
                },
            },
            {
                title: '类目操作',
                dataIndex: 'action',
                key: 'action',
                width: '40%',
                render: (text, record) => {
                    return <div>
                        <ButtonGroup className="mr-1">
                            <Button id="archive" color="light" onClick={() => this.handleEditItem(record.id)}>
                                <i className="uil uil-archive-alt"></i>编辑类目
                            </Button>
                            <UncontrolledTooltip placement="top" target="archive">Archived</UncontrolledTooltip>
                            <Button id="spam" color="light">
                                <i className="uil uil-exclamation-octagon"></i>标识类目
                            </Button>
                            <UncontrolledTooltip placement="top" target="spam">Mark as spam</UncontrolledTooltip>
                            <Popconfirm
                                title="Title"
                                description="Open Popconfirm with async logic"
                                open={this.state.openConfirm}
                                onConfirm={this.handleOk(record.id)}
                                okButtonProps={{
                                    loading: this.state.setConfirmLoading,
                                }}
                                onCancel={this.handleCancel}
                            >
                                <Button id="delete" color="light" onClick={this.showPopconfirm} >
                                    <i className="uil uil-trash-alt"></i>删除类目
                                </Button>
                                {/* <Button id="delete" color="light" onClick={() => this.handleDelItem(record.id)}>
                                    <i className="uil uil-trash-alt"></i>删除类目
                                </Button> */}
                            </Popconfirm>

                            <UncontrolledTooltip placement="top" target="delete">Delete</UncontrolledTooltip>
                        </ButtonGroup>
                    </div>
                },
            },
        ];

        const { data, loading } = this.state;
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
            },
        };

        let copydata = [...data]
        console.log('init data[0]', copydata);
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
                                </Row></React.Fragment>

                            <Spin spinning={loading}>
                                <CustomerFilterList ></CustomerFilterList>
                            </Spin>

                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </React.Fragment>
    }
}

export default withRouter(CustomerItems);
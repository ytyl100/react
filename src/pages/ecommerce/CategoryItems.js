/* eslint-disable react/style-prop-object */
import React, { Children, Component, useState } from 'react';
import uuid from 'react-uuid';
import { Space, Table, Modal } from 'antd'; import {
    Row, Col, Card, CardBody, Input, Button, ButtonGroup, UncontrolledTooltip, Media
} from 'reactstrap';
import { Spin, Popconfirm } from 'antd';

import { Cookies } from 'react-cookie';
import { fetchJSON } from '../../helpers/api';
import { getLoggedInUser } from '../../helpers/authUtils';
import { getApiData, deleteApiData, saveApiData } from '../../helpers/handleApi';

import { withRouter } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

class CategoryItems extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        const vendor = getLoggedInUser() ? getLoggedInUser().vendor ? getLoggedInUser().vendor : null : null;
        this.state = {
            loading: false,
            data: [],
            vendor: vendor,
            openConfirm: false,
            setConfirmLoading: false,
            currentid: 0,
        }
    }

    componentDidUpdate = async () => {

    }

    componentDidMount = async () => {
        let res = await this.getCatalogList();
        console.log('get tree response0:', res);
    }

    getCatalogList = async () => {
        const catalogListUrl = '/catalog/list';
        this.setState({ loading: true });
        await getApiData(catalogListUrl)
            .then(data => {
                if (data) {
                    for (let i = 0; i < data.length; i++) {

                        if (data[i] && data[i].children) {
                            //data.splice(i, 1);
                            delete data[i].children;
                        }
                    }
                    this.setState({
                        data: data,
                        openConfirm: false,
                        setConfirmLoading: false,
                        loading: false,
                    })
                }
            });
    }

    addCatalogList = async () => {
        const vendorid = this.state.vendor ? this.state.vendor.id ? this.state.vendor.id : 5 : 5;
        var currentdate = new Date();
        var datetime = "@" + currentdate.getDate() + "-"
            + (currentdate.getMonth() + 1) + "-"
            + currentdate.getFullYear() + "-"
            + currentdate.getHours() + "-"
            + currentdate.getMinutes() + "-"
            + currentdate.getSeconds();
        let firstNode = {
            id: 0,
            title: 'ex-hub ' + datetime,
            value: 'ex-hub ' + datetime,
            url: "",
            icon: "",
            key: uuid(),
            vendor_id: vendorid,
            activate: true,
            children: []
        };
        console.log('add new node', firstNode);
        const catalogSaveUrl = '/catalog/save';

        const saveDatas = async () => {
            let res = await saveApiData(catalogSaveUrl, firstNode);
            console.log('save tree response0:', res.key);
            if (res) {
                let rep = await this.getCatalogList();
                console.log('get tree list after add:', rep);
            }

        }
        saveDatas()
    }

    showPopconfirm = (currentid) => {
        this.setState({
            currentid: currentid,
            openConfirm: true,
        })
    };

    confirmDeletion = () => {
        let id = this.state.currentid;
        console.log('current catalog id:', id);
        this.handleDelItem(id);
        let retData = this.state.data.filter(function (x) { return x.id !== id });
        console.log('data after deletion:', retData);
        this.setState({
            data: retData,
            openConfirm: false,
        })
    };

    cancelDeletion = () => {
        this.setState({
            openConfirm: false,
        })
    };

    handleAdd = () => {
        this.addCatalogList();
        //this.props.history.push(`/catalog/${parameterValue}`);
        //this.props.history.push(`/ecommerce/catalog/board`);
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
                    console.log('after delete data:', data);
                    //this.getCatalogList();
                }).catch((error) => {
                    console.log('save error:', error);
                });
            }
            saveDatas();
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
                                    {record.title}
                                </h5>
                                <p className="mt-1 mb-0 text-muted">{record.value}</p>
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
                            <UncontrolledTooltip placement="top" target="archive">点击编辑类目</UncontrolledTooltip>
                            <Button id="spam" onClick={() => this.showPopconfirm(record.id)} color="light">
                                <i className="uil uil-exclamation-octagon"></i>删除类目
                            </Button>
                            <UncontrolledTooltip placement="top" target="delete">点击删除当前类目</UncontrolledTooltip>
                            <Button id="delete" color="light">
                                <i className="uil uil-exclamation-octagon"></i>快速复制类目
                            </Button>
                            <UncontrolledTooltip placement="top" target="spam">点击快速复制当前类目</UncontrolledTooltip>

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


                                <Table
                                    columns={columns}
                                    rowSelection={{
                                        ...rowSelection,
                                    }}
                                    dataSource={data}
                                />
                            </Spin>

                        </CardBody>
                    </Card>
                    <Modal
                        title="Modal"
                        open={this.state.openConfirm}
                        onOk={this.confirmDeletion}
                        onCancel={this.cancelDeletion}
                        okText="确认"
                        cancelText="取消"
                    >
                        <p>当前操作将会删除所选择的类目，您确定删除？</p>
                    </Modal>
                </Col>
            </Row>
        </React.Fragment>
    }
}

export default withRouter(CategoryItems);
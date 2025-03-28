/* eslint-disable react/style-prop-object */
import React, { Children, Component, useState } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Space, Table } from 'antd'; import {
    Row, Col, Card, CardBody, Input, Button, ButtonGroup, UncontrolledTooltip, Media
} from 'reactstrap';
import { Spin, } from 'antd';
import InvoiceDetail from './InvoiceDetail';
import { withRouter } from 'react-router-dom';
import PageTitle from '../../../components/PageTitle';

class Board extends Component {
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

    handleAdd = () => {
        //this.props.history.push(`/catalog/${parameterValue}`);
        this.props.history.push(`/ecommerce/invoiceItems`);
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
                                                返回裂变
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

                            <InvoiceDetail></InvoiceDetail>

                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </React.Fragment>
    }
}

export default withRouter(Board);
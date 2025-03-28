/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Space, Badge, Drawer, Form, InputNumber, Spin } from 'antd';
import {
    Row, Col, Card, CardBody, Button,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import ProductNestedItems from './utilities/ProductNestedItems';


import { getLoggedInUser } from '../../helpers/authUtils';
import { getApiData, deleteApiData } from '../../helpers/handleApi';

class ProductItems extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            selected: [], // Array to store the selected row keys
            selectedRows: [],
            data: [],
            drawerOpen: false
        };
    }

    componentDidMount = async () => {
        this.setState({ loading: true });
        const productListUrl = '/product/list';
        await getApiData(productListUrl)
            .then(data => {
                console.log('catelog data0:', data);
                if (data) {

                    console.log('catelog data1:', data);
                    // return data = data.filter(function (x) { return x !== null });
                    this.setState({
                        data: data,
                        loading: false,
                    })
                }
            });
    }

    onClose = () => {
        this.setState({
            drawerOpen: false
        });
    }

    showDrawer = () => {
        this.setState({
            drawerOpen: true
        });
    }

    handleAdd = () => {
        //this.props.history.push(`/catalog/${parameterValue}`);
        this.props.history.push(`/ecommerce/products/boardall`);
    }

    handleEditItem = (id) => {
        this.props.history.push(`/ecommerce/products/boardall/${id}`);
    };

    handleDelItem = (id) => {

    };

    handleCheckboxChange = (key, checked) => {
        console.log('handleCheckboxChange:', key);
        const updatedRows = [...this.state.selectedRows];
        const rowToUpdate = updatedRows.find((row) => row.key === key);

        if (rowToUpdate) {
            rowToUpdate.selected = checked;
        } else {
            updatedRows.push({ key, selected: checked });
        }
        this.setState({ selectedRows: updatedRows });
    };

    onFormSubmission = (values) => {
        console.log('Received values of form: ', values);
    };

    render() {

        const columns = [
            {
                title: '产品缩略图',
                dataIndex: 'thumbnailUrl',
                key: 'thumbnailUrl',
                render: (cell) => (
                    <div>
                        <img src={cell} className="mr-2 rounded-circle" height="36" alt="" />
                    </div>
                ),
            },
            {
                title: '产品名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '产品SKU',
                dataIndex: 'sku',
                key: 'sku',
            },
            {
                title: '产品单价',
                dataIndex: 'unit_price',
                key: 'unit_price',
            },
            {
                title: '库存数量',
                dataIndex: 'unit_stock',
                key: 'unit_stock',
            },
            {
                title: '操作',
                key: 'operation',
                render: (text, record) => {
                    return <div>
                        <Space size="middle">
                            <div className="mt-4" style={{ float: "right" }}>
                                <span className="dtr-data">
                                    <button type="button" onClick={() => { this.handleEditItem(record.id); }} className="btn btn-primary mr-2" data-toggle="modal" data-target="#bs-role-modal-xl">更新资料</button>
                                    <button type="button" onClick={() => { this.handleDelItem(record.id); }} className="btn btn-secondary mr-2" data-toggle="modal" data-target="#bs-role-modal-xl">删除商铺</button>
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
                title: '单位价格',
                dataIndex: 'price',
                key: 'price',
            },
            {
                title: '库存数量',
                dataIndex: 'quantity',
                key: 'quantity',
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
                                <button type="button" onClick={this.showDrawer} class="btn btn-primary mr-2" data-toggle="modal" data-target="#bs-role-modal-xl">快速修改</button>

                                <button type="button" onClick={() => { this.handleDelItem(record.key); }} class="btn btn-secondary mr-2" data-toggle="modal" data-target="#bs-role-modal-xl">删除属性</button>
                            </span>
                        </div>
                    </Space>
                ),
            },
        ];

        const rootdata = [
            {
                id: 1,
                name: 'Screen-显示器65寸，大屏薄屏高品质',
                sku: 'iOS-Screen',
                thumbnailUrl: 'https://reactstorefronts.com/static/img/brand/1.jpg',
                intro: 'Screen-显示器65寸，大屏薄屏高品质',
                unit_price: '$500.00',
                unit_stock: 99,
                // children: [
                //     {
                //         key: 11,
                //         label: 'size',
                //         value: 'S',
                //         price: '$10',
                //         quantity: 10,
                //     },
                //     {
                //         key: 12,
                //         label: 'size',
                //         value: 'M',
                //         price: '$10',
                //         quantity: 12,
                //     },
                // ]
            },
            {
                id: 2,
                name: 'Screen-显示器75寸，大屏薄屏高品质',
                sku: 'iOS-Screen-75',
                thumbnailUrl: 'https://reactstorefronts.com/static/img/brand/2.jpg',
                intro: 'Screen-显示器75寸，大屏薄屏高品质',
                unit_price: '$800.00',
                unit_stock: 99,
                // children: [
                //     {
                //         key: 21,
                //         label: 'color',
                //         value: 'white',
                //         price: '$15',
                //         quantity: 20,
                //     },
                //     {
                //         key: 22,
                //         label: 'color',
                //         value: 'black',
                //         price: '$20',
                //         quantity: 25,
                //     },
                // ]
            },
        ];

        const formItemLayout = {
            labelCol: {
                xs: {
                    span: 24,
                },
                sm: {
                    span: 8,
                },
            },
            wrapperCol: {
                xs: {
                    span: 24,
                },
                sm: {
                    span: 16,
                },
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
                        title={'产品管理列表'}
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
                                                添加产品
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
                            <Spin spinning={this.state.loading}>
                                <ProductNestedItems columns={columns} childColumns={childColumns} rootdata={this.state.data}></ProductNestedItems>
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
                                    <h6 className="mt-0 mb-2 header-title">产品库存设置</h6>
                                    <hr></hr>
                                    <Form
                                        {...formItemLayout}
                                        name="register"
                                        onFinish={this.onFormSubmission}
                                        initialValues={{
                                            suffix_weight: 'kgs',
                                            suffix_price: 'USD',
                                            activate_product: true,
                                        }}
                                        labelCol={{
                                            span: 6,
                                        }}
                                        wrapperCol={{
                                            span: 16,
                                        }}
                                        scrollToFirstError
                                    >
                                        <Form.Item
                                            name="unit_storage_num"
                                            label="产品库存数量"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入产品库存数量',
                                                },
                                            ]}
                                        >
                                            <InputNumber
                                                style={{
                                                    width: '50%',
                                                }}
                                            />
                                            <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                配置最低产品库存数量</p>
                                        </Form.Item>
                                        <Form.Item
                                            name="unit_outofstock"
                                            label="最低产品库存"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入最低产品库存标准',
                                                },
                                            ]}
                                        >
                                            <InputNumber
                                                style={{
                                                    width: '50%',
                                                }}
                                            />
                                            <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                最低产品库存数量配置</p>
                                        </Form.Item>
                                        <Form.Item
                                            name="unit_min_shoppingcart"
                                            label="最低产品购物篮数量"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入最低产品购物篮数量配置',
                                                },
                                            ]}
                                        >
                                            <InputNumber
                                                style={{
                                                    width: '50%',
                                                }}
                                            />
                                            <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                最低产品购物篮数量配置</p>
                                        </Form.Item>
                                        <Form.Item
                                            name="unit_max_shoppingcart"
                                            label="最高产品购物篮数量"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入最高产品购物篮数量配置',
                                                },
                                            ]}
                                        >
                                            <InputNumber
                                                style={{
                                                    width: '50%',
                                                }}
                                            />
                                            <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                最高产品购物篮数量配置</p>
                                        </Form.Item>

                                    </Form>


                                </Drawer>
                            </Spin>


                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </React.Fragment>
    }
}

export default withRouter(ProductItems);
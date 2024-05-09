/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Media } from 'reactstrap';
import { Form, Input, Button, Space, Tree, Table, Badge, Dropdown, Select, Drawer } from 'antd';
import { MinusCircleOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons';
import BrandBase from '../utilities/CollectionBase';
import ProductNestedItems from '../utilities/ProductNestedItems';

class SecondStep extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            selected: [], // Array to store the selected row keys
            selectedRows: [],
            drawerOpen: false
        };
    }

    handleAdd = () => {
        //this.props.history.push(`/catalog/${parameterValue}`);
        //this.props.history.push(`/ecommerce/products/board`);
    }

    handleEditItem = (id) => {
        this.props.history.push(`/ecommerce/products/board/${id}`);
    };

    handleDelItem = (id) => {

    };
    handleChange = (value) => {
        console.log(`selected ${value}`);
    };

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

    render() {

        const { onFormSubmission } = this.props;

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
                                    <button type="button" onClick={() => { this.handleEditItem(record.key); }} class="btn btn-primary mr-2" data-toggle="modal" data-target="#bs-role-modal-xl">更新属性</button>
                                    <button type="button" onClick={() => { this.handleDelItem(record.key); }} class="btn btn-secondary mr-2" data-toggle="modal" data-target="#bs-role-modal-xl">删除属性</button>
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
                key: 1,
                name: '按照产品的尺寸',
                SKU: 'iOS-size',
                catalog: '电子消费品类',
                intro: 'Screen-显示器65寸，大屏薄屏高品质',
                children: [
                    {
                        key: 11,
                        label: 'size',
                        value: 'S',
                        price_setting: 'system',
                        quantity_setting: 'system',
                    },
                    {
                        key: 12,
                        label: 'size',
                        value: 'M',
                        price_setting: 'system',
                        quantity_setting: 'skip',
                    },
                    {
                        key: 21,
                        label: 'color',
                        value: 'white',
                        price_setting: 'system',
                        quantity_setting: 'system',
                    },
                    {
                        key: 22,
                        label: 'color',
                        value: 'black',
                        price_setting: 'system',
                        quantity_setting: 'system',
                    },
                ]
            },
        ];

        const options = [
            {
                label: '尺寸',
                value: 'size',
                emoji: '🇨🇳',
                desc: '尺寸大小',
            },
            {
                label: '颜色',
                value: 'color',
                emoji: '🇺🇸',
                desc: '产品颜色',
            },
            {
                label: '面积',
                value: 'area',
                emoji: '🇯🇵',
                desc: '面积大小',
            },
            {
                label: '材质',
                value: 'material',
                emoji: '🇰🇷',
                desc: '材质组成',
            },
        ];

        return <React.Fragment>
            <Row>
                <Col md={12}>
                    <Card >
                        <CardBody style={{ backgroundColor: "#f7f7f7" }}>
                            <Row>
                                <Col>
                                    <React.Fragment>
                                        <Row>

                                            <Col xl={6} className="text-right">
                                                <Select
                                                    mode="multiple"
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    placeholder="select one country"
                                                    defaultValue={['尺寸']}
                                                    onChange={this.handleChange}
                                                    optionLabelProp="label"
                                                    options={options}
                                                    optionRender={(option) => (
                                                        <Space>
                                                            <span role="img" aria-label={option.data.label}>
                                                                {option.data.emoji}
                                                            </span>
                                                            {option.data.desc}
                                                        </Space>
                                                    )}
                                                />
                                            </Col>
                                            <Col xl={2}>
                                                <Space align='right'>
                                                    <Button
                                                        onClick={() => { this.handleAdd(); }}
                                                        type="primary"
                                                        style={{
                                                            marginBottom: 16,
                                                        }}
                                                    >
                                                        选择属性：
                                                    </Button>
                                                </Space>
                                            </Col>
                                            <Col xl={4} className="text-left">

                                            </Col>

                                        </Row>
                                    </React.Fragment>
                                    <hr></hr>
                                    <ProductNestedItems columns={columns} childColumns={childColumns} rootdata={rootdata}></ProductNestedItems>

                                    <Drawer
                                        title="修改当前产品属性"
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
                                        <React.Fragment>
                                            <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff" }}>
                                                <Media body >
                                                    <BrandBase onFinish={onFormSubmission}></BrandBase>
                                                </Media>
                                            </Media>

                                        </React.Fragment>
                                    </Drawer>
                                </Col>

                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


        </React.Fragment>
    }
}


export default SecondStep;
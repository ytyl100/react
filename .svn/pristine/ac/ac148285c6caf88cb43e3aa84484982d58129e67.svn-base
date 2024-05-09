/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Media } from 'reactstrap';
import { Form, Input, Button, Select, Tree } from 'antd';
import { MinusCircleOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons';


class LeftSettings extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {

        const { treeData, selectedKeys, onTreeSelect, handleTreeCatalogSubmit, treeInitialVal } = this.props;

        return <React.Fragment>
            <Row>
                <Col md={12}>
                    <Card >
                        <CardBody style={{ backgroundColor: "#f7f7f7" }}>
                            <Row>
                                <Col>
                                    <React.Fragment>
                                        <Form onFinish={handleTreeCatalogSubmit} initialValues={treeInitialVal}
                                            labelCol={{
                                                span: 2,
                                            }}
                                            wrapperCol={{
                                                span: 24,
                                            }}
                                        >
                                            <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff" }}>
                                                <Media body >
                                                    <Form.Item name="catalog_treecatalog" className="mt-0 mb-0 p-2">
                                                        <h6 className="mt-0 mb-2 header-title">选择所属类目</h6>
                                                        <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                            按照建立的类目建立同级类目或者子级类目</p>

                                                        <Tree
                                                            showLine
                                                            switcherIcon={<DownOutlined />}
                                                            defaultExpandedKeys={['0-0-0']}
                                                            defaultSelectedKeys={treeInitialVal}
                                                            onSelect={onTreeSelect}
                                                            //selectedKeys={selectedKeys}
                                                            //onSelect={onSelect}
                                                            treeData={treeData}
                                                        />
                                                    </Form.Item>

                                                    <Form.Item name="catalog_template" className="mt-0 mb-0 p-2">
                                                        <h6 className="mt-0 mb-2 header-title">选择商业模板</h6>
                                                        <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                            请选择适合业务的商业模板展示产品</p>

                                                        <Select
                                                            className="mb-3 react-select"
                                                            options={[
                                                                { value: 'chocolate', label: 'Chocolate' },
                                                                { value: 'strawberry', label: 'Strawberry' },
                                                                { value: 'vanilla', label: 'Vanilla' },
                                                            ]}></Select>
                                                    </Form.Item>

                                                </Media>
                                            </Media>
                                        </Form>

                                    </React.Fragment>
                                </Col>

                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


        </React.Fragment>
    }
}


export default LeftSettings;
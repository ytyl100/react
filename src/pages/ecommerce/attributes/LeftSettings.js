/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Media } from 'reactstrap';
import { Form, Input, Button, Select } from 'antd';
import ImageUpload from '../utilities/ImageHandler'
//import Select from 'react-select';

class LeftSettings extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {

    }

    render() {
        const { attributeOptions, handleFileListChange, handleOption } = this.props;

        // const attributeOptions1 = [
        //     { value: 'default', label: 'default', disabled: true, },
        //     { value: 'custom', label: 'custom' },
        // ];

        return <React.Fragment>
            <Row>
                <Col md={12}>
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
                                                    <Form.Item className="mt-0 mb-0 p-2"
                                                        name="attribute_title"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: '请输入新属性名称',
                                                            },
                                                        ]}
                                                    >
                                                        <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                            属性集名称</p>
                                                        <Input></Input>
                                                    </Form.Item>

                                                    <Form.Item className="mt-0 mb-0 p-2">
                                                        <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                            请选择适合业务的商业模板展示产品</p>

                                                        <Select
                                                            defaultValue="default"
                                                            className="mb-3 react-select"
                                                            classNamePrefix="react-select"
                                                            onChange={handleOption}
                                                            options={attributeOptions}></Select>
                                                    </Form.Item>

                                                    {/* <Form.Item className="mt-0 mb-0 p-2">
                                                        <h6 className="mt-0 mb-2 header-title">Variant</h6>
                                                        <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                            Set the category based on the available templates</p>
                                                        <Form.List name="users">

                                                            {(fields, { add, remove }) => (
                                                                <>
                                                                    {fields.map(({ key, name, ...restField }) => (
                                                                        <Space
                                                                            key={key}
                                                                            style={{
                                                                                display: 'flex',
                                                                                marginBottom: 8,
                                                                            }}
                                                                            align="baseline"
                                                                        >
                                                                            <Form.Item
                                                                                {...restField}
                                                                                name={[name, 'first']}
                                                                                rules={[
                                                                                    {
                                                                                        required: true,
                                                                                        message: 'Missing first name',
                                                                                    },
                                                                                ]}
                                                                            >
                                                                                <Input placeholder="First Name" />
                                                                            </Form.Item>
                                                                            <Form.Item
                                                                                {...restField}
                                                                                name={[name, 'last']}
                                                                                rules={[
                                                                                    {
                                                                                        required: true,
                                                                                        message: 'Missing last name',
                                                                                    },
                                                                                ]}
                                                                            >
                                                                                <Input placeholder="Last Name" />
                                                                            </Form.Item>
                                                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                                                        </Space>
                                                                    ))}
                                                                    <Form.Item>
                                                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                                            Add field
                                                                        </Button>
                                                                    </Form.Item>
                                                                </>
                                                            )}
                                                        </Form.List>
                                                    </Form.Item> */}
                                                    <Form.Item>
                                                        <Button className="mr-2" type="primary" htmlType="submit">
                                                            创建属性集
                                                        </Button>
                                                        <Button className="mr-2" type="primary" htmlType="button">
                                                            删除属性集
                                                        </Button>
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
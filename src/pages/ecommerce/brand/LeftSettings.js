/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Media } from 'reactstrap';
import { Form } from 'antd';
import ImageUpload from '../utilities/ImageHandler'
import Select from 'react-select';

class LeftSettings extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const { fileList, handleFileListChange } = this.props;
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
                                                    <Form.Item className="mt-0 mb-0 p-2">
                                                        <h6 className="mt-0 mb-2 header-title">品牌LOGO</h6>
                                                        <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                            只允许 *.png, *.jpg and *.jpeg 图片格式</p>
                                                        <ImageUpload onFileListChange={handleFileListChange} fileList={fileList}></ImageUpload>
                                                    </Form.Item>

                                                    <Form.Item className="mt-0 mb-0 p-2">
                                                        <h6 className="mt-0 mb-2 header-title">选择商业模板</h6>
                                                        <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                            请选择适合业务的商业模板展示产品</p>

                                                        <Select
                                                            className="mb-3 react-select"
                                                            classNamePrefix="react-select"
                                                            options={[
                                                                { value: 'chocolate', label: 'Chocolate' },
                                                                { value: 'strawberry', label: 'Strawberry' },
                                                                { value: 'vanilla', label: 'Vanilla' },
                                                            ]}></Select>
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
                                                    {/* <Form.Item>
                                                        <Button type="primary" htmlType="submit">
                                                            Submit
                                                        </Button>
                                                    </Form.Item> */}

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
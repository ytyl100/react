/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Media } from 'reactstrap';
import { Form, Image } from 'antd';
import ImageUpload from '../utilities/ImageHandler'
import Select from 'react-select';

class LeftSettings extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    componentDidMount = async () => {
        //this.setState({ loading: true });

    }

    render() {
        const { fileList, handleFileListChange, category, initId } = this.props;
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
                                                        <h6 className="mt-0 mb-2 header-title">选择商业模板</h6>
                                                        <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                            请选择适合业务的商业模板展示产品</p>
                                                        <span className="mr-0 ml-2"><Image
                                                            width={100}
                                                            src="https://api.xhfair.com/storage/vendor/5/storeProfile/profileimg.jpg"
                                                        /></span>
                                                        <span className="mr-4 ml-2" style={{ float: 'right' }}>
                                                            <ImageUpload onFileListChange={handleFileListChange} fileList={fileList} category={category}></ImageUpload>

                                                        </span>

                                                    </Form.Item>

                                                    <Form.Item className="mt-0 mb-0 p-2">
                                                        <h6 className="mt-0 mb-2 header-title">供应商店铺图片</h6>
                                                        <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                            只允许 *.png, *.jpg and *.jpeg 图片格式</p>
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
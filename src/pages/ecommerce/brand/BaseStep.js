/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Media } from 'reactstrap';
import Select from 'react-select';
import classNames from 'classnames';
import Treeselect from './TreeselectHandler';
import { Form, Input, Switch, Button, Space } from 'antd';

class BaseStep extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.toggleTab = this.toggleTab.bind(this);
        this.state = {
            activeTab: 'detail'
        };
    }

    toggleTab = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    formSubmission = () => {
        const { activeStepIndex } = this.state;
        if (activeStepIndex > 0) {
            this.setState({ activeStepIndex: activeStepIndex - 1 });
        }
    };
    addRootCatalog = () => {
        const { activeStepIndex } = this.state;
        alert(activeStepIndex);
    }

    addSubCatalog = () => {
        const { activeStepIndex } = this.state;
        alert(activeStepIndex);
    }

    render() {


        return <React.Fragment>
            <Row>
                <Col md={12}>
                    <Card>
                        <CardBody style={{ backgroundColor: "#f7f7f7" }}>
                            <Row>
                                <Col>
                                    <React.Fragment>
                                        <Form onFinish={this.formSubmission}
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
                                                        <Space>
                                                            <h6 className="mt-0 mb-2 ml-0 header-title">Enable Categoryy</h6>
                                                            <Switch className="mt-1 mb-3" label='Enable Category'>Enable Category</Switch>
                                                            <h6 className="mt-0 mb-2 ml-3 header-title">Enable Menu</h6>
                                                            <Switch className="mt-1 mb-3" label='Enable Category'>Enable Menu</Switch>
                                                        </Space>

                                                    </Form.Item>
                                                    <Form.Item className="mt-0 mb-0 p-2">
                                                        <h4 className="header-title ml-2 mb-1">Category Title</h4>
                                                        <p className="mt-1 mb-3">
                                                            DraftJS is a light-weight, simple, embeddable, and beautiful editor
                                                        </p>
                                                        <Input></Input>

                                                    </Form.Item>
                                                    <Form.Item className="mt-0 mb-0 p-2">
                                                        <h6 className="mt-0 mb-2 header-title">Available Stores</h6>
                                                        <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                            Set the category based on the available collections</p>

                                                        <Select
                                                            isMulti={true}
                                                            options={[
                                                                { value: 'chocolate', label: 'Chocolate' },
                                                                { value: 'strawberry', label: 'Strawberry' },
                                                                { value: 'vanilla', label: 'Vanilla' },
                                                            ]}
                                                            className="react-select mt-1 mb-3"
                                                            classNamePrefix="react-select"></Select>
                                                    </Form.Item>
                                                    <Form.Item className="mt-0 mb-0 p-2">
                                                        <h6 className="mt-0 mb-2 header-title">Select Current Menu</h6>
                                                        <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                            Set the category based on the available parent category</p>
                                                        <Treeselect></Treeselect>
                                                    </Form.Item>

                                                    <Form.Item className="mt-3 mb-0 p-2">
                                                        <Button
                                                            htmlType="button"
                                                            type="primary"
                                                            style={{
                                                                margin: '0 8px',
                                                            }}
                                                            onClick={this.addRootCatalog}
                                                        >
                                                            Add to root category
                                                        </Button>
                                                        <Button
                                                            htmlType="button"
                                                            type="default"
                                                            style={{
                                                                margin: '0 8px',
                                                            }}
                                                            onClick={this.addSubCatalog}
                                                        >
                                                            Add to sub category
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



        </React.Fragment >
    }
}


export default BaseStep;
/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Media } from 'reactstrap';
import { Form } from 'antd';
import ProductBase from '../utilities/ProductBase';

class BaseStep extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.toggleTab = this.toggleTab.bind(this);
        this.state = {
            activeTab: 'detail',
            drawerOpen: false
        };
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
        const { onFinish, fileList, handleFileListChange, onEditorContentChange, product_description } = this.props;
        return <React.Fragment>
            <Row>
                <Col md={12}>
                    <Card>
                        <CardBody style={{ backgroundColor: "#f7f7f7" }}>
                            <Row>
                                <Col>
                                    <React.Fragment>
                                        {/* <Form onFinish={this.formSubmission}
                                            labelCol={{
                                                span: 4,
                                            }}
                                            wrapperCol={{
                                                span: 18,
                                            }}
                                        > */}
                                        <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff" }}>
                                            <Media body >
                                                <ProductBase onFinish={onFinish} onEditorContentChange={onEditorContentChange}
                                                    product_description={product_description} handleFileListChange={handleFileListChange} fileList={fileList}></ProductBase>

                                            </Media>

                                        </Media>
                                        {/* </Form> */}

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
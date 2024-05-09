/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Media } from 'reactstrap';
import { Timeline } from 'antd';
import ImageUpload from '../utilities/ImageHandler'
import Select from 'react-select';
import { Briefcase, Clock, HardDrive } from 'react-feather';

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
                                        <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff", fontSize: "15px" }}>
                                            <Media body >
                                                <h6 className="mt-0 mb-2 header-title">订单状态</h6>
                                                <hr></hr>
                                                <Timeline className="mt-5 mb-5"
                                                    items={[
                                                        {
                                                            children: (
                                                                <><strong>Pending Order:</strong>
                                                                    <br></br>
                                                                    2023-09-01 18:23:09</>
                                                            ),
                                                        },
                                                        {
                                                            children: (
                                                                <><strong>Pending Payment:</strong>
                                                                    <br></br>
                                                                    2023-09-01 18:23:09</>
                                                            ),
                                                        },
                                                        {
                                                            dot: <Clock className="timeline-clock-icon" />,
                                                            color: 'red',
                                                            children: (
                                                                <><strong>Pending Recived:</strong>
                                                                    <br></br>
                                                                </>
                                                            ),
                                                        },
                                                        {
                                                            children: (
                                                                <><strong>Order Confirmed:</strong>
                                                                    <br></br></>
                                                            ),
                                                            color: 'gray',
                                                        },
                                                        {
                                                            children: (
                                                                <><strong>Awaiting Fulfillment:</strong>
                                                                    <br></br></>
                                                            ),
                                                            color: 'gray',
                                                        },
                                                        {
                                                            children: (
                                                                <><strong>Awaiting Shipment:</strong>
                                                                    <br></br></>
                                                            ),
                                                            color: 'gray',
                                                        },
                                                        {
                                                            children: (
                                                                <><strong>Product Shipped:</strong>
                                                                    <br></br></>
                                                            ),
                                                            color: 'gray',
                                                        },
                                                        {
                                                            children: (
                                                                <><strong>Awaiting Pickup:</strong>
                                                                    <br></br>
                                                                </>
                                                            ),
                                                            color: 'gray',
                                                        },
                                                        {
                                                            children: (
                                                                <><strong>Order Completed</strong>
                                                                    <br></br>
                                                                </>
                                                            ),
                                                            color: 'gray',
                                                        },
                                                    ]}
                                                />
                                            </Media>
                                        </Media>

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
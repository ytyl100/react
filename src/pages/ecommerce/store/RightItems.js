/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Media } from 'reactstrap';
import StoreBaseForm from '../utilities/StoreBase';

class RightItems extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const { onFormSubmission, onFormClose, initStore, initId } = this.props;
        return <React.Fragment>
            <Row>
                <Col md={12}>
                    <Card>
                        <CardBody style={{ backgroundColor: "#f7f7f7" }}>
                            <Row>
                                <Col>
                                    <React.Fragment>
                                        <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff" }}>
                                            <Media body >
                                                <StoreBaseForm onFinish={onFormSubmission} onClose={onFormClose} initStore={initStore} initId={initId}></StoreBaseForm>
                                            </Media>
                                        </Media>
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


export default RightItems;
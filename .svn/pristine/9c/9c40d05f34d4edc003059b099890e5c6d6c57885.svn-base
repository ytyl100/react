/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Nav, NavItem, NavLink, TabContent, TabPane, Media } from 'reactstrap';
import classNames from 'classnames';
import BrandBase from '../utilities/BrandBase';
import CollectionASProducts from './CollectionASProducts';

class RightItems extends Component {
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

    render() {

        const { onFormSubmission } = this.props;
        return <React.Fragment>
            <Row>
                <Col md={12}>
                    <Card>
                        <CardBody>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        className={classNames({ active: this.state.activeTab === 'detail' })}
                                        onClick={() => { this.toggleTab('detail'); }}>品牌基本信息</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="#"
                                        className={classNames({ active: this.state.activeTab === 'advance' })}
                                        onClick={() => { this.toggleTab('advance'); }}>品牌关联产品</NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="detail">
                                    <Row>
                                        <Col sm="12">
                                            <Card >
                                                <CardBody style={{ backgroundColor: "#f7f7f7" }}>
                                                    <Row>
                                                        <Col>
                                                            <React.Fragment>
                                                                <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff" }}>
                                                                    <Media body >
                                                                        <BrandBase onFinish={onFormSubmission}></BrandBase>
                                                                    </Media>
                                                                </Media>

                                                            </React.Fragment>
                                                        </Col>

                                                    </Row>
                                                </CardBody>
                                            </Card>

                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="advance">
                                    <Row>
                                        <Col sm="12">
                                            <Card >

                                                <CardBody style={{ backgroundColor: "#f7f7f7" }}>
                                                    <Row>
                                                        <Col>
                                                            <React.Fragment>
                                                                <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff" }}>
                                                                    <Media body >
                                                                        {/* <CollectionASProducts></CollectionASProducts> */}
                                                                    </Media>
                                                                </Media>
                                                            </React.Fragment>
                                                        </Col>

                                                    </Row>
                                                </CardBody>

                                            </Card>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>

                        </CardBody>
                    </Card>
                </Col>
            </Row>



        </React.Fragment >
    }
}


export default RightItems;
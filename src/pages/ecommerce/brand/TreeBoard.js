/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Media } from 'reactstrap';
import { Button, message, Steps } from 'antd';
import PageTitle from '../../../components/PageTitle';
import LeftSettings from './LeftSettings';
import RightItems from './RightItems';
import BaseStep from './BaseStep';

const stepsData = [
    {
        title: 'First',
        description: 'First description',
        content: 'First-content',
        component: BaseStep,
    },
    {
        title: 'Second',
        description: 'Second description',
        content: 'Second-content',
        component: LeftSettings,
    },
    {
        title: 'Last',
        description: 'Last description',
        content: 'Last-content',
        component: RightItems,
    },
];


class TreeBoard extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            activeStepIndex: 0,
        };
    }

    handleStepClick = (index) => {
        this.setState({ activeStepIndex: index });
    };

    handleNext = () => {
        const { activeStepIndex } = this.state;
        if (activeStepIndex < stepsData.length - 1) {
            this.setState({ activeStepIndex: activeStepIndex + 1 });
        }
    };

    handlePrev = () => {
        const { activeStepIndex } = this.state;
        if (activeStepIndex > 0) {
            this.setState({ activeStepIndex: activeStepIndex - 1 });
        }
    };

    render() {

        const { activeStepIndex } = this.state;
        const ActiveComponent = stepsData[activeStepIndex].component;

        return <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Apps', path: '/apps/tasks/list' },
                            { label: 'Tasks', path: '/apps/tasks/list', active: true },
                        ]}
                        title={'品牌管理'}
                    />
                </Col>
            </Row>

            {/* filter panel */}
            <Row>
                <Col xl={12}>

                    <Card>
                        <CardBody>
                            <p class="sub-header">
                                工作部门管理可新建立权限组、用户组，并对权限组的菜单导航功能，模块管理功能权限进行设置之后，按照各个组将用户组分配到对应权限组.
                                工作部门管理分为核心管理员与普通组成员，核心管理成员拥有当前模块所有功能并可以分配组员，组员可以拥有各个级别的管理权限但是没有组员分配权限
                            </p>
                            <Row>
                                <Col xl={2}>
                                    <React.Fragment>
                                        <Media>
                                            <Media body >
                                                <h6 className="mt-0 mb-2 header-title">Category thumbnail</h6>
                                                <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                                    Set the category thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted</p>
                                                <Steps className="mt-2 mb-2" style={{ height: "200px" }} direction="vertical" current={activeStepIndex}>
                                                    {stepsData.map((step, index) => (
                                                        <Steps.Step
                                                            key={index}
                                                            title={step.title}
                                                            description={step.description}
                                                            onClick={() => this.setState({ activeStepIndex: index })}
                                                        />
                                                    ))}</Steps>
                                            </Media>

                                        </Media>
                                    </React.Fragment>

                                </Col>
                                <Col xl={10}>
                                    <React.Fragment >
                                        {activeStepIndex > 0 && (
                                            <Button type="primary" className="mt-2 mb-2 mr-2" onClick={this.handlePrev}>
                                                Previous
                                            </Button>
                                        )}
                                        {activeStepIndex === stepsData.length - 1 && (
                                            <Button type="primary" className="mt-2 mb-2 mr-2" onClick={() => message.success('Processing complete!')}>
                                                Done
                                            </Button>
                                        )}
                                        {activeStepIndex < stepsData.length - 1 && (
                                            <Button type="primary" className="mt-2 mb-2 mr-2" onClick={this.handleNext}>
                                                Next
                                            </Button>
                                        )}
                                    </React.Fragment>
                                    <ActiveComponent />

                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </React.Fragment>
    }
}


export default TreeBoard;
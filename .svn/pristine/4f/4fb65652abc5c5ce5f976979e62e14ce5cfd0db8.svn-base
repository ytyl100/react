/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Media } from 'reactstrap';
import { getLoggedInUser } from '../../../helpers/authUtils';
import { Button, message, Steps } from 'antd';
import uuid from 'react-uuid';
import { saveApiData } from '../../../helpers/handleApi';

import PageTitle from '../../../components/PageTitle';
import SecondStep from './SecondStep';
import RightItems from './ThirdStep';
import BaseStep from './BaseStep';


const { Step } = Steps;

class Board extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        const { match } = this.props;
        const { id } = match.params ? match.params : 3;
        const vendor = getLoggedInUser() ? getLoggedInUser().vendor ? getLoggedInUser().vendor : null : null;

        this.state = {
            activeStepIndex: 0,
            initId: id,
            vendor: vendor,
            product_description: '123',
            initData: [],
            stepData: [{
                title: '产品基本信息',
                description: '录入产品的基本信息，产品标题，描述已经图片整理',
                content: '录入产品的基本信息，产品标题，描述已经图片整理',
                component: this.renderCurrentStep, // BaseStep,
            },
            {
                title: '产品属性',
                description: '为产品配置多样化的属性，增加每个产品的衡量属性',
                content: '为产品配置多样化的属性，增加每个产品的衡量属性',
                component: this.renderCurrentStep, //LeftSettings,
            },
            {
                title: '产品营销配置',
                description: '包括SEO配置，关联产品的设置与推广信息',
                content: '包括SEO配置，关联产品的设置与推广信息',
                component: this.renderCurrentStep, //RightItems,
            },],
            fileList: [
                {
                    uid: '-1',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
            ], // Initialize an empty file list
        };
    }

    handleStepClick = (index) => {
        this.setState({ activeStepIndex: index });
    };

    handleStepChange = (step) => {
        this.setState({
            activeStepIndex: step,
        });
    };

    handleNext = () => {
        const { activeStepIndex, stepData } = this.state;
        if (activeStepIndex < stepData.length - 1) {
            this.setState({ activeStepIndex: activeStepIndex + 1 });
        }
    };

    handlePrev = () => {
        const { activeStepIndex } = this.state;
        if (activeStepIndex > 0) {
            this.setState({ activeStepIndex: activeStepIndex - 1 });
        }
    };

    handleDone = () => {
        this.props.history.push(`/ecommerce/productitems`);
    };

    handleStepDataChange = (data) => {
        this.setState((prevState) => ({
            stepData: { ...prevState.stepData, ...data },
        }));
    };

    renderCurrentStep = () => {
        const { activeStepIndex, initData } = this.state;
        switch (activeStepIndex) {
            case 0:
                return (
                    <BaseStep
                        data={initData}
                        onChange={this.handleStepDataChange}
                        onNext={this.handleNext}
                        onEditorContentChange={this.onEditorContentChange}
                        handleFileListChange={this.handleFileListChange}
                        product_description={this.state.product_description}
                        fileList={this.state.fileList}
                        onFinish={this.onFormSubmission}
                    />
                );
            case 1:
                return (
                    <SecondStep
                        data={initData}
                        onChange={this.handleStepDataChange}
                        onPrevious={this.handlePrevious}
                        onNext={this.handleNext}
                        onFormSubmission={this.onFormSubmission}
                    />
                );
            case 2:
                return (
                    <RightItems
                        data={initData}
                        onChange={this.handleStepDataChange}
                        onPrevious={this.handlePrev}
                    />
                );
            default:
                return null;
        }
    };

    handleFileListChange = (newFileList) => {
        this.setState({ fileList: newFileList });
        console.log('file list change:', newFileList);
    };

    onEditorContentChange = editorContent => {
        this.setState({ newReplyContent: editorContent });
    }

    onFormSubmission = (values) => {
        console.log('Received values of form: ', values);
        //add new product:product/save
        const productSaveUrl = '/product/save';

        let productVal = {
            id: this.state.initId ? this.state.initId : 0,
            vendor_id: this.state.vendor ? this.state.vendor.id ? this.state.vendor.id : 0 : 0,
            // key: values.attribute_name + '_' + uuid(),
            // activate: values.attribute_enable,
            // title: values.attribute_name,
            // intro: values.attribute_intro,
            // type: values.attribute_control,
        }

        const saveDatas = async () => {
            let res = await saveApiData(productSaveUrl, productVal);
            console.log('save tree response0:', res);
            if (res) {
                console.log('save tree response1:', res);
            }
            //onFormClose();
        }
        saveDatas()
    };

    render() {

        const { activeStepIndex, stepData } = this.state;

        return <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Apps', path: '/apps/tasks/list' },
                            { label: 'Tasks', path: '/apps/tasks/list', active: true },
                        ]}
                        title={'产品管理'}
                    />
                </Col>
            </Row>

            {/* filter panel */}
            <Row>
                <Col xl={12}>

                    <Card>
                        <CardBody>
                            <p className="sub-header">
                                工作部门管理可新建立权限组、用户组，并对权限组的菜单导航功能，模块管理功能权限进行设置之后，按照各个组将用户组分配到对应权限组.
                            </p>
                            <Row>
                                <Col xl={2}>
                                    <React.Fragment>
                                        <Media>
                                            <Media body >

                                                <Steps className="mt-2 mb-2" style={{ height: "200px" }} direction="vertical" current={activeStepIndex} onChange={this.handleStepChange}>
                                                    <Step title='产品基本信息'
                                                        description='录入产品的基本信息，产品标题，描述已经图片整理'
                                                        content='录入产品的基本信息，产品标题，描述已经图片整理' />
                                                    <Step title='产品属性'
                                                        description='为产品配置多样化的属性，增加每个产品的衡量属性'
                                                        content='为产品配置多样化的属性，增加每个产品的衡量属性' />
                                                    <Step title='产品营销配置'
                                                        description='包括SEO配置，关联产品的设置与推广信息'
                                                        content='包括SEO配置，关联产品的设置与推广信息' />
                                                </Steps>
                                            </Media>

                                        </Media>
                                    </React.Fragment>

                                </Col>
                                <Col xl={10}>
                                    <React.Fragment >
                                        {activeStepIndex > 0 && (
                                            <Button type="primary" className="mt-2 mb-2 mr-2" onClick={this.handlePrev}>
                                                上一步
                                            </Button>
                                        )}
                                        {activeStepIndex === stepData.length - 1 && (
                                            <Button type="primary" className="mt-2 mb-2 mr-2" onClick={this.handleDone}>
                                                完成
                                            </Button>
                                        )}
                                        {activeStepIndex < stepData.length - 1 && (
                                            <Button type="primary" className="mt-2 mb-2 mr-2" onClick={this.handleNext}>
                                                下一步
                                            </Button>
                                        )}
                                    </React.Fragment>
                                    <div>
                                        {this.renderCurrentStep()}
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </React.Fragment>
    }
}


export default Board;
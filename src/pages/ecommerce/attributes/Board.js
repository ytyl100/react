/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, } from 'reactstrap';

import PageTitle from '../../../components/PageTitle';
import LeftSettings from './LeftSettings';
import RightItems from './RightItems';
import { getLoggedInUser } from '../../../helpers/authUtils';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import './../../../config';

class Board extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        const { match } = this.props;
        const { id } = match.params ? match.params : 3;
        const vendor = getLoggedInUser() ? getLoggedInUser().vendor ? getLoggedInUser().vendor : null : null;

        this.state = {
            initId: id,
            vendor: vendor,
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

    handleFileListChange = (newFileList) => {
        this.setState({ fileList: newFileList });
        console.log('file list change:', newFileList);
    };

    onFormSubmission = (values) => {
        console.log('Received values of form: ', values);

    };

    onFormClose = () => {
        this.props.history.push(`/ecommerce/attributeItems`);
    }

    render() {

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
                            品牌管理包括供应商管理的品牌类目的详细资料以及为各个类目下归档的品牌产品，方便用户通过品牌搜寻与浏览。<p className="sub-header">
                            </p>
                            <Row>
                                <Col xl={3}>
                                    <LeftSettings handleFileListChange={this.handleFileListChange} fileList={this.state.fileList}></LeftSettings>
                                </Col>
                                <Col xl={9}>
                                    <RightItems onFormSubmission={this.onFormSubmission} onFormClose={this.onFormClose} initId={this.state.initId} vendor={this.state.vendor}></RightItems>

                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
            <Row>
                <Col xl={12}>

                    <Card>
                        <CardBody>
                            <PrettyChatWindow
                                projectId={global.api.REACT_APP_CE_PROJECT_ID}
                                username={global.api.useremail}
                                secret={global.api.password}
                                style={{ height: '100vh-12px' }}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    }
}


export default Board;
/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, } from 'reactstrap';

import PageTitle from '../../../components/PageTitle';
import LeftSettings from './LeftSettings';
import RightItems from './RightItems';


class Board extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
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

    render() {

        return <React.Fragment>
            <Row className="page-title">
                <Col md={12}>
                    <PageTitle
                        breadCrumbItems={[
                            { label: 'Apps', path: '/apps/tasks/list' },
                            { label: 'Tasks', path: '/apps/tasks/list', active: true },
                        ]}
                        title={'产品系列管理'}
                    />
                </Col>
            </Row>

            {/* filter panel */}
            <Row>
                <Col xl={12}>

                    <Card>
                        <CardBody>
                            产品系列管理包括供应商管理的根据营销设定的类目对各个特性产品归档、优惠促销产品，方便用户通过品牌搜寻与浏览。<p className="sub-header">
                            </p>
                            <Row>
                                <Col xl={3}>
                                    <LeftSettings handleFileListChange={this.handleFileListChange} fileList={this.state.fileList}></LeftSettings>
                                </Col>
                                <Col xl={9}>
                                    <RightItems onFormSubmission={this.onFormSubmission}></RightItems>

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
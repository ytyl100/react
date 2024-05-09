/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import { Row, Col, Card, CardBody, } from 'reactstrap';
import PageTitle from '../../../components/PageTitle';
import LeftSettings from './LeftSettings';
import RightItems from './RightItems';
import { saveApiData, getApiData } from '../../../helpers/handleApi';
import { getLoggedInUser } from '../../../helpers/authUtils';

class Board extends Component {

    constructor(props) {
        super(props);

        const { match } = this.props;
        const { id } = match.params;
        console.log('store param', match);
        const updateStore = id === "1002" ? {
            store_residence: [],
            prefix: '86',
            store_activate: 1,
            store_name: '店铺名称',
            store_intro: '店铺介绍-测试22',
            store_address: '店铺地址-测试33',
            store_phone: '店铺电话-测试44',
            store_website: 'www.xhfair.com',
            store_navigate: 24,
            store_dropdown_menu: 23,
            store_vendor: 'winmax'
        } : null;

        this.state = {
            initId: id,
            profileImg: 'profile',
            fileList: [],
            // fileList: [
            //     {
            //         uid: '-1',
            //         name: 'image.png',
            //         status: 'done',
            //         url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            //     },
            // ],
            initStore: updateStore,
        };
    }

    componentDidMount = async () => {
        //this.setState({ loading: true });

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.initStore !== prevState.initStore) {
            console.log('componentDidUpdate:', this.state.initStore); // logs the updated state
        }
    }

    handleFileListChange = (newFileList) => {
        this.setState({ fileList: newFileList });
    };

    onFormSubmission = (values) => {
        console.log('Received values of form: ', values);
        const storeSaveUrl = '/store/save';

        let storeVal = {
            store_id: this.state.initId ? this.state.initId : 0,
            store_activate: values.store_activate,
            store_name: values.store_name,
            store_intro: '店铺介绍-测试22',
            store_address: '店铺地址-测试33',
            store_phone: '店铺电话-测试44',
            store_website: 'www.xhfair.com',
            store_navigate: values.store_navigate,
            store_dropdown_menu: values.store_dropdown_menu,
            store_vendor: 'winmax'
        }
        console.log('post store data:', storeVal);
        const saveDatas = async () => {
            let res = await saveApiData(storeSaveUrl, storeVal);
            if (res) {
                console.log('save tree response1:', res);
            }
        }
        saveDatas()

    };

    onFormClose = () => {
        this.props.history.push(`/ecommerce/storeitems`);
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
                            <p className="sub-header">
                                店铺管理包括供货商店铺信息资料，图片形象以及地点信息；
                            </p>
                            <Row>
                                <Col xl={3}>
                                    <LeftSettings handleFileListChange={this.handleFileListChange} fileList={this.state.fileList} category={'storeProfile'} initId={this.state.initId}></LeftSettings>
                                </Col>
                                <Col xl={9}>
                                    <RightItems onFormSubmission={this.onFormSubmission} onFormClose={this.onFormClose} initStore={this.state.initStore} initId={this.state.initId}></RightItems>

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
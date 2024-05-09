/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import {
    Row, Col, Card, CardBody,
} from 'reactstrap';
import { Avatar, Skeleton, Button, List } from 'antd';
import AutocompleteSearch from './AutocompleteSearch';
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { getApiData } from '../../../helpers/handleApi';

const records = [
    {
        id: 1001,
        slug: 'winmax-sport',
        intro: '华南地区最大专业体育用品品牌',
        origin: '广州市体育西路123号之一',
        name: 'winmax sport',
        image: 'https://reactstorefronts.com/static/img/brand/1.jpg',
        price: 10,
        quantity: 20,
    },
    {
        id: 1002,
        slug: 'belle-wigs',
        intro: '华南地区最大专业体育用品品牌',
        origin: '广州市体育西路123号之一',
        name: 'belle wigs',
        image: 'https://reactstorefronts.com/static/img/brand/1.jpg',
        price: 10,
        quantity: 20,
    },
    {
        id: 1003,
        slug: 'gardenarts',
        intro: '华南地区最大专业体育用品品牌',
        origin: '广州市体育西路123号之一',
        name: 'gardenarts',
        image: '../../assets/images/users/avatar-2.jpg',
        price: 10,
        quantity: 20,
    },
    {
        id: 1004,
        slug: 'nova-wigs',
        intro: '华南地区最大专业体育用品品牌',
        origin: '广州市体育西路123号之一',
        name: 'nova wigs',
        image: 'assets/images/users/avatar-2.jpg',
        price: 10,
        quantity: 20,
    },
];


class CustomerFilterList extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            selected: [], // Array to store the selected row keys
            storeData: records,
            initLoading: false,
            loading: false,
            list: [],
            remoteList: [],
            selectedItem: [],
        };
    }

    componentDidMount = async () => {

        this.setState({ loading: true });
        const customerListUrl = '/customer/list';
        //const catalogListUrl = '/catalog/list?vendor_id=6';
        const response = await getApiData(customerListUrl);
        const data = await response;

        if (data) {

            console.log('catelog data:', data);
            // return data = data.filter(function (x) { return x !== null });
            this.setState({
                list: data,
                loading: false,
            })
        }

        this.setState({
            // list: [
            //     {
            //         id: 1000,
            //         product_name: { title: "Miss", first: "Viktorija", last: "Danilović" },
            //         short_desc: "Shop from EX-HUB, a design language for background applications",
            //         long_desc: "Shop from EX-HUB, a design language for background applications, is refined by Ant UED Team",
            //         storage: 220,
            //         picture: {
            //             large: "https://randomuser.me/api/portraits/women/66.jpg",
            //             medium: "https://randomuser.me/api/portraits/med/women/66.jpg",
            //             thumbnail: "https://randomuser.me/api/portraits/thumb/women/66.jpg"
            //         },
            //         nat: "RS"
            //     },
            //     {
            //         id: 1001,
            //         product_name:
            //             { title: "Miss", first: "Zoey", last: "Wells" },
            //         short_desc: "Shop from EX-HUB, a design language for background applications",
            //         long_desc: "Shop from EX-HUB, a design language for background applications, is refined by Ant UED Team",
            //         storage: 323,
            //         picture: {
            //             large: "https://randomuser.me/api/portraits/women/2.jpg",
            //             medium: "https://randomuser.me/api/portraits/med/women/2.jpg",
            //             thumbnail: "https://randomuser.me/api/portraits/thumb/women/2.jpg"
            //         },
            //         nat: "US"
            //     },
            //     {
            //         id: 1002,
            //         product_name: { title: "Mrs", first: "Olivia", last: "Macdonald" },
            //         short_desc: "Shop from EX-HUB, a design language for background applications",
            //         long_desc: "Shop from EX-HUB, a design language for background applications, is refined by Ant UED Team",
            //         storage: 33,
            //         picture: {
            //             large: "https://randomuser.me/api/portraits/women/36.jpg",
            //             medium: "https://randomuser.me/api/portraits/med/women/36.jpg",
            //             thumbnail: "https://randomuser.me/api/portraits/thumb/women/36.jpg"
            //         },
            //         nat: "CA"
            //     },
            //     {
            //         id: 1003,
            //         product_name: { title: "Mr", first: "آرش", last: "نكو نظر" },
            //         short_desc: "Shop from EX-HUB, a design language for background applications",
            //         long_desc: "Shop from EX-HUB, a design language for background applications, is refined by Ant UED Team",
            //         storage: 15,
            //         picture: {
            //             large: "https://randomuser.me/api/portraits/men/50.jpg",
            //             medium: "https://randomuser.me/api/portraits/med/men/50.jpg",
            //             thumbnail: "https://randomuser.me/api/portraits/thumb/men/50.jpg"
            //         },
            //         nat: "IR"
            //     },
            //     {
            //         id: 1004,
            //         product_name: { title: "Miss", first: "Tammy", last: "Dixon" },
            //         short_desc: "Shop from EX-HUB, a design language for background applications",
            //         long_desc: "Shop from EX-HUB, a design language for background applications, is refined by Ant UED Team",
            //         storage: 20,
            //         picture: {
            //             large: "https://randomuser.me/api/portraits/women/14.jpg",
            //             medium: "https://randomuser.me/api/portraits/med/women/14.jpg",
            //             thumbnail: "https://randomuser.me/api/portraits/thumb/women/14.jpg"
            //         },
            //         nat: "AU"
            //     }],
            remoteList: [
                {
                    id: 1005,
                    product_name: { title: "remote data -", first: "Viktorija", last: "remote data - d" },
                    short_desc: "remote data -Shop from EX-HUB, a design language for background applications",
                    long_desc: "remote data -Shop from EX-HUB, a design language for background applications, is refined by Ant UED Team",
                    storage: 220,
                    picture: {
                        large: "https://randomuser.me/api/portraits/women/15.jpg",
                        medium: "https://randomuser.me/api/portraits/med/women/15.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/women/15.jpg"
                    },
                    nat: "RS"
                },
                {
                    id: 1006,
                    product_name:
                        { title: "remote data -Miss", first: "Zoey", last: "remote data -Wells" },
                    short_desc: "remote data -Shop from EX-HUB, a design language for background applications",
                    long_desc: "remote data -Shop from EX-HUB, a design language for background applications, is refined by Ant UED Team",
                    storage: 323,
                    picture: {
                        large: "https://randomuser.me/api/portraits/women/17.jpg",
                        medium: "https://randomuser.me/api/portraits/med/women/17.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/women/17.jpg"
                    },
                    nat: "US"
                },
                {
                    id: 1007,
                    product_name: { title: "remote data -Mrs", first: "Olivia", last: "remote data -Macdonald" },
                    short_desc: "remote data -Shop from EX-HUB, a design language for background applications",
                    long_desc: "remote data -Shop from EX-HUB, a design language for background applications, is refined by Ant UED Team",
                    storage: 33,
                    picture: {
                        large: "https://randomuser.me/api/portraits/women/18.jpg",
                        medium: "https://randomuser.me/api/portraits/med/women/18.jpg",
                        thumbnail: "https://randomuser.me/api/portraits/thumb/women/18.jpg"
                    },
                    nat: "CA"
                },
            ]
        })
    }

    handleEditItem = (id) => {
        this.props.history.push(`/ecommerce/brand/board/${id}`);
    };

    handleDelItem = (value) => {
        const items = [...this.state.list];
        const remainItems = items.filter((res) => res.id !== value);

        this.setState({
            list: remainItems,
        })

        console.log('delete this item', value);
    };

    handleAddItem = (value) => {

        let data = this.state.list;
        console.log('add value item:', value[0].product_name);
        console.log('add data item:', data);
        const filterProducts = data.filter(c => c.product_name.title.includes(value[0].product_name.title)).length
        console.log('handleAdditem found:', filterProducts);
        if (filterProducts < 1) {
            data.push(value[0]);
            this.setState({
                list: data,
            })
        }

    }

    handleBatchDelete = () => {
        const updatedData = records.filter((row) => !this.state.selected.includes(row.id));

        this.setState({ selected: [] }); // Clear selected rows
        this.setState({ storeData: updatedData }); // Clear selected rows
        // Do something with the updated data (e.g., update the data source, show a confirmation message)
    };

    render() {
        const { initLoading, loading, list, remoteList, selectedItem } = this.state;
        const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

        const onLoadMore = () => {
            console.log('load more');
        };
        const loadMore =
            !initLoading && !loading ? (
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 12,
                        height: 32,
                        lineHeight: '32px',
                    }}
                >
                    <Button onClick={onLoadMore}>loading more</Button>
                </div>
            ) : null;

        return <React.Fragment>

            {/* filter panel */}
            <Row>
                <Col xl={12}>

                    <Card>
                        <CardBody>
                            <p className="sub-header">
                                产品系列管理可以根据电商商家所拥有的在线销售的产品系列进行营销归类类目，拥有各自独立的库存与产品管理，也可以分配各自的产品类目；
                            </p>
                            <AutocompleteSearch remoteList={remoteList} handleAddItem={this.handleAddItem}></AutocompleteSearch>
                            <hr></hr>
                            <List
                                className="demo-loadmore-list"
                                loading={initLoading}
                                itemLayout="horizontal"
                                size="large"
                                pagination={{
                                    onChange: (page) => {
                                        console.log(page);
                                    },
                                    pageSize: 3,
                                }}
                                //loadMore={loadMore}
                                dataSource={list}
                                renderItem={(item) => (
                                    <List.Item>
                                        <Skeleton avatar title={false} loading={item.loading} active>
                                            <List.Item.Meta
                                                avatar={item ? item.avatar ?
                                                    <Avatar size="large" src={item ? item.avatar ? item.avatar : '' : ''} />
                                                    :
                                                    <Avatar
                                                        style={{
                                                            backgroundColor: ColorList[0],
                                                            verticalAlign: 'middle',
                                                        }}
                                                        size="large"
                                                    >
                                                        {item.name ? item.name.charAt(0) : 'U'}
                                                    </Avatar> : ''}
                                                title={<a href={"/ecommerce/customer/board/" + item.id}>{item ? item.name ? item.name : '' : ''}</a>}
                                                description={item ? item.email ? item.email : '' : ''}
                                            />
                                            <div className='ml-3 mr-3'>现有库存： {item ? item.orders ? item.orders : 0 : 0}</div>
                                            <div className='ml-3 mr-3'><Button type="primary" onClick={() => this.handleDelItem(item.id)} htmlType="button">删除当前类目 </Button></div>
                                        </Skeleton>
                                    </List.Item>
                                )}
                            />

                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </React.Fragment>
    }
}


export default CustomerFilterList;
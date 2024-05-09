import React, { Component } from 'react';
import { Tab, Badge, Tag, Avatar, List, Space, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Redirect, Link } from 'react-router-dom';

class TableAllOrders extends Component {


    render() {

        const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
        const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

        const data = Array.from({
            length: 23,
        }).map((_, i) => ({
            href: `/ecommerce/order/board/` + i,
            title: `Sold by: design part ${i}`,
            avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
            description: (
                <React.Fragment>
                    <Link href={`/ecommerce/order/board/` + i} key={i}>
                        <strong>
                            a design language for background applications,
                            is refined by Ant UED Team.
                        </strong>
                    </Link>
                    <p></p>
                    <figure>
                        <figcaption>
                            <strong>Category: </strong>
                            <small>basketball</small>
                        </figcaption>
                    </figure>
                    <figure>
                        <figcaption>
                            <strong>Attribute: </strong>
                            <small>Size: M, Color: White</small>
                        </figcaption>
                    </figure>
                    <figure>
                        <figcaption>
                            <strong>Quantity: </strong>
                            <small>x2</small>
                        </figcaption>
                    </figure>
                </React.Fragment>
            ),
            content: (
                <React.Fragment>
                    <figure>
                        <figcaption>
                            <strong>Shipping Fee: </strong>
                            <small>$20.00</small>
                            <span> </span>
                            <strong>Total Fee: </strong>
                            <small>$59.00</small>
                        </figcaption>
                    </figure>
                </React.Fragment>
            ),
        }));

        return (
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={data}
                footer={
                    <div>
                        <b>ant design</b> footer part
                    </div>
                }
                renderItem={(item) => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <Link to="/ecommerce/invoice/invoicedetail/1" className="text-primary font-weight-bold ml-1">
                                Order Again
                            </Link>,
                            <Link to="/ecommerce/invoice/invoicedetail/1" className="text-primary font-weight-bold ml-1">
                                Track Order
                            </Link>,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }>
                        <List.Item.Meta
                            avatar={
                                // <Avatar src={item.avatar} />
                                <Avatar
                                    style={{
                                        backgroundColor: ColorList[0],
                                        verticalAlign: 'middle',
                                    }}
                                    size="large"
                                >
                                    {UserList[0]}
                                </Avatar>
                            }
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        );
    }
}

export default TableAllOrders;
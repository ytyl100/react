import React, { useState } from 'react';
import { Divider, Descriptions, Table, Button } from 'antd';
import { Media } from 'reactstrap';



const CustomerDeliveryAddress = ({ onFinish }) => {

    const [selectedAddress, setSelectedAddress] = useState([
        {
            key: '1',
            label: '用户名称',
            children: 'educator',
        },
        {
            key: '2',
            label: '用户邮箱',
            children: 'educator@gmail.com',
        },
        {
            key: '3',
            label: '订单时间',
            children: '2024-03-15 18:00:00',
        },
        {
            key: '7',
            label: '用户地址',
            children: (
                <>
                    体育西路123号之一704
                    <br />
                    天河区 广州 广东 中国
                    <br />
                </>
            ),
        },]);

    const columns = [
        {
            title: '用户名称',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '用户邮件',
            dataIndex: 'email',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '注册时间',
            dataIndex: 'registerTime',
        },
        {
            title: '用户地址',
            dataIndex: 'address',
        },
        {
            title: '所在国家',
            dataIndex: 'country',
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            email: 'educator@gmail.com',
            registerTime: '2024-03-17 18:03:09',
            address: 'New York No. 1 Lake Park',
            country: 'US',
        },
        {
            key: '2',
            name: 'Jack daniel',
            email: 'educator@gmail.com',
            registerTime: '2024-03-07 18:03:09',
            address: 'New York No. 2 Another park',
            country: 'Australia',
        },
    ];

    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            let selectedItem = [
                {
                    key: '1',
                    label: '用户名称',
                    children: selectedRows[0].name,
                },
                {
                    key: '2',
                    label: '用户邮箱',
                    children: selectedRows[0].email,
                },
                {
                    key: '3',
                    label: '注册时间',
                    children: selectedRows[0].registerTime,
                },
                {
                    key: '7',
                    label: '用户地址',
                    children: (
                        <>
                            {selectedRows[0].address}
                            <br />
                            {selectedRows[0].country}
                            <br />
                        </>
                    ),
                },
            ]
            setSelectedAddress(selectedItem);
        },

    };


    return (
        <div>
            <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff" }}>
                <Media body >
                    <Descriptions
                        bordered
                        title="客户信息"
                        //size={size}
                        extra={<Button type="primary">查看详细信息</Button>}
                        items={selectedAddress}
                    />
                </Media>
            </Media>

            <Divider />

            <Table
                rowSelection={{
                    type: 'radio',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    )


}

export default CustomerDeliveryAddress;
import React from "react";
import { Table, Switch, Space, Checkbox } from "antd";

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "Read",
        dataIndex: "age",
        key: "age",
        width: "12%",
        render: (text, record) => {
            // const isFolder = record.type === 'folder';
            // const imageSrc = isFolder ? record.image : record.image;
            const imageSrc = record.name;
            //return <img src={imageSrc} alt={text} />;
            return <div>
                <Space className="mt-3 p-1" >
                    测试：<button type="button" class="btn btn-primary mr-2" data-toggle="modal" data-target="#bs-role-modal-xl">更新资料: {imageSrc}</button>

                </Space>
            </div>
        },
    },
    {
        title: "Write",
        dataIndex: "address",
        width: "30%",
        key: "address"
    }
];

const data = [
    {
        key: 1,
        name: "John Brown sr.",
        age: <Checkbox></Checkbox>,
        address: <Checkbox></Checkbox>,
        children: [
            {
                key: 11,
                name: "John Brown",
                age: <Checkbox></Checkbox>,
                date: '2014-12-24 23:12:00',
                upgradeNum: 'Upgraded: 56',
                address: <Checkbox></Checkbox>
            },
            {
                key: 12,
                name: "John Brown jr.",
                age: <Checkbox></Checkbox>,
                date: '2014-12-24 23:12:00',
                upgradeNum: 'Upgraded: 56',
                address: <Checkbox></Checkbox>,

            },
            {
                key: 13,
                name: "Jim Green sr.",
                age: <Checkbox></Checkbox>,
                date: '2014-12-24 23:12:00',
                upgradeNum: 'Upgraded: 56',
                address: <Checkbox></Checkbox>,
            }
        ]
    },
    {
        key: 2,
        name: "Joe Black",
        age: <Checkbox></Checkbox>,
        address: <Checkbox></Checkbox>
    }
];

// rowSelection objects indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
        );
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    }
};

const ProductTreeItems = () => {
    const [checkStrictly, setCheckStrictly] = React.useState(false);
    return (
        <>
            <Space align="center" style={{ marginBottom: 16 }}>
                CheckStrictly:{" "}
                <Switch checked={checkStrictly} onChange={setCheckStrictly} />
            </Space>
            <Table
                columns={columns}
                rowSelection={{ ...rowSelection, checkStrictly }}
                dataSource={data}
            />
        </>
    );
}

export default ProductTreeItems;
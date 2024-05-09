import React, { useState } from 'react';
import { Table } from 'antd';

const ProductNestedItems = ({ columns, childColumns, rootdata }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = selectedRowKeys => {
        setSelectedRowKeys(selectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const expandedRowRender = (record) => {

        const copyParent = [...rootdata];
        let currentdata = null;
        const filteredArray = copyParent.filter((obj) => obj.key === record.key);

        if (filteredArray.length > 0) {
            currentdata = filteredArray[0].children;
        } else {
            console.log('No object found with the specified ID.');
        }

        return (
            <Table
                rowSelection={rowSelection}
                columns={childColumns}
                dataSource={currentdata}
                pagination={false}
                size="small"
                rowKey="key"
            />
        );

    };

    //remove children node from parent json
    const updateParent = rootdata.map(({ children, ...rest }) => rest);

    return (
        <Table
            dataSource={rootdata}
            columns={columns}
            rowSelection={rowSelection}
            pagination={true}
            // expandable={{
            //     expandedRowRender,
            // }}
            indentSize={30}
            rowKey="key"
        >
        </Table>
    );
};

export default ProductNestedItems;
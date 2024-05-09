
import React, { useState } from 'react';
import { TreeSelect } from 'antd';

const Treeselect = () => {
    const [value, setValue] = useState(null);

    const treeData = [
        {
            value: 'parent 1',
            title: 'parent 1',
            children: [
                {
                    value: 'parent 1-0',
                    title: 'parent 1-0',
                    children: [
                        {
                            value: 'leaf1',
                            title: 'leaf1',
                        },
                        {
                            value: 'leaf2',
                            title: 'leaf2',
                        },
                    ],
                },
                {
                    value: 'parent 1-1',
                    title: 'parent 1-1',
                    children: [
                        {
                            value: 'leaf3',
                            title: <b style={{ color: '#08c' }}>leaf3</b>,
                        },
                    ],
                },
            ],
        },
    ];

    const onChange = (newValue) => {
        console.log('treeselect onchange:', newValue);
        setValue(newValue);
    };
    return (
        <TreeSelect
            showSearch
            style={{ width: '100%' }}
            value={value}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Please select"
            allowClear
            treeDefaultExpandAll
            onChange={onChange}
            treeData={treeData}
        />
    );
};

export default Treeselect;


import difference from "lodash.difference";
import { Space, Switch, Table, Tag, Transfer, Button } from "antd";
import { useState } from "react";

const TableTransfer = ({ leftColumns, rightColumns, ...restProps }) => (
    <Transfer {...restProps}>
        {({
            direction,
            filteredItems,
            onItemSelectAll,
            onItemSelect,
            selectedKeys: listSelectedKeys,
            disabled: listDisabled,
        }) => {
            const columns = direction === 'left' ? leftColumns : rightColumns;
            const rowSelection = {
                getCheckboxProps: (item) => ({
                    disabled: listDisabled || item.disabled,
                }),
                onSelectAll(selected, selectedRows) {
                    const treeSelectedKeys = selectedRows
                        .filter((item) => !item.disabled)
                        .map(({ key }) => key);
                    const diffKeys = selected
                        ? difference(treeSelectedKeys, listSelectedKeys)
                        : difference(listSelectedKeys, treeSelectedKeys);
                    onItemSelectAll(diffKeys, selected);
                },
                onSelect({ key }, selected) {
                    onItemSelect(key, selected);
                },
                selectedRowKeys: listSelectedKeys,
            };
            return (
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={filteredItems}
                    size="small"
                    pagination={false}
                    style={{
                        pointerEvents: listDisabled ? 'none' : undefined,
                    }}
                    onRow={({ key, disabled: itemDisabled }) => ({
                        onClick: () => {
                            if (itemDisabled || listDisabled) return;
                            onItemSelect(key, !listSelectedKeys.includes(key));
                        },
                    })}
                />
            );
        }}
    </Transfer>
);

const AttributesetTransfer = (props) => {
    const { attributeOrigin, onFinish, onFormClose, initId, vendor } = props;


    //const mockData = attributeOrigin;

    //const mockTags = ['cat', 'dog', 'bird'];
    // const mockData = Array.from({
    //     length: 20,
    // }).map((_, i) => ({
    //     key: i.toString(),
    //     title: `content${i + 1}`,
    //     description: `description of content${i + 1}`,
    //     disabled: i % 4 === 0,
    //     tag: mockTags[i % 3],
    // }));

    //const originTargetKeys = attributeTarget

    // const originTargetKeys = attributeOrigin
    //     .filter((item) => Number(item.key) % 3 > 1)
    //     .map((item) => item.key);

    const originTargetKeys = attributeOrigin
        .filter((item) => item.status === 2)
        .map((item) => item.key);

    // const attributeOrg = [
    //     {
    //         key: 1,
    //         title: '按照产品的尺寸',
    //         disabled: false,
    //         tag: 'size',
    //         description: 'Screen-显示器65寸，大屏薄屏高品质',
    //     },
    //     {
    //         key: 2,
    //         title: '按照产品的颜色属性',
    //         disabled: false,
    //         tag: 'color',
    //         description: 'Screen-显示器65寸，大屏薄屏高品质',
    //     },
    //     {
    //         key: 3,
    //         title: '按照产品的材质属性',
    //         disabled: false,
    //         tag: 'material',
    //         description: 'Screen-显示器65寸，大屏薄屏高品质',
    //     },
    //     {
    //         key: 4,
    //         title: '按照产品的款式属性',
    //         disabled: false,
    //         tag: 'style',
    //         description: 'Screen-显示器65寸，大屏薄屏高品质',
    //     },
    //     {
    //         key: 5,
    //         title: '按照产品的型号属性',
    //         disabled: false,
    //         tag: 'modal',
    //         description: 'Screen-显示器65寸，大屏薄屏高品质',
    //     },
    //     {
    //         key: 6,
    //         title: '按照产品的款式属性',
    //         disabled: false,
    //         tag: 'style',
    //         description: 'Screen-显示器65寸，大屏薄屏高品质',
    //     },
    //     {
    //         key: 7,
    //         title: '按照产品的型号属性',
    //         disabled: false,
    //         tag: 'modal',
    //         description: 'Screen-显示器65寸，大屏薄屏高品质',
    //     },
    // ];

    // const attributeTKeys = [{
    //     key: 1,
    //     title: '按照产品的尺寸',
    //     disabled: false,
    //     tag: 'size',
    //     description: 'Screen-显示器65寸，大屏薄屏高品质',
    // },];
    //const originTargetKeys = difference(attributeOrigin, attributeTarget);

    // const originTargetKeys = attributeOrigin.filter(function (array_el) {
    //     return attributeTarget.filter(function (anotherOne_el) {
    //         return anotherOne_el.key === array_el.key;
    //     }).length > 0
    // }).map((item) => item.key);


    console.log('orig:', originTargetKeys);

    const leftTableColumns = [
        {
            dataIndex: 'title',
            title: '属性名称',
        },
        {
            dataIndex: 'tag',
            title: '标签',
            render: (tag) => <Tag>{tag}</Tag>,
        },
    ];

    const rightTableColumns = [
        {
            dataIndex: 'title',
            title: '选定属性名称',
        },
        {
            dataIndex: 'tag',
            title: '选定标签',
            render: (tag) => <Tag>{tag}</Tag>,
        },
    ];

    const [targetKeys, setTargetKeys] = useState(originTargetKeys);
    //const [targetKeys, setTargetKeys] = useState(attributeTarget);
    const [disabled, setDisabled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const onChange = (nextTargetKeys) => {
        setTargetKeys(nextTargetKeys);
        console.log('target keys:', nextTargetKeys);
    };
    const triggerDisable = (checked) => {
        setDisabled(checked);
    };
    const triggerShowSearch = (checked) => {
        setShowSearch(checked);
    };
    return (
        <>
            <TableTransfer
                dataSource={attributeOrigin}
                targetKeys={targetKeys}
                disabled={disabled}
                showSearch={showSearch}
                onChange={onChange}
                filterOption={(inputValue, item) =>
                    item.title.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1
                }
                leftColumns={leftTableColumns}
                rightColumns={rightTableColumns}
            />
            <Space
                style={{
                    marginTop: 16,
                }}
            >
                {/* <Switch
                    unCheckedChildren="disabled"
                    checkedChildren="disabled"
                    checked={disabled}
                    onChange={triggerDisable}
                />
                <Switch
                    unCheckedChildren="showSearch"
                    checkedChildren="showSearch"
                    checked={showSearch}
                    onChange={triggerShowSearch}
                /> */}
                <Button onClick={onFinish} type="primary" htmlType="button">
                    更新属性
                </Button>
            </Space>
        </>
    );
};

export default AttributesetTransfer; 

import React, { useContext, useState, useEffect, useRef } from 'react';
import { getApiData, saveApiData } from '../../../helpers/handleApi';
import { slugify, findImgVal } from '../../../helpers/tools';
import MediaLibImg from './MediaLibImg';

import {
    Form,
    Input,
    InputNumber,
    Table,
    Popconfirm,
    Button,
} from 'antd';

//attribute forms starts:
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};
const EditableCell = ({
    title,
    editable,
    children,
    inputType,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);
    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };
    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({
                ...record,
                ...values,
            });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };
    const inputNode = inputType === 'number' ? <InputNumber ref={inputRef} onPressEnter={save} onBlur={save} /> : <Input ref={inputRef} onPressEnter={save} onBlur={save} />;
    let childNode = children;
    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                {inputNode}
                {/* <Input ref={inputRef} onPressEnter={save} onBlur={save} /> */}
            </Form.Item>
        ) : (
            <div
                // className="editable-cell-value-wrap"
                style={{
                    paddingRight: 5,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }
    return <td {...restProps}>{childNode}</td>;
};
//attribute editable form end

const OrderBaseForm = (props) => {

    const { dataSource, setDataSource, initId, vendor, refreshFilelist, fileLibraryList, onFileSelect, onLibbuttonClick } = props;

    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };

    const defaultColumns = [
        {
            title: '属性SKU',
            dataIndex: 'sku',
        },
        {
            title: '属性描述',
            dataIndex: 'intro',
        },
        {
            title: '价格',
            dataIndex: 'price',
            editable: true,
        },
        {
            title: '促销价格',
            dataIndex: 'promote_price',
            editable: true,
        },
        {
            title: '数量',
            dataIndex: 'stock',
            editable: true,
        },
        {
            title: '更新图片',
            dataIndex: 'imgUpdate',
            render: (_, record) =>
                dataSource.length >= 1 ? (
                    <MediaLibImg
                        data={dataSource}
                        initId={initId}
                        vendor={vendor}
                        imageKey={record.key}
                        refreshMediaLib={refreshFilelist}
                        fileLibraryList={fileLibraryList}
                        fileSelectedList={dataSource.filter((item) => item.key === record.key)[0].images}
                        onFileSelect={onFileSelect}
                        onLibbuttonClick={onLibbuttonClick}
                    ></MediaLibImg>
                ) : null,
        },
        {
            title: '删除属性',
            dataIndex: 'operation',
            render: (_, record) =>
                dataSource.length >= 1 ? (
                    <Popconfirm title="确认删除当前记录么?" onConfirm={() => handleDelete(record.key)}>
                        <Button type="primary">删除</Button>
                    </Popconfirm>
                ) : null,
        },
    ];
    const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataSource(newData);
        console.log('new datasource:', newData);
    };
    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };
    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                inputType: col.dataIndex === 'price' || 'stock' || 'promote_price' ? 'number' : 'text',
                title: col.title,
                handleSave,
            }),
        };
    });
    return (
        <div>
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columns}
            />
        </div>
    );
};

export default OrderBaseForm;
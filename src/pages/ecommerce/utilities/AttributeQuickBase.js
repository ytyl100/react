import React, { useState, useEffect } from 'react';
import { Media } from 'reactstrap';
import { CloseOutlined } from '@ant-design/icons';

import {
    Button,
    Switch,
    Form,
    Input,
    Select,
} from 'antd';

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const AttributeQuickBase = (props) => {

    const [form] = Form.useForm();

    useEffect(() => {
        const fields = form.getFieldsValue()
        const { attribute_sets } = fields
        // Object.assign(items['name'], { type: 'value' })
        // Object.assign(items['title'], { type: 'value' })
        // form.setFieldsValue({ items })

        form.setFieldsValue({
            attribute_enable: false,
            attribute_name: attribute,
            attribute_intro: '按照产品的尺寸',
            attribute_control: 'dropdown',
            // attribute_sets: [
            //     { label: "size", value: "S" },
            //     { label: "size", value: "M" },
            //     { label: "size", value: "L" },
            // ],
        });

    }, []);

    const { onFinish, attribute } = props;
    console.log('get attribute from quick:', attribute);
    return (
        <Form
            {...formItemLayout}
            form={form}
            name="attribute"
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{ attribute_sets: [{}] }}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 18,
            }}
            scrollToFirstError
        >
            <Media className="mt-2 mb-2 p-3" style={{ backgroundColor: "#fff", fontSize: "15px" }}>
                <Media body >
                    <h6 className="mt-0 mb-2 header-title">产品属性资料的录入</h6>
                    <hr></hr>
                    <Form.Item label="启动属性" name='attribute_enable' valuePropName="checked" className="mt-0 mb-0 p-2">
                        <Switch />
                    </Form.Item>
                    <Form.Item
                        name="attribute_name"
                        label="属性名称"
                        tooltip="当前的属性是什么?"
                        rules={[
                            {
                                required: true,
                                message: '请输入属性',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="attribute_intro"
                        label="品牌介绍"
                        rules={[
                            {
                                required: true,
                                message: '请输入品牌介绍',
                            },
                        ]}
                    >
                        <Input.TextArea showCount maxLength={100} />
                    </Form.Item>
                    <Form.Item
                        name="attribute_control"
                        label="属性控件"
                        rules={[
                            {
                                required: true,
                                message: '请选择你的属性控件',
                            },
                        ]}
                    >
                        <Select placeholder="请选择属性控件">
                            <Option value="dropdown">下拉菜单</Option>
                            <Option value="riddio">单选</Option>
                            <Option value="checkbox">复选</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            提交信息
                        </Button>
                    </Form.Item>
                </Media>
            </Media>
        </Form>
    );
};

export default AttributeQuickBase;
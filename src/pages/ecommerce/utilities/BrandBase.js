import React, { useState } from 'react';
import { Media } from 'reactstrap';
import RichTextEditor from '../../../components/RichTextEditor';

import {
    AutoComplete,
    Button,
    Cascader,
    Switch,
    Form,
    Input,
    Select,
} from 'antd';

const { Option } = Select;
const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];
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
const BrandBase = ({ onFinish }) => {
    const [form] = Form.useForm();
    // const onFinish = (values) => {
    //     console.log('Received values of form: ', values);
    // };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="USD">$</Option>
                <Option value="CNY">¥</Option>
            </Select>
        </Form.Item>
    );
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));
    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
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
                    <h6 className="mt-0 mb-2 header-title">品牌信息的录入</h6>
                    <hr></hr>
                    <Form.Item label="启动品牌" valuePropName="checked" className="mt-0 mb-0 p-2">
                        <Switch />
                    </Form.Item>
                    <Form.Item
                        name="storename"
                        label="品牌名称"
                        tooltip="当前的品牌名称是什么?"
                        rules={[
                            {
                                required: true,
                                message: '请输入品牌名称',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="intro"
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
                        name="description"
                        label="品牌详细描述"
                        rules={[
                            {
                                required: true,
                                message: '请输入品牌详细描述',
                            },
                        ]}
                    >
                        <RichTextEditor onEditorContentChange={() => { }} />
                    </Form.Item>
                    <Form.Item
                        name="residence"
                        label="所在城市"
                        rules={[
                            {
                                type: 'array',
                                required: true,
                                message: '请输入你所在的城市',
                            },
                        ]}
                    >
                        <Cascader options={residences} />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="联系电话"
                        rules={[
                            {
                                required: true,
                                message: '请输入能够联系到您的电话',
                            },
                        ]}
                    >
                        <Input
                            addonBefore={prefixSelector}
                            style={{
                                width: '100%',
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="website"
                        label="网址信息"
                        rules={[
                            {
                                required: true,
                                message: '请输入网站地址',
                            },
                        ]}
                    >
                        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="http://">
                            <Input />
                        </AutoComplete>
                    </Form.Item>



                    <Form.Item
                        name="vendor"
                        label="所属供货商"
                        rules={[
                            {
                                required: true,
                                message: '请选择你的供货商',
                            },
                        ]}
                    >
                        <Select placeholder="请选择供货商">
                            <Option value="winmax">winmax</Option>
                            <Option value="belle">belle</Option>
                            <Option value="other">Other</Option>
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

export default BrandBase;
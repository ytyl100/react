import React, { useState, useEffect } from 'react';
import { Media } from 'reactstrap';
import { getApiData } from '../../../helpers/handleApi';
import { setSelAttrOptions } from '../../../helpers/tools';

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
const StoreBase = ({ onFinish, onClose, initStore, initId }) => {

    const [catalogNodeSelect, setCatalogOption] = useState([]);
    useEffect(() => {

        const catalogItemUrl = '/catalog/option';
        const storeUrl = '/store/' + initId;

        const getDatas = async () => {

            const response = await getApiData(catalogItemUrl);
            const data = await response;
            let catalogOptions = setSelAttrOptions(data);
            setCatalogOption(catalogOptions);

        }
        getDatas();

        const getStore = async () => {

            await getApiData(storeUrl).then(res => {
                console.log('storeUrl:', res)
                form.setFieldsValue({
                    store_residence: [],
                    prefix: '86',
                    store_activate: res.activate,
                    store_name: res.name,
                    store_intro: '店铺介绍-测试22',
                    store_address: '店铺地址-测试33',
                    store_phone: '店铺电话-测试44',
                    store_website: 'www.xhfair.com',
                    store_navigate: 24,
                    store_dropdown_menu: 23,
                    store_vendor: 'winmax'
                });

            });

        }
        getStore();

    }, []);

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

    console.log('pass initStore:', initStore);
    return (
        <Form
            {...formItemLayout}
            form={form}
            name="store_form"
            onFinish={onFinish}
            initialValues={initStore}
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
                    <h6 className="mt-0 mb-2 header-title">商铺信息的录入</h6>
                    <hr></hr>
                    <Form.Item label="启动商铺" name="store_activate" valuePropName="checked" className="mt-0 mb-0 p-2">
                        <Switch />
                    </Form.Item>
                    <Form.Item
                        name="store_name"
                        label="商铺名称"
                        tooltip="当前的商铺名称是什么?"
                        rules={[
                            {
                                required: true,
                                message: '请输入商铺名称',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="store_intro"
                        label="商铺介绍"
                        rules={[
                            {
                                required: true,
                                message: '请输入商铺介绍',
                            },
                        ]}
                    >
                        <Input.TextArea showCount maxLength={100} />
                    </Form.Item>
                    <Form.Item
                        name="store_address"
                        label="详细地址"
                        tooltip="请录入一个快递小哥可以找到的具体街道地址?"
                        rules={[
                            {
                                required: true,
                                message: '请输入街道地址',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="store_residence"
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
                        name="store_phone"
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
                        name="store_website"
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
                        name="store_dropdown_menu"
                        label="类目菜单"
                        rules={[
                            {
                                required: true,
                                message: '请选择你的类目菜单',
                            },
                        ]}
                    >
                        <Select placeholder="请选择类目菜单"
                            options={catalogNodeSelect}
                        ></Select>
                    </Form.Item>
                    <Form.Item
                        name="store_navigate"
                        label="导航菜单"
                        rules={[
                            {
                                required: true,
                                message: '请选择你的导航菜单',
                            },
                        ]}
                    >
                        <Select placeholder="请选导航菜单"
                            options={catalogNodeSelect}
                        >
                        </Select>
                    </Form.Item>
                    {/* <Form.Item
                        name="store_vendor"
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
                    </Form.Item> */}

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" className='mr-2 ml-2' htmlType="submit">
                            提交信息
                        </Button>
                        <Button className='mr-2 ml-2' onClick={onClose}>取消提交</Button>
                    </Form.Item>
                </Media>
            </Media>
        </Form>
    );
};

export default StoreBase;
import React, { useState, useEffect } from 'react';
import { Media } from 'reactstrap';
import { CloseOutlined } from '@ant-design/icons';
import { getApiData, saveApiData, deleteApiData } from '../../../../helpers/handleApi';
import {
    Button,
    Switch,
    Form,
    Input,
    Select,
    Space, Card
} from 'antd';
import uuid from 'react-uuid';

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
const AttributeBase = (props) => {

    const [form] = Form.useForm();
    const { initId, vendor, onFormClose } = props;
    useEffect(() => {
        const fields = form.getFieldsValue()
        const { attribute_sets } = fields
        const attributeItemUrl = '/attribute/';
        console.log('current initid:', initId);
        if (initId) {
            const getDatas = async () => {

                const response = await getApiData(attributeItemUrl, initId);
                const data = await response;

                let attributeSets = [];
                let childdata = data.children ? data.children : null;

                if (data && childdata) {
                    for (let i = 0; i < childdata.length; i++) {
                        let attrObj = {
                            label: childdata[i].label,
                            value: childdata[i].value,
                        }
                        attributeSets.push(attrObj);
                    }
                    form.setFieldsValue({
                        attribute_enable: data.activate === 1 ? true : false,
                        attribute_name: data.title,
                        attribute_intro: data.intro,
                        attribute_control: data.type,
                        attribute_sets: attributeSets,
                    });
                }
            }
            getDatas()
        }


    }, []);

    //this.props.history.push(`/ecommerce/storeitems`);

    const handleDeleteCurrent = () => {
        //const delurl ='/attribute/delete/7?vendor_id=5';

        if (initId) {
            const attributeSaveUrl = '/attribute/delete/';
            console.log('current delete id:', attributeSaveUrl);
            const saveDatas = async () => {

                await deleteApiData(attributeSaveUrl, initId).then((data) => {

                }).catch((error) => {
                    console.log('save error:', error);
                });
                onFormClose();
            }
            saveDatas()
        }

    }

    const onFormSubmission = (values) => {
        console.log('Received values of form: ', values);
        const attributeSaveUrl = '/attribute/save';

        let attrVal = {
            id: initId ? initId : 0,
            vendor_id: vendor ? vendor.id ? vendor.id : 0 : 0,
            key: values.attribute_name + '_' + uuid(),
            activate: values.attribute_enable,
            title: values.attribute_name,
            intro: values.attribute_intro,
            type: values.attribute_control,
            children: values.attribute_sets
        }

        console.log('submit attribute:', attrVal);

        const saveDatas = async () => {
            let res = await saveApiData(attributeSaveUrl, attrVal);
            console.log('save tree response0:', res);
            if (res) {
                console.log('save tree response1:', res);
            }
            onFormClose();
        }
        saveDatas()
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="attribute"
            onFinish={onFormSubmission}
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

                    <Form.List name="attribute_sets"
                    >
                        {(subFields, subOpt) => (
                            <div style={{ display: 'flex', flexDirection: 'column', padding: '5px', rowGap: 6, marginLeft: 160 }}>
                                {subFields.map((subField) => (
                                    <Space key={subField.key}>
                                        <Form.Item noStyle name={[subField.name, 'label']}
                                            tooltip="当前的属性是什么?"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入属性标签',
                                                    whitespace: true,
                                                },
                                            ]}
                                        >
                                            <Input placeholder="属性标签" />
                                        </Form.Item>
                                        <Form.Item noStyle name={[subField.name, 'value']}
                                            tooltip="当前的属性值是什么?"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入属性值',
                                                    whitespace: true,
                                                },
                                            ]}
                                        >
                                            <Input placeholder="属性值" />
                                        </Form.Item>
                                        <CloseOutlined
                                            onClick={() => {
                                                subOpt.remove(subField.name);
                                            }}
                                        />
                                    </Space>
                                ))}
                                <Button type="dashed" onClick={() => subOpt.add()} block>
                                    + 添加属性标签
                                </Button>
                            </div>
                        )}
                    </Form.List>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            提交属性
                        </Button>
                        <Button onClick={handleDeleteCurrent} type="primary" htmlType="button">
                            删除属性
                        </Button>
                    </Form.Item>
                </Media>
            </Media>
        </Form>
    );
};

export default AttributeBase;
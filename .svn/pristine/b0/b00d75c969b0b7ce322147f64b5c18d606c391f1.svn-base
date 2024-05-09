import React, { useRef } from 'react';
import { Media } from 'reactstrap';
import RichTextEditor from '../../../components/RichTextEditor';
import ImageUpload from './ImageHandler';

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
const CatalogDummy = React.forwardRef((props, ref) => {
    const [form] = Form.useForm();
    React.useImperativeHandle(ref, () => ({
        form,
    }));

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="catalog_form"
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
                    <h6 className="mt-0 mb-2 header-title">产品类目信息的录入</h6>
                    <hr></hr>
                    <Form.Item name="catalog_active" label="启动产品类目" valuePropName="checked" className="mt-0 mb-0 p-2">
                        <Switch />
                    </Form.Item>
                    <Form.Item name="catalog_enable" label="启动类目菜单" valuePropName="checked" className="mt-0 mb-0 p-2">
                        <Switch />
                    </Form.Item>
                    <Form.Item
                        name="catalog_name"
                        label="产品类目标题"
                        tooltip="当前的产品类目标题是什么?"
                        rules={[
                            {
                                required: true,
                                message: '请输入产品类目标题',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="catalog_intro"
                        label="系列简单介绍"
                        rules={[
                            {
                                required: true,
                                message: '请输入系列简单介绍',
                            },
                        ]}
                    >
                        <Input.TextArea showCount maxLength={100} />
                    </Form.Item>
                    {/* <Form.Item
                        name="catalog_description"
                        label="系列详细描述"
                        rules={[
                            {
                                required: true,
                                message: '请输入系列详细描述',
                            },
                        ]}
                    >
                        <RichTextEditor onEditorContentChange={() => { }} />
                    </Form.Item> */}
                    {/* <Form.Item
                        name="catalog_image"
                        label="类目图片"
                    >
                        <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                            只允许 *.png, *.jpg and *.jpeg 图片格式</p>
                        <ImageUpload onFileListChange={handleFileListChange} fileList={fileList}></ImageUpload>
                    </Form.Item> */}
                    <Form.Item
                        name="catalog_vendor"
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
});

export default CatalogDummy;
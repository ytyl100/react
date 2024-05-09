import React, { useState } from 'react';
import { Media, Row, Col } from 'reactstrap';
import ImageUpload from './ImageHandler';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import {
    AutoComplete,
    Button,
    Cascader,
    Switch,
    Form,
    Input,
    Select,
    TreeSelect,
    InputNumber,
    Drawer,
    Space,
    DatePicker
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
const ProductBase = ({ onFinish, handleFileListChange, fileList, onEditorContentChange, product_description }) => {
    const [form] = Form.useForm();
    const { RangePicker } = DatePicker;
    const treeData = [
        {
            "title": "Clothing & Apparel123",
            "value": "0-0-0",
            "key": "0-0-0",
            "children": [
                {
                    "title": "Accessories",
                    "value": "0-0-0-0",
                    "key": "0-0-0-0",
                },
                {
                    "title": "Bags",
                    "value": "0-0-0-1",
                    "key": "0-0-0-1",
                },
                {
                    "title": "Kid's Fashion",
                    "value": "0-0-0-2",
                    "key": "0-0-0-2"
                },
                {
                    "title": "Mens",
                    "value": "0-0-0-3",
                    "key": "0-0-0-3",
                }
            ]
        },
        {
            "title": "Garden & Kitchen",
            "value": "0-0-1",
            "key": "0-0-1",
            "children": [
                {
                    "title": "Cookware",
                    "value": "0-0-1-0",
                    "key": "0-0-1-0"
                },
                {
                    "title": "Decoration",
                    "value": "0-0-1-1",
                    "key": "0-0-1-1",
                },
                {
                    "title": "Furniture",
                    "value": "0-0-1-2",
                    "key": "0-0-1-2"
                },
                {
                    "title": "Garden Tools",
                    "value": "0-0-1-3",
                    "key": "0-0-1-3"
                }
            ]
        },
        {
            "title": "Consumer Electrics",
            "value": "0-0-2",
            "key": "0-0-2",
            "children": [
                {
                    "title": "Air Conditioners",
                    "value": "0-0-2-0",
                    "key": "0-0-2-0"
                },
                {
                    "title": "Audios & Theaters",
                    "value": "0-0-2-1",
                    "key": "0-0-2-1"
                },
                {
                    "title": "Car Electronics",
                    "value": "0-0-2-2",
                    "key": "0-0-2-2"
                },
                {
                    "title": "Office Electronics",
                    "value": "0-0-2-3",
                    "key": "0-0-2-3"
                }
            ]
        }
    ];


    const suffixSelector = (
        <Form.Item name="suffix_price" noStyle>
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
    const suffixWeightSelector = (
        <Form.Item name="suffix_weight" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="lbs">磅</Option>
                <Option value="kgs">公斤</Option>
            </Select>
        </Form.Item>
    );
    const suffixSelector1 = (
        <Form.Item name="suffix_price" noStyle>
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
    const suffixSelector2 = (
        <Form.Item name="suffix_price" noStyle>
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
    const suffixWeightSelector1 = (
        <Form.Item name="suffix_weight" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="lbs">磅</Option>
                <Option value="kgs">公斤</Option>
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

    const [DrawerPrice, setPriceSetting] = useState(false);
    const [DrawerStore, setStoreSetting] = useState(false);
    const [DrawerVideo, setVideoSetting] = useState(false);

    const openPrice = () => {
        setPriceSetting(true);
    }
    const openStore = () => {
        setStoreSetting(true);
    }
    const openVideo = () => {
        setVideoSetting(true);
    }
    const closePrice = () => {
        setPriceSetting(false);
    }
    const closeStore = () => {
        setStoreSetting(false);
    }
    const closeVideo = () => {
        setVideoSetting(false);
    }

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link", "code"],
            ["clean"],
        ],
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "code",
    ];

    const rangeConfig = {
        // rules: [
        //     {
        //         type: 'array',
        //         required: true,
        //         message: 'Please select time!',
        //     },
        // ],
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                suffix_weight: 'kgs',
                suffix_price: 'USD',
                activate_product: true,
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
                    <h6 className="mt-0 mb-2 header-title">产品信息的录入</h6>
                    <hr></hr>
                    <Form.Item name="product_activate" label="激活产品" valuePropName="checked" className="mt-0 mb-0 p-2">
                        <Switch />
                    </Form.Item>
                    <Form.Item
                        name="product_catalogs"
                        label="选择产品类目"
                        rules={[{ required: true, message: '请选择至少一个产品类目' }]}
                    >
                        <TreeSelect
                            treeData={treeData}
                            treeCheckable={true}
                            treeCheckStrictly={true}
                            showCheckedStrategy={TreeSelect.SHOW_PARENT}
                            placeholder="请选择类目"
                        />
                    </Form.Item>
                    <Form.Item
                        name="product_name"
                        label="产品名称"
                        tooltip="当前的产品名称是什么?"
                        rules={[
                            {
                                required: true,
                                message: '请输入产品名称',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="product_sku"
                        label="产品SKU"
                        tooltip="当前的产品SKU是什么?"
                        rules={[
                            {
                                required: true,
                                message: '请输入产品SKU',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="product_unit_price"
                        label="产品单价"
                        rules={[
                            {
                                required: true,
                                message: '请输入产品单价',
                            },
                        ]}
                    >
                        <InputNumber
                            addonAfter={suffixSelector}
                            style={{
                                width: '25%',
                            }}
                        />

                    </Form.Item>
                    <Form.Item
                        name="product_special_set"
                        label="特殊价格配置"
                    >
                        <Button className="mt-2 mb-2"
                            htmlType="button"
                            type="primary"
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={openPrice}
                        >价格配置 </Button>
                    </Form.Item>

                    <Form.Item
                        name="product_tax_option"
                        label="产品税目"
                        rules={[
                            {
                                required: true,
                                message: '请选择税目',
                            },
                        ]}
                    >
                        <Select placeholder="请选择税目">
                            <Option value="tax" >含税</Option>
                            <Option value="non-tax">不含税</Option>
                        </Select>
                    </Form.Item>


                    <Form.Item name="product_unit_store"
                        label="产品库存"
                        rules={[
                            {
                                required: true,
                                message: '请输入产品库存',
                            },
                        ]}>
                        <InputNumber style={{
                            width: '25%',
                        }} />
                    </Form.Item>

                    <Form.Item
                        name="product_special_storage"
                        label="产品库存配置"
                    >
                        <Button className="mt-2 mb-2"
                            htmlType="button"
                            type="primary"
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={openStore}
                        >产品库存配置 </Button>
                    </Form.Item>

                    <Form.Item
                        name="product_storage_setting"
                        label="库存状况"
                        rules={[
                            {
                                required: true,
                                message: '请选择库存状况',
                            },
                        ]}
                    >
                        <Select placeholder="请选择库存状况">
                            <Option value="tax">有库存</Option>
                            <Option value="non-tax">无库存</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="product_weight"
                        label="产品重量"
                        rules={[
                            {
                                required: true,
                                message: '请输入产品重量',
                            },
                        ]}
                    >
                        <InputNumber
                            addonAfter={suffixWeightSelector}
                            style={{
                                width: '25%',
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="product_display_area"
                        label="展示区域"
                        rules={[
                            {
                                required: true,
                                message: '请选择展示区域',
                            },
                        ]}
                    >
                        <Select placeholder="请选择展示区域">
                            <Option value="catalog_disp">展示类目</Option>
                            <Option value="search_disp">展示搜索</Option>
                            <Option value="non-catalog_disp">不单独展示</Option>
                        </Select>
                    </Form.Item>
                    <h6 className="mt-0 mb-2 header-title">产品详细资料的录入</h6>
                    <hr></hr>

                    <Form.Item
                        name="product_image"
                        label="类目图片"
                    >
                        <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                            只允许 *.png, *.jpg and *.jpeg 图片格式</p>
                        <ImageUpload onFileListChange={handleFileListChange} fileList={fileList}></ImageUpload>
                    </Form.Item>

                    <Form.Item
                        name="product_intro"
                        label="产品介绍"
                        rules={[
                            {
                                required: true,
                                message: '请输入产品介绍',
                            },
                        ]}
                    >
                        <Input.TextArea showCount maxLength={100} />
                    </Form.Item>
                    <Form.Item
                        style={{ minHeight: '230px' }}
                        name="product_description"
                        label="产品详细描述"
                        rules={[
                            {
                                required: true,
                                message: '请输入系列详细描述',
                            },
                        ]}
                    >
                        <ReactQuill style={{ height: 200 }}
                            theme="snow"
                            value={product_description || ""}
                            modules={modules}
                            formats={formats}
                            onChange={onEditorContentChange}
                            placeholder={product_description}
                        />
                        {/* <RichTextEditor onEditorContentChange={() => { }} /> */}
                    </Form.Item>

                    <Form.Item
                        name="product_residence"
                        label="产品所在城市"
                        rules={[
                            {
                                type: 'array',
                                required: true,
                                message: '请输入产品所在的城市',
                            },
                        ]}
                    >
                        <Cascader options={residences} />
                    </Form.Item>

                    <Form.Item
                        name="product_website"
                        label="视频配置"
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
                        name="product_special_video"
                        label="请配置视频"
                    >
                        <Button className="mt-2 mb-2"
                            htmlType="button"
                            type="primary"
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={openVideo}
                        >视频配置 </Button>
                    </Form.Item>


                    <Drawer
                        title="配置特殊产品库存"
                        placement='right'
                        width={800}
                        onClose={closeStore}
                        open={DrawerStore}
                    >
                        <h6 className="mt-0 mb-2 header-title">产品库存设置</h6>
                        <hr></hr>
                        <Form.Item
                            name="product_min_storage"
                            label="产品库存数量"
                            tooltip="当前产品配置的库存数量?"
                        >
                            <InputNumber
                                style={{
                                    width: '50%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="product_min_outofstock"
                            label="最低产品库存"
                            tooltip="当前产品配置的最低产品库存?"
                        >
                            <InputNumber
                                style={{
                                    width: '50%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="product_min_shoppingcart"
                            label="最低产品购物篮数量"
                            tooltip="当前产品配置的最低产品购物篮数量?"
                        >
                            <InputNumber
                                style={{
                                    width: '50%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="product_max_shoppingcart"
                            label="最高产品购物篮数量"
                        >
                            <InputNumber
                                style={{
                                    width: '50%',
                                }}
                            />
                        </Form.Item>
                    </Drawer>


                    <Drawer
                        title="配置特殊产品价格"
                        placement='right'
                        width={800}
                        onClose={closePrice}
                        open={DrawerPrice}
                    >
                        <h6 className="mt-0 mb-2 header-title">产品优惠价格设置</h6>
                        <hr></hr>
                        <Form.Item
                            name="product_unit_promote_price"
                            label="产品优惠价格"
                        >
                            <InputNumber
                                addonAfter={suffixSelector1}
                                style={{
                                    width: '50%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item name="product_price_valid_range" label="优惠时间范围" {...rangeConfig}>
                            <RangePicker />
                        </Form.Item>
                        <Form.Item
                            name="product_cost"
                            label="产品成本"
                        >
                            <InputNumber
                                addonAfter={suffixSelector2}
                                style={{
                                    width: '50%',
                                }}
                            />
                        </Form.Item>
                    </Drawer>

                    <Drawer
                        title="配置特殊视频配置"
                        placement='right'
                        width={800}
                        onClose={closeVideo}
                        open={DrawerVideo}
                    >
                        <h6 className="mt-0 mb-2 header-title">视频设置</h6>
                        <hr></hr>
                        <Form.Item
                            name="product_video_url"
                            label="视频URL网址"
                            tooltip="当前的视频URL网址是什么?"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="product_video_title"
                            label="视频标题"
                            tooltip="当前的视频名称是什么?"
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="product_video_intro"
                            label="产品视频介绍"
                        >
                            <Input.TextArea showCount maxLength={100} />
                        </Form.Item>

                        <Form.Item
                            name="product_video_preview_image"
                            label="预览图片"
                        >
                            <p className="mt-1 mb-3" style={{ fontSize: "12px" }}>
                                只允许 *.png, *.jpg and *.jpeg 图片格式</p>
                            <ImageUpload onFileListChange={handleFileListChange} fileList={fileList}></ImageUpload>
                        </Form.Item>

                    </Drawer>

                    <Form.Item
                        name="product_vendor"
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

export default ProductBase;

const treeData = [
    {
        title: 'ex-hub 2024',
        value: 'ex-hub-2024',
        desc: '',
        image_url: '',
        key: '0-0',
        children: [
            {
                title: 'Clothing & Apparel',
                value: 'clothing-apparel',
                desc: '',
                image_url: '',
                key: '0-0-0',
                children: [
                    {
                        title: 'Accessories',
                        value: 'accessories',
                        desc: '',
                        image_url: '',
                        key: '0-0-0-0',
                    },
                    {
                        title: 'Bags',
                        value: 'bags',
                        desc: '',
                        image_url: '',
                        key: '0-0-0-1',
                    },
                    {
                        title: "Kid's Fashion",
                        value: 'kids-fashion',
                        desc: '',
                        image_url: '',
                        key: '0-0-0-2',
                    },
                    {
                        title: "Mens",
                        value: 'mens',
                        desc: '',
                        image_url: '',
                        key: '0-0-0-3',
                    },
                ],
            },
            {
                title: 'Garden & Kitchen',
                value: 'garden-kitchen',
                desc: '',
                image_url: '',
                key: '0-0-1',
                children: [
                    {
                        title: 'Cookware',
                        value: 'cookware',
                        desc: '',
                        image_url: '',
                        key: '0-0-1-0',
                    },
                    {
                        title: 'Decoration',
                        value: 'decoration',
                        desc: '',
                        image_url: '',
                        key: '0-0-1-1',
                    },
                    {
                        title: 'Furniture',
                        value: 'furniture',
                        desc: '',
                        image_url: '',
                        key: '0-0-1-2',
                    },
                    {
                        title: 'Garden Tools',
                        value: 'garden-tools',
                        desc: '',
                        image_url: '',
                        key: '0-0-1-3',
                    },
                ],
            },
            {
                title: 'Consumer Electrics',
                value: 'consumer-electrics',
                desc: '',
                image_url: '',
                key: '0-0-2',
                children: [
                    {
                        title: 'Air Conditioners',
                        value: 'air-conditioners',
                        desc: '',
                        image_url: '',
                        key: '0-0-2-0',
                    },
                    {
                        title: 'Audios & Theaters',
                        value: 'audios-theaters',
                        desc: '',
                        image_url: '',
                        key: '0-0-2-1',
                    },
                    {
                        title: 'Car Electronics',
                        value: 'car-electronics',
                        desc: '',
                        image_url: '',
                        key: '0-0-2-2',
                    },
                    {
                        title: 'Office Electronics',
                        value: 'office-electronics',
                        desc: '',
                        image_url: '',
                        key: '0-0-2-3',
                    },
                ],
            },
        ],
    },
];

const DeleteCurrentNode = (data, key) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
            console.log('current value:', data[i]);
            //data.splice(i, 1);
            delete data[i];
        }
        if (data[i] && data[i].children) {
            DeleteCurrentNode(data[i].children, key);
        }
    }
    return data = data.filter(function (x) { return x !== null });
};

console.log('current loopTree:', DeleteCurrentNode(treeData, '0-0-0-2'));

const newNode = {
    title: 'newNode',
    value: 'newNode',
    desc: '',
    image_url: '',
    key: '0',
}

const newhildNode = {
    children: [
        {
            title: 'newNode',
            value: 'newNode',
            desc: '',
            image_url: '',
            key: '0',
        }]
};

const AddNewNode = (data, key) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
            console.log('current value:', data[i]);
            if (data[i].children) {
                data[i].children.push(newNode);
            }
            else {
                data[i] = { ...data[i], ...newhildNode };
            }
        }
        if (data[i].children) {
            AddNewNode(data[i].children, key);
        }
    }
    return data;
};


console.log('current loopTree:', AddNewNode(treeData, '0-0-2'));

const data = {
    "id": 3,
    "vendor_id": 6,
    "type": "dropdown",
    "intro": null,
    "title": "Size",
    "key": "size",
    "activate": 1,
    "children": [
        {
            "key": 11,
            "label": "size",
            "value": "S",
            "price_setting": "system",
            "quantity_setting": "system"
        },
        {
            "key": 12,
            "label": "size",
            "value": "M",
            "price_setting": "system",
            "quantity_setting": "skip"
        }
    ]
}

let childdata = data.children ? data.children : null;
let attributeSets = [];
if (childdata) {
    for (let i = 0; i < childdata.length; i++) {
        let attrObj = {
            label: childdata[i].label,
            value: childdata[i].value,
        }
        attributeSets.push(attrObj);
    }
}
//---combination attribute sets
// const rootdata = [
//     {
//         key: 1,
//         name: '按照产品的尺寸',
//         SKU: 'iOS-size',
//         catalog: '电子消费品类',
//         intro: 'Screen-显示器65寸，大屏薄屏高品质',
//         children: [
//             {
//                 key: 11,
//                 label: 'size',
//                 value: 'S',
//                 price_setting: 'system',
//                 quantity_setting: 'system',
//             },
//             {
//                 key: 12,
//                 label: 'size',
//                 value: 'M',
//                 price_setting: 'system',
//                 quantity_setting: 'skip',
//             },
//             {
//                 key: 21,
//                 label: 'color',
//                 value: 'white',
//                 price_setting: 'system',
//                 quantity_setting: 'system',
//             },
//             {
//                 key: 22,
//                 label: 'color',
//                 value: 'black',
//                 price_setting: 'system',
//                 quantity_setting: 'system',
//             },
//         ]
//     },
// ];

const attributeItems = [
    {
        "id": 11,
        "vendor_id": 5,
        "type": "dropdown",
        "intro": "尺寸衡量-按照大中小尺寸分布",
        "title": "尺寸衡量",
        "key": "尺寸衡量_af32c196-5deb-6ee2-c8e3-9eefca888521",
        "activate": 1,
        "children": [
            {
                "label": "size",
                "value": "S"
            },
            {
                "label": "size",
                "value": "M"
            },
            {
                "label": "size",
                "value": "L"
            }
        ]
    },
    {
        "id": 12,
        "vendor_id": 5,
        "type": "dropdown",
        "intro": "按照颜色分类",
        "title": "按照颜色分类",
        "key": "按照颜色分类_ac181764-4f8d-c019-7e1b-84ad6f68b7cb",
        "activate": 1,
        "children": [
            {
                "label": "color",
                "value": "white"
            },
            {
                "label": "color",
                "value": "Red"
            }
        ]
    }
]
let setAttributeSets = [];
let basePrice = 10.00;
let baseQuantity = 99;
let baseSelImages = [];

const filterAttr = [
    "尺寸衡量",
    "按照颜色分类"
]
//let attrlist =attributeItems.filter((el) => filterAttr.every(kw => el.title.includes(kw)));

function includeFilter(attributeItems, filterItems) {
    let filterRet = [];
    for (let i = 0; i < filterItems.length; i++) {
        let attrlist = attributeItems.filter(attr => attr.title === filterItems[i])[0];
        filterRet.push(attrlist);
    }
    return filterRet;
}
console.log('attrlist:', includeFilter(attributeItems, filterAttr));


if (attributeItems) {
    for (let i = 0; i < attributeItems.length; i++) {
        if (attributeItems[i] && attributeItems[i].children) {
            let childVal = [];
            for (let j = 0; j < attributeItems[i].children.length; j++) {

                let attrObj = {
                    label: attributeItems[i].children[j].label,
                    value: attributeItems[i].children[j].value,
                    price: basePrice,
                    quantity: baseQuantity,
                    images: baseSelImages,
                }
                childVal.push(attrObj);
            }
            setAttributeSets.push(childVal);
        }
    }
}

console.log('attribute data:', setAttributeSets);

const combination = (arr) => {
    var count = arr.length - 1;
    var tmp = [];
    var totalArr = [];

    const combinationCallback = (arr, index) => {
        for (let o of arr[index]) {
            tmp[index] = o;
            if (index < count) {
                combinationCallback(arr, index + 1);
            }
            else {
                totalArr.push(tmp);
            }
            let oldTmp = tmp;
            tmp = [];
            for (let i of oldTmp) {
                tmp.push(i);
            }
        }
        return totalArr;
    }
    return combinationCallback(arr, 0);
}

console.log('attribute data1:', combination(setAttributeSets));
let combinedItems = combination(setAttributeSets);
let finalSort = [];
if (combinedItems) {
    for (let i = 0; i < combinedItems.length; i++) {
        if (combinedItems[i]) {
            let jsonData = {};
            for (let j = 0; j < combinedItems[i].length; j++) {
                if (combinedItems[i][j].value) {
                    jsonData[combinedItems[i][j].label] = combinedItems[i][j].value;
                }

            }
            console.log('combined Items label0:', combinedItems[i][0].label);
            console.log('combined Items label1:', combinedItems[i][1].label);
            jsonData['intro'] = combinedItems[i][0].label + ':' + jsonData[combinedItems[i][0].label] + '|' + combinedItems[i][1].label + ':' + jsonData[combinedItems[i][1].label];

            jsonData['key'] = i;
            jsonData['price'] = basePrice;
            jsonData['quantity'] = basePrice;
            jsonData['images'] = baseSelImages;
            finalSort.push(jsonData);
        }
    }
}

console.log('attribute data2:', finalSort);

console.log('attribute sorted data:', finalSort.filter((item) => item.key === 5)[0].images);

let items =
    [
        {
            "_id": 5,
            "title": "avatar-7",
            "type": "image/jpeg",
            "size": 8233,
            "filename": "avatar-7",
            "createdAt": "1970-01-20T16:45:40.777Z",
            "thumbnailUrl": "https://api.xhfair.com/storage/vendor/5/category/avatar-7.jpg"
        },
        {
            "_id": 2,
            "title": "avatar-1",
            "type": "image/jpeg",
            "size": 53144,
            "filename": "avatar-1",
            "createdAt": "1970-01-20T16:45:40.295Z",
            "thumbnailUrl": "https://api.xhfair.com/storage/vendor/5/category/avatar-1.jpg"
        },
        {
            "_id": 3,
            "title": "avatar-10",
            "type": "image/jpeg",
            "size": 7494,
            "filename": "avatar-10",
            "createdAt": "1970-01-20T16:45:41.966Z",
            "thumbnailUrl": "https://api.xhfair.com/storage/vendor/5/category/avatar-10.jpg"
        }
    ];

let items2 =
    [
        {
            "_id": 5,
            "title": "avatar-7",
            "type": "image/jpeg",
            "size": 8233,
            "filename": "avatar-7",
            "createdAt": "1970-01-20T16:45:40.777Z",
            "thumbnailUrl": "https://api.xhfair.com/storage/vendor/5/category/avatar-7.jpg"
        },
        {
            "_id": 3,
            "title": "avatar-10",
            "type": "image/jpeg",
            "size": 7494,
            "filename": "avatar-10",
            "createdAt": "1970-01-20T16:45:41.966Z",
            "thumbnailUrl": "https://api.xhfair.com/storage/vendor/5/category/avatar-10.jpg"
        }
    ];

function getImgVal(attrImgArr, key, imageSelItem) {

    if (attrImgArr) {
        for (let i = 0; i < attrImgArr.length; i++) {
            if (attrImgArr[i].key === key) {
                attrImgArr[i].images = imageSelItem;
            }
        }
    }
    return attrImgArr;
}

console.log('attrimgArr', getImgVal(finalSort, 0, items2));


var obj = {
    "id": 56,
    "color": "#cc9966",
    "color_name": "Brown",
    "price": 80,
    "size": [
        {
            "id": 144,
            "name": "Small",
            "slug": null
        },
        {
            "id": 145,
            "name": "Medium",
            "slug": null
        },
        {
            "id": 147,
            "name": "Large",
            "slug": null
        },
        {
            "id": 146,
            "name": "Extra Large",
            "slug": null
        }
    ]
};

//let attrlist =attributeItems.filter((el) => filterAttr.every(kw => el.title.includes(kw)));


const variantsData = [
    {
        "id": 11,
        "vendor_id": 5,
        "type": "dropdown",
        "intro": "尺寸衡量-按照大中小尺寸分布",
        "title": "尺寸衡量",
        "key": "尺寸衡量_af32c196-5deb-6ee2-c8e3-9eefca888521",
        "activate": 1,
        "children": [
            {
                "label": "size",
                "value": "S"
            },
            {
                "label": "size",
                "value": "M"
            },
            {
                "label": "size",
                "value": "L"
            }
        ]
    },
    {
        "id": 12,
        "vendor_id": 5,
        "type": "dropdown",
        "intro": "按照颜色分类",
        "title": "按照颜色分类",
        "key": "按照颜色分类_ac181764-4f8d-c019-7e1b-84ad6f68b7cb",
        "activate": 1,
        "children": [
            {
                "label": "color",
                "value": "white"
            },
            {
                "label": "color",
                "value": "Red"
            }
        ]
    }
]

function resortFilter(variantsData, price) {
    let filterRet = [];
    let firstNode = variantsData[0].children;
    let secondNode = variantsData[1].children;
    let secondArr = [];
    let secondlevellabel = '';

    if (secondNode) {
        for (let i = 0; i < secondNode.length; i++) {
            let json2Data = {};
            if (secondNode[i].value) {
                secondlevellabel = secondNode[i].label;
                json2Data['name'] = secondNode[i].value;
                json2Data['id'] = i;
                json2Data['slug'] = secondNode[i].value;
            }
            secondArr.push(json2Data);
        }
    }

    if (firstNode) {
        for (let i = 0; i < firstNode.length; i++) {
            let jsonData = {};
            if (firstNode[i].value) {
                jsonData[firstNode[i].label] = firstNode[i].value;
                jsonData[firstNode[i].label + '_name'] = firstNode[i].value;
                jsonData['id'] = i;
                jsonData['price'] = 80;
                jsonData[secondlevellabel] = secondArr;
            }
            filterRet.push(jsonData);
        }
    }
    return filterRet;
}
console.log('attrlist:', resortFilter(variantsData));
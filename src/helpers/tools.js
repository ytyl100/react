
function toInt32(bytes) {
    return (bytes[0] << 24) | (bytes[1] << 16) | (bytes[2] << 8) | bytes[3];
}

function getDimensions(data) {
    return {
        width: toInt32(data.slice(16, 20)),
        height: toInt32(data.slice(20, 24))
    };
}

var base64Characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

function base64Decode(data) {
    var result = [];
    var current = 0;

    for (var i = 0, c; c = data.charAt(i); i++) {
        if (c === '=') {
            if (i !== data.length - 1 && (i !== data.length - 2 || data.charAt(i + 1) !== '=')) {
                throw new SyntaxError('Unexpected padding character.');
            }

            break;
        }

        var index = base64Characters.indexOf(c);

        if (index === -1) {
            throw new SyntaxError('Invalid Base64 character.');
        }

        current = (current << 6) | index;

        if (i % 4 === 3) {
            result.push(current >> 16, (current & 0xff00) >> 8, current & 0xff);
            current = 0;
        }
    }

    if (i % 4 === 1) {
        throw new SyntaxError('Invalid length for a Base64 string.');
    }

    if (i % 4 === 2) {
        result.push(current >> 4);
    } else if (i % 4 === 3) {
        current <<= 6;
        result.push(current >> 16, (current & 0xff00) >> 8);
    }

    return result;
}

function getPngDimensions(dataUri) {
    if (dataUri.substring(0, 22) !== 'data:image/png;base64,') {
        //throw new Error('Unsupported data URI format');
    }

    // 32 base64 characters encode the necessary 24 bytes
    return getDimensions(base64Decode(dataUri.substr(22, 32)));
}

function getShortDimensions(base64) {
    const header = atob(base64.slice(0, 50)).slice(16, 24)
    const uint8 = Uint8Array.from(header, c => c.charCodeAt(0))
    const dataView = new DataView(uint8.buffer)

    return {
        width: dataView.getInt32(0),
        height: dataView.getInt32(4)
    }
}

function slugify(str) {
    return String(str)
        .normalize('NFKD') // split accented characters into their base characters and diacritical marks
        .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
        .trim() // trim leading or trailing whitespace
        .toLowerCase() // convert to lowercase
        .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
        .replace(/\s+/g, '-') // replace spaces with hyphens
        .replace(/-+/g, '-'); // remove consecutive hyphens
}

function generateVaribles(attributeItems, sku, basePrice, promote_price, baseQuantity, imgSel) {
    let setAttributeSets = [];
    let finalSort = [];

    if (attributeItems && attributeItems.length > 0) {
        for (let i = 0; i < attributeItems.length; i++) {
            if (attributeItems[i] && attributeItems[i].children) {
                let childVal = [];
                for (let j = 0; j < attributeItems[i].children.length; j++) {

                    let attrObj = {
                        label: attributeItems[i].children[j].label,
                        value: attributeItems[i].children[j].value,
                        price: basePrice,
                        promote_price: promote_price,
                        stock: baseQuantity,
                    }
                    childVal.push(attrObj);
                }
                setAttributeSets.push(childVal);
            }
        }

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

        let combinedItems = combination(setAttributeSets);

        if (combinedItems) {
            for (let i = 0; i < combinedItems.length; i++) {
                if (combinedItems[i]) {
                    let jsonData = {};
                    let attrData = [];
                    let attrObj = {};
                    let convertObj = {};

                    jsonData['key'] = i;
                    for (let j = 0; j < combinedItems[i].length; j++) {
                        if (combinedItems[i][j].value) {
                            //remove: dynamic attribute set
                            jsonData[combinedItems[i][j].label] = combinedItems[i][j].value;
                            attrObj[combinedItems[i][j].label] = jsonData[combinedItems[i][j].label];
                            attrData.push(attrObj);
                        }
                    }
                    let comLabel = combinedItems[i][1] ? combinedItems[i][1].label : " ";
                    let comLabelJson = combinedItems[i][1] ? jsonData[combinedItems[i][1].label] : " ";

                    jsonData['attribute'] = attrData[0];

                    //jsonData['sku'] = sku + '-' + jsonData[combinedItems[i][0].label] + '-' + jsonData[combinedItems[i][1].label];
                    //jsonData['intro'] = combinedItems[i][0].label + ':' + jsonData[combinedItems[i][0].label] + '|' + combinedItems[i][1].label + ':' + jsonData[combinedItems[i][1].label];

                    jsonData['sku'] = sku + '-' + jsonData[combinedItems[i][0].label] + '-' + comLabelJson;
                    jsonData['intro'] = combinedItems[i][0].label + ':' + jsonData[combinedItems[i][0].label] + '|' + comLabel + ':' + comLabelJson;

                    jsonData['price'] = basePrice;
                    jsonData['promote_price'] = promote_price;
                    jsonData['stock'] = baseQuantity;
                    jsonData['images'] = imgSel;

                    //ignore dynamic attribute set
                    convertObj['key'] = jsonData['key'];
                    convertObj['attribute'] = jsonData['attribute'];
                    convertObj['sku'] = jsonData['sku'];
                    convertObj['intro'] = jsonData['intro'];
                    convertObj['price'] = jsonData['price'];
                    convertObj['promote_price'] = jsonData['promote_price'];
                    convertObj['stock'] = jsonData['stock'];
                    convertObj['images'] = jsonData['images'];

                    finalSort.push(convertObj);
                }
            }
        }
    }

    return finalSort;
}

function includeFilter(attributeItems, filterItems) {
    let filterRet = [];
    for (let i = 0; i < filterItems.length; i++) {
        let attrlist = attributeItems.filter(attr => attr.title === filterItems[i])[0];
        filterRet.push(attrlist);
    }
    return filterRet;
}

function setAttrOptions(attrList) {
    let optionList = [];
    if (attrList) {
        for (let i = 0; i < attrList.length; i++) {
            let jsonData = {};
            jsonData['label'] = attrList[i].title;
            jsonData['value'] = attrList[i].title;
            jsonData['emoji'] = attrList[i].title;
            jsonData['desc'] = attrList[i].intro;

            optionList.push(jsonData);
        }
    }
    return optionList;
}

function setDefAttrOptions(attrList) {
    let optionList = [];
    if (attrList) {
        for (let i = 0; i < attrList.length; i++) {
            let jsonData = {};
            jsonData['label'] = attrList[i].title;
            jsonData['value'] = attrList[i].title;
            jsonData['emoji'] = attrList[i].title;
            jsonData['desc'] = attrList[i].intro;

            optionList.push(attrList[i].title);
        }
    }
    return optionList;
}

function setSelAttrOptions(attrList) {
    let optionList = [];
    if (attrList) {
        for (let i = 0; i < attrList.length; i++) {
            let jsonData = {};
            jsonData['value'] = attrList[i].id;
            jsonData['label'] = attrList[i].title;
            optionList.push(jsonData);
        }
    }
    return optionList;
}

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

function findImgVal(attrImgArr, key) {

    let imgSel = [];
    if (attrImgArr) {
        for (let i = 0; i < attrImgArr.length; i++) {
            if (attrImgArr[i].key === key) {
                imgSel = attrImgArr[i].images;
            }
        }
    }
    return imgSel;
}


export { getPngDimensions, getShortDimensions, slugify, generateVaribles, getImgVal, findImgVal, setAttrOptions, setSelAttrOptions, setDefAttrOptions, includeFilter };

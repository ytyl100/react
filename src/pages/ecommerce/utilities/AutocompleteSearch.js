import React, { useState } from 'react';

import {
    AutoComplete, Input, Avatar
} from 'antd';

const searchItems = [
    {
        id: 1000,
        product_name: { title: "Miss", first: "Viktorija", last: "Danilović" },
        short_desc: "Shop from EX-HUB, a design language for background applications",
        long_desc: "Shop from EX-HUB, a design language for background applications, is refined by Ant UED Team",
        storage: 220,
        picture: {
            large: "https://randomuser.me/api/portraits/women/66.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/66.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/66.jpg"
        },
        nat: "RS"
    },
    {
        id: 1001,
        product_name:
            { title: "Miss", first: "Zoey", last: "Wells" },
        short_desc: "Shop from EX-HUB, a design language for background applications",
        long_desc: "Shop from EX-HUB, a design language for background applications, is refined by Ant UED Team",
        storage: 323,
        picture: {
            large: "https://randomuser.me/api/portraits/women/2.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/2.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/2.jpg"
        },
        nat: "US"
    },
    {
        id: 1002,
        product_name: { title: "Mrs", first: "Olivia", last: "Macdonald" },
        short_desc: "Shop from EX-HUB, a design language for background applications",
        long_desc: "Shop from EX-HUB, a design language for background applications, is refined by Ant UED Team",
        storage: 33,
        picture: {
            large: "https://randomuser.me/api/portraits/women/36.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/36.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/36.jpg"
        },
        nat: "CA"
    },
    {
        id: 1003,
        product_name: { title: "Mr", first: "آرش", last: "نكو نظر" },
        short_desc: "Shop from EX-HUB, a design language for background applications",
        long_desc: "Shop from EX-HUB, a design language for background applications, is refined by Ant UED Team",
        storage: 15,
        picture: {
            large: "https://randomuser.me/api/portraits/men/50.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/50.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/50.jpg"
        },
        nat: "IR"
    },
    {
        id: 1004,
        product_name: { title: "Miss", first: "Tammy", last: "Dixon" },
        short_desc: "Shop from EX-HUB, a design language for background applications",
        long_desc: "Shop from EX-HUB, a design language for background applications, is refined by Ant UED Team",
        storage: 20,
        picture: {
            large: "https://randomuser.me/api/portraits/women/14.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/14.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/14.jpg"
        },
        nat: "AU"
    }];

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const AutocompleteSearch = (props) => {
    const { remoteList, handleAddItem } = props;
    const [options, setOptions] = useState([]);

    const fetchSearchVal = (searchkey) => {
        delay(2000);
        return (
            remoteList.map((val, key) => {
                //const searchVal = `${searchkey}${key}`;
                const searchVal = `${val}${key}`;
                console.log('map value', val);
                return {
                    value: val.product_name.title, //searchVal,
                    label: (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <span>
                                <Avatar className='mr-3' src={val.picture.thumbnail} />
                                Found {searchkey} on{' '}
                                {val.product_name.title} {val.product_name.title}
                            </span>
                            <span>{getRandomInt(200, 100)} results</span>
                        </div>
                    )
                }
            })
        )
    }

    const handleSearch = (value) => {
        if (value.length < 5) return;
        setOptions(value ? fetchSearchVal(value) : []);
    };
    const onSelect = (value) => {
        const filterProducts = remoteList.filter(c => c.product_name.title.includes(value))
        handleAddItem(filterProducts);

    };
    return (
        <AutoComplete
            popupMatchSelectWidth={450}
            style={{
                width: 500,
            }}
            allowClear={true}
            label="搜索选择产品"
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
            size="large"
        >
            <Input.Search name='catalog_product_search' size="large" placeholder="请输入至少5个字母进行搜索" enterButton allowClear={true} />
        </AutoComplete>
    );
};

export default AutocompleteSearch;
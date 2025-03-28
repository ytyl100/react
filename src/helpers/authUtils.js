// @flow
import jwtDecode from 'jwt-decode';
import { Cookies } from 'react-cookie';

const menuJson_init = {
    id: 0,
    username: 'user.username',
    firstName: 'user.firstName',
    lastName: 'user.lastName',
    role: 'Admin',
    token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcnRoZW1lcyIsImlhdCI6MTU4NzM1NjY0OSwiZXhwIjoxOTAyODg5NDQ5LCJhdWQiOiJjb2RlcnRoZW1lcy5jb20iLCJzdWIiOiJzdXBwb3J0QGNvZGVydGhlbWVzLmNvbSIsImxhc3ROYW1lIjoiVGVzdCIsIkVtYWlsIjoic3VwcG9ydEBjb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4iLCJmaXJzdE5hbWUiOiJTaHJleXUifQ.D-isMYoGH6Ah4i_dHxplgJNGtXTLEqZYvha_ULSJRFU',
    menu: [
        {
            users_path: '/apps/Calendar',
            users_name: '用户管理',
            users_header: '系统管理',
            users_icon: '',
            users_component: '',
            users_roles: 'c-1|r-1|u-0|d-0|a-0',
            users_route: '',
        },
        {
            permissions_path: '/apps/permission',
            permissions_name: '权限管理',
            permissions_icon: '',
            permissions_component: '',
            permissions_roles: 'c-1|r-1|u-0|d-0|a-0',
            permissions_route: '',
        },
        {
            departments_path: '/ecommerce/storeitems',
            departments_name: '店铺管理',
            departments_icon: '',
            departments_component: '',
            departments_roles: 'c-1|r-1|u-0|d-0|a-0',
            departments_route: '',
        },

        {
            brands_path: '/ecommerce/Branditems',
            brands_name: '品牌管理',
            brands_icon: '',
            brands_component: '',
            brands_roles: 'c-1|r-1|u-0|d-0|a-0',
            brands_route: '',
        },
        {
            category_path: '/ecommerce/collectionitems',
            category_name: '系列管理',
            category_icon: '',
            category_component: '',
            category_roles: 'c-1|r-1|u-0|d-0|a-0',
            category_route: '',
        },
        {
            audits_path: '//ecommerce',
            audits_name: '电商商品管理',
            audits_icon: '',
            audits_component: '',
            audits_roles: 'c-1|r-1|u-0|d-0|a-0',
            audits_route: '',
            children: [
                {
                    audits_notification_path: '/ecommerce/CategoryItems',
                    audits_notification_name: '类目管理',
                    audits_notification_component: '',
                    audits_notification_route: '',
                    audits_notification_roles: 'c-1|r-1|u-0|d-0|a-0',
                },
                {
                    attribute_path: '/ecommerce/ProductItems',
                    attribute_name: '产品管理',
                    attribute_component: '',
                    attribute_route: '',
                    attribute_roles: 'c-1|r-1|u-0|d-0|a-0',
                },
                {
                    audits_sendConfig_path: '/ecommerce/AttributeItems',
                    audits_sendConfig_name: '产品属性',
                    audits_sendConfig_component: '',
                    audits_sendConfig_route: '',
                    audits_sendConfig_roles: 'c-1|r-1|u-0|d-0|a-0',
                },
            ]
        },
        {
            homepage_path: '/layouts',
            homepage_name: '首页布局',
            homepage_icon: '',
            homepage_component: '',
            homepage_roles: 'c-1|r-1|u-0|d-0|a-0',
            homepage_route: '',
        },
        {
            notices_path: '/message',
            notices_name: '通知管理',
            notices_icon: '',
            notices_component: '',
            notices_roles: 'c-1|r-1|u-0|d-0|a-0',
            notices_route: '',
            children: [
                {
                    notices_log_path: '/apps/tasks/list',
                    notices_log_name: '日志消息',
                    notices_log_component: '',
                    notices_log_route: '',
                    notices_log_roles: 'c-1|r-1|u-0|d-0|a-0',
                },
                {
                    notices_profile_path: '/apps/tasks/list1',
                    notices_profile_name: '个人信息',
                    notices_profile_component: '',
                    notices_profile_route: '',
                    notices_profile_roles: 'c-1|r-1|u-0|d-0|a-0',
                    children: [
                        {
                            notices_profile_log_path: '/apps/tasks/list2',
                            notices_profile_log_name: '个人日志管理',
                            notices_profile_log_component: '',
                            notices_profile_log_route: '',
                            notices_profile_log_roles: 'c-1|r-1|u-0|d-0|a-0',
                        },
                        {
                            notices_profile_profile_path: '/apps/tasks/list3',
                            notices_profile_profile_name: '个人信息配置',
                            notices_profile_profile_component: '',
                            notices_profile_profile_route: '',
                            notices_profile_profile_roles: 'c-1|r-1|u-0|d-0|a-0',
                        }
                    ]
                }
            ]
        }
    ],
};

/**
 * Checks if user is authenticated
 */
const isUserAuthenticated = () => {
    const user = getLoggedInUser();
    if (!user) {
        return false;
    }

    // const token = getValidToken();
    // if (token && token.split(' ')[1]) {
    //     console.log('access token exp0:', token.split(' ')[1]);
    //     const decoded = jwtDecode(token.split(' ')[1]);
    //     const currentTime = Date.now() / 1000;
    //     if (decoded.exp < currentTime) {
    //         console.log('access token exp1:', decoded);
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
    return true;

};

/**
 * Returns the logged in user
 */
const getLoggedInUser = () => {
    const cookies = new Cookies();
    const user = cookies.get('user');

    return user ? (typeof user == 'object' ? user : JSON.parse(user)) : null;
};

const getValidToken = () => {
    const cookies = new Cookies();
    const token = cookies.get('token');

    return token ? token : null;
};

export { isUserAuthenticated, getLoggedInUser };

import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as FeatherIcon from 'react-feather';

import { isUserAuthenticated, getLoggedInUser } from '../helpers/authUtils';

// auth
const Login = React.lazy(() => import('../pages/auth/Login'));
const Logout = React.lazy(() => import('../pages/auth/Logout'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
const Confirm = React.lazy(() => import('../pages/auth/Confirm'));
// dashboard
const Dashboard = React.lazy(() => import('../pages/dashboard'));
// apps
const CalendarApp = React.lazy(() => import('../pages/apps/Calendar'));
const EmailInbox = React.lazy(() => import('../pages/apps/Email/Inbox'));
const EmailDetail = React.lazy(() => import('../pages/apps/Email/Detail'));
const EmailCompose = React.lazy(() => import('../pages/apps/Email/Compose'));
const ProjectList = React.lazy(() => import('../pages/apps/Project/List'));
const ProjectDetail = React.lazy(() => import('../pages/apps/Project/Detail/'));
const TaskList = React.lazy(() => import('../pages/apps/Tasks/List'));
const TaskBoard = React.lazy(() => import('../pages/apps/Tasks/Board'));

// pages
const Starter = React.lazy(() => import('../pages/other/Starter'));
const Profile = React.lazy(() => import('../pages/other/Profile/'));
const Activity = React.lazy(() => import('../pages/other/Activity'));
const Invoice = React.lazy(() => import('../pages/other/Invoice'));
const Pricing = React.lazy(() => import('../pages/other/Pricing'));
const Error404 = React.lazy(() => import('../pages/other/Error404'));
const Error500 = React.lazy(() => import('../pages/other/Error500'));

// ui
const BSComponents = React.lazy(() => import('../pages/uikit/BSComponents/'));
const FeatherIcons = React.lazy(() => import('../pages/uikit/Icons/Feather'));
const UniconsIcons = React.lazy(() => import('../pages/uikit/Icons/Unicons'));
const Widgets = React.lazy(() => import('../pages/uikit/Widgets/'));

// charts
const Charts = React.lazy(() => import('../pages/charts/'));

// forms
const BasicForms = React.lazy(() => import('../pages/forms/Basic'));
const FormAdvanced = React.lazy(() => import('../pages/forms/Advanced'));
const FormValidation = React.lazy(() => import('../pages/forms/Validation'));
const FormWizard = React.lazy(() => import('../pages/forms/Wizard'));
const FileUpload = React.lazy(() => import('../pages/forms/FileUpload'));
const Editor = React.lazy(() => import('../pages/forms/Editor'));

// tables
const BasicTables = React.lazy(() => import('../pages/tables/Basic'));
const AdvancedTables = React.lazy(() => import('../pages/tables/Advanced'));

//ecommerce
const EBrands = React.lazy(() => import('../pages/ecommerce/Branditems'));
const EStores = React.lazy(() => import('../pages/ecommerce/StoreItems'));
const ECollections = React.lazy(() => import('../pages/ecommerce/CollectionItems'));
const ECategories = React.lazy(() => import('../pages/ecommerce/CategoryItems'));
const EProducts = React.lazy(() => import('../pages/ecommerce/ProductItems'));
const EAttributes = React.lazy(() => import('../pages/ecommerce/AttributeItems'));
const EOrders = React.lazy(() => import('../pages/ecommerce/OrderItems'));
const EInvoices = React.lazy(() => import('../pages/ecommerce/InvoiceItems'));
const EStoreBoard = React.lazy(() => import('../pages/ecommerce/store/Board'));
const ECustomers = React.lazy(() => import('../pages/ecommerce/CustomerItems'));
const EInvoiceBoard = React.lazy(() => import('../pages/ecommerce/invoice/Board'));
const EBrandBoard = React.lazy(() => import('../pages/ecommerce/brand/Board'));
const ECollectionBoard = React.lazy(() => import('../pages/ecommerce/collection/Board'));
const ECategoryBoard = React.lazy(() => import('../pages/ecommerce/catalog/Board'));
const EProductBoard = React.lazy(() => import('../pages/ecommerce/products/Board'));
const EProductBoardall = React.lazy(() => import('../pages/ecommerce/products/BoardAll'));
const EAttributeBoard = React.lazy(() => import('../pages/ecommerce/attributes/Board'));
const EAttributeSetBoard = React.lazy(() => import('../pages/ecommerce/attributes/BoardTransfer'));
const EBrandTreeBoard = React.lazy(() => import('../pages/ecommerce/brand/TreeBoard'));
const ECustomerBoard = React.lazy(() => import('../pages/ecommerce/customer/Board'));
const EOrderBoard = React.lazy(() => import('../pages/ecommerce/order/Board'));
const EBrandBaseStep = React.lazy(() => import('../pages/ecommerce/brand/BaseStep'));


// handle auth and authorization
const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (!isUserAuthenticated()) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />;
            }

            const loggedInUser = getLoggedInUser();
            //check if route is restricted by role
            if (roles && roles.indexOf(loggedInUser.role) === -1) {
                //return <Redirect to={{ pathname: '/' }} />;
            }

            // authorised so return component
            return <Component {...props} />;
        }}
    />
);

// root routes
const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard" />,
    route: PrivateRoute,
};

// dashboards
const dashboardRoutes = {
    path: '/dashboard',
    name: 'Dashboard',
    icon: FeatherIcon.Home,
    header: 'Navigation',
    badge: {
        variant: 'success',
        text: '1',
    },
    component: Dashboard,
    roles: ['Admin'],
    route: PrivateRoute
};

// apps

const calendarAppRoutes = {
    path: '/apps/calendar',
    name: 'Calendar',
    header: 'Apps',
    icon: FeatherIcon.Calendar,
    component: CalendarApp,
    route: PrivateRoute,
    roles: ['Admin'],
};

const emailAppRoutes = {
    path: '/apps/email',
    name: 'Email',
    icon: FeatherIcon.Inbox,
    children: [
        {
            path: '/apps/email/inbox',
            name: 'Inbox',
            component: EmailInbox,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/apps/email/details',
            name: 'Details',
            component: EmailDetail,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/customeritems',
            name: 'Customeritems',
            component: ECustomers,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/storeitems',
            name: 'Storeitems',
            component: EStores,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/Branditems',
            name: 'Branditems',
            component: EBrands,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/collectionitems',
            name: 'Collectionitems',
            component: ECollections,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/CategoryItems',
            name: 'CategoryItems',
            component: ECategories,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/ProductItems',
            name: 'ProductItems',
            component: EProducts,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/AttributeItems',
            name: 'AttributeItem',
            component: EAttributes,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/OrderItems',
            name: 'OrderItems',
            component: EOrders,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/CustomerItems',
            name: 'CustomerItems',
            component: ECustomers,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/InvoiceItems',
            name: 'OrderItems',
            component: EInvoices,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/store/board/:id',
            name: 'Storeboardbyid',
            component: EStoreBoard,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/brand/board/:id',
            name: 'Brandboard',
            component: EBrandBoard,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/collection/board/:id',
            name: 'Collectionboard',
            component: ECollectionBoard,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/attributes/board/:id',
            name: 'Attributesboardid',
            component: EAttributeBoard,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/attributes/boardtransfer/:id',
            name: 'Attributesboardsetid',
            component: EAttributeSetBoard,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/catalog/board/:id',
            name: 'catalogboardid',
            component: ECategoryBoard,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/customer/board/:id',
            name: 'customerboardid',
            component: ECustomerBoard,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/order/board/:id',
            name: 'orderboardid',
            component: EOrderBoard,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/invoice/InvoiceDetail/:id',
            name: 'InvoiceId',
            component: EInvoiceBoard,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/brand/treeboard',
            name: 'BrandTreeboard',
            component: EBrandTreeBoard,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/brand/basestep',
            name: 'Brandbasestep',
            component: EBrandBaseStep,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        // {
        //     path: '/ecommerce/catalog/AllBoard',
        //     name: 'catalogWrappedBoard',
        //     component: EAllBoard,
        //     route: PrivateRoute,
        //     roles: ['Admin'],
        // },
        {
            path: '/ecommerce/products/board/:id',
            name: 'productsboard',
            component: EProductBoard,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/products/boardall/:id',
            name: 'productsboardall',
            component: EProductBoardall,
            route: PrivateRoute,
            roles: ['Admin'],
        },
    ]
};

const projectAppRoutes = {
    path: '/apps/projects',
    name: 'Projects',
    icon: FeatherIcon.Briefcase,
    children: [
        {
            path: '/apps/projects/list',
            name: 'List',
            component: ProjectList,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/apps/projects/detail',
            name: 'Detail',
            component: ProjectDetail,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/catalog/board',
            name: 'catalogboard',
            component: ECategoryBoard,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/store/board',
            name: 'Storeboard',
            component: EStoreBoard,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/attributes/board/',
            name: 'Attributesboard',
            component: EAttributeBoard,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/products/board',
            name: 'productsboard',
            component: EProductBoard,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/products/boardall',
            name: 'productsboardall',
            component: EProductBoardall,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ecommerce/attributes/boardtransfer/',
            name: 'Attributesboardset',
            component: EAttributeSetBoard,
            route: PrivateRoute,
            roles: ['Admin'],
        },
    ]
};

const taskAppRoutes = {
    path: '/apps/tasks',
    name: 'Tasks',
    icon: FeatherIcon.Bookmark,
    children: [
        {
            path: '/apps/tasks/list',
            name: 'List',
            component: TaskList,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/apps/tasks/board',
            name: 'Board',
            component: TaskBoard,
            route: PrivateRoute,
            roles: ['Admin'],
        },
    ],
};

const appRoutes = [calendarAppRoutes, emailAppRoutes, projectAppRoutes, taskAppRoutes];



// pages
const pagesRoutes = {
    path: '/pages',
    name: 'Pages',
    header: 'Custom',
    icon: FeatherIcon.FileText,
    children: [
        {
            path: '/pages/starter',
            name: 'Starter',
            component: Starter,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/pages/profile',
            name: 'Profile',
            component: Profile,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/pages/activity',
            name: 'Activity',
            component: Activity,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/pages/invoice',
            name: 'Invoice',
            component: Invoice,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/pages/pricing',
            name: 'Pricing',
            component: Pricing,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/pages/error-404',
            name: 'Error 404',
            component: Error404,
            route: Route
        },
        {
            path: '/pages/error-500',
            name: 'Error 500',
            component: Error500,
            route: Route
        },
    ]
};


// components
const componentsRoutes = {
    path: '/ui',
    name: 'UI Elements',
    header: 'Components',
    icon: FeatherIcon.Package,
    children: [
        {
            path: '/ui/bscomponents',
            name: 'Bootstrap UI',
            component: BSComponents,
            route: PrivateRoute,
            roles: ['Admin'],
        },
        {
            path: '/ui/icons',
            name: 'Icons',
            children: [
                {
                    path: '/ui/icons/feather',
                    name: 'Feather Icons',
                    component: FeatherIcons,
                    route: PrivateRoute,
                    roles: ['Admin'],
                },
                {
                    path: '/ui/icons/unicons',
                    name: 'Unicons Icons',
                    component: UniconsIcons,
                    route: PrivateRoute,
                    roles: ['Admin'],
                },
            ]
        },
        {
            path: '/ui/widgets',
            name: 'Widgets',
            component: Widgets,
            route: PrivateRoute,
            roles: ['Admin'],
        },

    ]
};

// charts
const chartRoutes = {
    path: '/charts',
    name: 'Charts',
    component: Charts,
    icon: FeatherIcon.PieChart,
    roles: ['Admin'],
    route: PrivateRoute
}


// forms
const formsRoutes = {
    path: '/forms',
    name: 'Forms',
    icon: FeatherIcon.FileText,
    children: [
        {
            path: '/forms/basic',
            name: 'Basic Elements',
            component: BasicForms,
            route: PrivateRoute,
        },
        {
            path: '/forms/advanced',
            name: 'Advanced',
            component: FormAdvanced,
            route: PrivateRoute,
        },
        {
            path: '/forms/validation',
            name: 'Validation',
            component: FormValidation,
            route: PrivateRoute,
        },
        {
            path: '/forms/wizard',
            name: 'Wizard',
            component: FormWizard,
            route: PrivateRoute,
        },
        {
            path: '/forms/editor',
            name: 'Editor',
            component: Editor,
            route: PrivateRoute,
        },
        {
            path: '/forms/upload',
            name: 'File Upload',
            component: FileUpload,
            route: PrivateRoute,
        }
    ]
};


const tableRoutes = {
    path: '/tables',
    name: 'Tables',
    icon: FeatherIcon.Grid,
    children: [
        {
            path: '/tables/basic',
            name: 'Basic',
            component: BasicTables,
            route: PrivateRoute,
        },
        {
            path: '/tables/advanced',
            name: 'Advanced',
            component: AdvancedTables,
            route: PrivateRoute,
        }]
};


// auth
const authRoutes = {
    path: '/account',
    name: 'Auth',
    children: [
        {
            path: '/account/login',
            name: 'Login',
            component: Login,
            route: Route,
        },
        {
            path: '/account/logout',
            name: 'Logout',
            component: Logout,
            route: Route,
        },
        {
            path: '/account/register',
            name: 'Register',
            component: Register,
            route: Route,
        },
        {
            path: '/account/confirm',
            name: 'Confirm',
            component: Confirm,
            route: Route,
        },
        {
            path: '/account/forget-password',
            name: 'Forget Password',
            component: ForgetPassword,
            route: Route,
        },
    ],
};

// flatten the list of all nested routes
const flattenRoutes = routes => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach(item => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// All routes
const allRoutes = [
    rootRoute,
    dashboardRoutes,
    ...appRoutes,
    pagesRoutes,
    componentsRoutes,
    chartRoutes,
    formsRoutes,
    tableRoutes,
    authRoutes,
];

const menuJson_init = [
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
        customers_path: '/ecommerce/customeritems',
        customers_name: '客户管理',
        customers_icon: '',
        customers_component: '',
        customers_roles: 'c-1|r-1|u-0|d-0|a-0',
        customers_route: '',
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
            {
                user_order_path: '/ecommerce/OrderItems',
                user_order_name: '用户订单',
                user_order_component: '',
                user_order_route: '',
                user_order_roles: 'c-1|r-1|u-0|d-0|a-0',
            },
            {
                user_customer_path: '/ecommerce/CustomerItems',
                user_customer_name: '客户管理',
                user_customer_component: '',
                user_customer_route: '',
                user_customer_roles: 'c-1|r-1|u-0|d-0|a-0',
            },
            {
                user_invoice_path: '/ecommerce/InvoiceItems',
                user_invoice_name: '发票管理',
                user_invoice_component: '',
                user_invoice_route: '',
                user_invoice_roles: 'c-1|r-1|u-0|d-0|a-0',
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
];

const menuJson = getLoggedInUser() ? getLoggedInUser().menu ? getLoggedInUser().menu : menuJson_init : menuJson_init;


function buildNewNestedJson(originalJson) {
    let newJson = [];
    for (var key in originalJson) {
        if (originalJson.hasOwnProperty(key)) {
            var value = originalJson[key];

            if (typeof value === 'object' && value !== null) {
                newJson[key] = buildNewNestedJson(value); // Recursively build nested JSON
            } else {
                // Add the property to the new JSON
                selectObjs(key, value, newJson);
            }
        }

    }
    return newJson;
}

function selectObjs(key, value, newJson) {
    let lastUnderscoreIndex = key.lastIndexOf('_');
    let newKey = key.substring(lastUnderscoreIndex + 1);
    switch (key) {
        case 'users_component':
            newJson[key] = CalendarApp;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'users_route':
            newJson[key] = PrivateRoute;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'permissions_component':
            newJson[key] = dashboardRoutes;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'permissions_route':
            newJson[key] = PrivateRoute;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'departments_component':
            newJson[key] = EBrands;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'departments_route':
            newJson[key] = PrivateRoute;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'brands_component':
            newJson[key] = EBrands;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'brands_route':
            newJson[key] = PrivateRoute;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'category_component':
            newJson[key] = ECategories;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'category_route':
            newJson[key] = PrivateRoute;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'audits_component':
            newJson[key] = CalendarApp;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'audits_route':
            newJson[key] = PrivateRoute;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'audits_sendConfig_component':
            newJson[key] = CalendarApp;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'audits_sendConfig_route':
            newJson[key] = PrivateRoute;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'audits_notification_component':
            newJson[key] = CalendarApp;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'audits_notification_route':
            newJson[key] = PrivateRoute;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'homepage_component':
            newJson[key] = CalendarApp;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'homepage_route':
            newJson[key] = PrivateRoute;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'notices_component':
            newJson[key] = CalendarApp;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'notices_route':
            newJson[key] = PrivateRoute;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'notices_log_component':
            newJson[key] = CalendarApp;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'notices_log_route':
            newJson[key] = PrivateRoute;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'notices_profile_component':
            newJson[key] = CalendarApp;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'notices_profile_route':
            newJson[key] = PrivateRoute;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'notices_profile_log_component':
            newJson[key] = CalendarApp;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'notices_profile_log_route':
            newJson[key] = PrivateRoute;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'notices_profile_profile_component':
            newJson[key] = CalendarApp;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        case 'notices_profile_profile_route':
            newJson[key] = PrivateRoute;

            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
            break;
        default:
            newJson[key] = value;
            if (lastUnderscoreIndex !== -1) {
                newJson[newKey] = newJson[key]; // Create a new key with the desired text
                delete newJson[key]; // Remove the old key
            }
    }

};

const new2Json = buildNewNestedJson(menuJson);
console.log('1json:', new2Json);


const authProtectedRoutes = [dashboardRoutes, ...appRoutes, pagesRoutes, componentsRoutes, chartRoutes, formsRoutes, tableRoutes];
const allFlattenRoutes = flattenRoutes(allRoutes);
export { allRoutes, authProtectedRoutes, allFlattenRoutes, new2Json, };

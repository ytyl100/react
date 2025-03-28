// @flow
import { Cookies } from 'react-cookie';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { fetchJSON, fetchJSONWToken } from '../../helpers/api';

import { LOGIN_USER, LOGOUT_USER, REGISTER_USER, FORGET_PASSWORD } from './constants';

import {
    loginUserSuccess,
    loginUserFailed,
    registerUserSuccess,
    registerUserFailed,
    forgetPasswordSuccess,
    forgetPasswordFailed,
} from './actions';

/**
 * Sets the session
 * @param {*} user
 */
const setSession = user => {
    let cookies = new Cookies();
    console.log('setSession at login:', JSON.stringify(user));
    if (user) cookies.set('user', JSON.stringify(user), { path: '/' });
    else cookies.remove('user', { path: '/' });
};
/**
 * Login the user
 * @param {*} payload - username and password
 */
function* login({ payload: { username, password } }) {
    let cookies = new Cookies();
    let formdata = new FormData();
    formdata.append("email", username);
    formdata.append("password", password);

    const options = {
        body: formdata, // JSON.stringify({ username, password }),
        method: 'POST',
    };

    // const options = {
    //     body: JSON.stringify({ username, password }),
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    // };

    try {
        //const response = yield call(fetchJSON, '/users/authenticate', options);
        const response = yield call(fetchJSON, '/auth/login/vendor', options);
        console.log('login response:', response);
        cookies.set('token', 'Bearer ' + response.access_token);
        if (!response.access_token) {
            console.log('login failed:', response.message);
            yield put(loginUserFailed(response.message));
            return response.message
        }
        else {
            setSession(response.user);
            yield put(loginUserSuccess(response.user));

            window.location.href = "/";
        }


        // setSession(response);
        // yield put(loginUserSuccess(response.user));

    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            default:
                message = error;
        }
        yield put(loginUserFailed(message));
        setSession(null);
    }
}

/**
 * Logout the user
 * @param {*} param0
 */
function* logout({ payload: { history } }) {
    try {
        setSession(null);
        yield call(() => {
            history.push('/account/login');
        });
    } catch (error) { }
}

/**
 * Register the user
 */
function* register({ payload: { fullname, email, password } }) {
    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("vendorname", fullname);

    const options = {
        body: formdata,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        const response = yield call(fetchJSON, '/auth/vendor/register', options);
        console.log('response register vendor:', response)
        yield put(registerUserSuccess(response.user));
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            default:
                message = error;
        }
        yield put(registerUserFailed(message));
    }
}

/**
 * forget password
 */
function* forgetPassword({ payload: { username } }) {
    const options = {
        body: JSON.stringify({ username }),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        const response = yield call(fetchJSON, '/users/password-reset', options);
        yield put(forgetPasswordSuccess(response.message));
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            default:
                message = error;
        }
        yield put(forgetPasswordFailed(message));
    }
}

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, login);
}

export function* watchLogoutUser() {
    yield takeEvery(LOGOUT_USER, logout);
}

export function* watchRegisterUser() {
    yield takeEvery(REGISTER_USER, register);
}

export function* watchForgetPassword() {
    yield takeEvery(FORGET_PASSWORD, forgetPassword);
}

function* authSaga() {
    yield all([fork(watchLoginUser), fork(watchLogoutUser), fork(watchRegisterUser), fork(watchForgetPassword)]);
}

export default authSaga;

import { resetTokenAuth, setReadApiData, setTokenAuth } from '../reducers';
import axios from './axios'

export const registerAuthInfoDetails = (regisInfoData,callback) => {
    axios({
        method: 'POST',
        url: '/v1/auth/registerAuthInfoCtrl',
        headers: {
            'Content-Type': 'application/json',
        },
        data: regisInfoData
    }).then(async (res) => {
        const status = await res?.data?.status;
        const message = await res?.data?.message;
        callback(status,message);
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        callback(status,message);
    })
}

export const retrieveRegisterInfoDetails = (key,callback,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/auth/retrieveRegisterAuthInfoCtrl/${key}`
    }).then(async (res) => {
        const status = await res?.data?.status;
        const message = await res?.data?.message;
        const data = await res?.data?.data;
        dispatch(setReadApiData(data));
        callback(status,message);
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        callback(status,message);
    })
}

export const deleteRegisterInfoDetails = (key,callback) => {
    axios({
        method: 'POST',
        url: `/v1/auth/deleteRegisterAuthInfoCtrl/${key}`
    }).then(async (res) => {
        const status = await res?.data?.status;
        const message = await res?.data?.message;
        callback(status,message);
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        callback(status,message);
    })
}

export const loginAuthInfoDetails = (loginInfoData,callback,dispatch) => {
    axios({
        method: 'POST',
        url: '/v1/auth/loginAuthInfoCtrl',
        headers: {
            'Content-Type': 'application/json',
        },
        data: loginInfoData,
        withCredentials: true,
    }).then(async (res) => {
        if(res?.data?.status === 200){
            dispatch(setTokenAuth(true));
        }
        const status = await res?.data?.status;
        const message = await res?.data?.message;
        callback(status,message);
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        callback(status,message);
    })
}

export const logoutAuthInfoDetails = (callback,dispatch) => {
    axios({
        method: 'POST',
        url: '/v1/auth/logoutAuthInfoCtrl',
        withCredentials: true
    }).then(async (res) => {
        dispatch(resetTokenAuth());
        const status = await res?.data?.status;
        const message = await res?.data?.message;
        callback(status,message);
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        callback(status,message);
    })
}

export const dashboardAuthInfoDetails = (callback,dispatch) => {
    axios({
        method: 'GET',
        url: '/v1/auth/dashboard',
        withCredentials: true
    }).then(async (res) => {
        if(res?.data?.status === 200){
            dispatch(setTokenAuth(true));
        } else {
            dispatch(resetTokenAuth());
        }
        const status = await res?.data?.status;
        const message = await res?.data?.message;
        callback(status,message);
    })
    .catch(err => {
        dispatch(resetTokenAuth());
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        callback(status,message);
    })
}
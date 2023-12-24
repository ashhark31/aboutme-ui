import { setClickedDataKey, setReadApiData } from '../reducers';
import axios from './axios'

let keys = {
    baseInfoCtrlKey: 0,
    empId: 0,
    projectId: 0,
    skillId: 0,
    achvmntId: 0,
    certId: 0,
    introInfoCtrlKey: 0,
    testInfoCtrlKey: 0,
    blogInfoCtrlKey: 0
}

export const retrieveBaseInfoDetails = (baseInfoKey,callback,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveBaseInfoCtrl/${baseInfoKey}`
    }).then(async (res) => {
        const status = await res?.data?.status;
        const message = await res?.data?.message;
        const data = await res?.data?.data;
        if(!isNaN(baseInfoKey) || data?.length === 1){
            keys.baseInfoCtrlKey = data[0]?.key;
            dispatch(setClickedDataKey(keys));
        } else {
            dispatch(setClickedDataKey(0));
        }
        dispatch(setReadApiData(data));
        callback(status,message);
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        callback(status,message);
    })
}

export const retrieveExpInfoDetails = (expInfoKey,callback,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveExpInfoCtrl/${expInfoKey}`
    }).then(async (res) => {
        const status = await res?.data?.status;
        const message = await res?.data?.message;
        const data = await res?.data?.data;
        if(!isNaN(expInfoKey) || data?.length === 1){
            keys.empId = data[0]?.key;
            dispatch(setClickedDataKey(keys))
        } else {
            dispatch(setClickedDataKey(0));
        }
        dispatch(setReadApiData(data));
        callback(status,message);
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        callback(status,message);
    })
}

export const retrieveProjInfoDetails = (projInfoKey,callback,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveProjectInfoCtrl/${projInfoKey}`
    }).then(async (res) => {
        const status = await res?.data?.status;
        const message = await res?.data?.message;
        const data = await res?.data?.data
        if(!isNaN(projInfoKey) || data?.length === 1){
            keys.projectId = data[0]?.key;
            dispatch(setClickedDataKey(keys))
        } else {
            dispatch(setClickedDataKey(0));
        }
        dispatch(setReadApiData(data));
        callback(status,message);
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        callback(status,message);
    })
}

export const retrieveSkillInfoDetails = (skillInfoKey,callback,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveSkillInfoCtrl/${skillInfoKey}`
    }).then(async (res) => {
        const status = await res?.data?.status;
        const message = await res?.data?.message;
        const data = await res?.data?.data
        if(!isNaN(skillInfoKey) || data?.length === 1){
            keys.skillId = data[0]?.key;
            dispatch(setClickedDataKey(keys))
        } else {
            dispatch(setClickedDataKey(0));
        }
        dispatch(setReadApiData(data));
        callback(status,message);
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        callback(status,message);
    })
}

export const retrieveAchvmntInfoDetails = (achvmntInfoKey,callback,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveAchvmntInfoCtrl/${achvmntInfoKey}`
    }).then(async (res) => {
        const status = await res?.data?.status;
        const message = await res?.data?.message;
        const data = await res?.data?.data
        if(!isNaN(achvmntInfoKey) || data?.length === 1){
            keys.achvmntId = data[0]?.key;
            dispatch(setClickedDataKey(keys))
        } else {
            dispatch(setClickedDataKey(0));
        }
        dispatch(setReadApiData(data));
        callback(status,message);
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        callback(status,message);
    })
}

export const retrieveCrtInfoDetails = (crtInfoKey,callback,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveCrtificationInfoCtrl/${crtInfoKey}`
    }).then(async (res) => {
        const status = await res?.data?.status;
        const message = await res?.data?.message;
        const data = await res?.data?.data
        if(!isNaN(crtInfoKey) || data?.length === 1){
            keys.certId = data[0]?.key;
            dispatch(setClickedDataKey(keys))
        } else {
            dispatch(setClickedDataKey(0));
        }
        dispatch(setReadApiData(data));
        callback(status,message);
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        callback(status,message);
    })
}


export const retrieveIntroInfoDetails = (introInfoKey,callback,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveIntroInfoCtrl/${introInfoKey}`
    }).then(async (res) => {
        const status = await res?.data?.status;
        const message = await res?.data?.message;
        const data = await res?.data?.data
        if(!isNaN(introInfoKey) || data?.length === 1){
            keys.introInfoCtrlKey = data[0]?.key;
            dispatch(setClickedDataKey(keys))
        } else {
            dispatch(setClickedDataKey(0));
        }
        dispatch(setReadApiData(data));
        callback(status,message);
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        callback(status,message);
    })
}

export const retrieveTestiInfoDetails = (testiInfoKey,callback,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveTestiInfoCtrl/${testiInfoKey}`
    }).then(async (res) => {
        const status = await res?.data?.status;
        const message = await res?.data?.message;
        const data = await res?.data?.data
        if(!isNaN(testiInfoKey) || data?.length === 1){
            keys.testInfoCtrlKey = data[0]?.key;
            dispatch(setClickedDataKey(keys))
        } else {
            dispatch(setClickedDataKey(0));
        }
        dispatch(setReadApiData(data));
        callback(status,message);
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        callback(status,message);
    })
}

export const retrieveBlogInfoDetails = (blogInfoKey,callback,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveBlogInfoCtrl/${blogInfoKey}`
    }).then(async (res) => {
        const status = await res?.data?.status;
        const message = await res?.data?.message;
        const data = await res?.data?.data
        if(!isNaN(blogInfoKey) || data?.length === 1){
            keys.blogInfoCtrlKey = data[0]?.key;
            dispatch(setClickedDataKey(keys))
        } else {
            dispatch(setClickedDataKey(0));
        }
        dispatch(setReadApiData(data));
        callback(status,message);
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        callback(status,message);
    })
}
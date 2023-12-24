import axios from './axios'

export const deleteBaseInfoDetails = (baseInfoKey,callback) => {
    axios({
        method: 'DELETE',
        url: `/v1/deleteBaseInfoCtrl/${baseInfoKey}`
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

export const deleteExpInfoDetails = (expInfoKey,callback) => {
    axios({
        method: 'DELETE',
        url: `/v1/deleteExpInfoCtrl/${expInfoKey}`
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

export const deleteProjInfoDetails = (projInfoKey,callback) => {
    axios({
        method: 'DELETE',
        url: `/v1/deleteProjectInfoCtrl/${projInfoKey}`
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

export const deleteSkillInfoDetails = (skillInfoKey,callback) => {
    axios({
        method: 'DELETE',
        url: `/v1/deleteSkillInfoCtrl/${skillInfoKey}`
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

export const deleteAchvmntInfoDetails = (achvmntInfoKey,callback) => {
    axios({
        method: 'DELETE',
        url: `/v1/deleteAchvmntInfoCtrl/${achvmntInfoKey}`
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

export const deleteCrtInfoDetails = (crtInfoKey,callback) => {
    axios({
        method: 'DELETE',
        url: `/v1/deleteCrtificationInfoCtrl/${crtInfoKey}`
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


export const deleteIntroInfoDetails = (introInfoKey,callback) => {
    axios({
        method: 'DELETE',
        url: `/v1/deleteIntroInfoCtrl/${introInfoKey}`
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

export const deleteTestiInfoDetails = (testiInfoKey,callback) => {
    axios({
        method: 'DELETE',
        url: `/v1/deleteTestiInfoCtrl/${testiInfoKey}`
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

export const deleteBlogInfoDetails = (blogInfoKey,callback) => {
    axios({
        method: 'DELETE',
        url: `/v1/deleteBlogInfoCtrl/${blogInfoKey}`
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
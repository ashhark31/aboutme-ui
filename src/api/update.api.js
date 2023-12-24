import axios from './axios'

export const updateBaseInfoDetails = (key, baseInfoData,callback) => {
    axios({
        method: 'PUT',
        url: `/v1/updateBaseInfoCtrl/${key}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: baseInfoData
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

export const updateExpInfoDetails = (key, expInfoData,callback) => {
    axios({
        method: 'PUT',
        url: `/v1/updateExpInfoCtrl/${key}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: expInfoData
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

export const updateProjInfoDetails = (key, projInfoData,callback) => {
    axios({
        method: 'PUT',
        url: `/v1/updateProjectInfoCtrl/${key}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: projInfoData
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

export const updateSkillInfoDetails = (key, skillInfoData,callback) => {
    axios({
        method: 'PUT',
        url: `/v1/updateSkillInfoCtrl/${key}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: skillInfoData
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

export const updateAchvmntInfoDetails = (key, achvmntInfoData,callback) => {
    axios({
        method: 'PUT',
        url: `/v1/updateAchvmntInfoCtrl/${key}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: achvmntInfoData
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

export const updateCrtInfoDetails = (key, crtInfoData,callback) => {
    axios({
        method: 'PUT',
        url: `/v1/updateCrtificationInfoCtrl/${key}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: crtInfoData
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


export const updateIntroInfoDetails = (key, introInfoData,callback) => {
    axios({
        method: 'PUT',
        url: `/v1/updateIntroInfoCtrl/${key}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: introInfoData
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

export const updateTestiInfoDetails = (key, testiInfoData,callback) => {
    axios({
        method: 'PUT',
        url: `/v1/updateTestiInfoCtrl/${key}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: testiInfoData
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

export const updateBlogInfoDetails = (key, blogInfoData,callback) => {
    axios({
        method: 'PUT',
        url: `/v1/updateBlogInfoCtrl/${key}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: blogInfoData
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
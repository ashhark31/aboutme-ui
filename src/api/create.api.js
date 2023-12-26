import axios from './axios'

export const createBaseInfoDetails = (baseInfoData,callback) => {
    axios({
        method: 'POST',
        url: '/v1/createBaseInfoCtrl',
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

export const createEduInfoDetails = (eduInfoData,callback) => {
    axios({
        method: 'POST',
        url: '/v1/createEduInfoCtrl',
        headers: {
            'Content-Type': 'application/json',
        },
        data: eduInfoData
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

export const createExpInfoDetails = (expInfoData,callback) => {
    axios({
        method: 'POST',
        url: '/v1/createExpInfoCtrl',
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

export const createProjInfoDetails = (projInfoData,callback) => {
    axios({
        method: 'POST',
        url: '/v1/createProjectInfoCtrl',
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

export const createSkillInfoDetails = (skillInfoData,callback) => {
    axios({
        method: 'POST',
        url: '/v1/createSkillInfoCtrl',
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

export const createAchvmntInfoDetails = (achvmntInfoData,callback) => {
    axios({
        method: 'POST',
        url: '/v1/createAchvmntInfoCtrl',
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

export const createCrtInfoDetails = (crtInfoData,callback) => {
    axios({
        method: 'POST',
        url: '/v1/createCrtificationInfoCtrl',
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


export const createIntroInfoDetails = (introInfoData,callback) => {
    axios({
        method: 'POST',
        url: '/v1/createIntroInfoCtrl',
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

export const createTestiInfoDetails = (testiInfoData,callback) => {
    axios({
        method: 'POST',
        url: '/v1/createTestiInfoCtrl',
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

export const createBlogInfoDetails = (blogInfoData,callback) => {
    axios({
        method: 'POST',
        url: '/v1/createBlogInfoCtrl',
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


export const createKeyInfoDetails = (keyInfoData,callback) => {
    axios({
        method: 'POST',
        url: '/v1/createKeyInfoCtrl',
        headers: {
            'Content-Type': 'application/json',
        },
        data: keyInfoData
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
import { 
    deleteAchvmntInfoDetails, 
    deleteBaseInfoDetails, 
    deleteBlogInfoDetails, 
    deleteCrtInfoDetails, 
    deleteEduInfoDetails, 
    deleteExpInfoDetails, 
    deleteIntroInfoDetails, 
    deleteKeyInfoDetails, 
    deleteProjInfoDetails, 
    deleteSkillInfoDetails, 
    deleteTestiInfoDetails 
} from "../api";

export const deleteSelfPayload = async (target,actionType,callback) => {
    let key = target.elements[0].value;
    if(actionType === "Base"){
        deleteBaseInfoDetails(key,callback);
    } else if(actionType  === "Education"){
        deleteEduInfoDetails(key,callback);
    } else if(actionType  === "Experience"){
        deleteExpInfoDetails(key,callback);
    } else if(actionType === "Projects"){
        deleteProjInfoDetails(key,callback)
    } else if(actionType === "Skills"){
        deleteSkillInfoDetails(key,callback);
    } else if(actionType === "Achievements"){
        deleteAchvmntInfoDetails(key,callback);
    } else {
        deleteCrtInfoDetails(key,callback);
    }
}

export const deleteDashboardPayload = async (target,actionType,callback) => {
    let key = target.elements[0].value;
    if(actionType === "Intro"){
        deleteIntroInfoDetails(key,callback);
    } else if(actionType  === "Testimonials"){
        deleteTestiInfoDetails(key,callback);
    } else if(actionType === "Blog"){
        deleteBlogInfoDetails(key,callback)
    }
}

export const deleteCssConfigPayload = async (target,actionType,callback) => {
    let key = target.elements[0].value;
    if(actionType === "Key"){
        deleteKeyInfoDetails(key,callback);
    } 
}

export const deleteSettingPayload = async (target,actionType,callback) => {
    // 
}
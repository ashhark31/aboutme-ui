import { 
    retrieveAchvmntInfoDetails,
    retrieveBaseInfoDetails, 
    retrieveBlogInfoDetails, 
    retrieveCrtInfoDetails, 
    retrieveEduInfoDetails, 
    retrieveExpInfoDetails, 
    retrieveIntroInfoDetails, 
    retrieveKeyInfoDetails, 
    retrieveProjInfoDetails,
    retrieveSkillInfoDetails,
    retrieveTestiInfoDetails
} from "../api";
import { retrieveRegisterInfoDetails } from "../api/auth.api";

export const readSelfPayload = async (target,actionType,callback,dispatch) => {
    let key = target.elements[0].value;
    if(key === ''){
        key = 'key'
    }
    
    if(actionType === "Base"){
        retrieveBaseInfoDetails(key,callback,dispatch);
    } else if(actionType  === "Education"){
        retrieveEduInfoDetails(key,callback,dispatch);
    } else if(actionType  === "Experience"){
        retrieveExpInfoDetails(key,callback,dispatch);
    } else if(actionType === "Projects"){
        retrieveProjInfoDetails(key,callback,dispatch);
    } else if(actionType === "Skills"){
        retrieveSkillInfoDetails(key,callback,dispatch);
    } else if(actionType === "Achievements"){
        retrieveAchvmntInfoDetails(key,callback,dispatch);
    } else {
        retrieveCrtInfoDetails(key,callback,dispatch);
    }
}

export const readDashboardPayload = (target,actionType,callback,dispatch) => {
    let key = target.elements[0].value;
    if(key === ''){
        key = 'key'
    }
    
    if(actionType === "Intro"){
        retrieveIntroInfoDetails(key,callback,dispatch);
    } else if(actionType  === "Testimonials"){
        retrieveTestiInfoDetails(key,callback,dispatch);
    } else if(actionType === "Blog"){
        retrieveBlogInfoDetails(key,callback,dispatch);
    }
}

export const readCSSConfigPayload = (target,actionType,callback,dispatch) => {
    let key = target.elements[0].value;
    if(key === ''){
        key = 'key'
    }
    
    if(actionType === "Key"){
        retrieveKeyInfoDetails(key,callback,dispatch);
    }
}

export const readSettingPayload = (target,actionType,callback,dispatch) => {
    let key = target.elements[0].value;
    if(actionType === "Profile"){
        retrieveRegisterInfoDetails(key,callback,dispatch);
    } 
}
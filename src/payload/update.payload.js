import { readFileDataAsBase64 } from ".";
import { 
    updateAchvmntInfoDetails,
    updateBaseInfoDetails, 
    updateBlogInfoDetails, 
    updateCrtInfoDetails, 
    updateExpInfoDetails, 
    updateIntroInfoDetails, 
    updateProjInfoDetails,
    updateSkillInfoDetails,
    updateTestiInfoDetails
} from "../api";

export const updateSelfPayload = async (target,actionType,callback) => {
    if(actionType === "Base"){
        let baseInfoCtrlKey = '';
        let baseInfoCtrlDetails = {};
        for(let i=0; i< target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                baseInfoCtrlKey = target.elements[i].value;
            } else if(key === "baseProfileCtrl" && target.elements[i].files[0]){
                const file = target.elements[i].files[0];
                const base64 = await readFileDataAsBase64(file);
                baseInfoCtrlDetails[key] = base64;
            } else if(target.elements[i].value !== ""){
                baseInfoCtrlDetails[key] = target.elements[i].value;
            }
        }         
        updateBaseInfoDetails(baseInfoCtrlKey, baseInfoCtrlDetails,callback);

    } else if(actionType  === "Experience"){
        let expInfoCtrlKey = '';
        let expInfoCtrlDetails = {};
        for(let i=0; i< target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                expInfoCtrlKey = target.elements[i].value;
            } else if(key === "currentlyWorking"){
                if(target.elements[i].checked === "on"){
                    expInfoCtrlDetails[key] = true;
                }
            } else if(target.elements[i].value !== ""){
                expInfoCtrlDetails[key] = target.elements[i].value;
            }
        } 
        
        updateExpInfoDetails(expInfoCtrlKey, expInfoCtrlDetails,callback);

    } else if(actionType === "Projects"){
        let projInfoCtrlKey = '';
        let projInfoCtrlDetails = {};
        for(let i=0; i< target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                projInfoCtrlKey = target.elements[i].value;
            } else if(key === "techUsed" && target.elements[i].value){
                projInfoCtrlDetails[key] = target.elements[i].value.split(",");
            } else if(target.elements[i].value !== ""){
                projInfoCtrlDetails[key] = target.elements[i].value;
            }
        } 
        
        updateProjInfoDetails(projInfoCtrlKey,projInfoCtrlDetails,callback);
    } else if(actionType === "Skills"){
        let skillInfoCtrlKey = '';
        let skillInfoCtrlDetails = {};
        let technicalDetails = [];
        let behaivioralDetails = [];
        let objectDetails = {};
        let split = 2;
        for(let i=0; i<target.length; i++){
            let key = target.elements[i].getAttribute("name");
            let parentNode = target.elements[i].parentNode.getAttribute("name");
            if(key === "keywords"){
                parentNode = target.elements[i].parentNode.parentNode.parentNode.getAttribute("name");
            }

            if(key === "key"){
                skillInfoCtrlKey = Number(target.elements[i].value);
            } else if(parentNode === "technical"){
                if(key === "keywords"){
                    objectDetails[key] = target.elements[i].value.split(",");
                } else {
                    objectDetails[key] = target.elements[i].value;
                }
            } else if(parentNode === "behaivioral"){
                if(key === "keywords"){
                    objectDetails[key] = target.elements[i].value.split(",");
                } else {
                    objectDetails[key] = target.elements[i].value;
                }
            }

            if(i === split){
                if(parentNode === "technical"){
                    technicalDetails.push(objectDetails);
                    objectDetails = {};
                } else if(parentNode === "behaivioral") {
                    behaivioralDetails.push(objectDetails);
                    objectDetails = {};
                }
                split += 2;
            }
        }

        if(JSON.stringify(technicalDetails) !== "[]"){
            skillInfoCtrlDetails["technical"] = technicalDetails;
        }
        if(JSON.stringify(behaivioralDetails) !== "[]"){
            skillInfoCtrlDetails["behaivioral"] = behaivioralDetails;
        }

        updateSkillInfoDetails(skillInfoCtrlKey,skillInfoCtrlDetails,callback);
    } else if(actionType === "Achievements"){
        let achvmntInfoCtrlKey = '';
        let achvmntInfoCtrlDetails = {};
        for(let i=0; i< target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                achvmntInfoCtrlKey = target.elements[i].value;
            } else if(target.elements[i].value !== ""){
                achvmntInfoCtrlDetails[key] = target.elements[i].value;
            }
        } 
        
        updateAchvmntInfoDetails(achvmntInfoCtrlKey,achvmntInfoCtrlDetails,callback);
    } else {
        let crtInfoCtrlKey = '';
        let crtInfoCtrlDetails = {};
        for(let i=0; i< target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                crtInfoCtrlKey = target.elements[i].value;
            } else if(target.elements[i].value !== ""){
                crtInfoCtrlDetails[key] = target.elements[i].value;
            }
        } 

        updateCrtInfoDetails(crtInfoCtrlKey,crtInfoCtrlDetails,callback);
    }
}

export const updateDashboardPayload = async (target,actionType,callback) => {
    if(actionType === "Intro"){
        let introInfoCtrlKey = '';
        let introInfoCtrlDetails = {};
        for(let i=0; i< target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                introInfoCtrlKey = target.elements[i].value;
            } else if(target.elements[i].value !== ""){
                introInfoCtrlDetails[key] = target.elements[i].value;
            }
        }  
        
        updateIntroInfoDetails(introInfoCtrlKey,introInfoCtrlDetails,callback);

    } else if(actionType  === "Testimonials"){
        let testiInfoCtrlKey = '';
        let testiInfoCtrlDetails = {};
        for(let i=0; i< target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                testiInfoCtrlKey = target.elements[i].value;
            } else if(key === "userProfile" && target.elements[i].files[0]){
                const file = target.elements[i].files[0];
                const base64 = await readFileDataAsBase64(file);
                testiInfoCtrlDetails[key] = base64;
            } else if(target.elements[i].value !== ""){
                testiInfoCtrlDetails[key] = target.elements[i].value;
            }
        } 

        updateTestiInfoDetails(testiInfoCtrlKey,testiInfoCtrlDetails,callback);

    } else if(actionType === "Blog"){
        let blogInfoCtrlKey = '';
        let blogInfoCtrlDetails = {};
        for(let i=0; i< target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                blogInfoCtrlKey = target.elements[i].value;
            } else if(key === "image" && target.elements[i].files[0]){
                const file = target.elements[i].files[0];
                const base64 = await readFileDataAsBase64(file);
                blogInfoCtrlDetails[key] = base64;
            } else if(target.elements[i].value !== ""){
                blogInfoCtrlDetails[key] = target.elements[i].value;
            }
        } 

        updateBlogInfoDetails(blogInfoCtrlKey,blogInfoCtrlDetails,callback);

    }
}

export const updateCSSConfigPayload = async (target,actionType,callback) => {
    // 
}

export const updateSettingPayload = async (target,actionType,callback) => {
    // 
}

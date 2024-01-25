import { readFileDataAsBase64 } from '.';
import { 
    createAchvmntInfoDetails,
    createBaseInfoDetails, 
    createBlogInfoDetails, 
    createCrtInfoDetails, 
    createEduInfoDetails, 
    createExpInfoDetails, 
    createIntroInfoDetails, 
    createKeyInfoDetails, 
    createProjInfoDetails,
    createSkillInfoDetails,
    createTestiInfoDetails
} from '../api';

export const createSelfPayload = async (target,actionType,callback) => {
    if(actionType === "Base"){
        let baseInfoCtrlDetails = {};
        for(let i=0; i< target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                baseInfoCtrlDetails[key] = Number(target.elements[i].value);
            } else if(key === "baseProfileCtrl" && target.elements[i].files[0]){
                const file = target.elements[i].files[0];
                const base64 = await readFileDataAsBase64(file);
                baseInfoCtrlDetails[key] = base64;
            } else if(target.elements[i].value !== ""){
                baseInfoCtrlDetails[key] = target.elements[i].value;
            }
        }               
        createBaseInfoDetails(baseInfoCtrlDetails,callback);
    }  else if(actionType  === "Education"){
        let eduInfoCtrlDetails = [];
        let objectDetails = {};
        for(let i=0; i<target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                objectDetails[key] = Number(target.elements[i].value);
            } else if(key === "universityProfileCtrl" && target.elements[i].files[0]){
                const file = target.elements[i].files[0];
                const base64 = await readFileDataAsBase64(file);
                objectDetails[key] = base64;
            } else if(target.elements[i].value !== "") {
                objectDetails[key] = target.elements[i].value;
            }           

            if(target.elements[i].getAttribute("name") === "graduationYear"){
                eduInfoCtrlDetails.push(objectDetails);
                objectDetails = {};
            }
        }
        
        createEduInfoDetails(eduInfoCtrlDetails,callback);
        
    } else if(actionType  === "Experience"){
        let expInfoCtrlDetails = [];
        let objectDetails = {};
        for(let i=0; i<target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                objectDetails[key] = Number(target.elements[i].value);
            } else if(key === "currentlyWorking"){
                if(target.elements[i].checked){
                    objectDetails[key] = true;
                } else {
                    objectDetails[key] = false;
                }
            } else if(key === "companyProfileCtrl" && target.elements[i].files[0]){
                const file = target.elements[i].files[0];
                const base64 = await readFileDataAsBase64(file);
                objectDetails[key] = base64;
            } else if(target.elements[i].value !== "") {
                objectDetails[key] = target.elements[i].value;
            }           

            if(target.elements[i].getAttribute("name") === "description"){
                expInfoCtrlDetails.push(objectDetails);
                objectDetails = {};
            }
        }

        createExpInfoDetails(expInfoCtrlDetails,callback);
    } else if(actionType === "Projects"){
        let projInfoCtrlDetails = [];
        let objectDetails = {};
        for(let i=0; i<target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                objectDetails[key] = Number(target.elements[i].value);
            } else if(key === "techUsed"){
                objectDetails[key] = target.elements[i].value.split(",");
            } else if(key === "projectImgCtrl" && target.elements[i].files[0]){
                const file = target.elements[i].files[0];
                const base64 = await readFileDataAsBase64(file);
                objectDetails[key] = base64;
            } else if(target.elements[i].value !== "") {
                objectDetails[key] = target.elements[i].value;
            }           

            if(target.elements[i].getAttribute("name") === "description"){
                projInfoCtrlDetails.push(objectDetails);
                objectDetails = {};
            }
        }
        
        createProjInfoDetails(projInfoCtrlDetails,callback);
    } else if(actionType === "Skills"){
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
                skillInfoCtrlDetails[key] = Number(target.elements[i].value);
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

        createSkillInfoDetails(skillInfoCtrlDetails,callback)
        
    } else if(actionType === "Achievements"){
        let achvmntInfoCtrlDetails = [];
        let objectDetails = {};
        for(let i=0; i<target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                objectDetails[key] = Number(target.elements[i].value);
            } else if(key === "achvmntProfileCtrl" && target.elements[i].files[0]){
                const file = target.elements[i].files[0];
                const base64 = await readFileDataAsBase64(file);
                objectDetails[key] = base64;
            } else if(target.elements[i].value !== "") {
                objectDetails[key] = target.elements[i].value;
            }           

            if(target.elements[i].getAttribute("name") === "description"){
                achvmntInfoCtrlDetails.push(objectDetails);
                objectDetails = {};
            }
        }
        
        createAchvmntInfoDetails(achvmntInfoCtrlDetails,callback);
    } else {
        let crtInfoCtrlDetails = [];
        let objectDetails = {};
        for(let i=0; i<target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                objectDetails[key] = Number(target.elements[i].value);
            } else if(key === "crtProfileCtrl" && target.elements[i].files[0]){
                const file = target.elements[i].files[0];
                const base64 = await readFileDataAsBase64(file);
                objectDetails[key] = base64;
            } else if(target.elements[i].value !== "") {
                objectDetails[key] = target.elements[i].value;
            }           

            if(target.elements[i].getAttribute("name") === "description"){
                crtInfoCtrlDetails.push(objectDetails);
                objectDetails = {};
            }
        }
        
        createCrtInfoDetails(crtInfoCtrlDetails,callback);
    }
}

export const createDashboardPayload = async (target,actionType,callback) => {
    if(actionType === "Intro"){
        let introInfoCtrlDetails = {};
        for(let i=0; i< target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                introInfoCtrlDetails[key] = Number(target.elements[i].value);
            } else if(target.elements[i].value !== ""){
                introInfoCtrlDetails[key] = target.elements[i].value;
            }
        }               
        
        createIntroInfoDetails(introInfoCtrlDetails,callback);

    } else if(actionType === "Testimonials"){
        let testiInfoCtrlDetails = {};
        for(let i=0; i< target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                testiInfoCtrlDetails[key] = Number(target.elements[i].value);
            } else if(key === "userProfile" && target.elements[i].files[0]){
                const file = target.elements[i].files[0];
                const base64 = await readFileDataAsBase64(file);
                testiInfoCtrlDetails[key] = base64;
            } else if(target.elements[i].value !== ""){
                testiInfoCtrlDetails[key] = target.elements[i].value;
            }
        } 
        
        createTestiInfoDetails(testiInfoCtrlDetails,callback);

    } else if(actionType === "Blog"){
        let blogInfoCtrlDetails = {};
        for(let i=0; i< target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                blogInfoCtrlDetails[key] = Number(target.elements[i].value);
            } else if(key === "image" && target.elements[i].files[0]){
                const file = target.elements[i].files[0];
                const base64 = await readFileDataAsBase64(file);
                blogInfoCtrlDetails[key] = base64;
            } else if(target.elements[i].value !== ""){
                blogInfoCtrlDetails[key] = target.elements[i].value;
            }
        } 
        
        createBlogInfoDetails(blogInfoCtrlDetails,callback);
    }
}

export const createCSSConfigPayload = (target,actionType,callback) => {
    if(actionType === "Key"){
        let keyInfoCtrlDetails = {};
        for(let i=0; i< target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(key === "key"){
                keyInfoCtrlDetails[key] = Number(target.elements[i].value);
            } else if((key === "baseInfoCtrlKey" || key === "skillId") && target.elements[i].value !== ""){
                keyInfoCtrlDetails[key] = Number(target.elements[i].value);
            } else if(target.elements[i].value !== ""){
                keyInfoCtrlDetails[key] = target.elements[i].value.split(",");
            }
        }   
        createKeyInfoDetails(keyInfoCtrlDetails,callback);
    }
}

export const createSettingPayload = () => {

}
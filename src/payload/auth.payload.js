import { dashboardAuthInfoDetails, loginAuthInfoDetails, logoutAuthInfoDetails } from "../api/auth.api";

export const adminAuthPayload = async (target,actionType,callback,dispatch) => {
    if(actionType === "login"){
        let loginInfoCtrlDetails = {};
        for(let i=0; i< target.length; i++){
            let key = target.elements[i].getAttribute("name");
            if(target.elements[i].value !== ""){
                loginInfoCtrlDetails[key] = target.elements[i].value;
            }
        }    
        
        loginAuthInfoDetails(loginInfoCtrlDetails,callback,dispatch);

    } else if(actionType === "logout") {
        logoutAuthInfoDetails(callback,dispatch);
    } else if(actionType === "dashboard") {
        dashboardAuthInfoDetails(callback,dispatch);
    }
}
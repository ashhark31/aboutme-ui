import { useEffect, useState } from 'react'
import '../styles/body.hoc.css'
import { getFormMenuData, getSideMenuData } from '../utils/sidebar.data';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { adminAuthPayload } from '../payload/auth.payload';
import { activateNotify, setNotify } from '../reducers';

const getSideMenuRoute = (currentUrl) => {  
    const urls = currentUrl.split("/");
    if(urls.length === 4){
        return urls[urls.length-2];
    } 
    return urls[urls.length-1];
}

const BodyHOC = ({children}) => {
    const {triggeredMenu} = useSelector(state => state.headHOC);
    const [sideMenus, setSideMenus] = useState(getSideMenuData(triggeredMenu));
    const form_menus = getFormMenuData();
    const currentTriggeredSideMenu = getSideMenuRoute(useLocation().pathname);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.authentication.isTokenAvailable);

    useEffect(() => {
        if(!token){
            navigate("/auth/login");
        }
    }, [token]);

    const notifyResponse = (type,message) => {
        dispatch(activateNotify());
        dispatch(setNotify({
          notifyType: type === 200 ? 'success' : 'error',
          notifyMessage: message
        }))
    }
    
    const handleClick = (event) => {
        adminAuthPayload(event,"logout",notifyResponse,dispatch);
    }

    useEffect(() => {
        const menus = getSideMenuData(triggeredMenu);
        setSideMenus(menus);
    }, [triggeredMenu]);

  return (
    <div className="body_hoc">
        <div className='sidebar-container border-r'>
            {
                sideMenus?.map((menu,index) => {
                    return (
                        menu === "Logout"
                        ?   
                            <div 
                                key={index} 
                                name={menu}
                                onClick={(event) => handleClick(event)}
                            >
                                {menu}
                            </div>
                        :
                        <Link 
                            key={index}
                            to={ "/" + triggeredMenu.toLowerCase() + "/" + menu.toLowerCase() } 
                            relative='path'
                        >
                            <div 
                                key={index} 
                                name={menu}
                            >
                                {menu}
                            </div>
                        </Link>
                    );
                })
            }
        </div>
        <div className='body-container'>
            <div className='form-container'>
                {
                    sideMenus && form_menus?.map((menu,index) => {
                        return (
                            currentTriggeredSideMenu === "profile"
                            ?
                                menu !== "Update"
                                ?
                                    <Link 
                                        key={index}
                                        to={ 
                                            "/" + triggeredMenu.toLowerCase() 
                                            + "/" + currentTriggeredSideMenu
                                            + "/" + menu.toLowerCase()
                                        } 
                                        relative='path'
                                    >
                                        <div 
                                            key={index} 
                                            name={menu}
                                        >
                                            {menu.charAt(0)}
                                        </div>
                                    </Link>
                                :   <></>
                            :
                            currentTriggeredSideMenu === "change_password"
                            ?
                                <Link 
                                    key={index}
                                    to={ 
                                        "/" + triggeredMenu.toLowerCase() 
                                        + "/" + currentTriggeredSideMenu
                                        + "/" + menu.toLowerCase()
                                    } 
                                    relative='path'
                                ></Link>     
                            :
                                <Link 
                                    key={index}
                                    to={ 
                                        "/" + triggeredMenu.toLowerCase() 
                                        + "/" + currentTriggeredSideMenu
                                        + "/" + menu.toLowerCase()
                                    } 
                                    relative='path'
                                >
                                    <div 
                                        key={index} 
                                        name={menu}
                                    >
                                        {menu.charAt(0)}
                                    </div>
                                </Link>
                        );
                    })
                }
            </div>
            {children}
        </div>
    </div>
  )
}

export default BodyHOC
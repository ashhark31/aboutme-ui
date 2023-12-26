import { BodyHOC, HeadHOC } from "../hoc"
import { BodyForm } from "../components";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateNotify, setNotify } from "../reducers";
import { adminAuthPayload } from "../payload";

const BodyRoute = () => {
    const token = localStorage.getItem('token');
    const location = useLocation()?.pathname;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const notifyResponse = (type,message) => {
      dispatch(activateNotify());
      dispatch(setNotify({
        notifyType: type === 200 ? 'success' : 'error',
        notifyMessage: message
      }))
    }

    useEffect(() => {
      if(token){
        navigate("/self/base/create")
      } else{
        adminAuthPayload(token,"dashboard",notifyResponse,dispatch)
        if(!token)  navigate("/auth/login"); 
        else  navigate("/self/base/create")
      }
    }, [token]);

    useEffect(() => {
      if(location === '/self' || location === '/self/base')
        navigate("/self/base/create")
      else if(location === '/self/education')
        navigate("/self/education/create");
      else if(location === '/self/experience')
        navigate("/self/experience/create");
      else if(location === '/self/projects')
        navigate("/self/projects/create")
      else if(location === '/self/skills')
        navigate("/self/skills/create")
      else if(location === '/self/achievements')
        navigate("/self/achievements/create")
      else if(location === '/self/certifications')
        navigate("/self/certifications/create")
      else if(location === '/dashboard' || location === '/dashboard/intro')
        navigate("/dashboard/intro/create")
      else if(location === '/dashboard/testimonials')
        navigate("/dashboard/testimonials/create")
      else if(location === '/dashboard/blog')
        navigate("/dashboard/blog/create")
      else if(location === '/config' || location === '/config/key')
        navigate("/config/key/create");
      else if(location === '/setting' || location === '/setting/profile')
        navigate("/setting/profile/read")
    }, [location]);

  return (
    token
    ?
      <HeadHOC>
        <BodyHOC>
            <BodyForm />
        </BodyHOC>
      </HeadHOC>
    : <></>
  )
}

export default BodyRoute
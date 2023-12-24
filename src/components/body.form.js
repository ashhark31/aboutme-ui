import { useLocation } from 'react-router';
import '../styles/components.css'
import { RenderForm } from './common.method';
import { 
  createCSSConfigPayload,
  createDashboardPayload, 
  createSelfPayload, 
  createSettingPayload,
  deleteCssConfigPayload,
  deleteDashboardPayload,
  deleteSelfPayload,
  deleteSettingPayload,
  readCSSConfigPayload,
  readDashboardPayload,
  readSelfPayload,
  readSettingPayload,
  updateCSSConfigPayload,
  updateDashboardPayload,
  updateSelfPayload,
  updateSettingPayload
} from '../payload';

import { useDispatch, useSelector } from 'react-redux';
import { activateNotify, setClickedDataKey, setNotify } from '../reducers';
import { useEffect } from 'react';

const getActionTitle = (pathname) => {
  const paths = pathname?.split("/");
  if(paths.length === 4){
    return [
      paths[3]?.charAt(0)?.toUpperCase() + paths[3]?.substring(1),
      paths[2]?.charAt(0)?.toUpperCase() + paths[2]?.substring(1),
      paths[1]      
    ];  
  }
  return [
    '',
    paths[2]?.charAt(0)?.toUpperCase() + paths[2]?.substring(1),
    paths[1]
  ];
}

const formCount = (count,section) => {
  if(section === "Experience"){
    return count?.experienceCount
  } else if(section === "Projects"){
    return count?.projectsCount
  } else if(section === "Achievements"){
    return count?.achievementsCount
  } else if(section === "Certifications"){
    return count?.certificationsCount
  }
}

export default function BodyForm() {
  const actionTitle = getActionTitle(useLocation()?.pathname);
  const dispatch = useDispatch();
  const count = useSelector(state => state.addForm);
  let form_count = formCount(count,actionTitle[1]);

  let keys = {
    baseInfoCtrlKey: 0,
    empId: 0,
    projectId: 0,
    skillId: 0,
    achvmntId: 0,
    certId: 0,
    introInfoCtrlKey: 0,
    testInfoCtrlKey: 0,
    blogInfoCtrlKey: 0
  }

  useEffect(() => {
    dispatch(setClickedDataKey(keys));
  }, []);

  const notifyResponse = (type,message) => {
    dispatch(activateNotify());
    dispatch(setNotify({
      notifyType: type === 200 ? 'success' : 'error',
      notifyMessage: message
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const elements = event.target;
    if(actionTitle[0] === 'Create'){
      if(actionTitle[2] === 'self'){
        createSelfPayload(elements,actionTitle[1],notifyResponse);
      } else if(actionTitle[2] === 'dashboard'){
        createDashboardPayload(elements,actionTitle[1],notifyResponse);
      } else if(actionTitle[2] === "css_config"){
        createCSSConfigPayload(elements,actionTitle[1],notifyResponse);
      } else {
        createSettingPayload(elements,actionTitle[1],notifyResponse);
      }
    } else if(actionTitle[0] === 'Read'){
      if(actionTitle[2] === 'self'){
        readSelfPayload(elements,actionTitle[1],notifyResponse,dispatch);
      } else if(actionTitle[2] === 'dashboard'){
        readDashboardPayload(elements,actionTitle[1],notifyResponse,dispatch);
      } else if(actionTitle[2] === "css_config"){
        readCSSConfigPayload(elements,actionTitle[1],notifyResponse,dispatch);
      } else {
        readSettingPayload(elements,actionTitle[1],notifyResponse,dispatch);
      }
    } else if(actionTitle[0] === "Update"){
      if(actionTitle[2] === 'self'){
        updateSelfPayload(elements,actionTitle[1],notifyResponse);
      } else if(actionTitle[2] === 'dashboard'){
        updateDashboardPayload(elements,actionTitle[1],notifyResponse);
      } else if(actionTitle[2] === "css_config"){
        updateCSSConfigPayload(elements,actionTitle[1],notifyResponse);
      } else {
        updateSettingPayload(elements,actionTitle[1],notifyResponse);
      }
    } else if(actionTitle[0] === "Delete"){
      if(actionTitle[2] === 'self'){
        deleteSelfPayload(elements,actionTitle[1],notifyResponse);
      } else if(actionTitle[2] === 'dashboard'){
        deleteDashboardPayload(elements,actionTitle[1],notifyResponse);
      } else if(actionTitle[2] === "css_config"){
        deleteCssConfigPayload(elements,actionTitle[1],notifyResponse);
      } else {
        deleteSettingPayload(elements,actionTitle[1],notifyResponse);
      }
    } 
  }

  const handleCancel = () => {
    if(actionTitle[0] && actionTitle[0] === "Read"){
      dispatch(setClickedDataKey(0));
    }
  }

  return (
    <form className='body_form' onSubmit={handleSubmit} >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            { actionTitle[0] ? actionTitle[0] : 'Create' } 
            { " " + actionTitle[1] + " Information" } 
          </h2>
          
          <p className="mt-1 text-sm leading-6 text-gray-600">
            { "You can " }
            { actionTitle[0] ? actionTitle[0].toLowerCase() : 'create' } 
            { " your " + actionTitle[1] + " information follwed by below details."}
          </p>

        </div>
      </div>

      {
        (actionTitle[1] === "Experience" || actionTitle[1] === "Projects" || actionTitle[1] === "Achievements" 
        || actionTitle[1] === "Certifications") && actionTitle[0] === "Create"
        ?
          Array.apply(0, Array(form_count)).map(() => {
            return (
              <RenderForm 
                key={actionTitle[1]}
                category={actionTitle[2]}  
                section={actionTitle[1]}
                actionType={actionTitle[0]}
              />    
            )
          })
        : 
          <RenderForm 
            category={actionTitle[2]}  
            section={actionTitle[1]}
            actionType={actionTitle[0]}
          />
      }

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button 
          type="button" 
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => handleCancel()}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {actionTitle[0] ? actionTitle[0] : 'Execute'}
        </button>
      </div>
    </form>
  )
}

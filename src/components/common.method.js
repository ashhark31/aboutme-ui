import { KeyInfoField } from '../hoc';
import { ReadConfigInfo, ReadDashboardInfo, ReadSelfInfo, ReadSettingInfo } from './read';
import { UpdateBaseSelfInfo } from './update';

import { 
  CreateAchvmntsSelfInfo,
  CreateBaseSelfInfo, 
  CreateBlogDashInfo, 
  CreateCrtSelfInfo, 
  CreateEducationSelfInfo, 
  CreateExperienceSelfInfo, 
  CreateIntroDashInfo, 
  CreateKeyConfigInfo, 
  CreateProfileSettingInfo, 
  CreateProjectsSelfInfo,
  CreateSkillSelfInfo,
  CreateTestiDashInfo
} from './create';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { 
  DeleteAchvmntSelfInfo,
  DeleteBaseSelfInfo, 
  DeleteBlogDashInfo, 
  DeleteCrtSelfInfo, 
  DeleteEduSelfInfo, 
  DeleteExpSelfInfo, 
  DeleteIntroDashInfo, 
  DeleteKeyConfigInfo, 
  DeleteProfileSettingInfo, 
  DeleteProjSelfInfo, 
  DeleteSkillsSelfInfo,
  DeleteTestiDashInfo
} from './delete';

import { Avatar } from '@mui/material';
import { useEffect } from 'react';
import { resetReadApiData } from '../reducers';

export default function DescriptionList ({ctrlKey}) {
  const readData = useSelector(state => state.readApiData?.readData);
  const location = useLocation()?.pathname;
  const section = location?.split("/")[2].charAt(0).toUpperCase() + location?.split("/")[2].substring(1);
  const data = readData.find((data) => {
    if(ctrlKey === data?.key)
      return data;
  })

  return (
    ctrlKey === data?.key
      ?
      <div className='mt-10'>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Applicant {section} Details</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{location}</p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            {
              section === "Base" || section === "Testimonials" || section === "Blog"
              ?
                (section === "Base" && data?.baseProfileCtrl) || (section === "Testimonials" && data?.userProfile)
                ?
                  <div key={data?.key} className="flex justify-center -space-x-1 overflow-hidden">
                    <img
                      className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
                      src={
                        data?.baseProfileCtrl ? data?.baseProfileCtrl : data?.userProfile
                      }
                      alt=""
                    />
                  </div>
                :
                (section === "Base" && !data?.baseProfileCtrl) || (section === "Testimonials" && !data?.userProfile)
                ?
                  <div key={data?.key} className="flex justify-center -space-x-1 overflow-hidden">
                    {
                      !data?.baseProfileCtrl
                      ?
                        <Avatar>
                          {data?.["userFirstName"]?.charAt(0)?.toUpperCase() + data?.["userLastName"]?.charAt(0)?.toUpperCase()}
                        </Avatar>
                      :
                        <Avatar>
                          {data?.["userName"]?.charAt(0)?.toUpperCase() + data?.["userName"]?.charAt(1)?.toUpperCase()}
                        </Avatar>
                    }                    
                  </div>
                : <></>
              : <></>              
            }
            {
              Object.entries(data).map(([key,value]) => {
                return (
                  key !== "baseProfileCtrl"
                  ?
                    <div key={key} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">{key}</dt>
                      {
                        typeof value === "object"
                        ?
                          section === "Key"
                          ? 
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{JSON.stringify(value)}</dd>
                          :
                            value.map((val) => {
                              return (
                                <div className="mt-6 border-t border-gray-100">
                                  <dl className="divide-y divide-gray-100">
                                    <div key={val?.name} className="px-4 py-6 grid grid-cols-1 sm:gap-4 sm:px-0">
                                      <dt className="text-sm font-medium leading-6 text-gray-900">{val?.name}</dt>
                                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{val?.keywords?.toString()}</dd>                                
                                    </div>
                                  </dl>
                                </div>                                                           
                              );
                            })
                        :
                        key === "image"
                        ?
                          <div className="mt-6 border-t border-gray-100">
                            <dl className="divide-y divide-gray-100">
                              <div key={data?.key} className="px-4 py-6 grid grid-cols-1 sm:gap-4 sm:px-0">
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                  <img
                                    className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
                                    src={ data?.image}
                                    alt=""
                                  />
                                </dd>
                              </div>
                            </dl>
                          </div>
                        :
                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{value?.toString()}</dd>
                      }
                    </div>
                  : <></>
                );
              })
            }
          </dl>
        </div>
      </div>
    : <></>
  )
}

export const RenderSelfForm = ({section,actionType}) => {
  return (
    section === "Base"
    ?
      actionType === "Create"
      ?
        <CreateBaseSelfInfo type={actionType} />
      : 
      actionType === "Read"
      ?
        <KeyInfoField type={actionType}>
          <ReadSelfInfo section={section} />
        </KeyInfoField>
      :
      actionType === "Update"
      ?
        <KeyInfoField type={actionType}>
          <UpdateBaseSelfInfo type={actionType} />
        </KeyInfoField>
      : 
        <KeyInfoField type={actionType}>
          <DeleteBaseSelfInfo />
        </KeyInfoField>
    : 
    section === "Education"
    ?
      actionType === "Create"
      ?
        <CreateEducationSelfInfo type={actionType} />
      : 
      actionType === "Read"
      ?
        <KeyInfoField type={actionType}>
          <ReadSelfInfo section={section} />
        </KeyInfoField>
      :
      actionType === "Update"
      ?
        <KeyInfoField type={actionType}>
          <CreateEducationSelfInfo type={actionType} />
        </KeyInfoField>
      : 
        <KeyInfoField type={actionType}>
          <DeleteEduSelfInfo />
        </KeyInfoField>
    : 
    section === "Experience"
    ?
      actionType === "Create"
      ?
        <CreateExperienceSelfInfo type={actionType} />
      : 
      actionType === "Read"
      ?
        <KeyInfoField type={actionType}>
          <ReadSelfInfo section={section} />
        </KeyInfoField>
      :
      actionType === "Update"
      ?
        <KeyInfoField type={actionType}>
          <CreateExperienceSelfInfo type={actionType} />
        </KeyInfoField>
      : 
        <KeyInfoField type={actionType}>
          <DeleteExpSelfInfo />
        </KeyInfoField>    
    : 
    section === "Projects"
    ?
      actionType === "Create"
      ?
        <CreateProjectsSelfInfo type={actionType} />
      : 
      actionType === "Read"
      ?
        <KeyInfoField type={actionType}>
          <ReadSelfInfo section={section} />
        </KeyInfoField>
      :
      actionType === "Update"
      ?
        <KeyInfoField type={actionType}>
          <CreateProjectsSelfInfo type={actionType} />
        </KeyInfoField>
      : 
        <KeyInfoField type={actionType}>
          <DeleteProjSelfInfo />
        </KeyInfoField>    
    : 
    section === "Skills"
    ?
      actionType === "Create"
      ?
        <CreateSkillSelfInfo type={actionType} />
      : 
      actionType === "Read"
      ?
        <KeyInfoField type={actionType}>
          <ReadSelfInfo section={section} />
        </KeyInfoField>
      :
      actionType === "Update"
      ?
        <KeyInfoField type={actionType}>
          <CreateSkillSelfInfo type={actionType} />
        </KeyInfoField>
      : 
        <KeyInfoField type={actionType}>
          <DeleteSkillsSelfInfo />
        </KeyInfoField>   
    : 
    section === "Achievements"
    ?
      actionType === "Create"
      ?
        <CreateAchvmntsSelfInfo type={actionType} />
      : 
      actionType === "Read"
      ?
        <KeyInfoField type={actionType}>
          <ReadSelfInfo section={section} />
        </KeyInfoField>
      :
      actionType === "Update"
      ?
        <KeyInfoField type={actionType}>
          <CreateAchvmntsSelfInfo type={actionType} />
        </KeyInfoField>
      : 
        <KeyInfoField type={actionType}>
          <DeleteAchvmntSelfInfo />
        </KeyInfoField>
    :  
    section === "Certifications"
    ?
      actionType === "Create"
      ?
        <CreateCrtSelfInfo type={actionType} />
      : 
      actionType === "Read"
      ?
        <KeyInfoField type={actionType}>
          <ReadSelfInfo section={section} />
        </KeyInfoField>
      :
      actionType === "Update"
      ?
        <KeyInfoField type={actionType}>
          <CreateCrtSelfInfo type={actionType} />
        </KeyInfoField>
      : 
        <KeyInfoField type={actionType}>
          <DeleteCrtSelfInfo />
        </KeyInfoField>
    : <></>
  );
}

export const RenderDashboardForm = ({section,actionType}) => {
  return (
    section === "Intro"
    ?
      actionType === "Create"
      ?
        <CreateIntroDashInfo type={actionType} />
      : 
      actionType === "Read"
      ?
        <KeyInfoField type={actionType}>
          <ReadDashboardInfo section={section} />
        </KeyInfoField>
      :
      actionType === "Update"
      ?
        <KeyInfoField type={actionType}>
          <CreateIntroDashInfo type={actionType} />
        </KeyInfoField>
      : 
        <KeyInfoField type={actionType}>
          <DeleteIntroDashInfo />
        </KeyInfoField>
    :
    section === "Testimonials"
    ?
      actionType === "Create"
      ?
        <CreateTestiDashInfo type={actionType} />
      : 
      actionType === "Read"
      ?
        <KeyInfoField type={actionType}>
          <ReadDashboardInfo section={section} />
        </KeyInfoField>
      :
      actionType === "Update"
      ?
        <KeyInfoField type={actionType}>
          <CreateTestiDashInfo type={actionType} />
        </KeyInfoField>
      : 
        <KeyInfoField type={actionType}>
          <DeleteTestiDashInfo />
        </KeyInfoField>
    :
    section === "Blog"
    ?
      actionType === "Create"
      ?
        <CreateBlogDashInfo type={actionType} />
      : 
      actionType === "Read"
      ?
        <KeyInfoField type={actionType}>
          <ReadDashboardInfo section={section} />
        </KeyInfoField>
      :
      actionType === "Update"
      ?
        <KeyInfoField type={actionType}>
          <CreateBlogDashInfo type={actionType} />
        </KeyInfoField>
      : 
        <KeyInfoField type={actionType}>
          <DeleteBlogDashInfo />
        </KeyInfoField>
    : <></>
  );
}

export const RenderConfigForm = ({section,actionType}) => {
  return (
    section === "Key"
    ?
      actionType === "Create"
      ?
        <CreateKeyConfigInfo type={actionType} />
      : 
      actionType === "Read"
      ?
        <KeyInfoField type={section}>
          <ReadConfigInfo section={section} />
        </KeyInfoField>
      :
      actionType === "Update"
      ?
        <KeyInfoField type={actionType}>
          <CreateKeyConfigInfo type={actionType} />
        </KeyInfoField>
      :
        <KeyInfoField type={actionType}>
          <DeleteKeyConfigInfo />
        </KeyInfoField>
    : <></>
  );
}

export const RenderSettingForm = ({section,actionType}) => {
  return (
    section === "Profile"
    ?
      actionType === "Create"
      ?
        <CreateProfileSettingInfo type={actionType} />
      : 
      actionType === "Read"
      ?
        <KeyInfoField type={section}>
          <ReadSettingInfo section={section} />
        </KeyInfoField>
      :
        <KeyInfoField type={actionType}>
          <DeleteProfileSettingInfo />
        </KeyInfoField>
    : <></>
  );
}

export const RenderForm = ({category,section,actionType}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if(actionType === "Read"){
      dispatch(resetReadApiData());
    }
  }, [actionType]);
  
  return (
    <div className='border-b border-gray-900/10 pb-12'>
      {
        category === "self" 
        ? <RenderSelfForm section={section} actionType={actionType} />
        : 
        category === "dashboard"
        ? <RenderDashboardForm section={section} actionType={actionType} />
        : 
        category === "config"
        ?
          <RenderConfigForm section={section} actionType={actionType} />
        :
        category === "setting"
        ? <RenderSettingForm section={section} actionType={actionType} />
        : <></>
      }
    </div>
  );
}
import { PhotoIcon } from "@heroicons/react/24/solid";
import { selfAchvmntFormat, selfBaseFormat, selfCrtFormat, selfExperienceFormat, selfProjectsFormat, selfSkillFormat } from "./input.data.format"
import "../../styles/components.css"
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { 
  decrAchvmntCount,
  decrCrtCount,
  decrExpCount,
  decrProjCount,
  decrSkillsCount,
  incrAchvmntCount,
  incrCrtCount,
  incrExpCount, 
  incrProjCount,
  incrSkillsCount
} from "../../reducers";

export const ProfilePic = ({base}) => {
  return (
    <div className="col-span-full">
      <label htmlFor={base?.name} className="block text-sm font-medium leading-6 text-gray-900">
        {base?.label}
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span className="px-5">Upload a file</span>
              <input id={base?.name} name={base?.name} type="file" className="not-sr-only" />
            </label>
            {/* <p className="pl-1">or drag and drop</p> */}
          </div>
          <p className="text-xs leading-5 text-gray-600">PNG, JPG up to 2MB</p>
        </div>
      </div>
    </div>
  );
}

export const TextArea = ({name, placeholder}) => {
  return (
    <div className="col-span-full">
      <div className="mt-2">
        <textarea
          id="about"
          name={name}
          rows={3}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences here.</p>
    </div>
  );
}

export default function CreateBaseSelfInfo({type}) {
  const self_base_data = selfBaseFormat();
  const ref = useRef();
  return (
    <div className="mt-10 grid grid-cols-1 lg:gap-x-6 gap-y-8 lg:grid-cols-2">
      {
        self_base_data?.map((base) => {
          return (
            base?.inputType === "file" 
            ? <ProfilePic base={base} key={base?.name} />
            :
              type === "Update" && base?.name === "key"
              ? <></>
              :
              <div id={base?.name} key={base?.name}>
                <label htmlFor={base?.name} className="block text-sm font-medium leading-6 text-gray-900">
                  {base?.label}
                  { type === "Create" && base?.required ? <i className="required">&emsp;*required</i> : ""}
                </label>
                <div className="mt-2">
                  {
                    base?.inputType === "date"
                    ? 
                        <input
                          type="text"
                          ref={ref}
                          name={base?.name}
                          placeholder={base?.inputValue}
                          onFocus={() => (ref.current.type = "date")}
                          onBlur={() => (ref.current.type = "text")}
                          className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    :
                      type === "Create" && base?.required
                      ? 
                        <input
                          required
                          name={base?.name}     
                          type={base?.inputType}               
                          placeholder={base?.inputValue}
                          className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      :
                        <input
                          name={base?.name}     
                          type={base?.inputType}               
                          placeholder={base?.inputValue}
                          className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                  }
                  
                </div>
              </div>
          );
        })
      }
    </div>
  )
}

export function CreateExperienceSelfInfo({type}) {
  const self_exp_data = selfExperienceFormat();
  const ref = useRef();
  const dispatch = useDispatch();
  const form_count = useSelector(state => state.addForm.experienceCount);

  return (
    <div className="mt-10">
      {
        type === "Create"
        ?
          <div className="flex justify-end gap-x-2 cursor-pointer">
            <span 
              className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1"
              onClick={() => dispatch(incrExpCount())}              
            >
              +
            </span>
            {
              form_count > 1
              ?
                <span 
                  className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-800 ring-1"
                  onClick={() => dispatch(decrExpCount())}              
                >
                  -
                </span>
              : <></>
            }
          </div>
        : <></>
      }
      <div className="grid grid-cols-1 lg:gap-x-6 gap-y-8 lg:grid-cols-2">
        {
          self_exp_data?.map((exp) => {
            return (
                type === "Update" && exp?.name === "key"
                ? <></>
                :
                  <div id={exp?.name}>
                    <label htmlFor={exp?.name} className="block text-sm font-medium leading-6 text-gray-900">
                      {exp?.label}
                      { type === "Create" && exp?.required ? <i className="required">&emsp;*required</i> : ""}
                    </label>
                    <div className="mt-2">
                      {
                          exp?.inputType === "date"
                          ? 
                              <input
                                type="text"
                                ref={ref}
                                name={exp?.name}
                                placeholder={exp?.inputValue}
                                onFocus={() => (ref.current.type = "date")}
                                onBlur={() => (ref.current.type = "text")}
                                className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                          :
                          exp?.name === "description"
                          ?
                            <TextArea
                              name={exp?.name}              
                              placeholder={exp?.inputValue} 
                            />
                          :
                            type === "Create" && exp?.required
                            ? 
                              <input
                                required
                                name={exp?.name}     
                                type={exp?.inputType}               
                                placeholder={exp?.inputValue}
                                className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            :
                            exp?.inputType === "checkbox"
                            ?
                              <input
                                name={exp?.name}     
                                type={exp?.inputType}               
                                placeholder={exp?.inputValue}                              
                                className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            :
                              <input
                                name={exp?.name}     
                                type={exp?.inputType}               
                                placeholder={exp?.inputValue}                              
                                className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                      }
                    </div>
                  </div>
            );
          })
        }
      </div>
    </div>
  )
}

export function CreateProjectsSelfInfo({type}) {
  const self_proj_data = selfProjectsFormat();
  const dispatch = useDispatch();
  const form_count = useSelector(state => state.addForm.projectsCount);

  return (
    <div className="mt-10">
      {
        type === "Create"
        ?
          <div className="flex justify-end gap-x-2 cursor-pointer">
            <span 
              className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1"
              onClick={() => dispatch(incrProjCount())}              
            >
              +
            </span>
            {
              form_count > 1
              ?
                <span 
                  className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-800 ring-1"
                  onClick={() => dispatch(decrProjCount())}              
                >
                  -
                </span>
              : <></>
            }
          </div>
        : <></>
      }
      <div className="grid grid-cols-1 lg:gap-x-6 gap-y-8 lg:grid-cols-2">
        {
          self_proj_data?.map((proj) => {
            return (
              type === "Update" && proj?.name === "key"
              ? <></>
              :
                <div id={proj?.name}>
                  <label htmlFor={proj?.name} className="block text-sm font-medium leading-6 text-gray-900">
                    {proj?.label}
                    { type === "Create" && proj?.required ? <i className="required">&emsp;*required</i> : ""}
                  </label>
                  <div className="mt-2">
                    {
                      proj?.name === "description"
                      ?
                        <TextArea
                          name={proj?.name}              
                          placeholder={proj?.inputValue} 
                        />
                      :
                        type === "Create" && proj?.required
                        ? 
                          <input
                            required
                            name={proj?.name}     
                            type={proj?.inputType}               
                            placeholder={proj?.inputValue}
                            className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        :
                          <input
                            name={proj?.name}     
                            type={proj?.inputType}               
                            placeholder={proj?.inputValue}                              
                            className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                    }
                  </div>
                </div>
            );
          })
        }
      </div>
    </div>
  )
}

  const SkillType = ({inputType,parentType,type}) => {
    return (
      <div className="border-t border-b pb-12">
        {
          inputType?.map((skillType) => {
            return (
              <div className="grid grid-cols-1 lg:gap-x-6 gap-y-8 lg:grid-cols-2">
                <div className="mt-10">
                  <label htmlFor={skillType?.name} className="block text-sm font-medium leading-6 text-gray-900">
                    {skillType?.label}
                    { type === "Create" && skillType?.required ? <i className="required">&emsp;*required</i> : ""}
                  </label>
                </div>
                <div name={parentType} className="lg:mt-10">
                {
                  skillType?.name === "keywords"
                  ?
                    <TextArea
                      name={skillType?.name}
                      placeholder={skillType?.inputValue}
                    />
                  :
                    <input
                      required
                      name={skillType?.name}     
                      type={skillType?.inputType}               
                      placeholder={skillType?.inputValue}
                      className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                }
                </div>
              </div>
            );
          })
        }   
      </div>
    );
  }

export function CreateSkillSelfInfo({type}) {
  const self_skill_data = selfSkillFormat();
  const dispatch = useDispatch();
  const form_count = useSelector(state => state.addForm.skillsCount);

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 lg:gap-x-6 gap-y-8 lg:grid-cols-1">
        {
          self_skill_data?.map((skill) => {
            return (
              type === "Update" && skill?.name === "key"
              ? <></>
              :
                <div id={skill?.name}>
                  {
                    skill?.name !== "key"
                    ?
                    <div className="grid grid-cols-2">
                      <label htmlFor={skill?.name} className="block text-sm font-medium leading-6 text-gray-900">
                        {skill?.label}
                        { type === "Create" && skill?.required ? <i className="required">&emsp;*required</i> : ""}
                      </label>
                      {
                        skill?.name === "technical" || skill?.name === "behaivioral"
                        ?
                          <div className="flex justify-end gap-x-2 cursor-pointer">
                            <span 
                              className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1"
                              onClick={() => dispatch(incrSkillsCount(skill?.name))}              
                            >
                              +
                            </span>
                            {
                              skill?.name === "technical" && form_count?.technical > 1
                              ?
                                <span 
                                  className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-800 ring-1"
                                  onClick={() => dispatch(decrSkillsCount("technical"))}              
                                >
                                  -
                                </span>
                              : form_count?.behaivioral > 1
                              ?
                                <span 
                                  className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-800 ring-1"
                                  onClick={() => dispatch(decrSkillsCount("behaivioral"))}              
                                >
                                  -
                                </span>
                              : <></>
                            }
                          </div>
                        : <></>
                      }
                    </div>
                    : 
                      <label htmlFor={skill?.name} className="block text-sm font-medium leading-6 text-gray-900">
                        {skill?.label}
                        { type === "Create" && skill?.required ? <i className="required">&emsp;*required</i> : ""}
                      </label>
                  }

                  <div className="mt-2">
                    {
                        skill?.name === "key"
                        ? 
                          <input
                            required
                            name={skill?.name}     
                            type={skill?.inputType}               
                            placeholder={skill?.inputValue}
                            className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        : 
                        skill?.name === "technical"
                        ?
                          Array.apply(0, Array(form_count?.technical-1)).map(() => {
                            return (
                              <SkillType 
                                inputType={skill?.inputType} 
                                parentType="technical"
                                type={type} 
                              />
                            );
                          })                          
                        : skill?.name === "behaivioral"
                        ?
                          Array.apply(0, Array(form_count?.behaivioral-1)).map(() => {
                            return (
                              <SkillType 
                                inputType={skill?.inputType} 
                                parentType="behaivioral"
                                type={type} 
                              />
                            );
                          })  
                        : <></>
                    }
                  </div>
                </div>
            );
          })
        }
      </div>
    </div>
  )
}

export function CreateAchvmntsSelfInfo({type}) {
  const self_achvmnt_data = selfAchvmntFormat();
  const dispatch = useDispatch();
  const form_count = useSelector(state => state.addForm.achievementsCount);

  return (
    <div className="mt-10">
      {
        type === "Create"
        ?
          <div className="flex justify-end gap-x-2 cursor-pointer">
            <span 
              className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1"
              onClick={() => dispatch(incrAchvmntCount())}              
            >
              +
            </span>
            {
              form_count > 1
              ?
                <span 
                  className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-800 ring-1"
                  onClick={() => dispatch(decrAchvmntCount())}              
                >
                  -
                </span>
              : <></>
            }
          </div>
        : <></>
      }
      <div className="grid grid-cols-1 lg:gap-x-6 gap-y-8 lg:grid-cols-2">
        {
          self_achvmnt_data?.map((achvmnt) => {
            return (
              type === "Update" && achvmnt?.name === "key"
              ? <></>
              :
                <div id={achvmnt?.name}>
                  <label htmlFor={achvmnt?.name} className="block text-sm font-medium leading-6 text-gray-900">
                    {achvmnt?.label}
                    { type === "Create" && achvmnt?.required ? <i className="required">&emsp;*required</i> : ""}
                  </label>
                  <div className="mt-2">
                    {
                      achvmnt?.name === "description"
                      ?
                        <TextArea
                          name={achvmnt?.name}              
                          placeholder={achvmnt?.inputValue} 
                        />
                      :
                        type === "Create" && achvmnt?.required
                        ? 
                          <input
                            required
                            name={achvmnt?.name}     
                            type={achvmnt?.inputType}               
                            placeholder={achvmnt?.inputValue}
                            className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        :
                          <input
                            name={achvmnt?.name}     
                            type={achvmnt?.inputType}               
                            placeholder={achvmnt?.inputValue}                              
                            className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                    }
                  </div>
                </div>
            );
          })
        }
      </div>
    </div>
  )
}

export function CreateCrtSelfInfo({type}) {
  const self_crt_data = selfCrtFormat();
  const dispatch = useDispatch();
  const form_count = useSelector(state => state.addForm.certificationsCount);

  return (
    <div className="mt-10">
      {
        type === "Create"
        ?
          <div className="flex justify-end gap-x-2 cursor-pointer">
            <span 
              className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-sm font-medium text-green-700 ring-1"
              onClick={() => dispatch(incrCrtCount())}              
            >
              +
            </span>
            {
              form_count > 1
              ?
                <span 
                  className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-800 ring-1"
                  onClick={() => dispatch(decrCrtCount())}              
                >
                  -
                </span>
              : <></>
            }
          </div>
        : <></>
      }
      <div className="grid grid-cols-1 lg:gap-x-6 gap-y-8 lg:grid-cols-2">
        {
          self_crt_data?.map((crt) => {
            return (
              type === "Update" && crt?.name === "key"
              ? <></>
              :
                <div id={crt?.name}>
                  <label htmlFor={crt?.name} className="block text-sm font-medium leading-6 text-gray-900">
                    {crt?.label}
                    { type === "Create" && crt?.required ? <i className="required">&emsp;*required</i> : ""}
                  </label>
                  <div className="mt-2">
                    {
                      crt?.name === "description"
                      ?
                        <TextArea
                          name={crt?.name}              
                          placeholder={crt?.inputValue} 
                        />
                      :
                        type === "Create" && crt?.required
                        ? 
                          <input
                            required
                            name={crt?.name}     
                            type={crt?.inputType}               
                            placeholder={crt?.inputValue}
                            className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        :
                          <input
                            name={crt?.name}     
                            type={crt?.inputType}               
                            placeholder={crt?.inputValue}                              
                            className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                    }
                  </div>
                </div>
            );
          })
        }
      </div>
    </div>
  )
}
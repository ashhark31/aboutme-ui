import { 
    dashBlogFormat,
    dashIntroFormat, dashTestiFormat
 } from "./input.data.format";

import { ProfilePic, TextArea } from "./self.create";

export default function CreateIntroDashInfo({type}) {
    const self_intro_data = dashIntroFormat();
    return (
      <div className="mt-10 grid grid-cols-1 lg:gap-x-6 gap-y-8 lg:grid-cols-2">
        {
          self_intro_data?.map((intro) => {
            return (
                type === "Update" && intro?.name === "key"
                ? <></>
                :
                    <div id={intro?.name}>
                        <label htmlFor={intro?.name} className="block text-sm font-medium leading-6 text-gray-900">
                            {intro?.label}
                            { type === "Create" && intro?.required ? <i className="required">&emsp;*required</i> : ""}
                        </label>
                        <div className="mt-2">
                            {
                                intro?.name === "description"
                                ?
                                    <TextArea
                                        name={intro?.name}              
                                        placeholder={intro?.inputValue} 
                                    />
                                :  
                                    type === "Create" && intro?.required
                                    ? 
                                    <input
                                        required
                                        name={intro?.name}     
                                        type={intro?.inputType}               
                                        placeholder={intro?.inputValue}
                                        className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    :
                                    <input
                                        name={intro?.name}     
                                        type={intro?.inputType}               
                                        placeholder={intro?.inputValue}
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

export function CreateTestiDashInfo({type}) {
    const self_testi_data = dashTestiFormat();
    return (
      <div className="mt-10 grid grid-cols-1 lg:gap-x-6 gap-y-8 lg:grid-cols-2">
        {
          self_testi_data?.map((testi) => {
            return (
                testi?.inputType === "file" 
              ? <ProfilePic base={testi} />
              :
                type === "Update" && testi?.name === "key"
                ? <></>
                :
                <div id={testi?.name}>
                  <label htmlFor={testi?.name} className="block text-sm font-medium leading-6 text-gray-900">
                    {testi?.label}
                    { type === "Create" && testi?.required ? <i className="required">&emsp;*required</i> : ""}
                  </label>
                  <div className="mt-2">
                    {
                        testi?.name === "feedback"
                        ?
                            <TextArea
                                name={testi?.name}              
                                placeholder={testi?.inputValue} 
                            />
                        :  
                            type === "Create" && testi?.required
                            ? 
                            <input
                                required
                                name={testi?.name}     
                                type={testi?.inputType}               
                                placeholder={testi?.inputValue}
                                className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            :
                            <input
                                name={testi?.name}     
                                type={testi?.inputType}               
                                placeholder={testi?.inputValue}
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

export function CreateBlogDashInfo({type}) {
    const self_blog_data = dashBlogFormat();
    return (
      <div className="mt-10 grid grid-cols-1 lg:gap-x-6 gap-y-8 lg:grid-cols-2">
        {
          self_blog_data?.map((blog) => {
            return (
                blog?.inputType === "file" 
              ? <ProfilePic base={blog} />
              :
                type === "Update" && blog?.name === "key"
                ? <></>
                :
                <div id={blog?.name}>
                  <label htmlFor={blog?.name} className="block text-sm font-medium leading-6 text-gray-900">
                    {blog?.label}
                    { type === "Create" && blog?.required ? <i className="required">&emsp;*required</i> : ""}
                  </label>
                  <div className="mt-2">
                    {
                        blog?.name === "content"
                        ?
                            <TextArea
                                name={blog?.name}              
                                placeholder={blog?.inputValue} 
                            />
                        :  
                            type === "Create" && blog?.required
                            ? 
                            <input
                                required
                                name={blog?.name}     
                                type={blog?.inputType}               
                                placeholder={blog?.inputValue}
                                className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            :
                            <input
                                name={blog?.name}     
                                type={blog?.inputType}               
                                placeholder={blog?.inputValue}
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
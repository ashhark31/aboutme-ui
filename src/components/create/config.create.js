import { configKeyFormat } from "./input.data.format";

export default function CreateKeyConfigInfo({type}) {
    const config_key_data = configKeyFormat();
    return (
      <div className="mt-10">
        <div className="grid grid-cols-1 lg:gap-x-6 gap-y-8 lg:grid-cols-2">
          {
            config_key_data?.map((configKey) => {
              return (
                  type === "Update" && configKey?.name === "key"
                  ? <></>
                  :
                    <div id={configKey?.name}>
                      <label htmlFor={configKey?.name} className="block text-sm font-medium leading-6 text-gray-900">
                        {configKey?.label}
                        { type === "Create" && configKey?.required ? <i className="required">&emsp;*required</i> : ""}
                      </label>
                      <div className="mt-2">
                        {
                            type === "Create" && configKey?.required
                            ? 
                            <input
                                required
                                name={configKey?.name}     
                                type={configKey?.inputType}               
                                placeholder={configKey?.inputValue}
                                className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            :
                            <input
                                name={configKey?.name}     
                                type={configKey?.inputType}               
                                placeholder={configKey?.inputValue}                              
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
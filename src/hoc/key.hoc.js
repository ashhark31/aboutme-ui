
const KeyInfoField = ({type,children}) => {
  return (
    <div className='mt-10'>
        <div className="border-b pb-10">
            <label htmlFor="key" className="block text-sm font-medium leading-6 text-gray-900">
                Key 
                { type === "Update" || type === "Delete" ? <i className="required">&emsp;*required</i> : ""}               
            </label>
            <div className="mt-2">
                {
                    type === "Profile"
                    ?
                        <input
                            name="key"     
                            type="text"               
                            placeholder="text@mail.com"
                            className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    :
                        type === "Update" || type === "Delete"
                        ?
                            <input
                                required
                                name="key"     
                                type="number"               
                                placeholder="027072000"
                                className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        :
                            <input
                                name="key"     
                                type="number"               
                                placeholder="027072000"
                                className="block w-full rounded-md border-0 p-[10px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                }
            </div>
        </div>
        {children}
    </div>
  )
}

export default KeyInfoField
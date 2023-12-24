import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

export default function ReadSettingInfo({section}) {
    const readData = useSelector(state => state.readApiData?.readData);
    const location = useLocation()?.pathname;
    return (
        readData._id
        ?
            <div className='mt-10'>
                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Admin {section} Details</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{location}</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div key={readData?._id} className="flex justify-center -space-x-1 overflow-hidden">
                        <Avatar>
                            {readData?.["firstName"]?.charAt(0)?.toUpperCase() + readData?.["lastName"]?.charAt(0)?.toUpperCase()}
                        </Avatar>
                    </div>
                    {
                    Object.entries(readData).map(([key,value]) => {
                        return (
                            <div key={key} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">{key}</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{value.toString()}</dd>
                            </div>
                        );
                    })
                    }
                </dl>
                </div>
            </div>
        :   <></>
    )
}
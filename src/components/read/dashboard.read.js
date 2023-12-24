import { useDispatch, useSelector } from "react-redux";
import { setClickedDataKey } from "../../reducers";
import { Avatar } from "@mui/material";
import DescriptionList from "../common.method";

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

const ReadIntroDashInfo = ({readData}) => {
    const dispatch = useDispatch();
    const getPersonData = (key) => {
        keys.introInfoCtrlKey = key;
        dispatch(setClickedDataKey(keys));
    }

    return (
        <ul role="list" className="mt-10 divide-y divide-gray-100">
            {
                readData?.map((data) => (
                    <li 
                        key={data?.["key"]} 
                        onClick={() => getPersonData(data?.["key"])}
                        className="cursor-pointer flex justify-between gap-x-6 py-5"
                    >
                        <div className="flex min-w-0 gap-x-4">                            
                            <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                                {data?.["key"]}
                            </p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                created at {data?.["createdAt"]}
                            </p>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}

const ReadTestiDashInfo = ({readData}) => {
    const dispatch = useDispatch();
    const getPersonData = (key) => {
        keys.testInfoCtrlKey = key;
        dispatch(setClickedDataKey(keys));
    }

    return (
        <ul role="list" className="mt-10 divide-y divide-gray-100">
            {
                readData?.map((data) => (
                    <li 
                        key={data?.["key"]} 
                        onClick={() => getPersonData(data?.["key"])}
                        className="cursor-pointer flex justify-between gap-x-6 py-5"
                    >
                        <div className="flex min-w-0 gap-x-4">
                            {
                                data?.["userProfile"]
                                ?
                                    <img 
                                        className="h-12 w-12 flex-none rounded-full bg-gray-50" 
                                        src={data?.["userProfile"]} 
                                        alt=""
                                    />
                                :
                                    <Avatar>
                                        {data?.["userName"]?.charAt(0)?.toUpperCase() + data?.["userName"]?.charAt(1)?.toUpperCase()}
                                    </Avatar>
                            }
                            
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                    {data?.["userName"]}
                                </p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                created at {data?.["createdAt"]}
                            </p>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}

const ReadBlogDashInfo = ({readData}) => {
    const dispatch = useDispatch();
    const getPersonData = (key) => {
        keys.blogInfoCtrlKey = key;
        dispatch(setClickedDataKey(keys));
    }

    return (
        <ul role="list" className="mt-10 divide-y divide-gray-100">
            {
                readData?.map((data) => (
                    <li 
                        key={data?.["key"]} 
                        onClick={() => getPersonData(data?.["key"])}
                        className="cursor-pointer flex justify-between gap-x-6 py-5"
                    >
                        <div className="flex min-w-0 gap-x-4">                            
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                    {data?.["key"]}
                                </p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                created at {data?.["createdAt"]}
                            </p>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}

export default function ReadDashboardInfo({section}) {
    const readDataKey = useSelector(state => state.readData);
    const readData = useSelector(state => state.readApiData?.readData);
    
    return (
        readData?.length
        ? 
            section === "Intro"
            ?
                readDataKey?.introInfoCtrlKey 
                ? 
                    <DescriptionList ctrlKey={readDataKey?.introInfoCtrlKey} />
                :  
                readData[0]?.key
                ?
                    <ReadIntroDashInfo readData={readData} />     
                :   <></>
            :   
            section === "Testimonials"
            ?
                readDataKey?.testInfoCtrlKey 
                ? 
                    <DescriptionList ctrlKey={readDataKey?.testInfoCtrlKey} />
                :  
                readData[0]?.key
                ?
                    <ReadTestiDashInfo readData={readData} />
                :   <></>
            :
            section === "Blog"
            ?
                readDataKey?.blogInfoCtrlKey 
                ? 
                    <DescriptionList ctrlKey={readDataKey?.blogInfoCtrlKey} />
                :  
                readData[0]?.key
                ?
                    <ReadBlogDashInfo readData={readData} />
                :   <></>
            : <></>
        : <></>
    )
}
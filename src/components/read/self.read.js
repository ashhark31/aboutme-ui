import { setClickedDataKey } from '../../reducers';
import DescriptionList from '../common.method';
import { useDispatch, useSelector } from 'react-redux'
import Avatar from '@mui/material/Avatar';

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

const ReadBaseSelfInfo = ({readData}) => {
    const dispatch = useDispatch();
    const getPersonData = (key) => {
        keys.baseInfoCtrlKey = key;
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
                                data?.["baseProfileCtrl"]
                                ?
                                    <img 
                                        className="h-12 w-12 flex-none rounded-full bg-gray-50" 
                                        src={data?.["baseProfileCtrl"]} 
                                        alt=""
                                    />
                                :
                                    <Avatar>
                                        {data?.["userFirstName"]?.charAt(0)?.toUpperCase() + data?.["userLastName"]?.charAt(0)?.toUpperCase()}
                                    </Avatar>
                            }
                            
                            <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                                {data?.["userFirstName"] + " " + data?.["userLastName"]}
                            </p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                {data?.['userEmailInfo']}
                            </p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">
                                {data?.["headlineInfoCtrl"]}
                            </p>
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

const ReadExpSelfInfo = ({readData}) => {
    const dispatch = useDispatch();
    const getPersonData = (key) => {
        keys.empId = key;
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
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                {data?.['position']}
                            </p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">
                                {data?.["companyName"]}
                            </p>
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

const ReadProjSelfInfo = ({readData}) => {
    const dispatch = useDispatch();
    const getPersonData = (key) => {
        keys.projectId = key;
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
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                {data?.['projectTitle']}
                            </p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">
                                {data?.["url"] ? data?.["url"] : "No URL Found"}
                            </p>
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

const ReadSkillSelfInfo = ({readData}) => {
    const dispatch = useDispatch();
    const getPersonData = (key) => {
        keys.skillId = key;
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

const ReadAchvmntSelfInfo = ({readData}) => {
    const dispatch = useDispatch();
    const getPersonData = (key) => {
        keys.achvmntId = key;
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
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                {data?.['achvmntTitle']}
                            </p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">
                                {data?.["url"] ? data?.["url"] : "No URL Found"}
                            </p>
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

const ReadCrtSelfInfo = ({readData}) => {
    const dispatch = useDispatch();
    const getPersonData = (key) => {
        keys.certId = key;
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
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                {data?.['certName']}
                            </p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">
                                {data?.["url"] ? data?.["url"] : "No URL Found"}
                            </p>
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

export default function ReadSelfInfo({section}) {
    const readDataKey = useSelector(state => state.readData);
    let readData = useSelector(state => state.readApiData?.readData);
    
    return (
        readData?.length
        ? 
            section === "Base"
            ?
                readDataKey?.baseInfoCtrlKey 
                ? 
                    <DescriptionList ctrlKey={readDataKey?.baseInfoCtrlKey} />
                :  
                readData[0]?.key
                ?
                    <ReadBaseSelfInfo readData={readData} />     
                :   <></>
            :   
            section === "Experience"
            ?
                readDataKey?.empId 
                ? 
                    <DescriptionList ctrlKey={readDataKey?.empId} />
                :  
                readData[0]?.key
                ?
                    <ReadExpSelfInfo readData={readData} />
                :   <></>
            :
            section === "Projects"
            ?
                readDataKey?.projectId 
                ? 
                    <DescriptionList ctrlKey={readDataKey?.projectId} />
                :  
                readData[0]?.key
                ?
                    <ReadProjSelfInfo readData={readData} />
                :   <></>
            : section === "Skills"
            ?
                readDataKey?.skillId 
                ? 
                    <DescriptionList ctrlKey={readDataKey?.skillId} />
                :  
                readData[0]?.key
                ?
                    <ReadSkillSelfInfo readData={readData} />
                :   <></>
            : section === "Achievements"
            ?
                readDataKey?.achvmntId 
                ? 
                    <DescriptionList ctrlKey={readDataKey?.achvmntId} />
                :  
                readData[0]?.key
                ?
                    <ReadAchvmntSelfInfo readData={readData} />
                :   <></>
            : section === "Certifications"
            ?
                readDataKey?.certId 
                ? 
                    <DescriptionList ctrlKey={readDataKey?.certId} />
                :  
                readData[0]?.key
                ?
                    <ReadCrtSelfInfo readData={readData} />
                :   <></>
            : <></>
        : <></>
    )
}
  
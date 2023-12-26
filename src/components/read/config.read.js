import { useDispatch, useSelector } from "react-redux";
import { setClickedDataKey } from "../../reducers";
import DescriptionList from "../common.method";

let keys = {
    baseInfoCtrlKey: 0,
    eduId: 0,
    empId: 0,
    projectId: 0,
    skillId: 0,
    achvmntId: 0,
    certId: 0,
    introInfoCtrlKey: 0,
    testInfoCtrlKey: 0,
    blogInfoCtrlKey: 0,
    configKey: 0
}

const ReadKeyConfigInfo = ({readData}) => {
    const dispatch = useDispatch();
    const getPersonData = (key) => {
        keys.configKey = key;
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

export default function ReadConfigInfo({section}) {
    const readDataKey = useSelector(state => state.readData);
    const readData = useSelector(state => state.readApiData?.readData);
    
    return (
        readData?.length
        ? 
            section === "Key"
            ?
                readDataKey?.configKey 
                ? 
                    <DescriptionList ctrlKey={readDataKey?.configKey} />
                :  
                readData[0]?.key
                ?
                    <ReadKeyConfigInfo readData={readData} />     
                :   <></>
            :   <></>
        : <></>
    )
}
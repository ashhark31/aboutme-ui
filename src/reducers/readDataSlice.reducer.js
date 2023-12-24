import {createSlice} from '@reduxjs/toolkit'

export const readDataSlice = createSlice({
    name: 'readData',
    initialState: {
        baseInfoCtrlKey: 0,
        empId: 0,
        projectId: 0,
        skillId: 0,
        achvmntId: 0,
        certId: 0,
        introInfoCtrlKey: 0,
        testInfoCtrlKey: 0,
        blogInfoCtrlKey: 0
    },
    reducers: {
        setClickedDataKey: (state,action) => {
            state.baseInfoCtrlKey = action.payload.baseInfoCtrlKey;
            state.empId = action.payload.empId;
            state.projectId = action.payload.projectId;
            state.skillId = action.payload.skillId;
            state.achvmntId = action.payload.achvmntId;
            state.certId = action.payload.certId;
            state.introInfoCtrlKey = action.payload.introInfoCtrlKey;
            state.testInfoCtrlKey = action.payload.testInfoCtrlKey;
            state.blogInfoCtrlKey = action.payload.blogInfoCtrlKey;            
        }
    }
})

export const { setClickedDataKey } = readDataSlice.actions;
export default readDataSlice.reducer;
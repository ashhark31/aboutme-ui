import {createSlice} from '@reduxjs/toolkit'

export const readApiDataSlice = createSlice({
    name: 'readApiData',
    initialState: {
        readData: []
    },
    reducers: {
        setReadApiData: (state, action) => {
            state.readData = action.payload;
        },
        resetReadApiData: (state) => {
            state.readData = [];
        }
    }
})

export const { setReadApiData, resetReadApiData } = readApiDataSlice.actions;
export default readApiDataSlice.reducer;
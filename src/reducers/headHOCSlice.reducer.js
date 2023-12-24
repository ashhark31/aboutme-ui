import {createSlice} from '@reduxjs/toolkit'

export const headHOCSlice = createSlice({
    name: 'headHOC',
    initialState: {
        triggeredMenu: 'Self'
    },
    reducers: {
        setTriggeredMenu: (state,action) => {
            state.triggeredMenu = action.payload;
        }
    }
})

export const { setTriggeredMenu } = headHOCSlice.actions;
export default headHOCSlice.reducer;
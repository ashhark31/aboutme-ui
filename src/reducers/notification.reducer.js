import {createSlice} from '@reduxjs/toolkit'

export const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        isActive: false,
        notifyType: '',
        notifyMessage: ''
    },
    reducers: {
        activateNotify: state => {
            state.isActive = true;
        },
        deactivateNotify: state => {
            state.isActive = false;
        },
        setNotify: (state, action) => {
            state.notifyType = action.payload.notifyType;
            state.notifyMessage = action.payload.notifyMessage;
        }
    }
})

export const { activateNotify, deactivateNotify, setNotify } = notificationSlice.actions;
export default notificationSlice.reducer;
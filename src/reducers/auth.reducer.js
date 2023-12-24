import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        isTokenAvailable: null
    },
    reducers: {
        setTokenAuth: (state,action) => {
            state.isTokenAvailable = action.payload;
        },
        resetTokenAuth: (state,action) => {
            state.isTokenAvailable = false;
        }
    }
})

export const { setTokenAuth,resetTokenAuth } = authSlice.actions;
export default authSlice.reducer;
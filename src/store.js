import {configureStore} from '@reduxjs/toolkit'
import { 
    addFormSlice, 
    authSlice, 
    headHOCSlice, 
    notificationSlice, 
    readApiDataSlice, 
    readDataSlice 
} from './reducers'

export default configureStore({
    reducer: {
        headHOC: headHOCSlice,
        readData: readDataSlice,
        notification: notificationSlice,
        readApiData: readApiDataSlice,
        addForm: addFormSlice,
        authentication: authSlice
    }
})
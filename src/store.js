import {configureStore} from '@reduxjs/toolkit'
import { 
    addFormSlice, 
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
        addForm: addFormSlice
    }
})
export { default as headHOCSlice } from './headHOCSlice.reducer'
export { default as readDataSlice } from './readDataSlice.reducer'
export { default as notificationSlice } from './notification.reducer'
export { default as readApiDataSlice } from './readApiData.reducer'
export { default as addFormSlice } from './addForm.reducer'

export { setTriggeredMenu } from './headHOCSlice.reducer'
export { setClickedDataKey } from './readDataSlice.reducer'

export { 
    activateNotify, 
    deactivateNotify, 
    setNotify 
} from './notification.reducer'

export { 
    setReadApiData,
    resetReadApiData
} from './readApiData.reducer'

export { 
    incrEduCount,
    incrExpCount,
    incrProjCount,
    incrSkillsCount,
    incrAchvmntCount,
    incrCrtCount,
    decrEduCount,
    decrExpCount,
    decrProjCount,
    decrSkillsCount,
    decrAchvmntCount,
    decrCrtCount 
} from './addForm.reducer'
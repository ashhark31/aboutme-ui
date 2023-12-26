import {createSlice} from '@reduxjs/toolkit'

export const addFormSlice = createSlice({
    name: 'addForm',
    initialState: {
        educationCount: 1,
        experienceCount: 1,
        projectsCount: 1,
        skillsCount: {technical:1, behaivioral:1},
        achievementsCount: 1,
        certificationsCount: 1
    },
    reducers: {
        incrEduCount: (state) => {
            state.educationCount += 1;
        },
        incrExpCount: (state) => {
            state.experienceCount += 1;
        },
        incrProjCount: (state) => {
            state.projectsCount += 1;
        },
        incrSkillsCount: (state,action) => {
            if(action.payload === "technical"){
                state.skillsCount.technical += 1;
            } else {
                state.skillsCount.behaivioral += 1;
            }
        },
        incrAchvmntCount: (state) => {
            state.achievementsCount += 1;
        },
        incrCrtCount: (state) => {
            state.certificationsCount += 1;
        },

        decrEduCount: (state) => {
            if(state.educationCount === 2){
                state.educationCount = 1;
            } else{
                state.educationCount -= 1;
            }
        },
        decrExpCount: (state) => {
            if(state.experienceCount === 2){
                state.experienceCount = 1;
            } else{
                state.experienceCount -= 1;
            }
        },
        decrProjCount: (state) => {
            if(state.projectsCount === 2){
                state.projectsCount = 1;
            } else{
                state.projectsCount -= 1;
            }
        },
        decrSkillsCount: (state,action) => {
            if(action.payload === "technical"){
                if(state.skillsCount.technical === 2){
                    state.skillsCount.technical = 1;
                } else{
                    state.skillsCount.technical -= 1;
                }
            } else {
                if(state.skillsCount.behaivioral === 2){
                    state.skillsCount.behaivioral = 1;
                } else{
                    state.skillsCount.behaivioral -= 1;
                }
            }            
        },
        decrAchvmntCount: (state) => {
            if(state.achievementsCount === 2){
                state.achievementsCount = 1;
            } else{
                state.achievementsCount -= 1;
            }
        },
        decrCrtCount: (state) => {
            if(state.certificationsCount === 2){
                state.certificationsCount = 1;
            } else{
                state.certificationsCount -= 1;
            }
        }
    }
})

export const { 
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
} = addFormSlice.actions;
export default addFormSlice.reducer;
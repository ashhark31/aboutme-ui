export { 
    createSelfPayload, 
    createDashboardPayload,
    createCSSConfigPayload,
    createSettingPayload 
} from './create.payload'

export {
    readSelfPayload,
    readDashboardPayload,
    readCSSConfigPayload,
    readSettingPayload
} from './read.payload'

export {
    updateSelfPayload,
    updateDashboardPayload,
    updateCSSConfigPayload,
    updateSettingPayload
} from './update.payload'

export {
    deleteSelfPayload,
    deleteDashboardPayload,
    deleteCssConfigPayload,
    deleteSettingPayload
} from './delete.payload'

export {
    adminAuthPayload
} from './auth.payload'

export const readFileDataAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            resolve(event.target.result);
        };

        reader.onerror = (err) => {
            reject(err);
        };

        reader.readAsDataURL(file);
    });
}
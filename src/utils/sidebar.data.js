
const sidemenus = {
    'Self': ['Base', 'Experience', 'Projects', 'Skills', 'Achievements', 'Certifications'],
    'Dashboard': ['Intro', 'Testimonials', 'Blog'],
    'CSS_Config': ['Default'],
    'Setting': ['Profile', 'Change_Password', 'Logout']
}

const form_menus = ['Create', 'Read', 'Update', 'Delete'];

export const getSideMenuData = (key) => {
    return sidemenus[key];
}

export const getFormMenuData = () => {
    return form_menus;
}

const sidemenus = {
    'Self': ['Base', 'Education', 'Experience', 'Projects', 'Skills', 'Achievements', 'Certifications'],
    'Dashboard': ['Intro', 'Testimonials', 'Blog'],
    'Config': ['Key'],
    'Setting': ['Profile', 'Change_Password', 'Logout']
}

const form_menus = ['Create', 'Read', 'Update', 'Delete'];

export const getSideMenuData = (key) => {
    return sidemenus[key];
}

export const getFormMenuData = () => {
    return form_menus;
}
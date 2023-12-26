
export const selfBaseFormat = () => {
    return (
        [
            {
                name: "baseProfileCtrl",
                label: "Profile Pic",
                inputType: "file",
                inputValue: "profile",
                required: false
            },
            {
                name: "key",
                label: "Key",
                inputType: "number",
                inputValue: "027072000",
                required: true
            },
            {
                name: "headlineInfoCtrl",
                label: "Headline",
                inputType: "text",
                inputValue: "Software Engineer",
                required: true
            },
            {
                name: "userFirstName",
                label: "First Name",
                inputType: "text",
                inputValue: "Mohammad",
                required: true
            },
            {
                name: "userLastName",
                label: "Last Name",
                inputType: "text",
                inputValue: "Ashhar",
                required: true
            },
            {
                name: "userEmailInfo",
                label: "Email",
                inputType: "email",
                inputValue: "ashhark31@gmail.com",
                required: true
            },
            {
                name: "userDOBCtrl",
                label: "DOB",
                inputType: "date",
                inputValue: "2000-07-27",
                required: false
            },
            {
                name: "addressCityInfo",
                label: "City",
                inputType: "text",
                inputValue: "Jabalpur",
                required: false
            },
            {
                name: "addressStateInfo",
                label: "State",
                inputType: "text",
                inputValue: "MP",
                required: false
            },
            {
                name: "addressCountryInfo",
                label: "Country",
                inputType: "text",
                inputValue: "India",
                required: false
            },
            {
                name: "linkedinInfoCtrl",
                label: "Linkedin URL",
                inputType: "text",
                inputValue: "https://www.linkedin.com/in/mdashhar/",
                required: true
            },
            {
                name: "twitterInfoCtrl",
                label: "Twitter URL",
                inputType: "text",
                inputValue: "https://twitter.com/MohammadAs26913",
                required: false
            }
        ]
    )
}

export const selfEducationFormat = () => {
    return (
        [
            {
                name: "key",
                label: "key",
                inputType: "number",
                inputValue: "30072022",
                required: true
            },
            {
                name: "degreeName",
                label: "Degree Name",
                inputType: "text",
                inputValue: "Bachelors",
                required: true
            },
            {
                name: "fieldOfStudy",
                label: "Field Of Study",
                inputType: "text",
                inputValue: "CSE",
                required: true
            },
            {
                name: "startDate",
                label: "Start Date",
                inputType: "date",
                inputValue: "2023-07-03",
                required: true
            },
            {
                name: "endDate",
                label: "End Date",
                inputType: "date",
                inputValue: "2023-07-03",
                required: false
            },
            {
                name: "currentlyPursuing",
                label: "Currently Pursuing",
                inputType: "checkbox",
                inputValue: "",
                required: false
            }
        ]
    )
}

export const selfExperienceFormat = () => {
    return (
        [
            {
                name: "key",
                label: "key",
                inputType: "number",
                inputValue: "512641",
                required: true
            },
            {
                name: "companyName",
                label: "Company Name",
                inputType: "text",
                inputValue: "CGI",
                required: true
            },
            {
                name: "position",
                label: "Position",
                inputType: "text",
                inputValue: "Associate Software Engineer",
                required: true
            },
            {
                name: "startDate",
                label: "Start Date",
                inputType: "date",
                inputValue: "2023-07-03",
                required: true
            },
            {
                name: "endDate",
                label: "End Date",
                inputType: "date",
                inputValue: "2023-07-03",
                required: false
            },
            {
                name: "currentlyWorking",
                label: "Currently Working",
                inputType: "checkbox",
                inputValue: "",
                required: false
            },
            {
                name: "description",
                label: "Description",
                inputType: "text",
                inputValue: "Worked as a Full Stack Developer",
                required: false
            }
        ]
    )
}

export const selfProjectsFormat = () => {
    return (
        [
            {
                name: "key",
                label: "key",
                inputType: "number",
                inputValue: "121212",
                required: true
            },
            {
                name: "projectTitle",
                label: "Project Title",
                inputType: "text",
                inputValue: "myPortfolio",
                required: true
            },
            {
                name: "url",
                label: "URL",
                inputType: "text",
                inputValue: "https://www.myPortfolio.com",
                required: false
            },
            {
                name: "techUsed",
                label: "Tech Used",
                inputType: "text",
                inputValue: "React.JS,Express.JS,MongoDB,Node.JS",
                required: false
            },
            {
                name: "description",
                label: "Description",
                inputType: "text",
                inputValue: "Presenting personal portfolio website using MERN stack.",
                required: false
            }
        ]
    )
}

export const selfSkillFormat = () => {
    const technical = [
        {
            name: "name",
            label: "Skill Name",
            inputType: "text",
            inputValue: "Frontend",
            required: true
        },
        {
            name: "keywords",
            label: "Keywords",
            inputType: "text",
            inputValue: "React.JS, etc.",
            required: true
        }
    ];
    const behaivioral = [
        {
            name: "name",
            label: "Skill Name",
            inputType: "text",
            inputValue: "Creativity",
            required: true
        },
        {
            name: "keywords",
            label: "Keywords",
            inputType: "text",
            inputValue: "Critical Thinking, etc.",
            required: true
        }
    ];
    return (
        [
            {
                name: "key",
                label: "key",
                inputType: "number",
                inputValue: "323232",
                required: true
            },
            {
                name: "technical",
                label: "Technical Skills",
                inputType: technical,
                inputValue: "",
                required: false
            },
            {
                name: "behaivioral",
                label: "Behaivioral Skills",
                inputType: behaivioral,
                inputValue: "",
                required: false
            }
        ]
    )
}

export const selfAchvmntFormat = () => {
    return (
        [
            {
                name: "key",
                label: "key",
                inputType: "number",
                inputValue: "121212",
                required: true
            },
            {
                name: "achvmntTitle",
                label: "Achievement Title",
                inputType: "text",
                inputValue: "Problem Solving",
                required: true
            },
            {
                name: "url",
                label: "URL",
                inputType: "text",
                inputValue: "https://www.hackerrank.com",
                required: false
            },
            {
                name: "description",
                label: "Description",
                inputType: "text",
                inputValue: "4 star coder",
                required: false
            }
        ]
    )
}

export const selfCrtFormat = () => {
    return (
        [
            {
                name: "key",
                label: "key",
                inputType: "number",
                inputValue: "454545",
                required: true
            },
            {
                name: "certName",
                label: "Certification Name",
                inputType: "text",
                inputValue: "Python",
                required: true
            },
            {
                name: "url",
                label: "URL",
                inputType: "text",
                inputValue: "drive.google.com",
                required: false
            },
            {
                name: "description",
                label: "Description",
                inputType: "text",
                inputValue: "Python Certification",
                required: false
            }
        ]
    )
}


export const dashIntroFormat = () => {
    return [
        {
            name: "key",
            label: "Key",
            inputType: "number",
            inputValue: "1000001",
            required: true
        },
        {
            name: "description",
            label: "Description",
            inputType: "text",
            inputValue: "Welcome to myPortfolio."
        }
    ]
}

export const dashTestiFormat = () => {
    return [
        {
            name: "userProfile",
            label: "User Profile",
            inputType: "file",
            inputValue: "profile",
            required: false
        },
        {
            name: "key",
            label: "Key",
            inputType: "number",
            inputValue: "1000001",
            required: true
        },
        {
            name: "userName",
            label: "User Name",
            inputType: "text",
            inputValue: "mak",
            required: true
        },
        {
            name: "headline",
            label: "Headline",
            inputType: "text",
            inputValue: "Developer",
            required: false
        },
        {
            name: "feedback",
            label: "Feedback",
            inputType: "text",
            inputValue: "This site is very interactive.",
            required: true
        }
    ]
}

export const dashBlogFormat = () => {
    return [
        {
            name: "key",
            label: "Key",
            inputType: "number",
            inputValue: "1000001",
            required: true
        },
        {
            name: "headline",
            label: "Headline",
            inputType: "text",
            inputValue: "IT Jobs",
            required: true
        },
        {
            name: "content",
            label: "Content",
            inputType: "text",
            inputValue: "Recession is still going on. There is still less job opportunity.",
            required: true
        },
        {
            name: "image",
            label: "Image",
            inputType: "file",
            inputValue: "image",
            required: false
        }
    ]
}


export const configKeyFormat = () => {
    return (
        [
            {
                name: "key",
                label: "key",
                inputType: "number",
                inputValue: "1000001",
                required: true
            },
            {
                name: "baseInfoCtrlKey",
                label: "Base Info Key",
                inputType: "number",
                inputValue: "27072000",
                required: true
            },
            {
                name: "eduId",
                label: "Education ID",
                inputType: "text",
                inputValue: "30072022,30082022",
                required: true
            },
            {
                name: "empId",
                label: "Experience Id",
                inputType: "text",
                inputValue: "512641,654565",
                required: true
            },
            {
                name: "projectId",
                label: "Project Id",
                inputType: "text",
                inputValue: "121212",
                required: true
            },
            {
                name: "skillId",
                label: "Skill Id",
                inputType: "number",
                inputValue: "323232",
                required: true
            },
            {
                name: "achvmntId",
                label: "Achievement Id",
                inputType: "text",
                inputValue: "121212",
                required: true
            },
            {
                name: "certId",
                label: "Certification Id",
                inputType: "text",
                inputValue: "454545",
                required: true
            }
        ]
    )
}
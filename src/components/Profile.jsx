

import React from "react";
import { useTheme } from "../context/ThemeContext";

const Profile = () => {
    const { language, data, isDarkMode } = useTheme();
    const currentLanguage = data[language].profile;

    return (
        <section className={`max-w-25xl  pt-35   ${isDarkMode ? 'bg-[#252128]' : 'bg-white-100'} min-h-screen`}>

            <h2
                className={`text-[48px] font-semibold mb-8 ml-[110px]
            ${isDarkMode ? 'text-[#AEBCCF]' : 'text-gray-900'}`}
            >
                {currentLanguage.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ml-[110px]">
                <div>
                    <h3
                        className={`text-[24px] font-medium mb-4
                    ${isDarkMode ? 'text-[#B7AAFF]' : 'text-indigo-600'}`}
                    >
                        {currentLanguage.profileSection.title}
                    </h3>
                    <ul
                        className={`space-y-2 
                    ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        <li>
                            <strong>{currentLanguage.profileSection.birthDate}:</strong>{" "}
                            {currentLanguage.profileSection.birthDateValue}
                        </li>
                        <li>
                            <strong>{currentLanguage.profileSection.city}:</strong>{" "}
                            {currentLanguage.profileSection.cityValue}
                        </li>
                        <li>
                            <strong>{currentLanguage.profileSection.education}:</strong>{" "}
                            {currentLanguage.profileSection.educationValue}
                        </li>
                        <li>
                            <strong>{currentLanguage.profileSection.degree}:</strong>{" "}
                            {currentLanguage.profileSection.degreeValue}
                        </li>
                        <li>
                            <strong>{currentLanguage.profileSection.role}:</strong>{" "}
                            {currentLanguage.profileSection.roleValue}
                        </li>
                    </ul>
                </div>

                <div>
                    <h3
                        className={`text-[24px] font-medium mb-4
                    ${isDarkMode ? 'text-[#B7AAFF]' : 'text-indigo-600'}`}
                    >
                        {currentLanguage.aboutSection.title}
                    </h3>
                    <p className={`text-${isDarkMode ? 'white' : 'black'} max-w-[500px]`}>
                        {currentLanguage.aboutSection.description}
                    </p>


                </div>
            </div>
            <div className="border-b-2 w-[1300px] mx-auto border-black-400 mt-30"></div>

        </section>

    );
};

export default Profile;

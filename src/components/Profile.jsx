import React from "react";
import { useTheme } from "../context/ThemeContext";

const Profile = () => {
    const { language, data, isDarkMode } = useTheme();
    const currentLanguage = data[language].profile;

    return (
        <section
            className={`w-full pt-50 min-h-screen ${isDarkMode ? 'bg-[#252128]' : 'bg-white-100'}`}
        >
            <h2
                className={`text-4xl sm:text-5xl lg:text-6xl font-semibold mb-8 mx-4 sm:mx-10 lg:mx-[110px] 
                ${isDarkMode ? 'text-[#AEBCCF]' : 'text-gray-900'}`}
            >
                {currentLanguage.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mx-4 sm:mx-10 lg:mx-[110px]">
                <div>
                    <h3
                        className={`text-2xl sm:text-3xl font-medium mb-4
                        ${isDarkMode ? 'text-[#B7AAFF]' : 'text-indigo-600'}`}
                    >
                        {currentLanguage.profileSection.title}
                    </h3>
                    <ul
                        className={`space-y-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
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
                        className={`text-2xl sm:text-3xl font-medium mb-4
                        ${isDarkMode ? 'text-[#B7AAFF]' : 'text-indigo-600'}`}
                    >
                        {currentLanguage.aboutSection.title}
                    </h3>
                    <p className={`text-base sm:text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'} max-w-[500px]`}>
                        {currentLanguage.aboutSection.description}
                    </p>
                </div>
            </div>

            <div className="border-b-2 w-full sm:w-[1300px] mx-auto border-black-400 mt-36"></div>

        </section>
    );
};

export default Profile;

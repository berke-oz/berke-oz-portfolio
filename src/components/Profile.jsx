// src/components/Profile.jsx

import React from "react";
import { useTheme } from "../context/ThemeContext";

const Profile = () => {
    const { language, data } = useTheme();
    const currentLanguage = data[language].profile;

    return (
        <section className="max-w-6xl mx-auto pt-45 py-12 ml-[110px]">
            <h2 className="text-[48px] font-semibold text-gray-900 mb-8">
                {currentLanguage.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Sol taraf - Kişisel Bilgiler */}
                <div>
                    <h3 className="text-[24px] font-medium text-indigo-600 mb-4">
                        {currentLanguage.profileSection.title}
                    </h3>
                    <ul className="text-gray-900 space-y-2">
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

                {/* Sağ taraf - About Me */}
                <div>
                    <h3 className="text-[24px] font-medium text-indigo-600 mb-4">
                        {currentLanguage.aboutSection.title}
                    </h3>
                    <p className="text-gray-600">{currentLanguage.aboutSection.description}</p>
                </div>
            </div>
        </section>
    );
};

export default Profile;

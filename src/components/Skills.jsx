// src/components/Skills.jsx

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
    const { language, data } = useTheme();
    const currentLanguage = data[language].skills;

    return (
        <section className="text-left pr-48 ">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-[48px] font-semibold text-gray-900 mb-8">
                    {currentLanguage.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-55">
                    {currentLanguage.skillsList.map((skill, index) => (
                        <div className="text-left" key={index}>
                            <h3 className="text-[30px] font-semibold text-indigo-600">
                                {skill.name}
                            </h3>
                            <p className="text-gray-600 mt-5">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
    const { language, data, isDarkMode } = useTheme();
    const currentLanguage = data[language].skills;

    return (
        <section className={`text-left pr-48 ${isDarkMode ? 'bg-[#252128]' : 'bg-white-100'}`}>
            <div className="max-w-6xl mx-auto px-6">

                <h2 className={`text-[48px] font-semibold mb-8 ${isDarkMode ? `text-[#AEBCCF]` : `text-black-500`}`}>
                    {currentLanguage.title}
                </h2>





                <div className="flex justify-center space-x-6 overflow-x-auto">
                    {currentLanguage.skillsList.map((skill, index) => (
                        <div className="text-center" key={index}>
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-[160px] h-[160px] mx-auto mb-4"
                            />
                            <h3 className={`text-[18px] font-semibold ${isDarkMode ? `text-[#B7AAFF]` : `text-[#4338CA]`}`}>{skill.name}</h3>
                        </div>
                    ))}
                </div>
                <div className="border-b-2 w-[1250px] border-black-300 mt-30"></div>
            </div>
        </section>
    );
};

export default Skills;

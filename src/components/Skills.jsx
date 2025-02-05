import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
    const { language, data, isDarkMode } = useTheme();
    const currentLanguage = data[language].skills;

    return (
        <section id="skills" className={`text-left px-6 md:pr-48 ${isDarkMode ? 'bg-[#252128]' : 'bg-white-100'}`}>
            <div className="max-w-6xl mx-auto">
                <h2 className={`text-3xl md:text-[48px] font-semibold mb-6 md:mb-8 ${isDarkMode ? `text-[#AEBCCF]` : `text-black-500`}`}>
                    {currentLanguage.title}
                </h2>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 overflow-x-auto">
                    {currentLanguage.skillsList.map((skill, index) => (
                        <div className="text-center w-24 md:w-40 flex-shrink-0" key={index}>
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-[80px] h-[80px] md:w-[160px] md:h-[160px] mx-auto mb-2 md:mb-4"
                            />
                            <h3 className={`text-sm md:text-[18px] font-semibold ${isDarkMode ? `text-[#B7AAFF]` : `text-[#4338CA]`}`}>{skill.name}</h3>
                        </div>
                    ))}
                </div>
                <div className="border-b-2 w-full md:w-[1250px] border-black-300 mt-10 md:mt-30"></div>
            </div>
        </section>
    );
};

export default Skills;

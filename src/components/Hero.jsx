import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const { language, data, isDarkMode } = useTheme();
    const currentLanguage = data[language].hero;

    return (
        <div
            className={`min-h-screen flex items-center pl-[125px] pt-3 pb-32 ${isDarkMode ? 'bg-[#252128]' : 'bg-white-100'}`}
        >
            <div className={`text-left pr-20 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <div className="flex items-center space-x-4 mb-15">
                    <div className={`w-30 h-[2px] ${isDarkMode ? `bg-[#B7AAFF]` : `bg-[#3730A3]`}`}></div>
                    <span className={`text-[20px] font-semibold ${isDarkMode ? 'text-[#B7AAFF]' : 'text-[#4338CA]'}`} >
                        {currentLanguage.name}
                    </span>
                </div>
                <h1 className={`text-7xl font-bold mb-2 ${isDarkMode ? 'text-[#AEBCCF]' : 'text-black'}`}>
                    {currentLanguage.title1}
                </h1>
                <h1 className={`text-7xl font-bold mb-12 ${isDarkMode ? 'text-[#AEBCCF]' : 'text-black'}`}>
                    {currentLanguage.title2}
                </h1>

                <p className="text-lg max-w-2xl mb-8">
                    {currentLanguage.description}
                </p>

                <div className="flex justify-left space-x-3">
                    {currentLanguage.buttons.map((button, index) => (
                        <a
                            key={index}
                            href={button.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                className={`flex items-center space-x-2 px-6 py-3 rounded-xl border-2 transition-colors duration-300 
                ${isDarkMode
                                        ? 'bg-[#383838] text-[#E1E1FF] border-[#E1E1FF] hover:bg-[#E1E1FF] hover:text-[#000000]'
                                        : 'bg-white text-[#3730A3] border-[#3730A3] hover:bg-[#3730A3] hover:text-white'
                                    }`}
                            >
                                <img src={button.icon} alt={button.name} className="w-5 h-5" />
                                <span>{button.name}</span>
                            </button>
                        </a>
                    ))}
                </div>
            </div>


            <div className="w-[476px] h-[375px] rounded-xl overflow-hidden">
                <img
                    src={currentLanguage.photo}
                    alt="Berke"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default Hero;

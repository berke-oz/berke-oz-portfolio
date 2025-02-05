import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const { isDarkMode, toggleDarkMode, language, toggleLanguage, data } = useTheme();

    const currentLanguage = data[language];

    return (
        <header className={`p-7 ${isDarkMode ? 'bg-[#252128]' : 'bg-white text-gray-900'} pr-45`}>
            <div className="container mx-auto flex flex-col">
                {/* Normal web tasarımı (Desktop) */}
                <div className="hidden sm:flex justify-end items-center font-mono font-bold text-gray-600 pt-[23px]">
                    <div className="flex items-center space-x-1">
                        <div className="flex items-center space-x-2">
                            <div
                                className="w-14 h-8 flex items-center rounded-full p-1"
                                style={{ backgroundColor: '#4731D3' }}
                                onClick={toggleDarkMode}
                            >
                                <div
                                    className={`w-6 h-6 rounded-full shadow-md transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}
                                    style={{ backgroundColor: '#FFE86E' }}
                                ></div>
                            </div>
                            <span>{isDarkMode ? currentLanguage.header.darkMode : currentLanguage.header.lightMode}</span>
                        </div>
                        <span>|</span>
                        <div className="flex items-center gap-1">
                            <span
                                className="hover:text-blue-700 transition-colors duration-300"
                                style={{ color: '#4731D3' }}
                            >
                                {currentLanguage.header.language.turkish}
                            </span>
                            <button onClick={toggleLanguage}>
                                {currentLanguage.header.language.switch}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Responsive tasarım (Mobil ve Tablet) */}
                <div className="flex sm:hidden justify-center items-center font-mono font-bold text-gray-600 pt-[23px] space-x-4">
                    <div className="flex items-center space-x-2">
                        <div
                            className="w-14 h-8 flex items-center rounded-full p-1"
                            style={{ backgroundColor: '#4731D3' }}
                            onClick={toggleDarkMode}
                        >
                            <div
                                className={`w-6 h-6 rounded-full shadow-md transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}
                                style={{ backgroundColor: '#FFE86E' }}
                            ></div>
                        </div>
                        <span>{isDarkMode ? currentLanguage.header.darkMode : currentLanguage.header.lightMode}</span>
                    </div>
                    <span>|</span>
                    <div className="flex items-center gap-1">
                        <span
                            className="hover:text-blue-700 transition-colors duration-300"
                            style={{ color: '#4731D3' }}
                        >
                            {currentLanguage.header.language.turkish}
                        </span>
                        <button onClick={toggleLanguage}>
                            {currentLanguage.header.language.switch}
                        </button>
                    </div>
                </div>

                {/* Navbar linkleri her zaman sağda */}
                <div className="ml-auto flex items-center pt-8 space-x-8 justify-end w-full mt-8">
                    <a
                        href="#skills"
                        className={`p-2 w-25 rounded-lg border-2 transition-colors duration-300 
            ${isDarkMode
                                ? 'bg-[#252128] text-[#6B7280] border-transparent hover:bg-white hover:text-[#3730A3] hover:border-[#3730A3]'
                                : 'bg-white text-black border-transparent hover:border-[#5540d6] hover:text-[#5540d6]'
                            }`}
                    >
                        {currentLanguage.header.buttons.skills}
                    </a>

                    <a
                        href="#projects"
                        className={`p-2 w-25 rounded-lg border-2 transition-colors duration-300 
            ${isDarkMode
                                ? 'bg-[#252128] text-[#6B7280] border-transparent hover:bg-white hover:text-[#3730A3] hover:border-[#3730A3]'
                                : 'bg-white text-black border-transparent hover:border-[#5540d6] hover:text-[#5540d6]'
                            }`}
                    >
                        {currentLanguage.header.buttons.projects}
                    </a>

                    <a
                        href="#footer"
                        className={`p-2 w-25 rounded-lg border-2 transition-colors duration-300 
            ${isDarkMode
                                ? 'bg-[#252128] text-[#6B7280] border-transparent hover:bg-white hover:text-[#3730A3] hover:border-[#3730A3]'
                                : 'bg-white text-black border-transparent hover:border-[#5540d6] hover:text-[#5540d6]'
                            }`}
                    >
                        {currentLanguage.header.buttons.hireMe}
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;

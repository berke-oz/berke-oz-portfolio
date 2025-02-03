

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const { isDarkMode, toggleDarkMode, language, toggleLanguage, data } = useTheme();

    const currentLanguage = data[language];

    return (
        <header className={`p-7 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} pr-45`}>
            <div className="container mx-auto flex flex-col">
                {/* Üst Kısım: Toggle Butonu ve Dil Seçeneği */}
                <div className="flex justify-end items-center font-mono font-bold text-gray-600 pt-[23px]">
                    <div className="flex items-center space-x-1">
                        {/* Toggle Butonu ve DARK MODE Metni */}
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
                            <span>{currentLanguage.header.darkMode}</span>
                        </div>

                        {/* Dikey Ayırıcı Çizgi */}
                        <span>|</span>

                        {/* Dil Seçeneği ve GEÇ Butonu */}
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

                {/* Alt Kısım: Butonlar */}
                <div className="ml-auto flex items-center pt-8 space-x-8 text-black">
                    <button
                        className="p-2 w-25 bg-white rounded-lg border-2 border-transparent hover:border-[#5540d6] hover:text-[#5540d6] transition-colors duration-300"
                    >
                        {currentLanguage.header.buttons.skills}
                    </button>
                    <button
                        className="p-2 w-25 bg-white rounded-lg border-2 border-transparent hover:border-[#5540d6] hover:text-[#5540d6] transition-colors duration-300"
                    >
                        {currentLanguage.header.buttons.projects}
                    </button>
                    <button
                        className="p-2 w-25 bg-white rounded-lg border-2 border-transparent hover:border-[#5540d6] hover:text-[#5540d6] transition-colors duration-300"
                    >
                        {currentLanguage.header.buttons.hireMe}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

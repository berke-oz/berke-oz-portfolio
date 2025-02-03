// src/components/Hero.jsx

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const { language, data } = useTheme();
    const currentLanguage = data[language].hero;

    return (
        <div className="min-h-screen flex items-center bg-white-100 pl-[125px] pt-3 pb-32">
            {/* Metin ve Butonlar */}
            <div className="text-left pr-20 ">
                {/* İsim ve Başlık */}
                <div className="flex items-center space-x-4 mb-15">
                    <div className="w-30 h-[2px] bg-[#3730A3]"></div> {/* Düz çizgi */}
                    <span className="text-[20px] text-[#4338CA] font-semibold ">
                        {currentLanguage.name}
                    </span>
                </div>
                <h1 className="text-7xl font-bold text-gray-900 mb-2">
                    {currentLanguage.title1}
                </h1>
                <h1 className="text-7xl font-bold text-gray-900 mb-12">
                    {currentLanguage.title2}
                </h1>

                {/* Açıklama Metni */}
                <p className="text-lg text-gray-700 max-w-2xl mb-8">
                    {currentLanguage.description}
                </p>

                {/* Butonlar */}
                <div className="flex justify-left space-x-3">
                    <button className="bg-white text-[#3730A3] px-6 py-3 rounded-xl border-2 border-[#3730A3] hover:bg-[#3730A3] hover:text-white transition-colors duration-300">
                        {currentLanguage.buttons.hireMe}
                    </button>
                    <button className="bg-white text-[#3730A3] px-6 py-3 rounded-xl border-2 border-[#3730A3] hover:bg-[#3730A3] hover:text-white transition-colors duration-300">
                        {currentLanguage.buttons.github}
                    </button>
                    <button className="bg-white text-[#3730A3] px-6 py-3 rounded-xl border-2 border-[#3730A3] hover:bg-[#3730A3] hover:text-white transition-colors duration-300">
                        {currentLanguage.buttons.linkedin}
                    </button>
                </div>
            </div>

            {/* Resim */}
            <div className="w-[476px] h-[375px] rounded-xl overflow-hidden  ">
                <img
                    src=".\images\nQzb7Aej_400x400.jpg"
                    alt="Aimila Su"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default Hero;

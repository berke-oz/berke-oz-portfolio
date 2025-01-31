import React from 'react';

const Header = () => {
    return (
        <header className="p-7 bg-white text-gray-900 pr-45">
            <div className="container mx-auto flex flex-col">
                {/* Üst Kısım: Toggle Butonu ve Dil Seçeneği */}
                <div className="flex justify-end items-center font-mono font-bold text-gray-600 pt-[23px]">
                    <div className="flex items-center space-x-1">
                        {/* Toggle Butonu ve DARK MODE Metni */}
                        <div className="flex items-center space-x-2">
                            <div
                                className="w-14 h-8 flex items-center rounded-full p-1"
                                style={{ backgroundColor: '#4731D3' }}
                            >
                                <div
                                    className="w-6 h-6 rounded-full shadow-md transform translate-x-0"
                                    style={{ backgroundColor: '#FFE86E' }}
                                ></div>
                            </div>
                            <span>DARK MODE</span>
                        </div>

                        {/* Dikey Ayırıcı Çizgi */}
                        <span>|</span>

                        {/* TÜRKÇE ve GEÇ Butonu */}
                        <div className="flex items-center">
                            <span
                                className="hover:text-blue-700 transition-colors duration-300"
                                style={{ color: '#4731D3' }}
                            >
                                TÜRKÇE
                            </span>
                            <button>'YE GEÇ</button>
                        </div>
                    </div>
                </div>

                {/* Alt Kısım: Butonlar */}
                <div className="ml-auto flex items-center pt-8 space-x-8 text-black">
                    {/* Butonlar */}
                    <button className="p-2 w-25 bg-white rounded-lg border-2 border-transparent hover:border-[#5540d6] hover:text-[#5540d6] transition-colors duration-300">
                        Skills
                    </button>
                    <button className="p-2 w-25 bg-white rounded-lg border-2 border-transparent hover:border-[#5540d6] hover:text-[#5540d6] transition-colors duration-300">
                        Projects
                    </button>
                    <button className="p-2 w-25 bg-white rounded-lg border-2 border-transparent hover:border-[#5540d6] hover:text-[#5540d6] transition-colors duration-300">
                        Hire me
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
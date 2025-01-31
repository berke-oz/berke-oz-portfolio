import React from 'react';

const Hero = () => {
    return (
        <div className="min-h-screen flex items-center bg-white-100 pl-[125px] pt-3 pb-45">
            {/* Metin ve Butonlar */}
            <div className="text-left pr-20 ">
                {/* İsim ve Başlık */}
                <h1 className="text-7xl font-bold text-gray-900 mb-2">Creative thinker</h1>
                <h1 className="text-7xl font-bold text-gray-900 mb-12">Minimalism lover</h1>

                {/* Açıklama Metni */}
                <p className="text-lg text-gray-700 max-w-2xl mb-8">
                    Hi, I'm Aimila. I'm a full-stack developer. If you are looking for a developer who can craft solid and scalable frontend products with great user experiences. Let's shake hands with me.
                </p>

                {/* Butonlar */}
                <div className="flex justify-left space-x-3">
                    <button className="bg-white text-[#3730A3] px-6 py-3 rounded-xl border-2 border-[#3730A3] hover:bg-[#3730A3] hover:text-white transition-colors duration-300">
                        Hire me
                    </button>
                    <button className="bg-white text-[#3730A3] px-6 py-3 rounded-xl border-2 border-[#3730A3] hover:bg-[#3730A3] hover:text-white transition-colors duration-300">
                        Github
                    </button>
                    <button className="bg-white text-[#3730A3] px-6 py-3 rounded-xl border-2 border-[#3730A3] hover:bg-[#3730A3] hover:text-white transition-colors duration-300">
                        Linkedin
                    </button>
                </div>
            </div>

            {/* Resim */}
            <div className="w-[476px] h-[375px] rounded-xl overflow-hidden  ">
                <img
                    src="./images/software-nedir.jpg" // Resim URL'si (örnek)
                    alt="Aimila Su"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default Hero;
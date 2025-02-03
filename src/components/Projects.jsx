import React from "react";

const Portfolio = () => {
    return (
        <div className="container mx-auto p-8 ">
            <h2 className="text-[48px] font-semibold text-gray-900 mb-8 pl-20">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="pt-4 max-w-xs mx-auto">
                    <img src="./images/software-nedir.jpg" alt="PROJE_ADI" className="rounded-xl w-full h-40 object-cover mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Teknolojik Yemekler</h3>
                    <p className="text-gray-600 text-sm mb-3">PROJE_AÇIKLAMASI</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">React.js</span>
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">CSS</span>
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">ARAÇ_3</span>
                    </div>
                </div>
                <div className="pt-4 max-w-xs mx-auto">
                    <img src="./images/software-nedir.jpg" alt="PROJE_ADI" className="rounded-xl w-full h-40 object-cover mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Teknolojik Yemekler</h3>
                    <p className="text-gray-600 text-sm mb-3">PROJE_AÇIKLAMASI</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">ARAÇ_1</span>
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">ARAÇ_2</span>
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">ARAÇ_3</span>
                    </div>
                </div>
                <div className="pt-4 max-w-xs mx-auto">
                    <img src="./images/software-nedir.jpg" alt="PROJE_ADI" className="rounded-xl w-full h-40 object-cover mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Teknolojik Yemekler</h3>
                    <p className="text-gray-600 text-sm mb-3">PROJE_AÇIKLAMASI</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">ARAÇ_1</span>
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">ARAÇ_2</span>
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">ARAÇ_3</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

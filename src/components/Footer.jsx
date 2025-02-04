import { useTheme } from '../context/ThemeContext';

export default function Footer() {
    const { data, language, isDarkMode } = useTheme();
    const footerData = data[language].footer;

    return (
        <footer className={`flex flex-col items-center justify-between p-10 md:flex-row ${isDarkMode ? 'bg-[#141414]' : 'bg-[#F9F9F9]'} shadow-md text-lg h-90`}>
            <div className="text-center md:text-left">
                <p className={`text-4xl font-semibold ${isDarkMode ? 'text-[#AEBCCF]' : 'text-gray-900'} pl-18`}>
                    {footerData.text}
                </p>
                <a
                    href={`mailto:${footerData.email}`}
                    className={`font-medium flex items-center space-x-2 mt-4 text-xl pl-18 pt-20 ${isDarkMode ? 'text-[#BAB2E7]' : 'text-red-600'}`}
                >
                    <span role="img" aria-label="email">👉</span>
                    <span>{footerData.email}</span>
                </a>

            </div>
            <div className="flex space-x-6 mt-6 md:mt-0 text-xl pt-30">
                {footerData.socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        className={`${isDarkMode ? `text-[#AEBCCF]` : `text-black`}`}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </footer>
    );
}

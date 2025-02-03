import React, { createContext, useContext, useState } from 'react';
import data from '../data/data';


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [language, setLanguage] = useState('tr');

    const toggleDarkMode = () => setIsDarkMode(prev => !prev);
    const toggleLanguage = () => setLanguage(prev => (prev === 'tr' ? 'en' : 'tr'));

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, language, toggleLanguage, data }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
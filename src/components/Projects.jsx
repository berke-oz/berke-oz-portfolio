import React from "react";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
    const { language, data, isDarkMode } = useTheme();
    const projects = data[language].projects.projectsList;

    return (
        <div className={`container mx-auto p-8 ${isDarkMode ? 'bg-[#252128]' : 'bg-white-100'}`}>
            <h2 className={`text-[48px] font-semibold mb-8 pl-20 ${isDarkMode ? 'text-[#CFCBFF]' : 'text-gray-900'}`}>{data[language].projects.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="pt-4 max-w-xs mx-auto">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="rounded-xl w-full h-40 object-cover mb-4"
                        />
                        <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-[#CFCBFF]' : 'text-gray-900'}`}>{project.name}</h3>
                        <p className={`text-sm mb-3 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool, toolIndex) => (
                                <span
                                    key={toolIndex}
                                    className={`px-4 py-2 text-xs ${isDarkMode ? 'bg-[#383838] text-[#8F88FF] font-bold' : 'bg-gray-200 text-gray-800 font-bold'} rounded-lg`}
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                        <div className="flex space-x-45 mt-3">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-[#E1E1FF] hover:underline`}
                            >
                                GitHub
                            </a>
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-[#E1E1FF] hover:underline`}
                            >
                                Website
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

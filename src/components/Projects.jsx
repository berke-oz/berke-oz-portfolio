import React from "react";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
    const { language, data } = useTheme();
    const projects = data[language].projects.projectsList;

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-[48px] font-semibold text-gray-900 mb-8 pl-20">{data[language].projects.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="pt-4 max-w-xs mx-auto">
                        <img
                            src={project.image}
                            alt={project.name}
                            className="rounded-xl w-full h-40 object-cover mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool, toolIndex) => (
                                <span key={toolIndex} className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">{tool}</span>
                            ))}
                        </div>
                        <div className="flex space-x-45 mt-3">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                GitHub
                            </a>
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
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

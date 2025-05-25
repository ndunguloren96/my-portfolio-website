import React from "react";

const ProjectCard = ({ title = "[Project Title]", description = "Project description coming soon.", link = "#" }) => (
  <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="mb-2">{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary-dark underline">
      View Project
    </a>
  </div>
);

export default ProjectCard;

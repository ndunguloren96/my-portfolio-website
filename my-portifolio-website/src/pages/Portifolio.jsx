// src/pages/Portfolio.jsx
import React from 'react';

const projects = [
  {
    title: "E-commerce Website",
    description: "Full-featured online store with payment processing, inventory management, and admin dashboard.",
    technologies: ["Python", "Django", "PostgreSQL", "HTML/CSS"],
    image: "/assets/projects/ecommerce.jpg",
    link: "#",
    github: "#"
  },
  {
    title: "University Attendance System",
    description: "Digital solution for tracking student attendance with reporting and analytics features.",
    technologies: ["Python", "Django", "MySQL", "JavaScript"],
    image: "/assets/projects/attendance.jpg",
    link: "#",
    github: "#"
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                {/* Project image placeholder */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/projects/default.jpg';
                    e.target.className = 'w-full h-full object-contain opacity-20 p-8';
                  }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary-dark dark:bg-primary-light text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition"
                  >
                    View Project
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-primary-dark dark:border-primary-light text-primary-dark dark:text-primary-light rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
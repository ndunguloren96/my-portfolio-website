// src/pages/TechStack.jsx
import React from 'react';

const techStack = [
  { name: 'Python', category: 'Languages', logo: '/assets/tech-logos/python.png' },
  { name: 'Django', category: 'Frameworks', logo: '/assets/tech-logos/django.png' },
  { name: 'TypeScript', category: 'Languages', logo: '/assets/tech-logos/typescript.png' },
  { name: 'HTML/CSS', category: 'Frontend', logo: '/assets/tech-logos/html-css.png' },
  { name: 'PostgreSQL', category: 'Databases', logo: '/assets/tech-logos/postgresql.png' },
  { name: 'MySQL', category: 'Databases', logo: '/assets/tech-logos/mysql.png' },
  { name: 'Git', category: 'Tools', logo: '/assets/tech-logos/git.png' },
  { name: 'GitHub', category: 'Tools', logo: '/assets/tech-logos/github.png' },
];

const TechStack = () => {
  const categories = [...new Set(techStack.map(item => item.category))];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Tech Stack</h2>
        
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-6 text-primary-dark dark:text-primary-light border-b pb-2">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {techStack
                  .filter(item => item.category === category)
                  .map((tech) => (
                    <div 
                      key={tech.name}
                      className="bg-white dark:bg-gray-900 rounded-lg p-4 flex flex-col items-center border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
                    >
                      <div className="w-16 h-16 mb-3 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                        {/* Replace with actual logo image */}
                        <img 
                          src={tech.logo} 
                          alt={tech.name} 
                          className="h-10 w-10 object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/assets/tech-logos/default.png';
                            e.target.className = 'h-8 w-8 object-contain opacity-50';
                          }}
                        />
                      </div>
                      <span className="font-medium text-center">{tech.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary-dark dark:text-primary-light">
            My Development Environment
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">•</span>
              <span>OS: Linux/Windows</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              <span>Editor: VS Code</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              <span>Version Control: Git + GitHub</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              <span>Project Management: Agile Methodology</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
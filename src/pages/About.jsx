// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-dark dark:text-primary-light">
              Professional Background
            </h3>
            <p className="mb-4">
              I'm a Backend Developer specializing in Python and Django with experience building scalable server-side applications.
            </p>
            <p className="mb-4">
              My expertise includes designing RESTful APIs, database architecture, and implementing security best practices.
            </p>
            <p>
              Currently leading development of an e-commerce platform with payment processing and inventory management features.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-dark dark:text-primary-light">
              Leadership & Approach
            </h3>
            <p className="mb-4">
              As a technical leader, I focus on creating maintainable systems with clear documentation and robust testing.
            </p>
            <p>
              I believe in iterative development, continuous improvement, and mentoring team members to elevate collective skills.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Development Principles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Reliability', 
                desc: 'Systems that work consistently under load' 
              },
              { 
                title: 'Security', 
                desc: 'Data protection as a core requirement' 
              },
              { 
                title: 'Scalability', 
                desc: 'Architectures that grow with demand' 
              },
              { 
                title: 'Maintainability', 
                desc: 'Clean, documented code' 
              },
              { 
                title: 'Performance', 
                desc: 'Optimized database queries and caching' 
              },
              { 
                title: 'Testing', 
                desc: 'Comprehensive test coverage' 
              }
            ].map((principle, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <h4 className="font-bold mb-2 text-primary-dark dark:text-primary-light">
                  {principle.title}
                </h4>
                <p className="text-sm">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary-dark dark:border-primary-light pl-4 py-2">
              <h4 className="font-bold">Computer Science Degree</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">The Co-operative University of Kenya</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">2023 - Present</p>
            </div>
            {/* Add additional education items as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

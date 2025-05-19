// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's build <span className="text-primary-dark dark:text-primary-light">reliable systems</span>
          </h1>
          
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-4 border-primary-dark dark:border-primary-light">
              {/* Profile image placeholder - replace with your image */}
              <div className="w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400">
                Profile Image
              </div>
            </div>
          </div>

          <p className="text-xl mb-8 leading-relaxed">
            Hello, I'm <span className="font-semibold">Loren Ndung'u</span><br />
            <span className="text-primary-dark dark:text-primary-light">Backend Developer and Python Expert</span><br />
            I focus on building reliable server-side systems and software.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:ndunguloren96@gmail.com"
              className="px-6 py-3 bg-primary-dark dark:bg-primary-light text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition"
            >
              Let's Connect
            </a>
            <a
              href="/path-to-your-cv.pdf" // Update with your actual CV path
              download
              className="px-6 py-3 border-2 border-primary-dark dark:border-primary-light text-primary-dark dark:text-primary-light rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Current Project */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-16">
          <h2 className="text-2xl font-bold mb-4">Currently Building</h2>
          <p className="mb-4">
            I'm currently working on an e-commerce website with features like:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Payment gateway integration</li>
            <li>Inventory management</li>
            <li>User authentication system</li>
          </ul>
          <Link 
            to="/portfolio" 
            className="text-primary-dark dark:text-primary-light font-medium hover:underline"
          >
            View my portfolio →
          </Link>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-2xl font-bold mb-6">What I Bring to the Table</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Problem solver', 'Communication', 'Disciplined', 'Consistent', 'Reliable', 'Active Listener', 'Adaptable'].map((skill) => (
              <div 
                key={skill} 
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
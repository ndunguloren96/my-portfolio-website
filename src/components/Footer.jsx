// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-black dark:text-white mb-4 md:mb-0">
            © {new Date().getFullYear()} Loren Ndung'u. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/ndunguloren96" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-primary-dark dark:hover:text-secondary-light transition"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/loren-ndungu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-primary-dark dark:hover:text-secondary-light transition"
            >
              LinkedIn
            </a>
            <a 
              href="https://x.com/ndunguloren96" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-primary-dark dark:hover:text-secondary-light transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
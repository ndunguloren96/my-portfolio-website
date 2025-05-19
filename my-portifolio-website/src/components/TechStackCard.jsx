// src/components/TechStackCard.jsx
import React from 'react';

const TechStackCard = ({ name, logo, proficiency }) => {
  const proficiencyWidth = {
    beginner: '33%',
    intermediate: '66%',
    advanced: '100%',
    expert: '100%'
  }[proficiency] || '0%';

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition">
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mr-4">
          <img 
            src={logo} 
            alt={name}
            className="h-6 w-6 object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/assets/tech-logos/default.png';
              e.target.className = 'h-6 w-6 object-contain opacity-50';
            }}
          />
        </div>
        <h3 className="font-medium">{name}</h3>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-primary-dark dark:bg-primary-light h-2 rounded-full" 
          style={{ width: proficiencyWidth }}
        ></div>
      </div>
      <p className="text-xs text-right mt-1 text-gray-600 dark:text-gray-400">
        {proficiency.charAt(0).toUpperCase() + proficiency.slice(1)}
      </p>
    </div>
  );
};

export default TechStackCard;
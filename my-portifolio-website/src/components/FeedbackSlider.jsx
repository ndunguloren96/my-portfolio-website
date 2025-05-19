// src/components/FeedbackSlider.jsx
import React, { useRef, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Client/Colleague Name",
    role: "Position at Company",
    content: "Loren demonstrated exceptional problem-solving skills when architecting our e-commerce backend. His Django implementation reduced our API response times by 40%.",
    avatar: "/assets/testimonials/avatar1.jpg"
  },
  {
    id: 2,
    name: "Project Manager",
    role: "Tech Company",
    content: "Working with Loren on the attendance system was a pleasure. He consistently delivered reliable code and was proactive about security considerations.",
    avatar: "/assets/testimonials/avatar2.jpg"
  },
  {
    id: 3,
    name: "Team Lead",
    role: "Development Team",
    content: "Loren's Python expertise helped us optimize critical database operations. His disciplined approach to testing ensured smooth deployments.",
    avatar: "/assets/testimonials/avatar3.jpg"
  },
  // Add more testimonials as needed
];

const FeedbackSlider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Update scroll position
  useEffect(() => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0]?.offsetWidth || 300;
      sliderRef.current.scrollTo({
        left: currentIndex * (cardWidth + 24), // 24px for gap
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">What People Say</h2>
        
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-8"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="flex-shrink-0 snap-start w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/testimonials/default-avatar.jpg';
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-primary-dark dark:bg-primary-light' : 'bg-gray-300 dark:bg-gray-600'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSlider;
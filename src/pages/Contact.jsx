// src/pages/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/loren-ndungu', 
      icon: '/assets/social/linkedin.svg' 
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/ndunguloren96', 
      icon: '/assets/social/github.svg' 
    },
    { 
      name: 'Twitter', 
      url: 'https://x.com/ndunguloren96', 
      icon: '/assets/social/twitter.svg' 
    },
    { 
      name: 'WhatsApp', 
      url: '#', // Add your WhatsApp API link
      icon: '/assets/social/whatsapp.svg' 
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-primary-dark dark:text-primary-light">
              Send Me a Message
            </h3>
            
            {submitStatus === 'success' ? (
              <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg mb-6">
                Message sent successfully! I'll get back to you soon.
              </div>
            ) : submitStatus === 'error' ? (
              <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 rounded-lg mb-6">
                Error sending message. Please try again or email me directly.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-dark dark:focus:ring-primary-light focus:border-transparent"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-dark dark:focus:ring-primary-light focus:border-transparent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-dark dark:focus:ring-primary-light focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary-dark dark:bg-primary-light text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary-dark dark:text-primary-light">
                Contact Information
              </h3>
              <p className="mb-2">
                <span className="font-medium">Email:</span> ndunguloren96@gmail.com
              </p>
              <p>
                <span className="font-medium">Location:</span> Nairobi, Kenya
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary-dark dark:text-primary-light">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <div className="w-8 h-8 mr-3 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                      <img 
                        src={social.icon} 
                        alt={social.name}
                        className="h-5 w-5 object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/assets/social/default.svg';
                        }}
                      />
                    </div>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
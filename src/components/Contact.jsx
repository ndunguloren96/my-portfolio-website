import React from "react";

const Contact = ({ showForm }) => (
  <section className="space-y-6 max-w-lg mx-auto">
    <h2 className="text-2xl font-bold">Contact Me</h2>
    <p>
      Interested in working together or have a question? Reach out via the form below or connect with me on social media.
    </p>
    
    {/* Show form only if showForm is true */}
    {showForm && (
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" disabled />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" disabled />
        <textarea placeholder="Your Message" className="w-full p-2 border rounded" rows={4} disabled />
        <button type="submit" className="bg-primary-dark text-white px-4 py-2 rounded opacity-50 cursor-not-allowed" disabled>
          Send (Coming Soon)
        </button>
      </form>
    )}

    <div className="flex space-x-4 mt-4">
      <a href="https://github.com/ndunguloren96" target="_blank" rel="noopener noreferrer" className="underline text-primary-dark">GitHub</a>
      <a href="https://www.linkedin.com/in/loren-ndungu" target="_blank" rel="noopener noreferrer" className="underline text-secondary-dark">LinkedIn</a>
      <a href="https://x.com/ndunguloren96" target="_blank" rel="noopener noreferrer" className="underline text-primary-dark">Twitter</a>
    </div>
  </section>
);

export default Contact;

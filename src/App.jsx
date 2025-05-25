import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./pages/About.jsx";
import TechStack from "./pages/TechStack.jsx"; // Ensure this import is correct
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-white"> {/* Using the 'background' color from tailwind config */}
      <Navbar />
      <main className="flex-grow w-full flex flex-col items-center">
        <section id="hero" className="w-full">
          <Hero />
        </section>

        <section id="about" className="max-w-7xl w-full px-4 sm:px-8 py-8">
          <About />
        </section>

        {/* The TechStack section now handles its own padding and background */}
        <section id="techstack" className="w-full">
          <TechStack />
        </section>

        <section id="portfolio" className="max-w-7xl w-full px-4 sm:px-8 py-8">
          <Portfolio />
        </section>

        <section id="contact" className="max-w-7xl w-full px-4 sm:px-8 py-8">
          <Contact showForm={showContactForm} />
        </section>

        {/* Say Hello Button */}
        <div className="w-full flex justify-center py-8">
          <button
            onClick={() => setShowContactForm(!showContactForm)}
            className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-accent transition"
          >
            {showContactForm ? "Hide Contact Form" : "Say Hello"}
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React, { useState } from "react";
import TechStackCard from "../components/TechStackCard";

// No direct image imports needed as per your existing setup, they come from /public

const techStack = [
    // ALL logos now explicitly point to your existing '/default.png'
    { name: "Python", logo: '/default.png' },
    { name: "Django", logo: '/default.png' },
    { name: "PostgreSQL", logo: '/default.png' },
    { name: "Next.js", logo: '/default.png' },
    { name: "TypeScript", logo: '/default.png' },
    { name: "MySQL", logo: '/default.png' },
    { name: "Docker", logo: '/default.png' },
    { name: "Git", logo: '/default.png' },
];

const TechStack = () => {
    // State to manage the "show more/less" functionality
    const [showAll, setShowAll] = useState(false);
    // Determine which technologies to display (e.g., first 7, or all)
    // I've increased the initial display limit to 9 to demonstrate the toggle
    // more clearly if you have many items. Adjust as desired.
    const initialDisplayLimit = 9;
    const displayedTech = showAll ? techStack : techStack.slice(0, initialDisplayLimit);

    const handleToggle = () => {
        setShowAll(!showAll);
    };

    return (
        <section className="py-16 px-4 md:px-8 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="
                    text-3xl md:text-4xl font-extrabold mb-12
                    text-green-400 uppercase tracking-widest text-center
                ">
                    TECHNOLOGIES
                </h2>
                <div className="
                    flex flex-wrap justify-center items-stretch gap-8 sm:gap-10 md:gap-12 lg:gap-14
                ">
                    {displayedTech.map((tech) => (
                        <TechStackCard key={tech.name} name={tech.name} logo={tech.logo} />
                    ))}
                </div>

                {/* Show More/Less Button */}
                {techStack.length > initialDisplayLimit && ( // Only render if there are more items than the initial limit
                    <div className="text-center mt-12">
                        <button
                            onClick={handleToggle}
                            className="
                                px-8 py-3 rounded-lg font-semibold text-lg
                                bg-green-500 text-gray-900 hover:bg-green-600
                                transition-all duration-300 ease-in-out transform hover:-translate-y-1
                                shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50
                            "
                        >
                            {showAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TechStack;
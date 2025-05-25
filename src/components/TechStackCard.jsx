import React from 'react';

const TechStackCard = ({ name, logo }) => {
    // This component will directly use the 'logo' prop as the image src.
    // Given your setup, '/default.png' or '/logos/some-tech.svg' will work directly.
    const effectiveLogoSrc = logo || '/default.png'; // Assuming default.png is in your public folder

    return (
        <div className="
            flex flex-col items-center justify-center p-4 /* Adjusted padding */
            cursor-pointer group
            transition-transform duration-300 ease-in-out transform hover:-translate-y-2
            /* Removed fixed w/h from outer div to let icon container define size */
            /* Removed bg-accent/primary, shadow-md/border from outer div */
        ">
            {/* Icon Container - The rounded square with dark background */}
            <div className="
                w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 /* Specific width/height for the square */
                bg-gray-800 rounded-2xl flex items-center justify-center /* Dark background, more rounded */
                shadow-lg group-hover:shadow-2xl /* Enhanced shadow on hover */
                border border-gray-700 group-hover:border-green-400 /* Border for subtle depth, green on hover */
                transition-all duration-300 ease-in-out
                flex-shrink-0 /* Ensure this container doesn't shrink */
            ">
                <img
                    src={effectiveLogoSrc} // Use the determined source
                    alt={`${name} logo`}
                    className="
                        w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 /* Size of the icon within the square */
                        object-contain
                        filter grayscale group-hover:grayscale-0 /* Grayscale normally, color on hover */
                        transition-all duration-300 ease-in-out
                    "
                    onError={(e) => {
                        e.target.onerror = null; // Prevents infinite loop
                        e.target.src = '/default.png'; // Fallback to public default.png
                        // Removed direct class changes here; rely on parent styling
                    }}
                />
            </div>
            {/* Technology Name */}
            <p className="
                mt-4 text-lg sm:text-xl md:text-2xl font-medium /* Larger text */
                text-gray-200 group-hover:text-green-400 /* Lighter text, green on hover */
                transition-colors duration-300 ease-in-out
                text-center /* Ensure text is centered */
            ">
                {name}
            </p>
        </div>
    );
};

export default TechStackCard;
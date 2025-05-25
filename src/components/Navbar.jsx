import React from "react";

function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-black text-white p-4 fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-[#2ee59d]">
          Loren Ndung'u
        </a>
        <div className="hidden md:flex justify-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-[#2ee59d] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;

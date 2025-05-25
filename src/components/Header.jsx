import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#techstack" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Fixed header */}
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md dark:shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-black dark:text-white">
            Loren.dev
          </div>

          {/* Desktop Nav - always visible */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-black dark:text-white hover:text-primary dark:hover:text-secondary transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Toggle - always visible */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black dark:text-white text-2xl"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <nav className="md:hidden px-4 pb-4 flex flex-col items-center space-y-2 bg-white dark:bg-black">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-black dark:text-white hover:text-primary dark:hover:text-secondary transition"
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        )}
      </header>

      {/* Spacer div to prevent content hiding under fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Header;

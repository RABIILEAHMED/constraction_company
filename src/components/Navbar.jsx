import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollNavItems = [
    { to: 'hero', label: 'Home' },
    { to: 'services', label: 'Services' },
    { to: 'projects', label: 'Projects' },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    if (isCurrentlyDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span
              onClick={() => {
                scroll.scrollToTop();
                closeMenu();
              }}
              className="text-2xl font-bold text-primary cursor-pointer select-none"
            >
              Doodi Constraction Co.
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-gray-800 dark:text-white font-semibold">
            {isHome &&
              scrollNavItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  spy={true}
                  activeClass="text-orange-600 border-b-2 border-orange-600"
                  className="cursor-pointer hover:text-orange-600 transition"
                  onClick={closeMenu}
                >
                  {item.label}
                </ScrollLink>
              ))}

            {!isHome && (
              <Link to="/" onClick={closeMenu} className="hover:text-orange-600 transition">
                Home
              </Link>
            )}
            <Link to="/AboutUs" onClick={closeMenu} className="hover:text-orange-600 transition">
              About
            </Link>
            <Link to="/contact" onClick={closeMenu} className="hover:text-orange-600 transition">
              Contact
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-xl hover:text-orange-600 transition"
              title="Toggle Dark Mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Hamburger + Dark Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Dark Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-xl text-gray-800 dark:text-white hover:text-orange-600 transition"
              title="Toggle Dark Mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className={`w-6 h-6 transition ${
                  isOpen ? 'text-orange-600' : 'text-gray-800 dark:text-white'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2 text-gray-800 dark:text-white font-medium">
          {isHome &&
            scrollNavItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                offset={-70}
                duration={500}
                className="block cursor-pointer hover:text-orange-600 transition"
                onClick={closeMenu}
              >
                {item.label}
              </ScrollLink>
            ))}

          {!isHome && (
            <Link to="/" onClick={closeMenu} className="block hover:text-orange-600 transition">
              Home
            </Link>
          )}
          <Link to="/AboutUs" onClick={closeMenu} className="block hover:text-orange-600 transition">
            About
          </Link>
          <Link to="/contact" onClick={closeMenu} className="block hover:text-orange-600 transition">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

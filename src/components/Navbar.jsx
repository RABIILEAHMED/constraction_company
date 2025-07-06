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

  // Load saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
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
    <>
      <nav className="fixed top-0 left-0 w-full bg-light dark:bg-dark shadow-md z-50 transition-colors duration-300 font-sans">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <span
            className="text-2xl font-bold text-primary cursor-pointer select-none"
            onClick={() => {
              scroll.scrollToTop();
              closeMenu();
            }}
          >
            Construction Company
          </span>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8 text-dark dark:text-light font-semibold items-center">
            {isHome &&
              scrollNavItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="text-primary border-b-2 border-primary"
                  className="cursor-pointer hover:text-primary transition"
                  onClick={closeMenu}
                >
                  {item.label}
                </ScrollLink>
              ))}

            {!isHome && (
              <Link to="/" onClick={closeMenu} className="hover:text-primary transition">
                Home
              </Link>
            )}
            <Link to="/AboutUs" onClick={closeMenu} className="hover:text-primary transition">
              About
            </Link>
            <Link to="/contact" onClick={closeMenu} className="hover:text-primary transition">
              Contact
            </Link>

            {/* Dark mode toggle desktop */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 text-2xl hover:text-primary transition"
              title="Toggle Dark Mode"
              aria-label="Toggle Dark Mode"
              type="button"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-dark dark:text-light"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.3 5.71a1 1 0 00-1.42-1.42L12 9.17 7.12 4.3a1 1 0 00-1.42 1.42L10.59 12l-4.9 4.88a1 1 0 001.42 1.42L12 14.83l4.88 4.9a1 1 0 001.42-1.42L13.41 12l4.9-4.88z"
                />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-light dark:bg-dark px-6 pb-4 space-y-2 text-dark dark:text-light font-semibold transition-colors duration-300">
            {isHome &&
              scrollNavItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMenu}
                  className="block cursor-pointer hover:text-primary transition"
                >
                  {item.label}
                </ScrollLink>
              ))}

            {!isHome && (
              <Link to="/" onClick={closeMenu} className="block hover:text-primary transition">
                Home
              </Link>
            )}
            <Link to="/AboutUs" onClick={closeMenu} className="block hover:text-primary transition">
              About
            </Link>
            <Link to="/contact" onClick={closeMenu} className="block hover:text-primary transition">
              Contact
            </Link>

            {/* Dark mode toggle mobile */}
            <button
              onClick={() => {
                toggleDarkMode();
                closeMenu();
              }}
              className="text-xl mt-2 hover:text-primary transition"
              title="Toggle Dark Mode"
              type="button"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        )}
      </nav>

      {/* Spacer so content doesn't hide behind fixed navbar */}
      <div className="h-[72px]" />
    </>
  );
};

export default Navbar;

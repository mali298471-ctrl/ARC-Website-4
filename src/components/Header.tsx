import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Add background when scrolled
      setScrolled(currentY > 50);

      // Hide/show navigation based on scroll direction
      if (currentY > lastY.current && currentY > 100) {
        // Scrolling down - hide nav
        setShowNav(false);
        setIsOpen(false); // Close mobile menu when hiding
      } else if (currentY < lastY.current) {
        // Scrolling up - show nav
        setShowNav(true);
      }

      lastY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Help', path: '/help' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Tax Calculator', path: '/tax-calculator' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'h-16 pt-0' : 'h-20 pt-6'
        }`}>
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {scrolled ? (
              <img 
                src="/Logo.png" 
                alt="AR Raheem Consulting" 
                className="h-8 w-auto transition-all duration-300"
                loading="eager"
                decoding="async"
              />
            ) : (
              <img 
                src="/image.png" 
                alt="AR Raheem Consulting" 
                className="h-14 w-auto transition-all duration-300"
                loading="eager"
                decoding="async"
              />
            )}
            <span className={`font-bold transition-all duration-300 ${
              scrolled 
                ? 'text-lg sm:text-xl text-gray-900' 
                : 'text-xl sm:text-2xl text-white'
            }`}>
              AR Raheem Consulting
              <div className={`text-xs transition-all duration-300 ${
                scrolled ? 'text-gray-600 text-sm' : 'text-blue-200 text-base'
              }`}>
                Pvt Ltd
              </div>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? scrolled 
                      ? 'text-blue-600 bg-blue-100' 
                      : 'text-blue-200 bg-white/20'
                    : scrolled
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                      : 'text-white hover:text-blue-200 hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors duration-300 ${
                scrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white hover:text-blue-200'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
            marginBottom: isOpen ? '8px' : '0px'
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden"
        >
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-md transition-colors duration-300 ${
            scrolled 
              ? 'bg-gray-100/90 backdrop-blur-sm' 
              : 'bg-white/10 backdrop-blur-sm'
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? scrolled
                      ? 'text-blue-600 bg-blue-100'
                      : 'text-blue-200 bg-white/20'
                    : scrolled
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-200'
                      : 'text-white hover:text-blue-200 hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/image.png" 
                alt="AR Raheem Consulting" 
                className="h-11 w-auto"
                loading="lazy"
                decoding="async"
              />
              <div>
                <span className="text-2xl font-bold">AR Raheem Consulting</span>
                <div className="text-base text-gray-400">Pvt Ltd</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading tax consultation and business advisory firm providing innovative solutions 
              for tax compliance and business registration across Pakistan. Excellence in every service.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <Phone className="h-4 w-4 text-blue-400" />
              <span>+92-336-2280987</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Mail className="h-4 w-4 text-blue-400" />
              <span>info@arconsulting.com.pk</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span>Office # 3-E Ijaz Arcade Main Market, Gulberg-II, Lahore</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span>Office No. 06, 2nd Floor, Executive Complex G-8 Markaz, Islamabad</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span>Office No. 07, Dubai International Financial Centre (DIFC) Sheikh Zayed Rd, Dubai</span>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/arraheemconsulting" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@arraheemconsultingcorporat7528" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/ar-raheem-consulting-tax-law-firm/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/arraheemconsulting/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-blue-400 transition-colors">Team</a></li>
              <li><a href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">Help</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="/tax-calculator" className="text-gray-300 hover:text-blue-400 transition-colors">Tax Calculator</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">Saturday: 9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">Sunday: Closed</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 AR Raheem Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
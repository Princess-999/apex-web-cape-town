
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Apex Web Design</h3>
            <p className="text-gray-300 mb-4">Transforming Cape Town businesses with websites that convert visitors into customers.</p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/process" className="text-gray-300 hover:text-white transition-colors">Our Process</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Website Design</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">E-commerce Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">SEO Optimization</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">AI Chatbot Integration</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Website Maintenance</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Social Media Marketing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-capetown-sky flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Bree Street, Cape Town, 8001, South Africa</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-capetown-sky flex-shrink-0" />
                <a href="tel:+27215550123" className="text-gray-300 hover:text-white transition-colors">
                  +27 21 555 0123
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-capetown-sky flex-shrink-0" />
                <a href="mailto:info@apexwebdesign.co.za" className="text-gray-300 hover:text-white transition-colors">
                  info@apexwebdesign.co.za
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="text-white font-medium mb-2">Business Hours</h5>
              <p className="text-gray-300">Monday-Friday: 8:00 AM - 5:00 PM SAST</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Apex Web Design. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

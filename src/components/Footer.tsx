import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4 group">
              <div className="relative">
                <Brain className="h-10 w-10 text-blue-500 transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                  AutoGenius
                </span>
                <span className="block text-xs text-gray-400 -mt-1">AI Automation Solutions</span>
              </div>
            </Link>
            <p className="text-gray-400">
              Transforming businesses through intelligent automation solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
              <li><Link to="/technology" className="text-gray-400 hover:text-white">Technology</Link></li>
              <li><Link to="/global-coverage" className="text-gray-400 hover:text-white">Global Coverage</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/reviews" className="text-gray-400 hover:text-white">Reviews</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email Automation</li>
              <li className="text-gray-400">Voice Agents</li>
              <li className="text-gray-400">Chatbots</li>
              <li className="text-gray-400">Custom Solutions</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                <span className="break-all">rayanelkhababi@automaticgenius.nl</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                +31 617711619
              </li>
              <li className="flex items-center text-gray-400">
                <Linkedin className="w-5 h-5 mr-2" />
                <a 
                  href="https://www.linkedin.com/in/rayan-el-khababi-96728a293/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Rayan El Khababi
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="text-sm">&copy; {new Date().getFullYear()} AutoGenius. All rights reserved. <Link to="/terms" className="hover:text-white">Terms & Conditions</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
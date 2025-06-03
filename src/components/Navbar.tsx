import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X, Mic } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4 relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 z-20 group">
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

        <button
          className="md:hidden z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        <div
          className={`${
            isMenuOpen ? 'fixed' : 'hidden'
          } md:hidden inset-0 bg-black bg-opacity-95 z-10 flex flex-col items-center justify-center space-y-8`}
        >
          <Link to="/" className="text-xl hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="text-xl hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/pricing" className="text-xl hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Pricing
          </Link>
          <Link to="/technology" className="text-xl hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Technology
          </Link>
          <Link to="/timeline" className="text-xl hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Timeline
          </Link>
          <Link to="/global-coverage" className="text-xl hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Global Coverage
          </Link>
          <Link to="/blog" className="text-xl hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
          <Link to="/reviews" className="text-xl hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Reviews
          </Link>
          <Link to="/contact" className="text-xl hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/voice-agent" className="text-xl hover:text-blue-400 transition-colors flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <Mic className="w-5 h-5" />
            Talk to Gina
          </Link>
          <Link
            to="/book-call"
            className="px-6 py-2 text-center bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Book a Call
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
          <Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
          <Link to="/technology" className="hover:text-blue-400 transition-colors">Technology</Link>
          <Link to="/timeline" className="hover:text-blue-400 transition-colors">Timeline</Link>
          <Link to="/global-coverage" className="hover:text-blue-400 transition-colors">Global Coverage</Link>
          <Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
          <Link to="/reviews" className="hover:text-blue-400 transition-colors">Reviews</Link>
          <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          <Link to="/voice-agent" className="hover:text-blue-400 transition-colors flex items-center gap-2">
            <Mic className="w-5 h-5" />
            Talk to Gina
          </Link>
        </div>
        <div className="hidden md:block">
          <Link to="/book-call" className="px-4 py-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
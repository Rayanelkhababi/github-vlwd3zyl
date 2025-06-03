import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Mail, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';

const TypewriterText = ({ text, delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1
      }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: delay + index * 0.05
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-7xl font-bold mb-6">
                <TypewriterText text="Transform Your Business with AI Automation" />
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-300">
                <TypewriterText 
                  text="Streamline your operations with cutting-edge AI solutions for email, voice, and chat automation."
                  delay={2}
                />
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  to="/book-call"
                  className="px-6 md:px-8 py-3 md:py-4 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors flex items-center text-base md:text-lg"
                >
                  Get Started <ArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
            <div className="relative h-[300px] md:h-[500px] w-full md:translate-x-12 md:-translate-y-8 scale-75">
              <spline-viewer url="https://prod.spline.design/2PmvkDxZvKUgu2Fw/scene.splinecode"></spline-viewer>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <TypewriterText text="Our Solutions" delay={4} />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 md:p-8 rounded-2xl bg-gray-900"
            >
              <Mail className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-4">Email Automation</h3>
              <p className="text-gray-300">
                Intelligent email workflows that save time and increase engagement.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 md:p-8 rounded-2xl bg-gray-900"
            >
              <Mic className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-4">Voice Agents</h3>
              <p className="text-gray-300">
                Natural voice interactions powered by advanced AI technology.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 md:p-8 rounded-2xl bg-gray-900"
            >
              <Bot className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-4">Chatbots</h3>
              <p className="text-gray-300">
                24/7 customer support with intelligent conversation capabilities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
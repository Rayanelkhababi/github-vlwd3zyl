import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">About Us</h1>
          
          <div className="mb-12">
            <p className="text-xl text-gray-300 mb-6">
              Founded by Rayan El Khababi, we're revolutionizing business processes through cutting-edge AI automation solutions. As a freelance expert in AI automation and website optimization, Rayan brings years of experience in developing innovative solutions that help businesses scale efficiently.
            </p>
            <p className="text-xl text-gray-300">
              Our mission is to make advanced AI technology accessible to businesses of all sizes, helping them automate routine tasks and focus on what truly matters - growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-gray-900 rounded-xl">
              <Award className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Expertise</h3>
              <p className="text-gray-300">
                Specialized in creating custom AI solutions that drive real business results.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Client Focus</h3>
              <p className="text-gray-300">
                Dedicated to understanding and meeting our clients' unique needs.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl">
              <Zap className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-300">
                Constantly evolving our solutions with the latest AI advancements.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
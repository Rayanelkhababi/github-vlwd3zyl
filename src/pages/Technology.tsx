import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Cpu, ThumbsDown, ThumbsUp, Users } from 'lucide-react';

const companies = [
  {
    name: 'NVIDIA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg',
  },
  {
    name: 'Databricks',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
  },
  {
    name: 'Salesforce',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
  },
  {
    name: 'Snowflake',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg',
  },
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    name: 'OpenAI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  },
];

const ComparisonTable = () => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-gray-700">
          <th className="py-4 px-6 text-left">Feature</th>
          <th className="py-4 px-6 text-center">Generic AI Tool</th>
          <th className="py-4 px-6 text-center bg-green-900/20">Custom Integration</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-700">
          <td className="py-4 px-6">Functionality</td>
          <td className="py-4 px-6 text-center">
            <div className="flex items-center justify-center text-red-400">
              <ThumbsDown className="w-5 h-5 mr-2" />
              No control
            </div>
          </td>
          <td className="py-4 px-6 text-center bg-green-900/20">
            <div className="flex items-center justify-center text-green-400">
              <ThumbsUp className="w-5 h-5 mr-2" />
              Full control
            </div>
          </td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="py-4 px-6">Data Security</td>
          <td className="py-4 px-6 text-center">
            <div className="flex items-center justify-center text-red-400">
              <ThumbsDown className="w-5 h-5 mr-2" />
              No control
            </div>
          </td>
          <td className="py-4 px-6 text-center bg-green-900/20">
            <div className="flex items-center justify-center text-green-400">
              <ThumbsUp className="w-5 h-5 mr-2" />
              Full control
            </div>
          </td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="py-4 px-6">Investment</td>
          <td className="py-4 px-6 text-center">
            <div className="flex items-center justify-center text-red-400">
              <ThumbsDown className="w-5 h-5 mr-2" />
              Ongoing subscription
            </div>
          </td>
          <td className="py-4 px-6 text-center bg-green-900/20">
            <div className="flex items-center justify-center text-green-400">
              <ThumbsUp className="w-5 h-5 mr-2" />
              Monthly flexible
            </div>
          </td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="py-4 px-6">Vendor Lock-in</td>
          <td className="py-4 px-6 text-center">
            <div className="flex items-center justify-center text-red-400">
              <ThumbsDown className="w-5 h-5 mr-2" />
              Yes
            </div>
          </td>
          <td className="py-4 px-6 text-center bg-green-900/20">
            <div className="flex items-center justify-center text-green-400">
              <ThumbsUp className="w-5 h-5 mr-2" />
              No
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Technology = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Technology Partners</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver cutting-edge AI solutions
            that drive innovation and business growth.
          </p>
        </div>

        <div className="relative mb-32">
          <div className="max-w-4xl mx-auto">
            <div className="relative">              
              <div className="relative grid grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-8">
                  <Briefcase className="w-16 h-16 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Business</h3>
                  <p className="text-gray-300">Strategic solutions that drive growth and efficiency</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-8">
                  <Cpu className="w-16 h-16 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Technology</h3>
                  <p className="text-gray-300">Cutting-edge AI and automation capabilities</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-8">
                  <Users className="w-16 h-16 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Culture & Organization</h3>
                  <p className="text-gray-300">People-centric approach to digital transformation</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold mb-4">Agentic AI Transformation</h2>
              <p className="text-xl text-gray-300">
                AI technology only works when people truly embrace it. At Automatic Genius, we ensure everything we build is practical, usable, and aligned with business goals. Our process combines smart technology, proper data connections, and a strong focus on adoption.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-32">
          <h2 className="text-3xl font-bold mb-8 text-center">Generic AI vs Custom Integration</h2>
          <ComparisonTable />
        </div>

        <div className="relative overflow-hidden py-12">
          <div className="flex space-x-16 animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-gray-900 rounded-xl p-8 min-w-[240px] h-32 flex-shrink-0"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-[180px] max-h-[60px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">AI Infrastructure</h3>
            <p className="text-gray-300">
              Leveraging cutting-edge hardware and cloud solutions to power our AI systems
              with unparalleled performance and reliability.
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Data Processing</h3>
            <p className="text-gray-300">
              Using advanced data processing platforms to handle large-scale data operations
              with maximum efficiency and security.
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Machine Learning</h3>
            <p className="text-gray-300">
              Implementing state-of-the-art machine learning models and frameworks
              to deliver intelligent automation solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
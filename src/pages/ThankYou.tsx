import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-xl text-gray-300 mb-8">
          We've received your message and will get back to you shortly.
        </p>
        <Link
          to="/"
          className="px-8 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
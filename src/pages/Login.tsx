import React, { useState } from 'react';
import { Lock, Mail, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showTerms, setShowTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle authentication
    // For now, we'll just simulate a successful login/signup
    if (isLogin) {
      // Login logic
      navigate('/');
    } else {
      // Signup logic
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <Lock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p className="text-gray-300 mt-2">
            {isLogin ? 'Sign in to your account' : 'Sign up for a new account'}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  required
                  className="w-full p-3 pl-10 rounded-lg bg-gray-900 border border-gray-700"
                  placeholder="John Doe"
                />
              </div>
            </div>
          )}
          
          <div>
            <label className="block mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                required
                className="w-full p-3 pl-10 rounded-lg bg-gray-900 border border-gray-700"
                placeholder="you@example.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block mb-2">Password</label>
            <input
              type="password"
              required
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700"
              placeholder="••••••••"
            />
          </div>
          
          {isLogin ? (
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <button type="button" className="text-blue-400 hover:text-blue-300">
                Forgot password?
              </button>
            </div>
          ) : (
            <div className="text-sm text-gray-400">
              By signing up, you agree to our{' '}
              <button
                type="button"
                onClick={() => setShowTerms(true)}
                className="text-blue-400 hover:text-blue-300"
              >
                Terms & Conditions
              </button>
            </div>
          )}
          
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
          
          <div className="text-center">
            <button
              type="button"
              className="text-blue-400 hover:text-blue-300"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
        </form>
      </div>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 p-8 rounded-xl max-w-2xl max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
            <div className="prose prose-invert">
              <h3 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h3>
              <p className="mb-4">
                By accessing and using Automatic Genius's services, you agree to be bound by these Terms and Conditions.
              </p>

              <h3 className="text-xl font-semibold mb-3">2. User Accounts</h3>
              <p className="mb-4">
                You are responsible for maintaining the confidentiality of your account information and password.
              </p>

              <h3 className="text-xl font-semibold mb-3">3. Service Usage</h3>
              <p className="mb-4">
                Our services are provided "as is" and we make no warranties about their reliability or availability.
              </p>

              <h3 className="text-xl font-semibold mb-3">4. Privacy Policy</h3>
              <p className="mb-4">
                Your use of our services is also governed by our Privacy Policy.
              </p>

              <h3 className="text-xl font-semibold mb-3">5. Intellectual Property</h3>
              <p className="mb-4">
                All content and materials available through our services are protected by intellectual property rights.
              </p>
            </div>
            <button
              onClick={() => setShowTerms(false)}
              className="mt-6 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    plan: 'starter',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://hook.eu2.make.com/k46fvx9iiy25h6fgur5jn0dc02abnb8i', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/thank-you');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[600px] w-full order-2 lg:order-1">
            <iframe 
              src='https://my.spline.design/nexbotrobotcharacterconcept-fb0c949a8746ca9f586df4ad14488f4f/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              className="absolute inset-0 rounded-2xl"
            ></iframe>
          </div>

          <div className="order-1 lg:order-2">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <div className="mb-8">
              <p className="text-gray-300 mb-2">Direct Contact:</p>
              <p>Email: rayanelkhababi@automaticgenius.nl</p>
              <p>Phone: +31 617711619</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  required
                  className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-2">Plan</label>
                <select
                  name="plan"
                  className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700"
                  onChange={handleChange}
                >
                  <option value="starter">Starter</option>
                  <option value="professional">Professional</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Description</label>
                <textarea
                  name="description"
                  required
                  className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 h-32"
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact
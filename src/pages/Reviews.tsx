import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  review: string;
}

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Lisa van der Berg",
      position: "Customer Service Director",
      company: "TechNL",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      review: "The AI automation solutions have completely transformed our customer service. We're seeing significant improvements in response times and customer satisfaction."
    },
    {
      id: 2,
      name: "Hendrik de Vries",
      position: "Operations Manager",
      company: "DataFlow BV",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      review: "Implementing Automatic Genius has reduced our processing time by 75%. The ROI has been incredible, and our team can now focus on strategic initiatives."
    },
    {
      id: 3,
      name: "Emma Bakker",
      position: "Marketing Director",
      company: "GrowthNL",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      review: "The email automation system has revolutionized our marketing campaigns. We've seen a 300% increase in engagement and conversion rates."
    },
    {
      id: 4,
      name: "Thomas van Dijk",
      position: "CEO",
      company: "InnovateX",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      review: "Choosing Automatic Genius was one of our best business decisions. The AI-powered solutions have given us a competitive edge in our market."
    },
    {
      id: 5,
      name: "Sophie Jansen",
      position: "Head of Technology",
      company: "FutureScale",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      review: "The integration was seamless, and the results were immediate. Our efficiency metrics have improved dramatically since implementation."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">What Our Clients Say</h1>
          <p className="text-xl text-gray-300">
            Discover how Automatic Genius helps businesses automate their processes
            and elevate their customer service to new heights.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px]">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center ${
                  currentReview === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-24 h-24 rounded-full mb-6 object-cover"
                />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-2xl italic text-center mb-6 max-w-2xl">
                  "{review.review}"
                </p>
                <h3 className="text-xl font-bold mb-2">{review.name}</h3>
                <p className="text-blue-400">
                  {review.position} at {review.company}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentReview === index ? 'bg-blue-500' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentReview(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
import React, { useState } from 'react';
import { Calendar, X } from 'lucide-react';

const BlogPost = ({ title, date, excerpt, imageUrl, content }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center text-gray-400 mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 mb-4">{excerpt}</p>
        <button
          onClick={() => setShowFullContent(true)}
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          Read More
        </button>

        {showFullContent && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold">{title}</h2>
                  <button
                    onClick={() => setShowFullContent(false)}
                    className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="prose prose-invert max-w-none">
                  {content}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Email Automation',
      date: 'March 15, 2025',
      excerpt: 'Discover how AI is revolutionizing email marketing and customer communication.',
      imageUrl: 'https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      content: (
        <>
          <p className="mb-6">Email automation has come a long way from simple autoresponders. Today's AI-powered solutions are transforming how businesses communicate with their customers.</p>
          
          <h3 className="text-2xl font-bold mb-4">Key Advancements in Email Automation</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Advanced behavior analysis algorithms that predict customer preferences</li>
            <li className="mb-2">Real-time personalization based on user interactions</li>
            <li className="mb-2">Predictive sending time optimization</li>
            <li className="mb-2">Dynamic content generation using natural language processing</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">Impact on Business Operations</h3>
          <p className="mb-6">Businesses implementing AI-powered email automation are seeing:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">40% increase in open rates</li>
            <li className="mb-2">25% higher click-through rates</li>
            <li className="mb-2">60% reduction in campaign setup time</li>
            <li className="mb-2">300% improvement in conversion rates</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">Looking Ahead</h3>
          <p className="mb-6">The future of email automation holds even more promise with emerging technologies like:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Advanced sentiment analysis</li>
            <li className="mb-2">Predictive analytics for content optimization</li>
            <li className="mb-2">Integration with other AI-powered business tools</li>
            <li className="mb-2">Enhanced personalization through machine learning</li>
          </ul>
        </>
      )
    },
    {
      title: 'Voice Agents: The New Customer Service',
      date: 'March 10, 2025',
      excerpt: 'Learn how voice-enabled AI agents are transforming customer support.',
      imageUrl: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      content: (
        <>
          <p className="mb-6">Voice agents are revolutionizing customer service by providing natural, efficient, and scalable support solutions.</p>

          <h3 className="text-2xl font-bold mb-4">Core Technologies</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Natural Language Processing (NLP)</li>
            <li className="mb-2">Speech Recognition and Synthesis</li>
            <li className="mb-2">Emotion Detection</li>
            <li className="mb-2">Context-aware Response Generation</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">Business Benefits</h3>
          <p className="mb-6">Companies implementing voice agents are experiencing:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">70% reduction in wait times</li>
            <li className="mb-2">24/7 support capability</li>
            <li className="mb-2">50% cost reduction in support operations</li>
            <li className="mb-2">90% customer satisfaction rates</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">Implementation Strategies</h3>
          <p className="mb-6">Successful voice agent deployment requires:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Careful planning and use case identification</li>
            <li className="mb-2">Integration with existing systems</li>
            <li className="mb-2">Continuous training and optimization</li>
            <li className="mb-2">Regular performance monitoring</li>
          </ul>
        </>
      )
    },
    {
      title: 'Building Better Chatbots',
      date: 'March 5, 2025',
      excerpt: 'Best practices for creating chatbots that truly understand user intent.',
      imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      content: (
        <>
          <p className="mb-6">Modern chatbots are becoming increasingly sophisticated, offering human-like interactions and complex problem-solving capabilities.</p>

          <h3 className="text-2xl font-bold mb-4">Advanced Features</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Context awareness and memory</li>
            <li className="mb-2">Multi-turn conversations</li>
            <li className="mb-2">Sentiment analysis</li>
            <li className="mb-2">Personalized responses</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">Development Best Practices</h3>
          <p className="mb-6">Key considerations for chatbot development:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Thorough user intent mapping</li>
            <li className="mb-2">Robust error handling</li>
            <li className="mb-2">Clear escalation paths</li>
            <li className="mb-2">Regular updates and improvements</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">Future Developments</h3>
          <p className="mb-6">Upcoming trends in chatbot technology:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Advanced language models</li>
            <li className="mb-2">Improved context understanding</li>
            <li className="mb-2">Better integration capabilities</li>
            <li className="mb-2">Enhanced personalization</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-300 mb-12">
          Latest insights about AI automation and technology
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
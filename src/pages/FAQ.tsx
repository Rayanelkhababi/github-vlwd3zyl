import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-6 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'What types of AI automation services do you offer?',
      answer: 'We offer a comprehensive suite of AI automation services including email automation, voice agents, and chatbots. Our solutions can be customized to meet your specific business needs.'
    },
    {
      question: 'How can AI automation benefit my business?',
      answer: 'AI automation can significantly improve efficiency, reduce operational costs, and enhance customer experience by automating repetitive tasks, providing 24/7 customer support, and enabling personalized interactions at scale.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Yes, we specialize in creating custom AI automation solutions tailored to your specific business requirements. Our team will work closely with you to understand your needs and develop the perfect solution.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive support including 24/7 technical assistance, regular maintenance, and continuous optimization of your AI automation systems. Enterprise clients receive dedicated support managers.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation time varies depending on the complexity of the solution. Typically, basic implementations take 2-4 weeks, while more complex enterprise solutions may take 8-12 weeks.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we take data security very seriously. We use enterprise-grade encryption and follow industry best practices for data protection. All our systems are compliant with major security standards.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
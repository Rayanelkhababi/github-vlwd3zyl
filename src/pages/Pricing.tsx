import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown, Calculator, DollarSign, Euro as EuroSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PricingCalculator = ({ currency, setCurrency }) => {
  const [formData, setFormData] = useState({
    emailVolume: 5000,
    chatVolume: 500,
    voiceHours: 5,
    leadTarget: 100,
    aiComplexity: 'basic',
    integrations: 1,
    contractMonths: 1,
    currentTimeHours: 40
  });

  const calculatePrice = () => {
    let total = 0;
    
    const emailCost = Math.ceil(formData.emailVolume / 1000) * 5;
    const chatCost = Math.ceil(formData.chatVolume / 100) * 4;
    const voiceCost = formData.voiceHours * 15;
    const leadCost = Math.ceil(formData.leadTarget / 10) * 6;
    
    const complexityMultipliers = {
      basic: 1,
      advanced: 1.5,
      enterprise: 2
    };
    
    const integrationCost = formData.integrations * 45;
    
    total = (emailCost + chatCost + voiceCost + leadCost) * complexityMultipliers[formData.aiComplexity];
    total += integrationCost;
    
    total += 99;
    
    if (formData.contractMonths >= 12) {
      total *= 0.85;
    } else if (formData.contractMonths >= 6) {
      total *= 0.92;
    } else if (formData.contractMonths >= 3) {
      total *= 0.95;
    }
    
    if (formData.emailVolume > 50000 || formData.chatVolume > 5000 || formData.voiceHours > 50) {
      total *= 0.9;
    }

    return currency === 'USD' ? Math.round(total * 1.1) : Math.round(total);
  };

  const calculateMonthlySavings = () => {
    const hourlyRate = currency === 'USD' ? 65 : 60;
    const monthlySavings = formData.currentTimeHours * hourlyRate;
    
    const emailSavings = formData.emailVolume * (currency === 'USD' ? 0.66 : 0.6);
    const chatSavings = formData.chatVolume * (currency === 'USD' ? 2.75 : 2.5);
    const voiceSavings = formData.voiceHours * (currency === 'USD' ? 132 : 120);
    
    return Math.round(monthlySavings + emailSavings + chatSavings + voiceSavings);
  };

  const calculateROI = () => {
    const monthlyInvestment = calculatePrice();
    const monthlySavings = calculateMonthlySavings();
    const monthlyProfit = monthlySavings - monthlyInvestment;
    const paybackMonths = monthlyInvestment > 0 ? Math.ceil(monthlyInvestment / monthlyProfit) : 0;
    const annualROI = ((monthlySavings * 12) - (monthlyInvestment * 12)) / (monthlyInvestment * 12) * 100;

    return {
      monthlyProfit,
      paybackMonths,
      annualROI: Math.round(annualROI),
      monthlySavings
    };
  };

  const recommendPlan = () => {
    const monthlyInvestment = calculatePrice();
    
    if (monthlyInvestment > 600 || 
        formData.emailVolume > 50000 || 
        formData.chatVolume > 5000 || 
        formData.voiceHours > 50 ||
        formData.aiComplexity === 'enterprise') {
      return 'Enterprise';
    } else if (monthlyInvestment > 250 || 
               formData.emailVolume > 10000 || 
               formData.chatVolume > 1000 || 
               formData.voiceHours > 20 ||
               formData.aiComplexity === 'advanced') {
      return 'Professional';
    }
    return 'Starter';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const numValue = e.target.type === 'number' ? parseFloat(value) : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: e.target.type === 'number' ? (isNaN(numValue) ? 0 : numValue) : value
    }));
  };

  const roi = calculateROI();
  const recommendedPlan = recommendPlan();
  const currencySymbol = currency === 'EUR' ? '€' : '$';

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 rounded-2xl p-8 mb-16"
    >
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <Calculator className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold">Custom Price Calculator</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block mb-2">Monthly Email Volume</label>
          <div className="relative">
            <input
              type="number"
              name="emailVolume"
              value={formData.emailVolume || ''}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
              min="0"
              step="1000"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">emails</span>
          </div>
        </div>
        
        <div>
          <label className="block mb-2">Monthly Chat Volume</label>
          <div className="relative">
            <input
              type="number"
              name="chatVolume"
              value={formData.chatVolume || ''}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
              min="0"
              step="100"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">chats</span>
          </div>
        </div>
        
        <div>
          <label className="block mb-2">Voice Agent Hours</label>
          <div className="relative">
            <input
              type="number"
              name="voiceHours"
              value={formData.voiceHours || ''}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
              min="0"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">hours</span>
          </div>
        </div>
        
        <div>
          <label className="block mb-2">Monthly Lead Target</label>
          <div className="relative">
            <input
              type="number"
              name="leadTarget"
              value={formData.leadTarget || ''}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
              min="0"
              step="10"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">leads</span>
          </div>
        </div>

        <div>
          <label className="block mb-2">AI Complexity</label>
          <select
            name="aiComplexity"
            value={formData.aiComplexity}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          >
            <option value="basic">Basic (Standard NLP)</option>
            <option value="advanced">Advanced (Custom Training)</option>
            <option value="enterprise">Enterprise (Full Customization)</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Number of Integrations</label>
          <input
            type="number"
            name="integrations"
            value={formData.integrations || ''}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
            min="0"
          />
        </div>

        <div>
          <label className="block mb-2">Contract Length</label>
          <div className="relative">
            <input
              type="number"
              name="contractMonths"
              value={formData.contractMonths || ''}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
              min="1"
              max="24"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">months</span>
          </div>
        </div>

        <div>
          <label className="block mb-2">Current Monthly Time Spent</label>
          <div className="relative">
            <input
              type="number"
              name="currentTimeHours"
              value={formData.currentTimeHours || ''}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
              min="0"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">hours</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <p className="text-gray-400 mb-2">Monthly Investment</p>
          <p className="text-4xl font-bold text-blue-500">{currencySymbol}{calculatePrice()}</p>
          <p className="text-sm text-gray-400 mt-2">Includes base platform fee</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <p className="text-gray-400 mb-2">Monthly Savings</p>
          <p className="text-4xl font-bold text-green-500">{currencySymbol}{roi.monthlySavings}</p>
          <p className="text-sm text-gray-400 mt-2">Estimated based on usage</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <p className="text-gray-400 mb-2">Monthly Net Profit</p>
          <p className="text-4xl font-bold text-green-500">{currencySymbol}{roi.monthlyProfit}</p>
          <p className="text-sm text-gray-400 mt-2">After investment costs</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <p className="text-gray-400 mb-2">Return on Investment</p>
          <p className="text-4xl font-bold text-green-500">{roi.annualROI}%</p>
          <p className="text-sm text-gray-400 mt-2">Annual ROI</p>
        </div>
      </div>

      <div className="mt-6 bg-blue-900/20 rounded-xl p-6 border border-blue-500/50">
        <h3 className="text-xl font-bold mb-2">ROI Analysis & Recommendation</h3>
        <p className="text-gray-300 mb-4">
          Based on your inputs, the system will pay for itself in approximately{' '}
          <span className="text-blue-400 font-bold">{roi.paybackMonths} months</span>. 
          After that, you'll generate a pure profit of{' '}
          <span className="text-green-400 font-bold">{currencySymbol}{roi.monthlyProfit}</span> per month.
        </p>
        <p className="text-gray-300">
          Based on your requirements, we recommend our{' '}
          <span className="text-blue-400 font-bold">{recommendedPlan} Plan</span>.
        </p>
      </div>
      
      <div className="mt-6 text-center">
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Get Started with {recommendedPlan} Plan
        </Link>
      </div>
    </motion.div>
  );
};

const PricingCard = ({ title, basePrice, features, variants, recommended = false, currency = 'EUR', index }) => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  const currencySymbol = currency === 'EUR' ? '€' : '$';
  const priceMultiplier = currency === 'EUR' ? 1 : 1.1;
  const adjustedBasePrice = Math.round(basePrice * priceMultiplier);
  const adjustedVariants = variants.map(v => ({
    ...v,
    additionalPrice: Math.round(v.additionalPrice * priceMultiplier)
  }));

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`p-8 rounded-2xl ${recommended ? 'bg-blue-600' : 'bg-gray-900'} relative`}
    >
      {recommended && (
        <span className="absolute top-4 right-4 bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-bold">
          Recommended
        </span>
      )}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      
      <div className="relative mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-3 rounded-lg bg-gray-800 flex justify-between items-center"
        >
          <span>{adjustedVariants[selectedVariant].name}</span>
          <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 rounded-lg overflow-hidden z-10">
            {adjustedVariants.map((variant, index) => (
              <button
                key={index}
                className="w-full p-3 text-left hover:bg-gray-700 transition-colors"
                onClick={() => {
                  setSelectedVariant(index);
                  setIsOpen(false);
                }}
              >
                {variant.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <p className="text-4xl font-bold mb-6">
        {currencySymbol}{adjustedBasePrice + adjustedVariants[selectedVariant].additionalPrice}
        <span className="text-lg">/mo</span>
      </p>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 mr-2 text-green-400" />
            {feature}
          </li>
        ))}
        {adjustedVariants[selectedVariant].additionalFeatures.map((feature, index) => (
          <li key={`variant-${index}`} className="flex items-center">
            <Check className="w-5 h-5 mr-2 text-green-400" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`block text-center py-3 rounded-lg ${
          recommended ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'
        } hover:opacity-90 transition-opacity`}
      >
        Get Started
      </Link>
    </motion.div>
  );
};

const Pricing = () => {
  const [currency, setCurrency] = useState<'EUR' | 'USD'>('EUR');
  
  const plans = [
    {
      title: 'Starter',
      basePrice: 99,
      features: [
        'Basic Analytics',
        '24/7 Support',
        'API Access'
      ],
      variants: [
        {
          name: 'Email Automation Basic',
          additionalPrice: 0,
          additionalFeatures: [
            'Up to 10,000 emails/month',
            'Basic templates',
            'Simple automation workflows'
          ]
        },
        {
          name: 'Chatbot Basic',
          additionalPrice: 20,
          additionalFeatures: [
            'Basic chatbot',
            'Up to 1,000 conversations/month',
            'Standard responses'
          ]
        },
        {
          name: 'Voice Agent Basic',
          additionalPrice: 30,
          additionalFeatures: [
            '5 Voice Agent Hours',
            'Basic voice recognition',
            'Standard voice templates'
          ]
        }
      ]
    },
    {
      title: 'Professional',
      basePrice: 249,
      features: [
        'Advanced Analytics',
        'Priority Support',
        'Full API Access',
        'Custom Integration'
      ],
      variants: [
        {
          name: 'Email Automation Pro',
          additionalPrice: 0,
          additionalFeatures: [
            'Up to 50,000 emails/month',
            'Advanced templates',
            'Complex automation workflows',
            'A/B testing'
          ]
        },
        {
          name: 'Chatbot Pro',
          additionalPrice: 30,
          additionalFeatures: [
            'Advanced chatbot',
            'Unlimited conversations',
            'Custom responses',
            'Multi-language support'
          ]
        },
        {
          name: 'Voice Agent Pro',
          additionalPrice: 60,
          additionalFeatures: [
            '20 Voice Agent Hours',
            'Advanced voice recognition',
            'Custom voice templates',
            'Sentiment analysis'
          ]
        }
      ],
      recommended: true
    },
    {
      title: 'Enterprise',
      basePrice: 499,
      features: [
        'Custom Analytics',
        'Dedicated Support',
        'Enterprise API Access',
        'Custom Development',
        'SLA Guarantee'
      ],
      variants: [
        {
          name: 'Email Automation Enterprise',
          additionalPrice: 0,
          additionalFeatures: [
            'Unlimited emails',
            'Custom templates',
            'Advanced automation engine',
            'Full customization'
          ]
        },
        {
          name: 'Chatbot Enterprise',
          additionalPrice: 150,
          additionalFeatures: [
            'Multiple Custom Chatbots',
            'Advanced AI training',
            'Custom integrations',
            'Full white-labeling'
          ]
        },
        {
          name: 'Voice Agent Enterprise',
          additionalPrice: 300,
          additionalFeatures: [
            'Unlimited Voice Hours',
            'Custom voice engine',
            'Advanced AI features',
            'Full customization'
          ]
        }
      ]
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-4"
        >
          <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
          <button
            onClick={() => setCurrency(curr => curr === 'EUR' ? 'USD' : 'EUR')}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {currency === 'EUR' ? <EuroSign className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
            {currency}
          </button>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-300 text-center mb-12"
        >
          Choose the plan and variant that best fits your needs
        </motion.p>
        
        <PricingCalculator currency={currency} setCurrency={setCurrency} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} currency={currency} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
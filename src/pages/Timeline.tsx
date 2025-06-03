import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  FileSearch, 
  Settings, 
  Users, 
  Zap,
  CheckCircle,
  DollarSign,
  Rocket
} from 'lucide-react';

const TimelineItem = ({ icon: Icon, title, description, isActive }) => (
  <div className="flex items-start gap-4 relative">
    <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full ${
      isActive ? 'bg-blue-500' : 'bg-gray-700'
    } z-10`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div className="flex-grow pb-12 relative">
      <div className="absolute left-[-24px] top-[24px] w-0.5 h-full bg-gray-700" />
      <div className={`p-6 rounded-xl ${
        isActive ? 'bg-blue-900/20 border border-blue-500/50' : 'bg-gray-900'
      }`}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  </div>
);

const Timeline = () => {
  const steps = [
    {
      icon: Search,
      title: "Pain Point Analysis",
      description: "We work with you to identify and analyze your current business challenges and automation opportunities.",
      isActive: true
    },
    {
      icon: FileSearch,
      title: "Solution Discovery",
      description: "Our experts evaluate your needs and design the perfect automation solution tailored to your business.",
      isActive: false
    },
    {
      icon: DollarSign,
      title: "Custom Pricing",
      description: "Receive a transparent, customized pricing proposal based on your specific requirements and ROI goals.",
      isActive: false
    },
    {
      icon: Settings,
      title: "Integration Planning",
      description: "Detailed planning of the integration process, including timeline, milestones, and resource allocation.",
      isActive: false
    },
    {
      icon: Users,
      title: "Team Training",
      description: "Comprehensive training for your team to ensure smooth adoption of the new automation solutions.",
      isActive: false
    },
    {
      icon: Zap,
      title: "Implementation",
      description: "Seamless deployment of your custom automation solution with minimal disruption to your operations.",
      isActive: false
    },
    {
      icon: CheckCircle,
      title: "Testing & Optimization",
      description: "Rigorous testing and fine-tuning to ensure everything works perfectly for your specific needs.",
      isActive: false
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "Full launch of your automation solution with ongoing support and optimization services.",
      isActive: false
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Your Journey to Automation</h1>
          <p className="text-xl text-gray-300 mb-16">
            Follow our proven process to transform your business with intelligent automation solutions.
          </p>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <TimelineItem {...step} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
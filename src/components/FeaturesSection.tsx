
import React from 'react';
import { Bot, Database, Lock, Zap, Plug, ChartBar, Brain, Cpu } from 'lucide-react';

const features = [
  {
    title: "Custom AI Models",
    description: "Train models that are tailored specifically to your business data and needs.",
    icon: Cpu,
    color: "text-quantminds-blue"
  },
  {
    title: "Custom LLM AI Agents",
    description: "Develop and deploy custom Language Learning Models designed specifically for your business needs.",
    icon: Brain,
    color: "text-quantminds-blue"
  },
  {
    title: "Blazing-Fast GPU Training",
    description: "Built with CUDA, cuDNN & cuBLAS for maximum performance on GPU infrastructure.",
    icon: Zap,
    color: "text-quantminds-purple"
  },
  
  {
    title: "Your Data Stays Yours",
    description: "Full control with secure training and updates. We never see your sensitive information.",
    icon: Lock,
    color: "text-quantminds-purple"
  },
  {
    title: "Easy Integration",
    description: "Simple interfaces for uploading, transforming, and managing your training datasets.",
    icon: Plug,
    color: "text-quantminds-blue"
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-20 px-4 bg-black/30 relative">
      <div className="absolute inset-0 circuit-bg opacity-5"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">The Power of AI</span>, Tailored for Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            QuantaMind delivers enterprise-grade AI without the enterprise-grade complexity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glassmorphism p-6 rounded-xl transition-all duration-300 hover:translate-y-[-5px] group"
            >
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-white/5 mb-4 group-hover:bg-white/10 transition-colors">
                <feature.icon className={`${feature.color} h-6 w-6`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

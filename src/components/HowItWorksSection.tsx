
import React from 'react';
import { Search, Wrench, Rocket, Headphones } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Discover",
      description: "We partner with you to identify a high-value workflow to automate.",
      icon: Search,
      color: "quantminds-grey"
    },
    {
      number: "2", 
      title: "Build",
      description: "Our team builds a custom AI agent trained securely on your private data.",
      icon: Wrench,
      color: "quantminds-blue"
    },
    {
      number: "3",
      title: "Deploy", 
      description: "We install the finished AI agent to run entirely within your on-premise environment.",
      icon: Rocket,
      color: "quantminds-grey"
    },
    {
      number: "4",
      title: "Support",
      description: "We provide hands-on support to ensure your agent delivers immediate value.",
      icon: Headphones,
      color: "quantminds-blue"
    }
  ];

  return (
    <div className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Custom AI Agent in <span className="text-gradient">4 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We handle all the complex engineering so you can focus on your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-quantminds-grey/50 to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-${step.color}/20 border-2 border-${step.color} flex items-center justify-center relative`}>
                  <step.icon className={`text-${step.color} w-8 h-8`} />
                  <div className={`absolute -top-3 -right-3 w-8 h-8 bg-${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-quantminds-grey/10 rounded-lg p-6">
            <div className="w-12 h-12 bg-quantminds-grey/20 rounded-full flex items-center justify-center">
              <span className="text-quantminds-grey font-bold">✓</span>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-lg">End-to-End Solution</h4>
              <p className="text-muted-foreground">From initial consultation to ongoing support, we're with you every step of the way.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;

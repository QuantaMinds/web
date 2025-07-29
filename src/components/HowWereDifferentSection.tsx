
import React from 'react';
import { Package, Brain, Shield, Building2 } from 'lucide-react';

const HowWereDifferentSection = () => {
  const differentiators = [
    {
      title: "A Finished Product, Not a Difficult Project",
      description: "Big Tech and IT consultants provide powerful but raw AI tools. To use them, your team would need to start an expensive, 18-month engineering project. We deliver a finished, ready-to-use AI agent in just a few weeks, saving you the time, cost, and risk.",
      icon: Package,
      color: "quantminds-blue"
    },
    {
      title: "Your Proprietary AI Brain, Not a Generic Tool",
      description: "Generic cloud AI knows about the world. Our AI knows about your world. We train our agents on your company's own private data, turning them into an expert on your specific contracts or financial data—a competitive advantage that only you own.",
      icon: Brain,
      color: "quantminds-grey"
    },
    {
      title: "Your Data Stays in Your House",
      description: "Our core difference is simple: our AI runs completely offline, on your own servers. This is critical for industries like healthcare, manufacturing, and defense where cloud connections are too slow, unreliable, or insecure. Your data, and the intelligence built from it, is guaranteed to stay in your control.",
      icon: Shield,
      color: "quantminds-blue"
    },
    {
      title: "Modular Architecture for Scale",
      description: "Our customized AI solutions are built with privacy and scalability at their core. Each AI agent is designed with a modular architecture that allows us to rapidly build, deploy, and scale your solutions while maintaining complete data privacy and enterprise-grade security.",
      icon: Building2,
      color: "quantminds-grey"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900/40 to-gray-800/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Quantamind? <span className="text-gradient">A New Category of Enterprise AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Big Tech sells complex toolkits. Cloud AI creates security risks. We deliver a finished product that is private, powerful, and uniquely yours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="glassmorphism p-8 rounded-xl group hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${item.color}/20 border-2 border-${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-8 h-8 text-${item.color}`} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-center">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWereDifferentSection;


import React from 'react';
import { Package, Shield, Brain, Clock, DollarSign, Users } from 'lucide-react';

const WhyDifferentSection = () => {
  const differentiators = [
    {
      title: "A Finished Product, Not a Complex Project",
      description: "An internal IT team would spend over a year and millions of dollars trying to build a secure AI platform from scratch. We deliver a finished, ready-to-use solution in just a few weeks, saving you the cost, time, and risk of a massive internal project.",
      icon: Package,
      color: "quantminds-grey",
      stats: "Weeks vs. Years"
    },
    {
      title: "True Data Control, Not Just Cloud Security", 
      description: "Cloud AI companies offer you a secure room in their house. We give you a secure room in your house. Our platform runs entirely on your own internal servers, meaning your sensitive data never leaves your control, guaranteed.",
      icon: Shield,
      color: "quantminds-blue",
      stats: "100% Your Control"
    },
    {
      title: "Your Proprietary AI Brain, Not a Generic Tool",
      description: "Generic AI tools understand the world. We build an AI agent that understands your world. By training on your company's own private data, our AI becomes a unique expert in your specific contracts, your financial models, or your scientific research—a competitive advantage that only you own.",
      icon: Brain,
      color: "quantminds-grey", 
      stats: "Custom Built"
    }
  ];

  return (
    <div className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose <span className="text-gradient">Quantamind</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            How we are fundamentally different from other AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <div key={index} className="glassmorphism p-8 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-${item.color}/20 border-2 border-${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-10 h-10 text-${item.color}`} />
              </div>
              
              <div className={`inline-block px-3 py-1 rounded-full bg-${item.color}/20 text-${item.color} text-sm font-medium mb-4`}>
                {item.stats}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison section */}
        <div className="glassmorphism p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-center mb-8">Traditional Approach vs. Quantamind</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-red-400 mb-4">❌ Traditional IT Project</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-red-400" />
                  <span className="text-gray-400">12+ months development time</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-red-400" />
                  <span className="text-gray-400">Millions in development costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-red-400" />
                  <span className="text-gray-400">Large internal team required</span>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-red-400" />
                  <span className="text-gray-400">Uncertain outcome</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-green-400 mb-4">✅ Quantamind Solution</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Ready in weeks</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Fraction of the cost</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Our expert team handles everything</span>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Proven, ready-to-deploy product</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDifferentSection;


import React from 'react';
import { Shield, Cpu, Zap, Server } from 'lucide-react';

const TechnologySection = () => {
  const features = [
    {
      icon: Shield,
      title: "On-Premise Deployment",
      description: "Your data never leaves your infrastructure"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "AI processing at the source for maximum speed"
    },
    {
      icon: Zap,
      title: "Zero Data Egress",
      description: "Complete data sovereignty and privacy control"
    },
    {
      icon: Server,
      title: "Local Machine Processing",
      description: "Enterprise-grade AI without cloud dependencies"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Secure AI architecture designed for enterprise trust and compliance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Technology Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glassmorphism p-6 rounded-xl">
                <feature.icon className="w-8 h-8 text-quantminds-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Architecture Diagram */}
          <div className="glassmorphism p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 text-center text-white">
              Local vs Cloud Architecture
            </h3>
            
            <div className="space-y-6">
              {/* Local Architecture */}
              <div className="border border-quantminds-purple/30 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-quantminds-purple rounded-full"></div>
                  <span className="font-semibold text-quantminds-purple">Your Infrastructure</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="bg-quantminds-purple/20 px-3 py-2 rounded text-sm">Your Data</div>
                  <div className="text-quantminds-purple">→</div>
                  <div className="bg-quantminds-purple/20 px-3 py-2 rounded text-sm">AI Agent</div>
                  <div className="text-quantminds-purple">→</div>
                  <div className="bg-quantminds-purple/20 px-3 py-2 rounded text-sm">Results</div>
                </div>
              </div>

              {/* Cloud Architecture */}
              <div className="border border-gray-600/30 rounded-lg p-4 opacity-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className="font-semibold text-gray-400">Traditional Cloud</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="bg-gray-600/20 px-3 py-2 rounded">Your Data</div>
                  <div className="text-gray-400">→</div>
                  <div className="bg-red-500/20 px-3 py-2 rounded text-red-400">Cloud</div>
                  <div className="text-gray-400">→</div>
                  <div className="bg-gray-600/20 px-3 py-2 rounded">Results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;

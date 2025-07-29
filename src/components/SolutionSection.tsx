
import React from 'react';
import { Shield, Server, Brain, Lock } from 'lucide-react';

const SolutionSection = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We Bring the AI to Your Data. <span className="text-gradient">Not the Other Way Around.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Quantamind was founded on a simple, powerful principle: you should never have to sacrifice security for intelligence. Our platform deploys custom-trained AI agents that run entirely within your own private infrastructure, giving you the best of both worlds.
          </p>
        </div>

        {/* Visual representation */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-16">
          {/* Secure building with AI inside */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 bg-quantminds-grey/20 rounded-lg border-2 border-quantminds-grey/40 flex flex-col items-center justify-center mb-4 relative overflow-hidden">
              {/* Building structure */}
              <div className="absolute inset-4 border-2 border-quantminds-grey/30 rounded"></div>
              
              {/* AI brain in the center */}
              <div className="w-20 h-20 bg-quantminds-blue/30 rounded-full border-2 border-quantminds-blue flex items-center justify-center animate-pulse-subtle">
                <Brain size={32} className="text-quantminds-blue" />
              </div>
              
              {/* Security indicators */}
              <div className="absolute top-2 left-2">
                <Shield size={16} className="text-green-500" />
              </div>
              <div className="absolute top-2 right-2">
                <Lock size={16} className="text-green-500" />
              </div>
              <div className="absolute bottom-2 left-2">
                <Server size={16} className="text-quantminds-grey" />
              </div>
              
              {/* Data flow animation */}
              <div className="absolute inset-0">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-quantminds-blue/60 rounded-full animate-ping"
                    style={{
                      top: `${30 + i * 20}%`,
                      left: `${20 + i * 30}%`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <span className="text-sm text-gray-400 text-center">Your AI Brain<br />Inside Your Fortress</span>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 glassmorphism rounded-xl">
            <div className="w-16 h-16 bg-quantminds-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock size={24} className="text-quantminds-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Absolute Control</h3>
            <p className="text-gray-400">Your data never leaves your building.</p>
          </div>
          <div className="text-center p-6 glassmorphism rounded-xl">
            <div className="w-16 h-16 bg-quantminds-grey/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain size={24} className="text-quantminds-grey" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Custom Expertise</h3>
            <p className="text-gray-400">Our agents become experts on your business, not a global model.</p>
          </div>
          <div className="text-center p-6 glassmorphism rounded-xl">
            <div className="w-16 h-16 bg-quantminds-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Server size={24} className="text-quantminds-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Turnkey Solution</h3>
            <p className="text-gray-400">We deliver a finished product, not a complex project.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;

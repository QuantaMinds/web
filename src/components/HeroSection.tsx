
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Lock, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-radial from-quantminds-grey/20 via-transparent to-transparent"></div>

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <span className="bg-quantminds-grey/20 text-quantminds-grey px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quantminds-grey opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-quantminds-grey"></span>
              </span>
              Founding Partner Program Open
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
             AI for the Enterprise. <br />
             <span className="text-gradient">Private by Design.</span>
           </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">
            Your Business is Too Ambitious for the Sidelines. Quantamind delivers the power of custom AI inside your own secure environment. No compromises. No cloud risk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/contact">
              <Button size="lg" className="font-medium bg-quantminds-grey hover:bg-quantminds-grey/90">
                Schedule Your Demo
              </Button>
            </Link>
          </div>

          <div className="mt-10 sm:mt-12 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4">
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-quantminds-grey" />
              <span className="text-sm text-muted-foreground">100% Offline</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock size={20} className="text-quantminds-grey" />
              <span className="text-sm text-muted-foreground">Private by Design</span>
            </div>
            <div className="flex items-center gap-2">
              <Server size={20} className="text-quantminds-grey" />
              <span className="text-sm text-muted-foreground">Your Infrastructure</span>
            </div>
          </div>
        </div>

        {/* Right Visualization */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg aspect-square glassmorphism rounded-xl overflow-hidden animate-float">
            {/* Secure AI Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full p-4 sm:p-6">
                <div className="grid grid-cols-12 gap-2 h-full">
                  <div className="col-span-8 flex flex-col gap-2">
                    <div className="bg-quantminds-grey/10 rounded-md flex-1 border border-quantminds-grey/30 animate-pulse-subtle p-3">
                      <div className="h-1.5 w-1/4 bg-quantminds-grey/40 rounded-full mb-2"></div>
                      <div className="grid grid-cols-3 gap-2">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="h-8 bg-quantminds-grey/20 rounded flex items-center justify-center">
                            <Lock size={12} className="text-quantminds-grey/60" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-quantminds-blue/10 rounded-md flex-1 border border-quantminds-blue/30 p-3">
                      <div className="h-1.5 w-1/3 bg-quantminds-blue/40 rounded-full mb-2"></div>
                      <div className="flex gap-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="h-16 w-1/3 bg-quantminds-blue/20 rounded flex items-center justify-center">
                            <Shield size={12} className="text-quantminds-blue/60" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-700/40 rounded-md flex-1 border border-gray-600/30 p-3">
                      <div className="h-1.5 w-1/5 bg-gray-500/40 rounded-full mb-2"></div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-500/30 rounded-full w-11/12"></div>
                        <div className="h-2 bg-gray-500/30 rounded-full w-9/12"></div>
                        <div className="h-2 bg-gray-500/30 rounded-full w-10/12"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 flex flex-col gap-2">
                    <div className="bg-quantminds-grey/20 rounded-md flex-1 border border-quantminds-grey/30 p-3">
                      <div className="h-1.5 w-1/2 bg-quantminds-grey/40 rounded-full mb-3"></div>
                      <div className="flex items-end h-full justify-between">
                        {[25, 50, 75, 100, 40].map((h, i) => (
                          <div
                            key={i}
                            className={`w-1/5 rounded-sm mx-0.5 bg-quantminds-grey/${30 + i * 10} ${i === 3 ? "animate-pulse-subtle" : ""}`}
                            style={{ height: `${h}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-quantminds-blue/10 rounded-md flex-1 border border-quantminds-blue/30 p-3 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-t-quantminds-blue border-quantminds-blue/20 animate-spin"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security indicators */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-1 bg-green-500/20 px-2 py-1 rounded-full">
                <Shield size={12} className="text-green-500" />
                <span className="text-xs text-green-500">SECURE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

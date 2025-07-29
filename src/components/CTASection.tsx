
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Gift, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-quantminds-grey/10 to-transparent"></div>

      <div className="container relative z-10">
        <div className="bg-gradient-to-br from-black/80 to-black/60 p-6 sm:p-10 lg:p-16 rounded-3xl border border-white/10 backdrop-blur-xl">
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
            
            {/* Left Text Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Become a <span className="text-gradient">Founding Partner</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
                We are selecting 10 innovative firms to join our exclusive, no-obligation pilot program. 
                Partners receive a custom-built AI agent for free and a lifetime discount on our platform. 
                Help us shape the future of secure enterprise AI.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Gift className="w-5 h-5 text-quantminds-grey" />
                  <span className="text-gray-300">Custom AI agent built for free</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-quantminds-grey" />
                  <span className="text-gray-300">Lifetime discount on platform</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-quantminds-grey" />
                  <span className="text-gray-300">No-obligation pilot program</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="font-medium gap-2 bg-quantminds-grey hover:bg-quantminds-grey/90">
                    Apply for the Pilot Program <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image Content */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-quantminds-grey/30 blur-[100px] opacity-70"></div>
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-quantminds-grey/40 animate-spin-slow"></div>
                <div className="absolute inset-12 rounded-full border border-white/10 flex items-center justify-center p-4 sm:p-6 text-center glassmorphism">
                  <div>
                    <div className="font-bold text-4xl sm:text-5xl mb-2 text-gradient">10</div>
                    <p className="text-sm text-muted-foreground mb-3">
                      founding partner<br />spots available
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">Accepting Applications</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;

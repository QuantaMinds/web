
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Gift, Clock, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const FoundingPilotSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-quantminds-purple/10 via-quantminds-blue/5 to-quantminds-purple/15 relative overflow-hidden border-y border-quantminds-purple/20">
      <div className="absolute inset-0 circuit-bg opacity-20"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center bg-gradient-to-r from-quantminds-purple/20 to-quantminds-blue/20 border border-quantminds-purple/30 text-white p-6 rounded-xl mb-12 backdrop-blur-sm">
          <div className="flex justify-center items-center gap-3 mb-2">
            <Star className="h-6 w-6 text-quantminds-purple animate-pulse" />
            <span className="text-xl font-bold text-gradient">FOUNDING PARTNER PROGRAM</span>
            <Star className="h-6 w-6 text-quantminds-blue animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground">10 spots only — early access & exclusive pricing</p>
        </div>

        {/* Offer */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Join Our Founding Partners
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            Join the AI revolution with private AI — no data leaks, full control. Get hands-on with early access and exclusive benefits.
          </p>

          <p className="text-md font-medium mb-6 text-blue-400">
            Starts from October — get your spots early.
          </p>
        </div>

        {/* Plan Options */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Award className="h-8 w-8 text-quantminds-purple" />
            Choose Your Plan
          </h3>

          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <Card className="pt-10 border-2 border-quantminds-blue/40 bg-gradient-to-br from-quantminds-blue/10 to-quantminds-blue/5 hover:scale-105 transition-all shadow-lg">
                <CardHeader>
                  <CardTitle className="text-center text-xl flex items-center justify-center gap-2">
                    <CheckCircle className="h-6 w-6 text-quantminds-blue" />
                    Free + Commitment
                  </CardTitle>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-quantminds-blue">FREE</span>
                    <div className="text-sm text-quantminds-blue font-semibold">Try first, commit later</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <ul className="space-y-2">
                    <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-quantminds-blue" /> 4-week pilot</li>
                    <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-quantminds-blue" /> 6-month commitment if satisfied</li>
                    <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-quantminds-blue" /> 40% lifetime discount</li>
                  </ul>
                  <div className="pt-4">
                    <Link to="/contact">
                      <Button className="w-full bg-quantminds-blue hover:bg-quantminds-blue/90 text-white font-semibold py-3 rounded-lg transition-all hover:scale-105">
                        Join Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingPilotSection;


import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Shield, Zap, Users, X, CheckCircle } from 'lucide-react';

interface EnterpriseUpsellProps {
  onClose: () => void;
}

const EnterpriseUpsell = ({ onClose }: EnterpriseUpsellProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full bg-background border-white/20 shadow-2xl">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-muted-foreground hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-quantminds-grey/20 flex items-center justify-center">
              <Shield className="w-8 h-8 text-quantminds-grey" />
            </div>
            <CardTitle className="text-2xl mb-2">Ready for Enterprise?</CardTitle>
            <CardDescription className="text-base">
              Need to analyze unlimited leases? Need to process highly confidential deal documents?
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-lg font-medium text-quantminds-grey mb-2">
              Deploy the Enterprise Lease Abstractor inside your own secure, private network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 glassmorphism rounded-lg">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h4 className="font-semibold text-sm">100% Private</h4>
              <p className="text-xs text-muted-foreground">Your data never leaves your infrastructure</p>
            </div>
            
            <div className="text-center p-4 glassmorphism rounded-lg">
              <Zap className="w-8 h-8 text-quantminds-blue mx-auto mb-2" />
              <h4 className="font-semibold text-sm">Unlimited Processing</h4>
              <p className="text-xs text-muted-foreground">Process thousands of documents per day</p>
            </div>
            
            <div className="text-center p-4 glassmorphism rounded-lg">
              <Users className="w-8 h-8 text-quantminds-grey mx-auto mb-2" />
              <h4 className="font-semibold text-sm">Team Access</h4>
              <p className="text-xs text-muted-foreground">Multi-user dashboard with role controls</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <h4 className="font-semibold">Enterprise Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              {[
                'Custom AI model training',
                'Batch document processing',
                'API integration capabilities',
                'Advanced security controls',
                'White-label deployment',
                '24/7 dedicated support'
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <Link to="/contact" className="flex-1">
              <Button className="w-full bg-quantminds-grey hover:bg-quantminds-grey/90" size="lg">
                Contact Sales
              </Button>
            </Link>
            <Button variant="outline" onClick={onClose} size="lg">
              Continue Free Trial
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            Join 100+ enterprises already using QuantaMind's private AI solutions
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnterpriseUpsell;

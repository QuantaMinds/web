
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Shield, Clock, Users } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="relative z-10 container mx-auto py-16 sm:py-24 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Secure Your AI Future?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          Join industry leaders who are already transforming their businesses with private, secure AI. 
          Our Founding Partner Program is designed for forward-thinking organizations that refuse to compromise on data security.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glassmorphism p-6 rounded-xl">
            <Shield className="w-8 h-8 text-quantminds-grey mx-auto mb-3" />
            <h3 className="font-semibold mb-2">100% Secure</h3>
            <p className="text-sm text-muted-foreground">Your data never leaves your infrastructure</p>
          </div>
          <div className="glassmorphism p-6 rounded-xl">
            <Clock className="w-8 h-8 text-quantminds-blue mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Rapid Deployment</h3>
            <p className="text-sm text-muted-foreground">Custom AI ready in weeks, not years</p>
          </div>
          <div className="glassmorphism p-6 rounded-xl">
            <Users className="w-8 h-8 text-quantminds-grey mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Expert Support</h3>
            <p className="text-sm text-muted-foreground">Dedicated team ensures your success</p>
          </div>
        </div>

        <Link to="/contact">
          <Button size="lg" className="font-medium gap-2 bg-quantminds-grey hover:bg-quantminds-grey/90">
            Apply for Founding Partner Program
          </Button>
        </Link>

        <p className="text-sm text-muted-foreground mt-4">
          Limited to 10 founding partners • No-obligation pilot program
        </p>
      </div>
    </div>
  );
};

export default ContactSection;

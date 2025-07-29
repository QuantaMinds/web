
import React from 'react';
import { Cloud, X, FileText, ArrowRight } from 'lucide-react';

const ProblemSection = () => {
  return (
    <div className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Choice You <span className="text-gradient">Shouldn't Have to Make</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every modern business wants to leverage AI to analyze data, automate work, and gain a competitive edge. But for industries built on confidentiality—law, finance, healthcare, defense—a critical paradox has emerged.
          </p>
        </div>

        <div className="glassmorphism p-8 rounded-xl mb-12">
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Using powerful cloud-based AI means sending your most sensitive data to a third party. It means risking your intellectual property, breaking client privilege, and navigating a minefield of compliance issues.
            </p>
          </div>
          
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-red-400 mb-4 text-center">So you're left with a choice:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-500/5 rounded-lg">
                <h4 className="font-semibold text-red-400 mb-2">Innovate and accept the security risks?</h4>
              </div>
              <div className="text-center p-4 bg-red-500/5 rounded-lg">
                <h4 className="font-semibold text-red-400 mb-2">Stay Secure and fall behind the competition?</h4>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-quantminds-blue mb-2">
              At Quantamind, we believe this is a false choice.
            </h3>
          </div>
        </div>

        {/* Risk indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText size={24} className="text-red-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-red-400">Attorney-Client Privilege</h3>
            <p className="text-gray-400">Risk breaking confidentiality with sensitive legal documents</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText size={24} className="text-red-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-red-400">Patient Privacy</h3>
            <p className="text-gray-400">HIPAA violations from medical data exposure</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText size={24} className="text-red-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-red-400">Financial Records</h3>
            <p className="text-gray-400">Compliance breaches with sensitive financial data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;

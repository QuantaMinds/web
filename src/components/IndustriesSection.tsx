
import React from 'react';
import { Scale, Heart, Building, Shield, Lock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const IndustriesSection = () => {
  const industries = [
    {
      title: "For Law Firms",
      icon: Scale,
      headline: "Protect Attorney-Client Privilege",
      description: "Secure Your Case Strategy with AI that never leaves your firm",
      features: [
        "Zero data exposure to third parties",
        "Maintain complete confidentiality",
        "GDPR and regulatory compliance built-in"
      ],
      accent: "quantminds-purple"
    },
    {
      title: "For Healthcare",
      icon: Heart,
      headline: "HIPAA-Compliant AI Solutions",
      description: "Patient data stays secure while AI enhances care decisions",
      features: [
        "Full HIPAA compliance guaranteed",
        "On-premise medical data processing",
        "No patient information in cloud systems"
      ],
      accent: "quantminds-blue"
    },
    {
      title: "For Finance",
      icon: Building,
      headline: "Bank-Grade Security Standards",
      description: "Financial intelligence without compromising sensitive data",
      features: [
        "SOC 2 Type II ready infrastructure",
        "Complete audit trail capabilities",
        "Regulatory compliance automation"
      ],
      accent: "green-500"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
            Built for Industries Where Trust is Everything
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Specialized AI solutions that understand your industry's unique security and compliance requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="glassmorphism p-8 rounded-xl relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-${industry.accent}/20 flex items-center justify-center`}>
                  <industry.icon className={`w-6 h-6 text-${industry.accent}`} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {industry.title}
                </h3>
              </div>

              <h4 className={`text-lg font-semibold mb-3 text-${industry.accent}`}>
                {industry.headline}
              </h4>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {industry.description}
              </p>

              <ul className="space-y-3 mb-8">
                {industry.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Shield className={`w-4 h-4 text-${industry.accent} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="block">
                <button className={`w-full py-3 rounded-lg font-semibold transition border border-${industry.accent} text-${industry.accent} hover:bg-${industry.accent} hover:text-white`}>
                  Secure Your Data
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
              Apply to Join Our Founding Partner Program
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;

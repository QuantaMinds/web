import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Heart, Building, Shield, FileText, Factory, Plane, Zap, Smartphone, TrendingUp } from 'lucide-react';

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      title: "Professional Services",
      industries: [
        {
          title: "Legal & M&A",
          icon: Scale,
          description: "Analyze contracts and due diligence data with absolute attorney-client privilege.",
          color: "quantminds-grey"
        },
        {
          title: "Healthcare & Life Sciences", 
          icon: Heart,
          description: "Process patient data and proprietary research with guaranteed HIPAA compliance.",
          color: "quantminds-blue"
        },
        {
          title: "Finance & Accounting",
          icon: Building, 
          description: "Detect fraud and analyze financial statements without exposing client data.",
          color: "quantminds-grey"
        },
        {
          title: "Aerospace, Defense & Manufacturing",
          icon: Plane,
          description: "Analyze classified designs and operational data in secure, air-gapped facilities.",
          color: "quantminds-blue"
        }
      ]
    },
    {
      title: "Deployment Options",
      industries: [
        {
          title: "Professional Plan (Secure Cloud)",
          icon: Shield,
          description: "Think of this like a private, armored car service. We deploy your custom AI agent in a dedicated, isolated cloud instance that belongs only to you. Zero Data Retention & No-Training Guarantee.",
          color: "quantminds-blue"
        },
        {
          title: "Enterprise Plan (Your Private Environment)",
          icon: Factory,
          description: "Think of this like a high-tech analysis lab built inside your own secure vault. We deploy the Quantamind Engine directly onto your on-premise servers or into your existing private cloud (VPC).",
          color: "quantminds-grey"
        },
        {
          title: "Air-Gapped Deployment",
          icon: Zap,
          description: "Can run completely offline or in an air-gapped environment. The only choice for mission-critical data, classified information, and priceless intellectual property.",
          color: "quantminds-blue"
        },
        {
          title: "Compliance Ready",
          icon: FileText,
          description: "Meets Major Compliance Standards (SOC 2, HIPAA). Perfect for getting started quickly with sensitive, but not top-secret, data.",
          color: "quantminds-grey"
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    if (color === "quantminds-blue") {
      return {
        bg: "bg-quantminds-blue",
        bgOpacity: "bg-quantminds-blue/20",
        text: "text-quantminds-blue",
        border: "border-quantminds-blue/40",
        icon: "w-8 h-8 text-quantminds-blue"
      };
    }
    return {
      bg: "bg-quantminds-grey",
      bgOpacity: "bg-quantminds-grey/20", 
      text: "text-quantminds-grey",
      border: "border-quantminds-grey/40",
      icon: "w-8 h-8 text-quantminds-grey"
    };
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built for the <span className="text-gradient">Most Demanding Data Environments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We provide solutions for the most demanding data environments: Legal & M&A, Finance & Accounting, Healthcare & Life Sciences, Aerospace, Defense & Manufacturing.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-col md:flex-row justify-center mb-12 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === index
                  ? 'bg-quantminds-blue text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Active tab content */}
        <div className="transition-all duration-300">
          <Card className="bg-background border-border overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories[activeTab].industries.map((industry, index) => (
                  <div key={index} className="glassmorphism p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg ${getColorClasses(industry.color).bgOpacity} flex items-center justify-center`}>
                        {React.createElement(industry.icon, {
                          className: getColorClasses(industry.color).icon
                        })}
                      </div>
                      <h3 className="text-xl font-bold">{industry.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection;

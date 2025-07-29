import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Check, Star, Rocket, Cloud, Server, HardDrive
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const saasPlans = [
    {
      name: "Professional Plan",
      subtitle: "The fastest way to deploy a secure AI solution",
      price: "$200",
      period: "/month",
      bestFor: "Agile teams and mid-sized businesses who want private AI without managing hardware",
      deployment: "Runs in Your Secure Cloud (VPC)",
      includes: "1 Custom AI Agent, Managed Hosting & Updates",
      security: "Zero Data Retention Guarantee",
      icon: Cloud,
      cta: "Get Started",
      isPopular: true
    },
    {
      name: "Enterprise Plan",
      subtitle: "The gold standard for absolute data control and security",
      price: "$50,000",
      period: "/year",
      bestFor: "Regulated industries and large enterprises with their own IT infrastructure",
      deployment: "Runs On Your Private Servers",
      includes: "1 Custom AI Agent, Admin Dashboard, and Orchestration Tools",
      security: "Runs Fully Offline & Air-Gapped",
      icon: Server,
      cta: "Contact Sales",
      isPopular: false
    },
    {
      name: "Quantamind Vault™",
      subtitle: "The power of on-premise AI with zero IT burden",
      price: "$85,000",
      period: "/year",
      bestFor: "Companies that need offline security but don't have the staff to manage GPU servers",
      deployment: "A Pre-Configured AI Appliance",
      includes: "1 Custom AI Agent Pre-installed, Managed Hardware & Software",
      security: "Plug-and-Play Offline AI",
      icon: HardDrive,
      cta: "Contact Sales",
      isPopular: false
    }
  ];

  const allPlansFeatures = [
    "Secure, private AI",
    "GDPR / HIPAA ready",
    "Your branding",
    "Setup support"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Pricing Plans
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Simple, transparent pricing designed to provide the right level of private AI for your organization.
            </p>
          </div>

          {/* Pilot Program Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-quantminds-purple/20 text-quantminds-purple px-4 py-2 rounded-full mb-4">
                <Rocket className="w-5 h-5" />
                <span className="font-semibold">Limited Offer</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-quantminds-purple">
                Pilot Program
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join 10 founding partners and get exclusive benefits
              </p>
            </div>

            <div className="glassmorphism p-8 md:p-12 rounded-xl border-2 border-quantminds-purple/50 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="bg-quantminds-purple text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Only 10 spots
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">What You Get:</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Free agent development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Your branding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Priority support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-quantminds-purple flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300"><strong>40% lifetime discount</strong></span>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-br from-quantminds-purple to-quantminds-blue p-8 rounded-xl mb-6">
                    <div className="text-4xl font-bold text-white mb-2">FREE</div>
                    <div className="text-white/80">Development</div>
                  </div>
                  <Link to="/contact" className="w-full">
                    <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition w-full border-2 border-quantminds-purple">
                      Join Pilot Program
                    </button>
                  </Link>
                  <p className="text-sm text-gray-400 mt-3">Reviewed in 48 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* SaaS Pricing Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                SaaS Plans
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Scalable AI solutions for businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {saasPlans.map((plan, index) => (
                <div key={index} className={`glassmorphism p-8 rounded-xl relative ${plan.isPopular ? 'ring-2 ring-quantminds-purple scale-105' : ''}`}>
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-quantminds-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      <plan.icon className="w-12 h-12 text-quantminds-purple" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-400 mb-6 italic">{plan.subtitle}</p>

                    <div className="mb-6">
                      <div className="text-3xl font-bold text-quantminds-purple mb-1">
                        Starting at {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-sm font-semibold text-gray-300 mb-1">Best for:</p>
                      <p className="text-sm text-gray-400">{plan.bestFor}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-300 mb-1">Deployment:</p>
                      <p className="text-sm text-gray-400">{plan.deployment}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-300 mb-1">Includes:</p>
                      <p className="text-sm text-gray-400">{plan.includes}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-300 mb-1">Security:</p>
                      <p className="text-sm text-gray-400">{plan.security}</p>
                    </div>
                  </div>

                  <Link to="/contact" className="w-full">
                    <button
                      className={`w-full py-3 rounded-lg font-semibold transition border-2 ${
                        plan.isPopular
                          ? 'bg-quantminds-purple hover:bg-quantminds-purple/90 text-white border-quantminds-purple'
                          : 'text-quantminds-purple border-quantminds-purple hover:bg-quantminds-purple hover:text-white'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Solution Section */}
          <div className="mb-20">
            <div className="glassmorphism p-8 md:p-12 rounded-xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-quantminds-purple">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                All plans can be tailored with additional features like SSO integration, premium support SLAs, and custom-built agents.
              </p>
              <Link to="/contact">
                <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition border-2 border-quantminds-purple">
                  Talk to an Expert
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;

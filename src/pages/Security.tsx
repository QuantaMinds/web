
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, FileCheck, Server, Users } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using AES-256 encryption"
    },
    {
      icon: Lock,
      title: "Zero-Trust Architecture",
      description: "Every request is verified and authenticated before processing"
    },
    {
      icon: Eye,
      title: "Continuous Monitoring",
      description: "24/7 security monitoring and threat detection systems"
    },
    {
      icon: FileCheck,
      title: "Compliance Certifications",
      description: "SOC 2 Type II, ISO 27001, and GDPR compliant"
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Enterprise-grade cloud infrastructure with redundancy"
    },
    {
      icon: Users,
      title: "Access Controls",
      description: "Role-based permissions and multi-factor authentication"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Security & Compliance
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade security measures to protect your data and ensure compliance with industry standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="glassmorphism p-8 rounded-xl hover:glow-purple transition-all duration-300">
                <div className="bg-quantminds-purple/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-quantminds-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glassmorphism p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6 text-quantminds-purple">Data Protection</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-quantminds-purple mt-0.5 flex-shrink-0" />
                  <span>Data is encrypted using AES-256 encryption both in transit and at rest</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-quantminds-purple mt-0.5 flex-shrink-0" />
                  <span>Regular security audits and penetration testing by third-party firms</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-quantminds-purple mt-0.5 flex-shrink-0" />
                  <span>Data residency options available in multiple geographic regions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-quantminds-purple mt-0.5 flex-shrink-0" />
                  <span>Secure data deletion and right to be forgotten compliance</span>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-6 text-quantminds-purple">Access Management</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-quantminds-purple mt-0.5 flex-shrink-0" />
                  <span>Multi-factor authentication (MFA) required for all accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-quantminds-purple mt-0.5 flex-shrink-0" />
                  <span>Role-based access control (RBAC) with granular permissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-quantminds-purple mt-0.5 flex-shrink-0" />
                  <span>Single Sign-On (SSO) integration with enterprise identity providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-quantminds-purple mt-0.5 flex-shrink-0" />
                  <span>Session management with automatic timeout and secure tokens</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="glassmorphism p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-quantminds-purple">
              Compliance Certifications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-quantminds-purple/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-quantminds-purple" />
                </div>
                <h3 className="font-semibold">SOC 2 Type II</h3>
              </div>
              <div className="text-center">
                <div className="bg-quantminds-purple/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-quantminds-purple" />
                </div>
                <h3 className="font-semibold">ISO 27001</h3>
              </div>
              <div className="text-center">
                <div className="bg-quantminds-purple/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-quantminds-purple" />
                </div>
                <h3 className="font-semibold">GDPR</h3>
              </div>
              <div className="text-center">
                <div className="bg-quantminds-purple/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-quantminds-purple" />
                </div>
                <h3 className="font-semibold">HIPAA Ready</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-8">
              Our security practices are regularly audited and certified by independent third parties 
              to ensure we meet the highest standards for data protection and privacy.
            </p>
            <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
              Request Security Documentation
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Security;

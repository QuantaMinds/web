
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Zap, Shield, Cpu, BarChart3, Code, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "GPU Acceleration",
      description: "Lightning-fast processing with cutting-edge GPU technology for maximum performance."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance certifications."
    },
    {
      icon: Cpu,
      title: "Custom AI Models",
      description: "Tailored AI solutions designed specifically for your business needs and use cases."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Instant insights and analytics with interactive dashboards and reporting."
    },
    {
      icon: Code,
      title: "Easy Integration",
      description: "Simple APIs and SDKs for seamless integration with your existing systems."
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock expert support to ensure your AI solutions run smoothly."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Powerful Features
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the comprehensive suite of features that make QuantaMind the premier choice for AI-powered business intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="glassmorphism p-8 rounded-xl hover:glow-purple transition-all duration-300">
                <div className="bg-quantminds-purple/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-quantminds-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="glassmorphism p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-quantminds-purple">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our founding pilot program and get early access to all features with personalized support.
            </p>
            <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
              Start Your Pilot Program
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;

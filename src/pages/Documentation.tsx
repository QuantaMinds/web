
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Book, Code, FileText, Zap } from 'lucide-react';

const Documentation = () => {
  const sections = [
    {
      icon: Zap,
      title: "Quick Start",
      description: "Get up and running with QuantaMind in minutes",
      items: ["Installation", "Authentication", "First AI Model", "Basic Configuration"]
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete reference for all API endpoints",
      items: ["Authentication", "Models", "Training", "Inference", "Monitoring"]
    },
    {
      icon: FileText,
      title: "Guides & Tutorials",
      description: "Step-by-step guides for common use cases",
      items: ["Building Custom Models", "Data Preprocessing", "Model Deployment", "Performance Optimization"]
    },
    {
      icon: Book,
      title: "Best Practices",
      description: "Learn from our experience and community",
      items: ["Model Architecture", "Data Quality", "Security Guidelines", "Scaling Strategies"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Documentation
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale AI solutions with QuantaMind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {sections.map((section, index) => (
              <div key={index} className="glassmorphism p-8 rounded-xl hover:glow-purple transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-quantminds-purple/20 w-12 h-12 rounded-lg flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-quantminds-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                    <p className="text-gray-400 text-sm">{section.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="text-gray-300 hover:text-quantminds-purple transition flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-quantminds-purple rounded-full"></span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="glassmorphism p-12 rounded-xl">
            <h2 className="text-3xl font-bold mb-6 text-center text-quantminds-purple">
              Popular Documentation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Getting Started Guide</h3>
                <p className="text-gray-300 mb-4">
                  Complete walkthrough from setup to your first AI model deployment
                </p>
                <a href="#" className="text-quantminds-purple hover:underline">Read Guide →</a>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">API Reference</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive API documentation with code examples and responses
                </p>
                <a href="#" className="text-quantminds-purple hover:underline">View API Docs →</a>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">SDK Examples</h3>
                <p className="text-gray-300 mb-4">
                  Ready-to-use code examples for Python, JavaScript, and other languages
                </p>
                <a href="#" className="text-quantminds-purple hover:underline">Browse Examples →</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;

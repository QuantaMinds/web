
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Code2, Database, Zap, Shield } from 'lucide-react';

const ApiReference = () => {
  const endpoints = [
    {
      method: "POST",
      endpoint: "/api/v1/models",
      description: "Create a new AI model",
      category: "Models"
    },
    {
      method: "GET",
      endpoint: "/api/v1/models/{id}",
      description: "Retrieve model details",
      category: "Models"
    },
    {
      method: "POST",
      endpoint: "/api/v1/models/{id}/train",
      description: "Start model training",
      category: "Training"
    },
    {
      method: "POST",
      endpoint: "/api/v1/models/{id}/predict",
      description: "Make predictions with model",
      category: "Inference"
    },
    {
      method: "GET",
      endpoint: "/api/v1/models/{id}/metrics",
      description: "Get model performance metrics",
      category: "Monitoring"
    }
  ];

  const categories = [
    {
      icon: Code2,
      name: "Models",
      description: "Create, manage, and configure AI models"
    },
    {
      icon: Database,
      name: "Training",
      description: "Train models with your data"
    },
    {
      icon: Zap,
      name: "Inference",
      description: "Make predictions and get results"
    },
    {
      icon: Shield,
      name: "Monitoring",
      description: "Track performance and usage"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              API Reference
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Complete reference for the QuantaMind API with examples, parameters, and response formats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {categories.map((category, index) => (
              <div key={index} className="glassmorphism p-6 rounded-xl text-center hover:glow-purple transition-all duration-300">
                <div className="bg-quantminds-purple/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-6 h-6 text-quantminds-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
          
          <div className="glassmorphism p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-bold mb-6 text-quantminds-purple">Authentication</h2>
            <p className="text-gray-300 mb-4">
              All API requests require authentication using an API key. Include your API key in the Authorization header:
            </p>
            <div className="bg-black/40 p-4 rounded-lg font-mono text-sm">
              <span className="text-gray-400">Authorization:</span> <span className="text-quantminds-purple">Bearer YOUR_API_KEY</span>
            </div>
          </div>
          
          <div className="glassmorphism p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-bold mb-6 text-quantminds-purple">Base URL</h2>
            <div className="bg-black/40 p-4 rounded-lg font-mono text-sm">
              https://api.quantamind.co/v1
            </div>
          </div>
          
          <div className="glassmorphism p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-quantminds-purple">Endpoints</h2>
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="border-l-4 border-quantminds-purple/30 pl-6 py-4 hover:border-quantminds-purple transition-colors">
                  <div className="flex items-center gap-4 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                      endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="font-mono text-quantminds-purple">{endpoint.endpoint}</code>
                    <span className="text-gray-400 text-sm">({endpoint.category})</span>
                  </div>
                  <p className="text-gray-300">{endpoint.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold mb-4 text-quantminds-purple">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              Check out our interactive API explorer or contact our support team for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-quantminds-purple hover:bg-quantminds-purple/90 text-white px-6 py-3 rounded-lg transition">
                Try API Explorer
              </button>
              <button className="border border-quantminds-purple text-quantminds-purple hover:bg-quantminds-purple hover:text-white px-6 py-3 rounded-lg transition">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiReference;


import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutUsSection from '@/components/AboutUsSection';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About QuantaMind
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Revolutionizing business intelligence through AI-powered GPU-accelerated custom models
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-quantminds-purple">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                At QuantaMind, we believe that every business deserves access to cutting-edge AI technology. 
                Our mission is to democratize artificial intelligence by providing GPU-accelerated custom models 
                that deliver unprecedented insights and automation capabilities.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We're committed to transforming how businesses operate, make decisions, and scale their 
                operations through the power of intelligent automation.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-quantminds-purple">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                To become the leading platform for enterprise AI solutions, enabling businesses of all sizes 
                to harness the full potential of artificial intelligence without the complexity of building 
                and maintaining their own infrastructure.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We envision a future where AI is seamlessly integrated into every business process, 
                driving efficiency, innovation, and growth across industries.
              </p>
            </div>
          </div>
          
          <div className="glassmorphism p-8 rounded-xl mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center text-quantminds-purple">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-300">
                  Constantly pushing the boundaries of what's possible with AI technology
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
                <p className="text-gray-300">
                  Making advanced AI technology accessible to businesses of all sizes
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-300">
                  Delivering exceptional results through cutting-edge technology and expertise
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Team Section */}
        <AboutUsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;


import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Careers
            </h1>
            
            <div className="glassmorphism p-12 rounded-xl">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-2xl font-bold mb-4 text-quantminds-purple">
                No Open Positions
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're not hiring at the moment, but we're always interested in connecting with talented people.
              </p>
              
              <p className="text-gray-400">
                Interested in future opportunities? Send us your resume at{' '}
                <a href="mailto:careers@quantamind.co" className="text-quantminds-purple hover:underline">
                  careers@quantamind.co
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;

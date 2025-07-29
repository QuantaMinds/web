
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IndustriesSection from '@/components/IndustriesSection';

const Industries = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        <div className="pt-20">
          <IndustriesSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Industries;

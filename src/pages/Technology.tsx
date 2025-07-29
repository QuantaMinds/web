
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TechnologySection from '@/components/TechnologySection';

const Technology = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        <div className="pt-20">
          <TechnologySection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Technology;

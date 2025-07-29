
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FoundingPilotSection from '@/components/FoundingPilotSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import UseCasesSection from '@/components/UseCasesSection';
import HowWereDifferentSection from '@/components/HowWereDifferentSection';
import WhyDifferentSection from '@/components/WhyDifferentSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section id="founding-pilot">
          <FoundingPilotSection />
        </section>

        <section id="how-different">
          <HowWereDifferentSection />
        </section>
        
        <section id="problem">
          <ProblemSection />
        </section>

        <section id="solution">
          <SolutionSection />
        </section>
        
        <section id="howitworks">
          <HowItWorksSection />
        </section>
        
        <section id="usecases">
          <UseCasesSection />
        </section>
        
        <section id="cta">
          <CTASection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;


import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeaseAbstractorUpload from '@/components/product/lease-abstractor/LeaseAbstractorUpload';

const LeaseAbstractor = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <main className="flex-grow pt-20">
        <LeaseAbstractorUpload />
      </main>
      
      <Footer />
    </div>
  );
};

export default LeaseAbstractor;

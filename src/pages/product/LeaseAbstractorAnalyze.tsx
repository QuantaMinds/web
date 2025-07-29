
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeaseAbstractorChat from '@/components/product/lease-abstractor/LeaseAbstractorChat';

const LeaseAbstractorAnalyze = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <main className="flex-grow pt-20">
        <LeaseAbstractorChat />
      </main>
    </div>
  );
};

export default LeaseAbstractorAnalyze;

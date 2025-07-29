
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import ProductTools from '@/components/product/ProductTools';

const Product = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <main className="flex-grow pt-20">
        
        <ProductTools />
      </main>
      
      <Footer />
    </div>
  );
};

export default Product;

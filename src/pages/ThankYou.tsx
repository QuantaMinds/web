import React from 'react';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Thanks for joining the waitlist!</h1>
        <p className="text-lg">We will get back to you soon.</p>
      </div>
    </div>
  );
};

export default ThankYou;

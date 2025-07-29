
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-400">
              Last updated: December 15, 2024
            </p>
          </div>
          
          <div className="glassmorphism p-8 rounded-xl space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-quantminds-purple">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using QuantaMind's services, you accept and agree to be bound by the 
                terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-quantminds-purple">2. Service Description</h2>
              <p className="text-gray-300 mb-4">
                QuantaMind provides AI-powered business intelligence through GPU-accelerated custom models. 
                Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Custom AI model development and training</li>
                <li>GPU-accelerated computing resources</li>
                <li>Data analytics and business intelligence tools</li>
                <li>API access and integration support</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-quantminds-purple">3. User Responsibilities</h2>
              <p className="text-gray-300 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the service in compliance with all applicable laws</li>
                <li>Not attempt to circumvent security measures</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-quantminds-purple">4. Data Usage and Ownership</h2>
              <p className="text-gray-300 mb-4">
                You retain ownership of all data you provide to our service. We will:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Process your data only as necessary to provide services</li>
                <li>Not use your data to train models for other customers</li>
                <li>Implement appropriate security measures to protect your data</li>
                <li>Delete your data upon request or service termination</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-quantminds-purple">5. Payment Terms</h2>
              <p className="text-gray-300 mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Subscription fees are billed monthly or annually</li>
                <li>Usage-based charges are calculated and billed monthly</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>Price changes will be communicated 30 days in advance</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-quantminds-purple">6. Service Availability</h2>
              <p className="text-gray-300 mb-4">
                We strive to maintain high service availability but cannot guarantee uninterrupted access. 
                We may temporarily suspend service for maintenance, updates, or other operational reasons.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-quantminds-purple">7. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                QuantaMind shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, 
                goodwill, or other intangible losses.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-quantminds-purple">8. Termination</h2>
              <p className="text-gray-300 mb-4">
                Either party may terminate this agreement at any time. Upon termination:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Your access to the service will be discontinued</li>
                <li>Outstanding fees become immediately due</li>
                <li>Data will be deleted according to our retention policy</li>
                <li>These terms will survive termination where applicable</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-quantminds-purple">9. Contact Information</h2>
              <p className="text-gray-300">
                For questions about these Terms of Service, contact us at{' '}
                <a href="mailto:legal@quantamind.co" className="text-quantminds-purple hover:underline">
                  legal@quantamind.co
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;

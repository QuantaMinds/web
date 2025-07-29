
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-400">
              Last updated: December 15, 2024
            </p>
          </div>
          
          <div className="glassmorphism p-8 rounded-xl space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-quantminds-purple">What Are Cookies</h2>
              <p className="text-gray-300 mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                analyzing how you use our service.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-quantminds-purple">How We Use Cookies</h2>
              <p className="text-gray-300 mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-quantminds-purple">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-quantminds-purple/30 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-quantminds-purple">Essential Cookies</h3>
                  <p className="text-gray-300 mb-2">
                    These cookies are necessary for the website to function and cannot be switched off.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 ml-4">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Load balancing</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-quantminds-purple/30 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-quantminds-purple">Analytics Cookies</h3>
                  <p className="text-gray-300 mb-2">
                    These help us understand how visitors interact with our website.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 ml-4">
                    <li>Google Analytics</li>
                    <li>Usage statistics</li>
                    <li>Performance monitoring</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-quantminds-purple/30 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-quantminds-purple">Functional Cookies</h3>
                  <p className="text-gray-300 mb-2">
                    These enhance functionality and personalization.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 ml-4">
                    <li>Language preferences</li>
                    <li>Theme settings</li>
                    <li>User preferences</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-quantminds-purple">Managing Cookies</h2>
              <p className="text-gray-300 mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Use our cookie preference center (available on our website)</li>
                <li>Adjust your browser settings to block or delete cookies</li>
                <li>Use browser extensions that manage cookies</li>
                <li>Opt out of specific tracking services</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Please note that blocking certain cookies may impact your experience on our website.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-quantminds-purple">Third-Party Cookies</h2>
              <p className="text-gray-300 mb-4">
                We may use third-party services that set their own cookies:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Google Analytics for website analytics</li>
                <li>Intercom for customer support</li>
                <li>Stripe for payment processing</li>
                <li>Social media platforms for sharing features</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-quantminds-purple">Cookie Retention</h2>
              <p className="text-gray-300 mb-4">
                Different cookies have different retention periods:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain for a set period (30 days to 2 years)</li>
                <li><strong>Essential Cookies:</strong> Retained as long as necessary for functionality</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-quantminds-purple">Updates to This Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update this Cookie Policy from time to time. When we do, we will post the 
                updated policy on this page and update the "Last updated" date.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-quantminds-purple">Contact Us</h2>
              <p className="text-gray-300">
                If you have questions about our use of cookies, please contact us at{' '}
                <a href="mailto:privacy@quantamind.co" className="text-quantminds-purple hover:underline">
                  privacy@quantamind.co
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

export default CookiePolicy;

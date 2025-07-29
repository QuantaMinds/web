import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CloudAITrap = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <article className="glassmorphism p-8 rounded-xl space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-quantminds-purple/20 text-quantminds-purple px-3 py-1 rounded-full text-sm">
                Legal Tech
              </span>
              <span className="text-gray-400 text-sm">June 19, 2025</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-quantminds-purple">
              AI for Law Firms: Are You Risking Client Secrets with Cloud Tools?
            </h1>

            <p className="text-sm text-gray-400">By Dhanush G, CEO of Quantamind</p>

            <div className="text-gray-300 leading-relaxed space-y-5 mt-8">
              <p>
                Every law firm wants to use AI. It promises a huge advantage: a tool that can review legal documents in minutes and analyze complex contracts.
              </p>

              <p>
                But there’s a hidden danger. Most popular AI tools, like ChatGPT, work in one basic way: you have to send your private data to their servers. For a law firm, sending secret client information to a third party is a huge security risk.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8">
                The Problem: Once Data is Sent, You Lose Control
              </h2>

              <p>
                When an attorney uploads a client's secret M&A deal, employment agreement, or case notes to a cloud-based AI, they are sending protected information outside the firm's secure walls.
              </p>

              <p>This creates two big problems:</p>

              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong className="text-white">Breaking Client Confidentiality:</strong> When you upload a client's secret information to an outside AI, you risk breaking attorney-client privilege. It’s a gamble most firms can’t afford to take.
                </li>
                <li>
                  <strong className="text-white">Big Data Leaks:</strong> Cloud companies are top targets for hackers. A single data breach at an AI company could expose secret information from hundreds of your clients at once, which would badly damage your firm's reputation.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8">The Solution: Bring the AI to Your Data</h2>

              <p>
                For years, law firms have known that sensitive work stays inside the firm. Your technology should work the same way.
              </p>

              <p>
                Instead of sending your data out to the cloud, the right approach is to bring the AI securely to your data.
              </p>

              <p><strong className="text-white">This is what we call Private AI.</strong></p>

              <p>
                At Quantamind, we build custom AI assistants that run 100% on your own computers. Your files and case notes never leave your office because our AI works completely offline.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8">
                What Private AI Looks Like in Real Life
              </h2>

              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  Look through millions of legal documents and find the important ones, without ever uploading a single file.
                </li>
                <li>
                  Analyze contracts for key details and potential risks, right inside your own network.
                </li>
                <li>
                  Securely search through old case notes to help your team prepare for a new trial.
                </li>
              </ul>

              <p>
                This is not some idea for the future; this is a safe way for law firms to use the power of AI today.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8">
                The Path Forward for Law Firms
              </h2>

              <p>
                You don't have to choose between using new technology and protecting your clients. By choosing AI that is built to be private from the start, law firms can get all the benefits of AI without the risks.
              </p>

              <p className="text-sm text-gray-400 mt-6 italic">
                About Quantamind: We build secure, private AI agents for businesses that handle sensitive data. If you are a leader at a law firm looking to see how you can safely use AI, we are currently inviting a few firms to join our Founding Partner Pilot Program. Contact us to learn more.
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CloudAITrap;

import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">QuantaMind Blog</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Insights, updates, and thought leadership in AI and business intelligence
            </p>
          </div>

          <div className="space-y-8">
            <article className="glassmorphism p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-quantminds-purple/20 text-quantminds-purple px-3 py-1 rounded-full text-sm">
                  Legal Tech
                </span>
                <span className="text-gray-400 text-sm">June 19, 2025</span>
              </div>

              <h2 className="text-2xl font-semibold mb-2 hover:text-quantminds-purple transition cursor-pointer">
                The Cloud AI Trap: Is Your Firm Accidentally Waiving Attorney-Client Privilege?
              </h2>

              <p className="text-gray-300 mb-4">
                AI is transforming legal workflows—but are you unknowingly putting client confidentiality at risk?
              </p>
              <p className="text-gray-300 mb-4">
                One small oversight could cost your firm more than you realize.
              </p>

              <Link to="/blog/cloud-ai-trap" className="text-quantminds-purple hover:underline">Read more →</Link>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Industries from "./pages/Industries";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Documentation from "./pages/Documentation";
import ApiReference from "./pages/ApiReference";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Security from "./pages/Security";
import CloudAITrap from './pages/blogs_page/CloudAITrap';
import Product from './pages/Product';
import LeaseAbstractor from './pages/product/LeaseAbstractor';
import LeaseAbstractorAnalyze from './pages/product/LeaseAbstractorAnalyze';
import LeaseAbstractorChat from './pages/product/LeaseAbstractorChat';
import ContractAnalyzerChat from './pages/product/ContractAnalyzerChat';
import DealAnalyzerChat from './pages/product/DealAnalyzerChat';
import Login from './pages/Login';
import Register from './pages/Register';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/about" element={<About />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/api-reference" element={<ApiReference />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/security" element={<Security />} />
            <Route path="/blog/cloud-ai-trap" element={<CloudAITrap />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/lease-abstractor" element={<LeaseAbstractor />} />
            <Route path="/product/lease-abstractor/analyze" element={<LeaseAbstractorAnalyze />} />
            <Route 
              path="/product/lease-abstractor/chat" 
              element={
                <ProtectedRoute>
                  <LeaseAbstractorChat />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/product/contract-analyzer/chat" 
              element={
                <ProtectedRoute>
                  <ContractAnalyzerChat />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/product/deal-analyzer/chat" 
              element={
                <ProtectedRoute>
                  <DealAnalyzerChat />
                </ProtectedRoute>
              } 
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

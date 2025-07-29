
import React from 'react';
import { TrendingUp } from 'lucide-react';
import DocumentChat from '@/components/product/DocumentChat';

const DealAnalyzerChat = () => {
  const mockResponses = {
    'valuation': 'The target company is valued at $50M based on 10x EBITDA multiple. Current year EBITDA is projected at $5M.',
    'structure': 'This is a stock purchase deal with 70% cash at closing and 30% earnout over 2 years based on revenue targets.',
    'due diligence': 'Key due diligence items include: financial audits, legal compliance review, customer concentration analysis, and IP assessment.',
    'risk': 'Primary risks: customer concentration (top 3 clients = 60% revenue), pending litigation, and key person dependency.',
    'default': 'I\'ve reviewed your deal documents. The transaction values the target at $50M with mixed consideration structure. What specific deal aspects would you like me to analyze?'
  };

  const suggestedQuestions = [
    "What's the valuation methodology?",
    "How is the deal structured?",
    "What due diligence is required?",
    "What are the key risk factors?",
    "What are the deal terms?"
  ];

  return (
    <DocumentChat
      toolName="Deal Analyzer"
      toolIcon={TrendingUp}
      backPath="/product"
      mockResponses={mockResponses}
      suggestedQuestions={suggestedQuestions}
    />
  );
};

export default DealAnalyzerChat;

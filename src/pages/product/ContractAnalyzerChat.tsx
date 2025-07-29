
import React from 'react';
import { Scale } from 'lucide-react';
import DocumentChat from '@/components/product/DocumentChat';

const ContractAnalyzerChat = () => {
  const mockResponses = {
    'liability': 'The contract includes a liability cap of $100,000 as specified in Section 8.3, with mutual indemnification clauses.',
    'termination': 'Either party may terminate with 30 days written notice. Immediate termination allowed for material breach.',
    'payment': 'Payment terms are Net 30 days from invoice date, with 1.5% monthly late fees after 30 days.',
    'risk': 'Key risks identified: unlimited liability exposure, broad indemnification requirements, and automatic renewal clause.',
    'default': 'I\'ve analyzed your contract and identified key clauses including payment terms, liability provisions, and termination conditions. What specific aspect would you like me to review?'
  };

  const suggestedQuestions = [
    "What are the liability clauses?",
    "What are the termination conditions?",
    "What are the payment terms?",
    "What risks should I be aware of?",
    "Are there any unusual clauses?"
  ];

  return (
    <DocumentChat
      toolName="Contract Analyzer"
      toolIcon={Scale}
      backPath="/product"
      mockResponses={mockResponses}
      suggestedQuestions={suggestedQuestions}
    />
  );
};

export default ContractAnalyzerChat;


import React from 'react';
import { Building } from 'lucide-react';
import DocumentChat from '@/components/product/DocumentChat';

const LeaseAbstractorChat = () => {
  const mockResponses = {
    'lease start': 'The lease commencement date is January 1, 2024, as specified in Section 2.1 of the agreement.',
    'rent': 'The base rent is $15,000 per month, with annual increases of 3% as outlined in the rent schedule.',
    'term': 'This is a 5-year lease term, commencing January 1, 2024 and ending December 31, 2028.',
    'tenant': 'The tenant is ABC Corporation, a Delaware corporation, as defined in the lease preamble.',
    'square feet': 'The leased premises consists of approximately 5,500 square feet of office space on the 3rd floor.',
    'default': 'I found several key details in your lease. The lease runs from January 1, 2024 to December 31, 2028, with base rent of $15,000/month and 3% annual increases. Would you like me to extract any specific information?'
  };

  const suggestedQuestions = [
    "What is the lease start date?",
    "What's the monthly rent amount?",
    "How long is the lease term?",
    "Who is the tenant?",
    "What's the square footage?"
  ];

  return (
    <DocumentChat
      toolName="Lease Abstractor"
      toolIcon={Building}
      backPath="/product"
      mockResponses={mockResponses}
      suggestedQuestions={suggestedQuestions}
    />
  );
};

export default LeaseAbstractorChat;

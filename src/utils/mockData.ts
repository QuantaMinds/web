// Mock data for development when FastAPI backend is not available
// This allows frontend development without backend dependency

export const MOCK_USER = {
  id: 'mock-user-1',
  email: 'demo@example.com',
  firstName: 'Demo',
  lastName: 'User',
};

export const MOCK_AUTH_RESPONSE = {
  token: 'mock-jwt-token-for-development',
  user: MOCK_USER,
};

// Mock API responses for testing
export const MOCK_API_RESPONSES = {
  // Chat responses for different analyzers
  leaseAnalyzer: {
    'lease start': 'The lease commencement date is January 1, 2024, as specified in Section 2.1 of the agreement.',
    'rent': 'The base rent is $15,000 per month, with annual increases of 3% as outlined in the rent schedule.',
    'term': 'This is a 5-year lease term, commencing January 1, 2024 and ending December 31, 2028.',
    'tenant': 'The tenant is ABC Corporation, a Delaware corporation, as defined in the lease preamble.',
    'square feet': 'The leased premises consists of approximately 5,500 square feet of office space on the 3rd floor.',
    'default': 'I found several key details in your lease. The lease runs from January 1, 2024 to December 31, 2028, with base rent of $15,000/month and 3% annual increases. Would you like me to extract any specific information?'
  },
  contractAnalyzer: {
    'liability': 'The contract includes a liability cap of $100,000 as specified in Section 8.3, with mutual indemnification clauses.',
    'termination': 'Either party may terminate with 30 days written notice. Immediate termination allowed for material breach.',
    'payment': 'Payment terms are Net 30 days from invoice date, with 1.5% monthly late fees after 30 days.',
    'risk': 'Key risks identified: unlimited liability exposure, broad indemnification requirements, and automatic renewal clause.',
    'default': 'I\'ve analyzed your contract and identified key clauses including payment terms, liability provisions, and termination conditions. What specific aspect would you like me to review?'
  },
  dealAnalyzer: {
    'valuation': 'The target company is valued at $50M based on 10x EBITDA multiple. Current year EBITDA is projected at $5M.',
    'structure': 'This is a stock purchase deal with 70% cash at closing and 30% earnout over 2 years based on revenue targets.',
    'due diligence': 'Key due diligence items include: financial audits, legal compliance review, customer concentration analysis, and IP assessment.',
    'risk': 'Primary risks: customer concentration (top 3 clients = 60% revenue), pending litigation, and key person dependency.',
    'default': 'I\'ve reviewed your deal documents. The transaction values the target at $50M with mixed consideration structure. What specific deal aspects would you like me to analyze?'
  }
};

// Development mode flag - set this to true to use mock data
export const USE_MOCK_DATA = false; // Set to true for frontend-only development

// Helper function to simulate API delay in development
export const simulateApiDelay = (ms: number = 1000) => 
  new Promise(resolve => setTimeout(resolve, ms));
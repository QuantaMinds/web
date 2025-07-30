// API Configuration
export const API_CONFIG = {
  // Development API URL (your local FastAPI server)
  DEV_BASE_URL: 'http://localhost:8000',
  
  // Production API URL (update this when deploying)
  PROD_BASE_URL: 'https://your-production-api.com', // Update this for production
  
  // Automatically detect environment
  get BASE_URL() {
    // If you're in development (localhost), use dev URL
    // If deployed, use production URL
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1' ||
                       window.location.hostname.includes('lovableproject.com');
    
    // For now, always use production URL for Lovable hosted apps
    // Change this logic based on your deployment strategy
    return window.location.hostname.includes('lovableproject.com') 
      ? this.PROD_BASE_URL 
      : this.DEV_BASE_URL;
  },
  
  // API Endpoints
  ENDPOINTS: {
    // Authentication
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    VERIFY_TOKEN: '/auth/verify',
    REFRESH_TOKEN: '/auth/refresh',
    
    // User Management
    USER_PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile',
    
    // Document Analysis (if you plan to add these)
    UPLOAD_DOCUMENT: '/documents/upload',
    ANALYZE_DOCUMENT: '/documents/analyze',
    GET_ANALYSIS: '/documents/analysis',
    
    // Chat/AI Features
    CHAT_MESSAGE: '/chat/message',
    CHAT_HISTORY: '/chat/history',
    
    // Usage Tracking
    TRACK_USAGE: '/usage/track',
    GET_USAGE: '/usage/stats',
  },
  
  // Request timeout
  TIMEOUT: 10000, // 10 seconds
};

// Helper to build full URLs
export const buildApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// For easy environment switching during development
export const setApiEnvironment = (env: 'development' | 'production') => {
  if (env === 'development') {
    localStorage.setItem('api_env', 'development');
  } else {
    localStorage.removeItem('api_env');
  }
  window.location.reload(); // Reload to apply changes
};
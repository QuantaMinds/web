// API Configuration
export const API_CONFIG = {
  // Development API URL (your local FastAPI server)
  DEV_BASE_URL: "http://localhost:8080",

  // Production API URL (update this when deploying)
  PROD_BASE_URL: "https://contract-02-37718501430.us-east4.run.app", // Update this for production

  // Automatically detect environment
  get BASE_URL() {
    // If you're in development (localhost), use dev URL
    // If deployed, use production URL
    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname.includes("lovableproject.com");

    // For now, always use production URL for Lovable hosted apps
    // Change this logic based on your deployment strategy
    // return !isLocalhost ? this.PROD_BASE_URL : this.DEV_BASE_URL;
    return this.PROD_BASE_URL;
  },

  // API Endpoints
  ENDPOINTS: {
    // Authentication
    LOGIN: "/api/user/login",
    REGISTER: "/api/user/register",

    // Document Analysis (if you plan to add these)
    UPLOAD_DOCUMENT: "/api/upload",

    // Chat/AI Features
    CHAT_MESSAGE: "/api/query",

    // get Collections
    GET_COLLECTIONS: "/api/get_my_collections",

    // Usage Tracking
    TRACK_USAGE: "/usage/track",
    GET_USAGE: "/usage/stats",
  },

  // Request timeout
  TIMEOUT: 30000, // 10 seconds
};

// Helper to build full URLs
export const buildApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// For easy environment switching during development
export const setApiEnvironment = (env: "dev" | "prod") => {
  if (env === "dev") {
    localStorage.setItem("api_env", "dev");
  } else {
    localStorage.removeItem("api_env");
  }
  window.location.reload(); // Reload to apply changes
};

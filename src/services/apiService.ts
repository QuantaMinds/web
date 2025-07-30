import { API_CONFIG, buildApiUrl } from '@/config/api';

// Response types for better type safety
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

// Base API service class
class BaseApiService {
  private getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  private getHeaders(includeAuth: boolean = true): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (includeAuth) {
      const token = this.getAuthToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return headers;
  }

  protected async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {},
    includeAuth: boolean = true
  ): Promise<T> {
    const url = buildApiUrl(endpoint);
    
    const config: RequestInit = {
      ...options,
      headers: {
        ...this.getHeaders(includeAuth),
        ...options.headers,
      },
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

      const response = await fetch(url, {
        ...config,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        let errorMessage = `HTTP error! status: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.detail || errorData.message || errorMessage;
        } catch {
          // If JSON parsing fails, use the default error message
        }
        throw new Error(errorMessage);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Request timeout');
        }
        throw error;
      }
      throw new Error('Unknown error occurred');
    }
  }

  // GET request
  protected async get<T>(endpoint: string, includeAuth: boolean = true): Promise<T> {
    return this.makeRequest<T>(endpoint, { method: 'GET' }, includeAuth);
  }

  // POST request
  protected async post<T>(
    endpoint: string,
    data?: any,
    includeAuth: boolean = true
  ): Promise<T> {
    return this.makeRequest<T>(
      endpoint,
      {
        method: 'POST',
        body: data ? JSON.stringify(data) : undefined,
      },
      includeAuth
    );
  }

  // PUT request
  protected async put<T>(
    endpoint: string,
    data?: any,
    includeAuth: boolean = true
  ): Promise<T> {
    return this.makeRequest<T>(
      endpoint,
      {
        method: 'PUT',
        body: data ? JSON.stringify(data) : undefined,
      },
      includeAuth
    );
  }

  // DELETE request
  protected async delete<T>(endpoint: string, includeAuth: boolean = true): Promise<T> {
    return this.makeRequest<T>(endpoint, { method: 'DELETE' }, includeAuth);
  }
}

// Authentication API service
export class AuthApiService extends BaseApiService {
  async login(credentials: LoginData): Promise<AuthResponse> {
    return this.post<AuthResponse>(API_CONFIG.ENDPOINTS.LOGIN, credentials, false);
  }

  async register(userData: RegisterData): Promise<AuthResponse> {
    return this.post<AuthResponse>(API_CONFIG.ENDPOINTS.REGISTER, userData, false);
  }

  async verifyToken(): Promise<{ user: AuthResponse['user'] }> {
    return this.get<{ user: AuthResponse['user'] }>(API_CONFIG.ENDPOINTS.VERIFY_TOKEN);
  }

  async refreshToken(): Promise<{ token: string }> {
    return this.post<{ token: string }>(API_CONFIG.ENDPOINTS.REFRESH_TOKEN);
  }
}

// User API service
export class UserApiService extends BaseApiService {
  async getProfile(): Promise<AuthResponse['user']> {
    return this.get<AuthResponse['user']>(API_CONFIG.ENDPOINTS.USER_PROFILE);
  }

  async updateProfile(data: Partial<AuthResponse['user']>): Promise<AuthResponse['user']> {
    return this.put<AuthResponse['user']>(API_CONFIG.ENDPOINTS.UPDATE_PROFILE, data);
  }
}

// Chat API service
export class ChatApiService extends BaseApiService {
  async sendMessage(message: string, sessionId?: string): Promise<{
    response: string;
    sessionId: string;
  }> {
    return this.post(API_CONFIG.ENDPOINTS.CHAT_MESSAGE, {
      message,
      sessionId,
    });
  }

  async getChatHistory(sessionId: string): Promise<{
    messages: Array<{
      id: string;
      text: string;
      sender: 'user' | 'ai';
      timestamp: string;
    }>;
  }> {
    return this.get(`${API_CONFIG.ENDPOINTS.CHAT_HISTORY}/${sessionId}`);
  }
}

// Document API service
export class DocumentApiService extends BaseApiService {
  async uploadDocument(file: File): Promise<{
    documentId: string;
    filename: string;
  }> {
    const formData = new FormData();
    formData.append('file', file);

    const url = buildApiUrl(API_CONFIG.ENDPOINTS.UPLOAD_DOCUMENT);
    const token = localStorage.getItem('authToken');

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    return response.json();
  }

  async analyzeDocument(documentId: string, query: string): Promise<{
    response: string;
    highlights?: Array<{ page: number; text: string }>;
  }> {
    return this.post(API_CONFIG.ENDPOINTS.ANALYZE_DOCUMENT, {
      documentId,
      query,
    });
  }
}

// Usage tracking API service
export class UsageApiService extends BaseApiService {
  async trackUsage(action: string, metadata?: any): Promise<void> {
    return this.post(API_CONFIG.ENDPOINTS.TRACK_USAGE, {
      action,
      metadata,
      timestamp: new Date().toISOString(),
    });
  }

  async getUsageStats(): Promise<{
    chatCount: number;
    documentCount: number;
    lastActivity: string;
  }> {
    return this.get(API_CONFIG.ENDPOINTS.GET_USAGE);
  }
}

// Singleton instances for easy use
export const authApi = new AuthApiService();
export const userApi = new UserApiService();
export const chatApi = new ChatApiService();
export const documentApi = new DocumentApiService();
export const usageApi = new UsageApiService();
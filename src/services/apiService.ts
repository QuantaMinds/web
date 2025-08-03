import { API_CONFIG, buildApiUrl } from "@/config/api";

// Response types for better type safety
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface AuthResponse {
  message: string;
  status: string;
  data: {
    userId: string;
  };
}

export interface RegisterData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

interface queryResponse {
  response: string;
}

// Base API service class
class BaseApiService {
  private getAuthToken(): string | null {
    return localStorage.getItem("authToken");
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };
    return headers;
  }

  protected async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {},
    withCredentials: boolean = true // default to true for backward compatibility
  ): Promise<T> {
    const url = buildApiUrl(endpoint);

    const config: RequestInit = {
      ...options,
      headers: {
        ...this.getHeaders(),
        ...options.headers,
      },
      ...(withCredentials ? { credentials: "include" } : {}),
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(
        () => controller.abort(),
        API_CONFIG.TIMEOUT
      );

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
        if (error.name === "AbortError") {
          throw new Error("Request timeout");
        }
        throw error;
      }
      throw new Error("Unknown error occurred");
    }
  }

  // GET request
  protected async get<T>(
    endpoint: string,
    withCredentials?: boolean
  ): Promise<T> {
    return this.makeRequest<T>(endpoint, { method: "GET" }, withCredentials);
  }

  // POST request
  protected async post<T>(
    endpoint: string,
    data?: any,
    withCredentials?: boolean
  ): Promise<T> {
    console.log("====================================");
    console.log(`Making POST request to ${endpoint} with data:`, data);
    console.log("====================================");
    return this.makeRequest<T>(
      endpoint,
      {
        method: "POST",
        body: data ? JSON.stringify(data) : undefined,
      },
      withCredentials
    );
  }

  // PUT request
  protected async put<T>(
    endpoint: string,
    data?: any,
    withCredentials?: boolean
  ): Promise<T> {
    return this.makeRequest<T>(
      endpoint,
      {
        method: "PUT",
        body: data ? JSON.stringify(data) : undefined,
      },
      withCredentials
    );
  }

  // DELETE request
  protected async delete<T>(
    endpoint: string,
    withCredentials?: boolean
  ): Promise<T> {
    return this.makeRequest<T>(endpoint, { method: "DELETE" }, withCredentials);
  }
}

// Authentication API service
export class AuthApiService extends BaseApiService {
  async login(
    credentials: LoginData,
    withCredentials?: boolean
  ): Promise<AuthResponse> {
    return this.post<AuthResponse>(
      API_CONFIG.ENDPOINTS.LOGIN,
      credentials,
      withCredentials
    );
  }

  async register(
    userData: RegisterData,
    withCredentials: boolean = false
  ): Promise<string> {
    return this.post<string>(
      API_CONFIG.ENDPOINTS.REGISTER,
      userData,
      withCredentials
    );
  }
}

// Chat API service
export class ChatApiService extends BaseApiService {
  async sendMessage(
    queryData: { user_input: string; collection_name: string },
    withCredentials: boolean = true // <-- add parameter, default true
  ): Promise<queryResponse> {
    return this.post(
      API_CONFIG.ENDPOINTS.CHAT_MESSAGE,
      queryData,
      withCredentials
    );
  }
}

// Document API service
export class DocumentApiService extends BaseApiService {
  async uploadDocument(file: File): Promise<{
    documentId: string;
    filename: string;
  }> {
    const formData = new FormData();
    formData.append("file", file);

    const url = buildApiUrl(API_CONFIG.ENDPOINTS.UPLOAD_DOCUMENT);
    const token = localStorage.getItem("authToken");

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    return response.json();
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
export const chatApi = new ChatApiService();
export const documentApi = new DocumentApiService();
export const usageApi = new UsageApiService();

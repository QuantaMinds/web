# QuantaMind Frontend

A React-based frontend application for QuantaMind's AI document analysis platform, built with TypeScript, Tailwind CSS, and designed for seamless FastAPI integration.

## 🚀 Features

- **Authentication System**: Complete login/registration with JWT token management
- **Protected Routes**: Secure access to chat features
- **Document Analysis**: AI-powered lease, contract, and deal analysis
- **Chat Interface**: Interactive AI chat with usage tracking
- **Responsive Design**: Mobile-first approach with modern UI
- **TypeScript**: Full type safety and excellent developer experience

## 🛠 Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **React Hook Form** for form management
- **Radix UI** components for accessibility
- **Sonner** for toast notifications

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, inputs, etc.)
│   ├── product/        # Product-specific components
│   └── ...
├── contexts/           # React contexts (Auth, etc.)
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── services/           # API service layer
├── config/             # Configuration files
├── utils/              # Utility functions
└── types/              # TypeScript type definitions
```

## 🔧 FastAPI Integration

### Development Setup

1. **Configure API URLs**: Update the API configuration in `src/config/api.ts`:

```typescript
export const API_CONFIG = {
  DEV_BASE_URL: 'http://localhost:8000',      // Your local FastAPI server
  PROD_BASE_URL: 'https://your-api.com',      // Your production API
  // ...
};
```

2. **API Services**: The application uses a service layer architecture for clean API integration:

```typescript
// Authentication
import { authApi } from '@/services/apiService';
await authApi.login({ email, password });
await authApi.register(userData);

// Document operations
import { documentApi } from '@/services/apiService';
await documentApi.uploadDocument(file);
await documentApi.analyzeDocument(docId, query);
```

### Expected FastAPI Endpoints

Your FastAPI backend should implement these endpoints:

#### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration  
- `GET /auth/verify` - Token verification
- `POST /auth/refresh` - Token refresh

#### Document Management
- `POST /documents/upload` - File upload
- `POST /documents/analyze` - Document analysis
- `GET /documents/analysis/{id}` - Get analysis results

#### Chat & Usage
- `POST /chat/message` - Send chat message
- `GET /chat/history/{sessionId}` - Get chat history
- `POST /usage/track` - Track usage
- `GET /usage/stats` - Get usage statistics

### Request/Response Examples

**Login Request:**
```json
POST /auth/login
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Login Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "user_123",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe"
  }
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Configure your API endpoints in `src/config/api.ts`

4. Start the development server:
```bash
npm run dev
```

### Environment Configuration

The app automatically detects the environment:
- **Development**: Uses `localhost:8000` when running locally
- **Production**: Uses your configured production URL when deployed

To manually switch environments during development:
```javascript
import { setApiEnvironment } from '@/config/api';
setApiEnvironment('development'); // or 'production'
```

## 🔐 Authentication Flow

1. **User Registration/Login**: Frontend sends credentials to FastAPI
2. **JWT Token**: FastAPI returns JWT token and user data
3. **Token Storage**: Frontend stores token in localStorage
4. **API Requests**: All subsequent requests include `Authorization: Bearer <token>`
5. **Token Verification**: App verifies token on load and refreshes if needed

## 📊 Usage Tracking

The app tracks user chat interactions:
- **Free Tier**: 3 chat interactions per user
- **Limit Reached**: Shows contact sales modal
- **Usage API**: Syncs with FastAPI for persistent tracking

## 🎨 Styling & Components

- **Design System**: Semantic tokens in `src/index.css`
- **UI Components**: Customizable Radix UI components in `src/components/ui/`
- **Responsive**: Mobile-first design with Tailwind breakpoints
- **Dark Mode**: Built-in support with CSS custom properties

## 🚀 Deployment

### Frontend Deployment
1. Build the app: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Update `PROD_BASE_URL` in `src/config/api.ts`

### FastAPI Integration Checklist

- [ ] Implement required authentication endpoints
- [ ] Set up JWT token handling
- [ ] Add CORS configuration for your frontend domain
- [ ] Implement document upload/analysis endpoints
- [ ] Add usage tracking endpoints
- [ ] Configure rate limiting and security headers

### Production Configuration

```typescript
// src/config/api.ts
export const API_CONFIG = {
  PROD_BASE_URL: 'https://api.yourdomain.com', // Your FastAPI production URL
  // ...
};
```

## 🧪 Development Features

- **Mock API**: Development mode with mock responses
- **Hot Reload**: Instant updates during development
- **Type Safety**: Full TypeScript coverage
- **Error Handling**: Comprehensive error boundaries and user feedback

## 📝 API Service Architecture

The frontend uses a clean service layer:

```typescript
// Base service with common functionality
class BaseApiService {
  protected async makeRequest<T>(endpoint: string, options?: RequestInit): Promise<T>
  protected async get<T>(endpoint: string): Promise<T>
  protected async post<T>(endpoint: string, data?: any): Promise<T>
}

// Specific services for different domains
export class AuthApiService extends BaseApiService { ... }
export class DocumentApiService extends BaseApiService { ... }
export class ChatApiService extends BaseApiService { ... }
```

This architecture makes it easy to:
- Add new endpoints
- Handle authentication automatically
- Manage error handling consistently
- Switch between development and production

## 🤝 Contributing

1. Follow the existing code structure
2. Add TypeScript types for new features
3. Update API services for new endpoints
4. Test authentication flows
5. Ensure responsive design

## 📞 Support

For FastAPI integration support or questions about the frontend architecture, please refer to the API documentation or contact the development team.

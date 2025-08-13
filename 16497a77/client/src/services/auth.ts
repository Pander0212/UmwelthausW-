import api from './api'
import type { 
  LoginInput, 
  RegisterInput, 
  PasswordResetRequestInput, 
  PasswordResetInput,
  AuthResponse,
  User 
} from '@/types/auth'
import type { ApiResponse } from '@/types/api'

export const authService = {
  async login(data: LoginInput): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/login', data)
    return response.data
  },

  async register(data: RegisterInput): Promise<ApiResponse> {
    const response = await api.post<ApiResponse>('/auth/register', data)
    return response.data
  },

  async logout(): Promise<void> {
    await api.post('/auth/logout')
  },

  async refreshToken(): Promise<{ accessToken: string }> {
    const response = await api.post<{ data: { accessToken: string } }>('/auth/refresh')
    return response.data.data
  },

  async requestPasswordReset(data: PasswordResetRequestInput): Promise<ApiResponse> {
    const response = await api.post<ApiResponse>('/auth/request-password-reset', data)
    return response.data
  },

  async resetPassword(data: PasswordResetInput): Promise<ApiResponse> {
    const response = await api.post<ApiResponse>('/auth/reset-password', data)
    return response.data
  },

  async verifyEmail(token: string): Promise<ApiResponse> {
    const response = await api.get<ApiResponse>(`/auth/verify-email?token=${token}`)
    return response.data
  },

  async getCurrentUser(): Promise<User> {
    const response = await api.get<{ data: User }>('/users/me')
    return response.data.data
  },
}
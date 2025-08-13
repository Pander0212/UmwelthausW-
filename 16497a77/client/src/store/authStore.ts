import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '@/types/auth'

interface AuthState {
  user: User | null
  accessToken: string | null
  isAuthenticated: boolean
  isLoading: boolean
  setUser: (user: User | null) => void
  setAccessToken: (token: string | null) => void
  setLoading: (loading: boolean) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      isLoading: false,
      setUser: (user) =>
        set((state) => ({
          user,
          isAuthenticated: !!user,
        })),
      setAccessToken: (token) =>
        set((state) => ({
          accessToken: token,
        })),
      setLoading: (loading) =>
        set(() => ({
          isLoading: loading,
        })),
      logout: () =>
        set(() => ({
          user: null,
          accessToken: null,
          isAuthenticated: false,
        })),
    }),
    {
      name: 'auth-store',
      partialize: (state) => ({
        user: state.user,
      }),
    }
  )
)
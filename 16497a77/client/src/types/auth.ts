import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  password: z.string().min(6, 'Passwort muss mindestens 6 Zeichen lang sein'),
})

export const RegisterSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  password: z.string()
    .min(8, 'Passwort muss mindestens 8 Zeichen lang sein')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Passwort muss mindestens einen Klein- und Großbuchstaben sowie eine Zahl enthalten'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwörter stimmen nicht überein',
  path: ['confirmPassword'],
})

export const PasswordResetRequestSchema = z.object({
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
})

export const PasswordResetSchema = z.object({
  token: z.string().min(1, 'Token ist erforderlich'),
  newPassword: z.string()
    .min(8, 'Passwort muss mindestens 8 Zeichen lang sein')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Passwort muss mindestens einen Klein- und Großbuchstaben sowie eine Zahl enthalten'),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: 'Passwörter stimmen nicht überein',
  path: ['confirmPassword'],
})

export type LoginInput = z.infer<typeof LoginSchema>
export type RegisterInput = z.infer<typeof RegisterSchema>
export type PasswordResetRequestInput = z.infer<typeof PasswordResetRequestSchema>
export type PasswordResetInput = z.infer<typeof PasswordResetSchema>

export interface User {
  id: string
  email: string
  name: string
  emailVerifiedAt: string | null
  createdAt: string
  updatedAt: string
}

export interface AuthResponse {
  success: boolean
  data: {
    user: User
    accessToken: string
  }
  message?: string
}
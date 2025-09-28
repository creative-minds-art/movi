import { createClient } from './supabase/client'

export interface AuthCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  success: boolean
  error?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user?: any
}

export const signUp = async ({ email, password }: AuthCredentials): Promise<AuthResponse> => {
  try {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, user: data.user }
  } catch (error) {
    return { success: false, error: 'An unexpected error occurred' }
  }
}

export const signIn = async ({ email, password }: AuthCredentials): Promise<AuthResponse> => {
  try {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, user: data.user }
  } catch (error) {
    return { success: false, error: 'An unexpected error occurred' }
  }
}

export const signOut = async (): Promise<AuthResponse> => {
  try {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    return { success: false, error: 'An unexpected error occurred' }
  }
}

export const getCurrentUser = async () => {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    return user
  } catch (error) {
    return null
  }
}
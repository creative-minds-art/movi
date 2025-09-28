'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail, Lock } from 'lucide-react'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const { success, error } = await signIn({ email, password })

    if (success) {
      router.push('/home')
    } else {
      setError(error || 'An unexpected error occurred')
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black">
      <div className="absolute top-24 text-center text-white">
        <h1 className="text-4xl font-bold">Go ahead and set up your account</h1>
        <p className="mt-2 text-gray-400">Sign in-up to enjoy the best managing experience</p>
      </div>
      <div className="w-full max-w-md rounded-t-lg bg-white p-8 shadow-lg">
        <div className="flex justify-center space-x-4 border-b">
          <button className="border-b-2 border-black pb-2 font-semibold text-black">Login</button>
          <button onClick={() => router.push('/register')} className="pb-2 font-semibold text-gray-400">Register</button>
        </div>
        <form onSubmit={handleSignIn} className="mt-8">
          <div className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                id="email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-10"
              />
            </div>
          </div>
          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
          <Button type="submit" className="mt-8 w-full bg-green-500 text-white hover:bg-green-600" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
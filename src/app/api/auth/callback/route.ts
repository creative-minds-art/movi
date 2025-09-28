import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/home'

  console.log('Callback received:', { code: code?.substring(0, 8) + '...', origin, next })

  if (code) {
    try {
      const supabase = createClient()
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)
      
      console.log('Exchange result:', { 
        hasSession: !!data.session, 
        hasUser: !!data.user, 
        error: error?.message 
      })
      
      if (!error && data.session) {
        const forwardedHost = request.headers.get('x-forwarded-host')
        const isLocalEnv = process.env.NODE_ENV === 'development'
        
        console.log('Redirecting to:', `${origin}${next}`)
        
        if (isLocalEnv) {
          return NextResponse.redirect(`${origin}${next}`)
        } else if (forwardedHost) {
          return NextResponse.redirect(`https://${forwardedHost}${next}`)
        } else {
          return NextResponse.redirect(`${origin}${next}`)
        }
      } else {
        console.error('Auth exchange failed:', error?.message)
        return NextResponse.redirect(`${origin}/login?error=auth_exchange_failed&message=${encodeURIComponent(error?.message || 'Unknown error')}`)
      }
    } catch (err) {
      console.error('Callback error:', err)
      return NextResponse.redirect(`${origin}/login?error=callback_exception`)
    }
  }

  console.log('No code provided')
  return NextResponse.redirect(`${origin}/login?error=no_code_provided`)
}
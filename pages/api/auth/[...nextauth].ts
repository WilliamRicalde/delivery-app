import NextAuth from 'next-auth/next'
import GithubProvider from 'next-auth/providers/github'
import type { NextAuthOptions } from 'next-auth'

const options: NextAuthOptions = {
  theme: {
    colorScheme: 'dark',
  },
  debug: true,
  session: {
    strategy: 'jwt',
    maxAge: 60 * 15, // 15 minutes
  },
  secret: process.env.NEXT_AUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET_KEY,
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ]
}


export default NextAuth(options)
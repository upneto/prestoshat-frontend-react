import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null
        }

        // Aqui estamos usando um usuário mock para fins de teste
        // aqui vai o login do MS
        const mockUser = {
          id: '1',
          name: 'Mock User',
          email: 'mock@example.com',
          hashedPassword: '$2b$12$abcdefghijklmnopqrstuv', 
          createdAt: new Date(),
          updatedAt: new Date(),
          emailVerified: null
        };

        // Para fins de teste, vamos assumir que a senha é sempre correta
        if (credentials.email === mockUser.email) {
          return {
            id: mockUser.id,
            email: mockUser.email,
            name: mockUser.name,
            createdAt: mockUser.createdAt.toISOString(),
            updatedAt: mockUser.updatedAt.toISOString(),
          }
        }

        // Se as credenciais não correspondem, retorne null
        return null;
      }
    })
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id
        }
      }
    },
    jwt: ({ token, user }) => {
      if (user) {
        return {
          ...token,
          id: user.id
        }
      }
      return token
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

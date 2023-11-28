import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { authOptions } from './api/auth/[...nextauth]/route'
import Container from './components/Container'
import HomeLogo from './components/home/HomeLogo'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <Container>
      <div className="flex justify-center min-h-screen">
        <div className="pt-20">
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <HomeLogo />

            {/*  <pre>{JSON.stringify(session)}</pre> */}

          </main>
        </div>
      </div>
    </Container>
  )
}

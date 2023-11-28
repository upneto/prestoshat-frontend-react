import getCurrentUser from './api/actions/getCurrentUser';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import './globals.css'
import { Providers } from './providers'


export const metadata = {
  title: 'Seu controle de jogos',
  description: 'Saiba tudo a respeito dos seus jogos favoritos',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (

    <html lang="pt">
      <body>
        <Providers>
          <Navbar currentUser={currentUser}/>
          {children}
          <Footer />
        </Providers>
        </body>
    </html>
  )
}

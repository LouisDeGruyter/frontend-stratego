import { Footer, Navbar } from '@/components'
import './globals.css'
import { SocketsProvider } from '@/context/socket.context';
import { AuthContextProvider } from '@/context/auth.context';



export const metadata = {
  title: 'Strategy',
  description: 'Play the classic board game Stratego',
  icons: {
    icon: '/faviconColor.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className="relative">
        <AuthContextProvider>
        <SocketsProvider>
        <Navbar />
        {children}
        <Footer/>
        </SocketsProvider>
        </AuthContextProvider>
        </body>
    </html>
  )
}

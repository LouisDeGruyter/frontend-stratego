import { Footer, Navbar } from '@/components'
import './globals.css'



export const metadata = {
  title: 'Strategy',
  description: 'Play the classic board game Stratego',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/logo-no-background.svg'/>
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  )
}

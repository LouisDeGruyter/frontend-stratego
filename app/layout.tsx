import { Footer, Navbar } from '@/components'
import './globals.css'
import Link from 'next/link'



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
        
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  )
}

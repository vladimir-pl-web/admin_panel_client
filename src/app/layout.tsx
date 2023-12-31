import Header from '@/ui/header/header'
import './globals.css'
import 'tailwindcss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from '@/providers/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'main layout',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <Header />
        <main>
        {children}
        </main>
        </AuthProvider>
      </body>
    </html>
  )
}

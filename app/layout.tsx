import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Footer from './components/footer'
import Navbar from './components/navbar'
import ToastProvider from '../providers/toast-provider';
import NavbarWithSearch from './components/navbarWithSearch'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Imprentados Ecommerce Store',
  description: 'Tienda Online de artículos personalizados',
}

export const dynamic = 'force-dynamic'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-white`}>
        <ToastProvider />
        <NavbarWithSearch />
        <Navbar />  
        {children}
      <Footer />
      </body>
    </html>
  )
}



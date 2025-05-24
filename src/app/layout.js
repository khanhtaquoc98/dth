import Footer from '@/components/footer'
import './globals.css'
import Header from '@/components/header'
import { Roboto } from 'next/font/google'
import { Epilogue } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-epilogue',
})

export const metadata = {
  title: 'DTH - Công ty THHH Môi Trường Và Năng Lượng DTH',
  description: 'DTH environment and energy company limited',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${epilogue.variable} font-roboto antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

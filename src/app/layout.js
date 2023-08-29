import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '누구나 쉽게, 부동산 조각투자 플랫폼 직투',
  description: '직투(Ziktu) - 누구나 쉽게 하는 부동산 조각 투자 플랫폼',
  openGraph: {
    images: '/og_image.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

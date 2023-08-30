import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: '누구나 쉽게, 부동산 조각투자 플랫폼 직투',
  description: '직투(Ziktu) - 누구나 쉽게 하는 부동산 조각 투자 플랫폼',
  openGraph: {
    title: '누구나 쉽게, 부동산 조각투자 플랫폼 직투',
    description: '직투(Ziktu) - 누구나 쉽게 하는 부동산 조각 투자 플랫폼',
    images: '/og_image.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  )
}

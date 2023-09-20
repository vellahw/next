import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/css/variable.css';

export const metadata = {
  title: '누구나 쉽게, 부동산 조각투자 플랫폼 카사',
  description: '카사(kasa) - 누구나 쉽게 하는 부동산 조각 투자 플랫폼',
  openGraph: {
    title: '누구나 쉽게, 부동산 조각투자 플랫폼 카사',
    description: '카사(kasa) - 누구나 쉽게 하는 부동산 조각 투자 플랫폼',
    images: '/og_image.png'
  }
}

export default async function RootLayout({ children }) {
  return (
      <html lang="ko">
        <body>
            {children}
        </body>
      </html>

  )
}
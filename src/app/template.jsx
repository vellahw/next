'use client'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { RecoilRoot } from 'recoil';

export default function Template({ children }) {
    return (
      <RecoilRoot>
        <Header />
        {children}
        <Footer />
      </RecoilRoot>
    )
  }
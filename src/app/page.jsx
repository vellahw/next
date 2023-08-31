'use client';
import { RecoilRoot } from 'recoil';
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MainPage from "./(pages)/(main)/main"
import '../styles/css/variable.css';

export default function Home() {
  return (
    <RecoilRoot>
    <Header/>
      <MainPage />
      <Footer />
      </RecoilRoot>
  )
}
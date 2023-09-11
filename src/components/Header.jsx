'use client';
import {React, useEffect, useRef} from 'react';
import { useRecoilState } from "recoil";
import { whiteNav, navOpen, isScroll } from "./atom";
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import style from '../styles/css/header.module.css'
import logo from '/public/logos/ziktu-logo.png'
import logo_white from '/public/logos/ziktu-logo-w.png'
import SideNav from "./SideNav";
import { NavMenuItem } from "./NavMenuItem";
import Button from './ui/Button'

function Header() {
  const [isMobileSideOpen, setIsMobileSideOpen] = useRecoilState(navOpen);
  const [isWhiteNav, setIsWhiteNav] = useRecoilState(whiteNav);
  const [scrollPosition, setScrollPosition] = useRecoilState(isScroll);
  const targetRef = useRef(null);  
  const pathname = usePathname()

  const openMenu = () => {
    setIsMobileSideOpen(true);
    setIsWhiteNav(1)
  }

  const closeMenu = () => {
    setIsMobileSideOpen(false);
    if(pathname === '/') {
      setIsWhiteNav(0)
    }
  }

  const clickLogo = () => {
    setIsWhiteNav(0)
  }

  const showQR = () => {
    alert("QR");
  }

  const handleScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    targetRef.current.style.transition ="background-color 0.2s linear 0s";
  }

  useEffect(() => { 
    if(pathname !== '/'){
      setIsWhiteNav(1)
    }

    window.removeEventListener("scroll", handleScroll);
    const timer = setInterval(() => {
        window.addEventListener("scroll", handleScroll);
    }, 100);
    
    return () => {
        document.documentElement.scrollTo(0, 0)
        clearInterval(timer);
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={style.navWrap}>
      <SideNav sideNavOpen={isMobileSideOpen} />

      <div
        className={
         scrollPosition > 0 ||
         isWhiteNav || 
         isMobileSideOpen
         ? style.navWrapper_white
         : style.navWrapper
        }
        ref={targetRef}
      >
        <div className={style.navbar}>
          <Link href='/'>
            <Image
              className={style.logo }
              src={
                isWhiteNav ||
                scrollPosition > 0
                ? logo
                : logo_white
              }
              onClick={
                clickLogo
              }
              alt="헤더로고"
              priority={true}
            >
            </Image>
          </Link>  
          
          <div className={style.iconWrapper}>
            { !isMobileSideOpen ? 
              <AiOutlineMenu
                onClick={openMenu}
                className={
                  isWhiteNav || isMobileSideOpen
                  ? style.icon_black
                  : style.icon}/>
              :
              <AiOutlineClose
                onClick={closeMenu}
                className={
                  isWhiteNav || isMobileSideOpen
                  ? style.icon_black
                  : style.icon}/>
            }
          </div>

          <div className={style.navItemWrapper}>
            <ul className={style.navItemList}>
              <NavMenuItem />

              <li> 
                <Button 
                  className={
                    isWhiteNav ||
                    scrollPosition > 0
                    ? style.appDownbtn_change
                    : style.appDownbtn
                  }
                  title='직투 앱 다운로드'
                  onClick={showQR}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
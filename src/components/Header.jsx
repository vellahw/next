'use client';

import Link from "next/link"
import Image from "next/image"
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import {React, useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { whiteNav, sideNavOpen, isScroll } from "./atom";
import style from '../styles/css/header.module.css'
import logo from '/public/logos/ziktu-logo.png'
import SideNav from "./SideNav";
import { NavMenuItem } from "./NavMenuItem";

function Header() {
  const [isWhiteNav] = useRecoilState(whiteNav);
  const [isSideNavOpen, setIsSideNavOpen] = useRecoilState(sideNavOpen);
  const [scrollPosition, setScrollPosition] = useRecoilState(isScroll);
  const isWhite = isWhiteNav;

  const openMenu = () => {
    setIsSideNavOpen(true);
  }

  const closeMenu = () => {
    setIsSideNavOpen(false);
  }

  const handleScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
    
  // useEffect(() => { 
  //   window.removeEventListener("scroll", handleScroll);
  //   const timer = setInterval(() => {
  //       window.addEventListener("scroll", handleScroll);
  //   }, 100);
        
  //   return () => {
  //       document.documentElement.scrollTo(0, 0)
  //       clearInterval(timer);
  //       window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <nav className={style.header}>
      <SideNav sideNavOpen={!isSideNavOpen} isSideNavOpen={setIsSideNavOpen} />

      <div className={style.headerWrapper}>
        <div className={style.navbar}>

          <Link href='/'>
            <Image className={style.logo}
                  src={logo}
                  alt="헤더로고"
                  priority={true}>
            </Image>
          </Link>  
          
          <div className={style.iconWrapper}>
            { !isSideNavOpen ? 
              <AiOutlineMenu onClick={openMenu} className='icon'/>
              :
              <AiOutlineClose onClick={closeMenu} className='icon'/>
            }
          </div>

          <div className={style.navItemWrapper}>
            <ul className={style.navItemList}>
              <NavMenuItem />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
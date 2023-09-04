'use client';

import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import {React, useState, useEffect} from 'react';
import style from '../styles/css/header.module.css'
import logo from '/public/logos/ziktu-logo.png'
import logo_white from '/public/logos/ziktu-logo-w.png'
import SideNav from "./SideNav";
import { NavMenuItem } from "./NavMenuItem";

function Header() {
  const [isWhiteNav] = useState();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState();
  const pathname = usePathname()
  const isActive = pathname != '/'

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
    <nav className={isActive ?
         style.navWrap_white : style.navWrap
         }
    >
      <SideNav sideNavOpen={isSideNavOpen} />

      <div className={style.navWrapper}>
        <div className={style.navbar}>

          <Link href='/'>
            <Image
                  className={style.logo }
                  src={
                    isActive ?
                    logo : logo_white
                  }
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
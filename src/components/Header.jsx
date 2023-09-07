'use client';

import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import {React, useState, useEffect, useRef} from 'react';
import style from '../styles/css/header.module.css'
import logo from '/public/logos/ziktu-logo.png'
import logo_white from '/public/logos/ziktu-logo-w.png'
import SideNav from "./SideNav";
import { NavMenuItem } from "./NavMenuItem";

function Header() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const targetRef = useRef(null);  
  const logoRef = useRef();
  const itemRef = useRef();
  const pathname = usePathname()
  const isActive = pathname != '/'

  const openMenu = () => {
    setIsSideNavOpen(true);
  }

  const closeMenu = () => {
    setIsSideNavOpen(false);
  }

  const handleScroll = () => {
    targetRef.current.style.backgroundColor = "#fff";      
    targetRef.current.style.borderBottom = "1px solid #E8E8EC";    
    logoRef.current.src = "/logos/ziktu-logo.png";
    logoRef.current.srcset = "";
    itemRef.current.style.color = "var(--color-black)";

    if(!document.documentElement.scrollTop) {
      targetRef.current.style.backgroundColor = "transparent";
      targetRef.current.style.borderBottom = "none";      
      logoRef.current.src = "/logos/ziktu-logo-w.png";
      itemRef.current.style.color = "var(--color-white)";
    }
  };

  useEffect(() => {    
    document.documentElement.scrollTo(0, 0)

    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.scrollTop;
    };
  }, []);

  return (
    <nav className={style.navWrap}>
      <SideNav sideNavOpen={isSideNavOpen} />

      <div
        className={
         isActive
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
                isActive ?
                logo : logo_white
                }
              alt="헤더로고"
              priority={true}
              ref={logoRef}
            >
            </Image>
          </Link>  
          
          <div className={style.iconWrapper}>
            { !isSideNavOpen ? 
              <AiOutlineMenu onClick={openMenu} className={isActive ? style.icon_black : style.icon}/>
              :
              <AiOutlineClose onClick={closeMenu} className={isActive ? style.icon_black : style.icon}/>
            }
          </div>

          <div className={style.navItemWrapper}>
            <ul className={style.navItemList} ref={itemRef}>
              <NavMenuItem />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
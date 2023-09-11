'use client';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import {React, useRef, useEffect} from 'react'
import { useRecoilState } from "recoil";
import { whiteNav, navOpen, isScroll } from "./atom";
import Button from './ui/Button'
import style from '../styles/css/header.module.css'
import data from '/public/data.json'

export function NavMenuItem() {
  const [isNavOpen, setIsNavOpen] = useRecoilState(navOpen);
  const [isWhiteNav, setIsWhiteNav] = useRecoilState(whiteNav);
  const router = useRouter()
  const pathname = usePathname()
  const menuItems = data.menuItems;
  const btnRef = useRef();

  const showQR = () => {
    alert("QR");
  }

  const menuClick = (menu) => {
    router.push(menu)
    setIsWhiteNav(1);
  };

  const handleScroll = () => {
    if(pathname === '/') {
      btnRef.current.style.backgroundColor = "var(--primary)";     
      btnRef.current.style.color = "var(--color-white)";     

      if(!document.documentElement.scrollTop) {
        btnRef.current.style.backgroundColor = "transparent";
        btnRef.current.style.border = "1px solid var(--color-white)";     
        btnRef.current.style.color = "var(--color-white)";
      }
    }
  };

  useEffect(() => {    
    document.documentElement.scrollTo(0, 0)

    if(pathname === '/') {
      const timer = setInterval(() => {
        window.addEventListener("scroll", handleScroll);
      }, 100);
  
      return () => {
        clearInterval(timer);
        window.removeEventListener("scroll", handleScroll);
        document.documentElement.scrollTop;
      };
    }
  }, []);

  return (
    <>
      { menuItems.map(i =>{
          const isActive = pathname === i.path;

          return (
            <li key={i.no}
                className={style.navItem}
                onClick={()=>{menuClick(i.path)}}
            >
              <Link
                href={i.path}
                className={isActive ? style.colorChange : ''}
              >
                  {i.title}
              </Link>
            </li>
          )
        })
      }

      <li> 
        <Button 
          className={
            pathname != '/'
            ? style.appDownbtn_change
            : style.appDownbtn
          }
          title='직투 앱 다운로드'
          onClick={showQR}
          ref={btnRef}
        />
      </li>
    </>
  )
}
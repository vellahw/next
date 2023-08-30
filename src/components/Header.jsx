'use client';
import { useState } from "react";
import Link from "next/link"
import style from '../styles/css/layout/header.module.css'
import Image from "next/image"
import logo from '/public/logos/ziktu-logo.png'
import Button from "./Button";

function Header() {
  const menudata = [
    {
      no: 1,
      name: '직투 소식',
      path: '/news/notice'
    },
    {
      no: 2,
      name: '빌딩 정보',
      path: '/building'
    },
    {
      no: 3,
      name: '공시',
      path: '/disclosure'
    },
    {
      no: 4,
      name: '이벤트',
      path: '/event'
    },
    {
      no: 5,
      name: '채용',
      path: '/recruit'
    },
    {
      no: 6,
      name: 'FAQ',
      path: '/faq'
    },
  ]

  const [isOpen, setIsOpen] = useState(false);
  const showQR = ()=>{
    alert('QR')
  };

    return (
        <nav className={style.header}>
          <div className={style.headerWrapper}>
            <div className={style.navbar}>

              {/* <div className={style.logoWrapper}> */}
              <Link href='/'>
                <Image className={style.logo}
                      src={logo}
                      alt="헤더로고"
                      priority={true}>
                </Image>
              </Link>  
              {/* </div> */}

              <div className={style.navItemWrapper}>
                <ul className={style.navItemList}>
                  {menudata.map(i=>{
                    return(
                      <Link href={i.path} key={i.no}>
                        <li className={style.navItem}>{i.name}</li>
                      </Link>
                    )
                  })}
                  <Button
                    className={style.appDownbtn}
                    title='직투 앱 다운로드'
                    onClick={showQR}
                  />
                </ul>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default Header
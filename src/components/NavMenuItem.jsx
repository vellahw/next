'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {React, useState} from 'react'
import { useRecoilState } from 'recoil'
import { whiteNav, sideNavOpen, isScroll } from "./atom"
import Button from './Button'
import style from '../styles/css/header.module.css'

export function NavMenuItem() {
  const [scrollPosition, setScrollPosition] = useRecoilState(isScroll)
  const [isWhiteNav, setIsWhiteNav] = useRecoilState(whiteNav)
  const [isNavOpen, setIsNavOpen] = useRecoilState(sideNavOpen)
  const [isClick, setIsClick] = useState(false)
  const isWhite = isWhiteNav
  const pathname = usePathname()

  const showQR = () => {
    alert("QR");
  }

  const handleItemClick = (item) => {
    setIsClick(true);
    setIsWhiteNav(1);
    setIsNavOpen(false);
  }

  const menuItems = [
    {
      no: 1,
      title: '직투 소식',
      item: 'news',
      path: '/news'
    },
    {
      no: 2,
      title: '빌딩 정보',
      item: 'building',
      path: '/building'
    },
    {
      no: 3,
      title: '공시',
      item: 'disclosure',
      path: '/disclosure'
    },
    {
      no: 4,
      title: '이벤트',
      item: 'event',
      path: '/event'
    },
    {
      no: 5,
      title: '채용',
      item: 'recruit',
      path: '/recruit'
    },
    {
      no: 6,
      title: 'FAQ',
      item: 'faq',
      path: '/faq'
    }
  ]

  return (
    <>
      { menuItems.map(i =>{
        const isActive = pathname === i.path;

        return (
          <Link
            href={i.path}
            key={i.no}
            // onClick={() => handleItemClick(i.item)}
            className={isActive ? style.colorChange : ''}
          >
            <li className={style.navItem}>
              {i.title}
            </li>
          </Link>
        )
        })
      }

      <li> 
        <Button 
          className={
          scrollPosition < 100 && isWhite === 0 ?
           "" : style.appDownbtn
          }
          title='직투 앱 다운로드'
          onClick={showQR}
        />
      </li>
    </>
  )
}
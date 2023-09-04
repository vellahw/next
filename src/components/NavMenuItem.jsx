'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {React, useState} from 'react'
import Button from './ui/Button'
import style from '../styles/css/header.module.css'
import data from '/public/data.json'

export function NavMenuItem() {
  const [scrollPosition, setScrollPosition] = useState()
  const [isWhiteNav, setIsWhiteNav] = useState()
  const [isNavOpen, setIsNavOpen] = useState()
  const [isClick, setIsClick] = useState(false)
  const pathname = usePathname()
  const menuItems = data.menuItems;

  const showQR = () => {
    alert("QR");
  }

  const handleItemClick = (item) => {
    setIsClick(true);
    setIsWhiteNav(1);
    setIsNavOpen(false);
  }

  return (
    <>
      { menuItems.map(i =>{
        const isActive = pathname === i.path;

        return (
          <Link
            href={i.path}
            key={i.no}
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
            pathname != '/' ? style.appDownbtn_change : style.appDownbtn
          }
          title='직투 앱 다운로드'
          onClick={showQR}
        />
      </li>
    </>
  )
}
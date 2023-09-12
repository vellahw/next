'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRecoilState } from "recoil";
import { whiteNav, navOpen, isScroll } from "./atom";
import style from '../styles/css/header.module.css'
import data from '/public/data.json'
import { useRouter } from 'next/navigation';

export function NavMenuItem() {
  const [isWhiteNav, setIsWhiteNav] = useRecoilState(whiteNav);
  const [scrollPosition, setScrollPosition] = useRecoilState(isScroll);
  const [isMobileSideOpen, setIsMobileSideOpen] = useRecoilState(navOpen);
  const pathname = usePathname();
  const menuItems = data.menuItems;
  const router = useRouter()

  const menuClick = (menu) => {
  setIsWhiteNav(1)
  router.push(menu)
  setIsMobileSideOpen(false)
  };

  return (
    <>
      {menuItems.map(i =>{
        const isActive = pathname === i.path;

        return (
          <li 
            key={i.no}
            onClick={()=>{menuClick(i.path)}} 
            className={
              scrollPosition > 0 ||
              isWhiteNav
              ? style.navItem_white
              : style.navItem
            }
          >
            <Link
              href={i.path}
              className={
                isActive
                ? style.colorChange
                : ''}
            >
              {i.title}
            </Link>
          </li>
        )
      })
      }
    </>
  )
}
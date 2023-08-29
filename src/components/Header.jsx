import Link from "next/link"
import style from '../styles/layout/header.module.css'
import Image from "next/image"
import logo from '/public/logos/ziktu-logo.png'

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

    return (
        <nav className={style.navContainer}>
          <div className={style.navWrapper}>
            <div className={style.navItemWrapper}>

              {/* <div className={style.logoWrapper}> */}
                <Image className={style.logo}
                      src={logo}
                      alt="헤더로고">
                </Image>
              {/* </div> */}

              <div className={style.menuWrapper}>
                <ul className={style.menuList}>
                  {menudata.map(i=>{
                    return(
                      <Link href={i.path} key={i.no}>
                        <li className={style.menuItem}>{i.name}</li>
                      </Link>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default Header
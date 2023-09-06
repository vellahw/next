import style from '../styles/css/header.module.css'
import { NavMenuItem } from './NavMenuItem';

function SideNav(props) {
  return(
    <>
      <div className={ props.sideNavOpen ? 
        style.sideNav_open : style.sideNav}
      >
        <ul className={style.navItemList_side}>
          <NavMenuItem />
        </ul>
      </div>

      <div className={ props.sideNavOpen ?
        style.overlay : style.overlay_none } />
    </>
  )
}

export default SideNav;
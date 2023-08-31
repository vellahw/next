import style from '../styles/css/header.module.css'
import { NavMenuItem } from './NavMenuItem';

function SideNav(props) {
  return(
    <>
      <div className={ props.sideNavOpen ? 
        style.sideNav : style.sideNav_open}
      >
        <ul className={style.navItemList_side}>
          <NavMenuItem />
        </ul>
      </div>

      <div className={ props.sideNavOpen ?
        style.overlay_none : style.overlay } />
    </>
  )
}

export default SideNav;
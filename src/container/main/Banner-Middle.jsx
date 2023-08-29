import Image from "next/image"
import banner from '/public/images/m-banner.jpg'
import style from '../../styles/main/banner.module.css'

function MiddleBanner() {
    return(
      <div className={style.mbContainer}>
        <h1 className={style.mbHeader}>세상에 없던</h1>
        <h1 className={style.mbHeader}>새로운 부동산 투자</h1>

        <Image
          className={style.mbImg}
          src={banner}
          alt='중간배너 이미지'></Image>
      </div>
    )
  }
  
export default MiddleBanner
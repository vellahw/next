import Image from "next/image"
import banner from '/public/images/m-banner.jpg'
import style from '../../styles/css/main/banner.module.css'

function MiddleBanner() {
    return(
      <section className={style.m_container}>
        <div className={style.m_headerWrapper}>
          <h1>세상에 없던</h1>
          <h1>새로운 부동산 투자</h1>
        </div>

        <Image
          className={style.img_m}
          src={banner}
          alt='중간배너 이미지'></Image>
      </section>
    )
  }
  
export default MiddleBanner
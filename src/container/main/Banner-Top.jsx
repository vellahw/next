import Image from "next/image"
import img1 from '/public/images/cover1.png'
import img2 from '/public/images/cover2.png'
import img3 from '/public/images/cover3.png'
import img4 from '/public/images/cover4.png'
import style from '../../styles/main/banner.module.css'

function TopBanner() {
  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        <div className={style.headerContainer}>
          <div className={style.headerWrapper}>
            <h1 className={style.header}>압구정 커머스빌딩</h1>

            <div className={style.descriptionWrapper}>
              <p className={style.description}>
                부동산금융 명가 대신그룹의 노하우를 담은 첫 번째 건물
              </p>
              <p className={style.description}>
                9월 6일 공모가 시작됩니다!
              </p>
            </div>
            
            <button type="button" className={style.goBtn}>
              지금 시작하기
            </button>
          </div>
        </div>
      </div>

      <div className={style.imgWrapper}>
        <Image className={style.img} src={img1} alt="최상단 배너 이미지1"></Image>
      </div>
    </div>
  )
}

export default TopBanner
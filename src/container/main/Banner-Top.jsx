'use client';

import Image from "next/image"
import banner1 from '/public/images/banners/cover1.png' 
import style from '../../styles/css/banner.module.css'
import Button from "@/components/Button"

function TopBanner() {
  const showQR = ()=>{
    alert('QR')
  };

  return (
    <main className={style.container}>
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
            <Button
              className={style.goBtn}
              title='지금 시작하기'
              onClick={showQR}
            />
          </div>
        </div>
      </div>

      <div className={style.imgWrapper}>
        <Image className={style.img} src={banner1} alt="최상단 배너 이미지1"></Image>
      </div>
    </main>
  )
}

export default TopBanner
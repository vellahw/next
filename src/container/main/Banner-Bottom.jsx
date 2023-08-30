'use client';

import style from '../../styles/css/main/banner.module.css'
import Button from '@/components/Button'

function BottomBanner() {
  const showQR = ()=>{
    alert('QR')
  };

    return(
      <section className={style.bt_container}>
        <div className={style.bt_innerContainer}>
          <div className={style.headerContainer}>
            <div className={style.headerWrapper}>
              <h1 className={style.header}>지금 바로 직투에서</h1>
              <h1 className={style.header}>건물주주가 되어보세요</h1>
            </div>

            <div className={style.descriptionWrapper}>
              <Button
                className={style.bt_goBtn}
                title='건물 투자 시작하기'
                onClick={showQR}
              />
              <p className={style.bt_description}>
                건물 이름과 거래 화면 등은 이해를 돕기 위한 설정으로 실재 건물이 아니며 이후 변경될 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
export default BottomBanner
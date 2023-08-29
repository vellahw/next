import style from '../../styles/main/banner.module.css'

function BottomBanner() {
    return(
      <div className={`${style.container} ${style.bt}`}>
        <div>

        </div>

        <div className={`${style.innerContainer} ${style.btInner}`}>
          <div className={`${style.headerContainer} ${style.btHeaderC}`}>
            <div className={style.headerWrapper}>
              <h1 className={style.header}>지금 바로 직투에서</h1>
              <h1 className={style.header}>건물주주가 되어보세요.</h1>
            </div>

            <div className={`${style.descriptionWrapper} ${style.dtde}`}>
              <button type="button" className={`${style.goBtn} ${style.btgo}`}>건물 투자 시작하기</button>
              <p className={style.btDescription}>
                건물 이름과 거래 화면 등은 이해를 돕기 위한 설정으로 실재 건물이 아니며 이후 변경될 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
export default BottomBanner
import style from '../../styles/main/info.module.css'

function CompanyInfo() {
  return(
    <div className={style.infoContainer}>
      <h2 className={style.title}>회사 소개</h2>

      <div className={style.headerWrapper}>
        <p className={style.header}>직투는 누구나 쉽게 부동산에 투자하고</p>
        <p className={style.header}>그 권리를 사고 팔 수 있는</p>
        <p className={style.header}>부동산 조각 투자 플랫폼입니다.</p>
      </div>

      <div className={style.cardWrapper}>
        <div className={style.card}>
          <h2 className={style.cardTitle}>안심하세요</h2>
          <p className={style.cardDescription}>고객님의 모든 소중한 자산은</p>
          <p className={style.cardDescription}>대한민국 최고의 은행과 신탁사에</p>
          <p className={style.cardDescription}>안전하게 보관됩니다.</p>

          <div className={style.logoWrapper}>

          </div>
        </div>

        <div className={`${style.card} ${style.cr}`}>
          <h2 className={style.cardTitle}>기대하세요</h2>
          <p className={style.cardDescription}>빌딩 상장 시대를 만들어 나갈 직투에</p>
          <p className={style.cardDescription}>국내외 대표 투자사,</p>
          <p className={style.cardDescription}>금융기관이 투자 하였습니다.</p>

          <div className={`${style.logoWrapper} ${style.lr}`}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyInfo
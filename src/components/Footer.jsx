import Link from 'next/link'
import Image from "next/image"
import style from '../styles/css/footer.module.css'
import isms from '/public/logos/logo-isms.svg'
import iso from '/public/logos/logo-iso.svg'
import sw from '/public/logos/logo-sw.svg'
import blog from '/public/logos/logo-naverblog.svg'

function Footer() {
  return (
    <section className={style.footer}>
      <div className={style.container}>

        <div className={style.infoWrap}>
          <address className={style.info}>
            <span className={style.info_title}>언론보도</span>
            <address className={style.info_text}>press@ziktu.com</address>
          </address>
          <div className={style.line}></div>
          <address className={style.info}>
            <span className={style.info_title}>대표문의</span>
            <address className={style.info_text}>contact@ziktu.com</address>
          </address>
        </div>

        <p className={style.copy}>ⓒ 2023. ziktu Inc. All rights reserved.</p>

        <div className={style.article}>
          <Link className={style.link} href="http://hackers.iwinv.net/privacy_policy.html" target="_blank">
            개인정보 처리방침
          </Link>
        </div>
        <div className={style.article}>
          <Link className={style.link} href="https://static.kr.kasa.exchange/terms/service.html" target="_blank">
          서비스 이용약관
          </Link>
        </div>

        <div className={style.companyWrap}>
          <p className={style.comTitle}>직투코리아</p>
          <div className={style.article}>
            <span className={style.text}>사업자 등록번호 369-88-01323</span>
            <div className={style.line}></div>
            <span className={style.text}>대표 : 김로이</span>
          </div>
          <address className={style.info_text}>서울시 영등포구 의사당대로 82, 하나금융투자빌딩 11층</address>
        </div>

        {/* 소셜로고 */}
        <div className={style.snsWrap}>
        </div>

        <div className={style.authWrap}>
          <div className={style.auth}>
            <Image src={iso} alt='iso 로고' className={style.authLogo}></Image>
            <span className={style.article}>
              정보보안 국제표준<br/>
              ISO 27001 인증 획득
            </span>
          </div>
          <span className={style.article}></span>
          <div className={style.article}>
            <Image src={sw} alt='sw 로고' className={style.authLogo}></Image>
            <span className={style.article}>
              개인정보보호배상책임공제<br/>
              가입 인증
            </span>
          </div>
          <span className={style.article}></span>
          <div className={style.article}>
            <Image src={isms} alt='iso 로고' className={style.authLogo}></Image>
            <span className={style.article}>
              [인증범위] 직투 서비스 운영<br/>
              [유효기간] 2022.11.16 ~ 2025.11.15
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
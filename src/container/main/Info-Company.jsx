import Image from 'next/image';
import style from '../../styles/css/info.module.css'
import { SectionHeader } from '../../components/SectionHeader'
import CompanyCardTitle from '../../components/ui/CompanyCardTitle'
import patners_hana from '/public/images/partners/logo-partner-1.png';
import patners_kakao from '/public/images/partners/logo-partner-9.png';
import patners_fp from '/public/images/partners/logo-partner-10.png';

function CompanyInfo() {
  const logoLoop = (start, length, className) => {
    const newArr = [];
    for (let i = start; i <= length; i++) { 
      newArr.push(
        <img
          src={'/images/partners/logo-partner-'+i+'.png'}
          className={className}
          key={i}
          alt='파트너 로고' />
      );
    }
    return newArr;
  };

  return(
    <section className={style.container}>
      <SectionHeader 
          title={'회사 소개'}
          header1={'카사는 누구나 쉽게 부동산에 투자하고'}
          header2={'그 권리를 사고 팔 수 있는'}
          header3={'부동산 조각 투자 플랫폼입니다.'}
        />
        
      <div className={style.cardWrapper}>
        <div className={style.card}>
          <CompanyCardTitle
            title={'안심하세요'}
            description1={'고객님의 모든 소중한 자산은'}
            description2={'대한민국 최고의 은행과 신탁사에'}
            description3={'안전하게 보관됩니다.'}
          />
          <div className={style.logoWrapper}>
            {logoLoop(1, 5, `${style.partners}`)}
          </div>
        </div>

        <div className={style.card_right}>
          <CompanyCardTitle
            title={'기대하세요'}
            description1={'빌딩 상장 시대를 만들어 나갈 카사에'}
            description2={'국내외 대표 투자사,'}
            description3={'금융기관이 투자 하였습니다.'}
          />
          <div className={style.logoWrapper_right}>
            <Image
              src={patners_hana}
              className={style.partners_hana}
              alt='파트너로고_하나'>
            </Image>
            { logoLoop(6, 8, `${style.partners}`)}
            <Image
              src={patners_fp}
              className={style.partners_fp}
              alt='파트너로고_fp'>
            </Image>
            <Image
              src={patners_kakao}
              className={style.partners_kakao}
              alt='파트너로고_카카오'>
            </Image>
            { logoLoop(11, 12, `${style.partners_bottom}`)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyInfo
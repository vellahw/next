import Image from "next/image"
import cardImg_sub from '/public/images/bg-sub.png'
import cardImg_tax from '/public/images/bg-tax.png'
import cardImg_re from '/public/images/bg-revenue.png'
import style from '../../styles/css/flatform-info.module.css'
import { SectionHeader } from '../../components/SectionHeader'
import { FlatformCard } from "../../components/ui/FlatformCard"

function FlatformInfo() {
    return(
      <section className={style.infoContainer_f}>
        <SectionHeader 
          title={'플랫폼 소개'}
          isFlat={0}
          header1={'상업용 부동산 투자,'}
          header2={'직투에서 쉽고 간편하게.'}
        />

        <div className={style.cardWrap}>
          <FlatformCard 
            title={'선착순 공모로 쉽고 빠르게 청약'}
            src={cardImg_sub}
          />
          <FlatformCard 
            title={'부동산 세금 걱정없는 투자'}
            src={cardImg_tax}
            change={1}
          />

          <div className={style.card_small}>
            <p className={style.cardTitle_white}>
            건물 매각에 따른 투자수익까지
            </p>
            <Image className={style.cardImg_re}  src={cardImg_re} alt={'카드 이미지'} ></Image>
          </div>

          <div className={style.shif}>
            <FlatformCard 
                title={'3개월마다 받는 임대배당수익'}
                src={cardImg_sub}
            />
          </div>
          <div className={style.shif_last}>
            <FlatformCard 
                title={'건물 지분을 주식처럼 거래'}
                src={cardImg_sub}
            />
          </div>
        </div>        
      </section>
    )
  }
  
export default FlatformInfo
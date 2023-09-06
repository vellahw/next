'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import data from '/public/data.json'
import coverImg from '/public/images/buildings/commerce.png'
import BuildingDetailInfo from '../../components/ui/BuildingDetailInfo'
import style from '../../styles/css/detail.module.css'

function BuildingDetailPage() {
  const pathname = usePathname()
  const index = pathname.slice(-1)
  const buildingDetail = data.buildings[index-1]
  
    return(
        <section className={style.container}>
          <div className={style.coverImgWrap}>
            <Image src={coverImg} alt='빌딩 메인이미지' className={style.coverImg}></Image>
            
            <div className={style.buildingInfoContaier}>
              {/* <BuildingDetailInfo
                data={buildingDetail}
                className={style.buildingInfo}  
                /> */}
              </div>
          </div>

          <div className={style.about}>
            <div className={style.aboutWrap}>
              직투의 건물 지분투자는 전자등록 방식으로 발행된 부동산 신탁 수익증권에 투자하는 부동산 간접투자 방식입니다.
            </div>
          </div>
          <div className={style.investInfoWrap}>
            <div className={style.point}>
              <h5>투자포인트1</h5>
              <h2>다시떠오르는 핫플레이스,</h2>
              <h2>압구정 - 도산 상권의 중심!</h2>
            </div>
            <div className={style.point}>
              <h5>투자포인트2</h5>
              <h2>건물 가치 상승으로 인한</h2>
              <h2>추후 매각차익 기대</h2>
            </div>
            <div className={style.point}>
              <h5>투자포인트3</h5>
              <h2>안정적인</h2>
              <h2>임대수익 기대</h2>
            </div>

            {/* 캐로셀 */}
          </div>
        </section>
    )
}

export default BuildingDetailPage
'use client'
import Image from 'next/image'
import Link from 'next/link';
import style from '../../styles/css/list.module.css'
import data from '/public/data.json'
import BuildingDetailInfo from '../../components/ui/BuildingDetailInfo';

export function BuildingList() {
  const buildings = data.buildings

  const goDetail = ()=> {
    alert('상세페이지로 이동')
  }

  return(
    <section className={style.container}>
        <h2 className={style.header}>빌딩 정보</h2>
        <div className={style.infoContainer}>
          { buildings.map(i=>{
            return(
              <Link href={`/building/${i.no}`} key={i.no}>  
                <div className={style.infoWrapper}>
                    <div className={style.imgContainer}>
                    <Image 
                        className={style.thumnail}
                        src={i.src}
                        alt='빌딩썸네일'
                        width={502}
                        height={502}
                        priority={true}
                        >
                    </Image>
                    </div>

                    <BuildingDetailInfo data={i} />
                </div>
              </Link>
            )
          })}
        </div>
        
        <div className={style.helpContainer}>
          <h2 className={style.helpHeader}>거래 방법 알아보기</h2>
          <div className={style.cardWrapper}>
            <div className={style.leftCard} onClick={goDetail}>
              <div className={style.cardTitle}>DABS 거래는 <br /> 어떻게 하는건가요?</div>
            </div>
            <div className={style.rightCard} onClick={goDetail}>
              <div className={style.cardTitle}>왜 직투에서 <br /> 거래해야 할까요?</div>
            </div>
          </div>
        </div>
    </section>
  )
}
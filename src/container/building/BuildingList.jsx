'use client'
import Image from 'next/image'
import {MdLocationOn} from 'react-icons/md';
import style from '../../styles/css/list.module.css'
import data from '/public/data.json'
import StatusUi from 'src/components/ui/BuildingStatus';
import Link from 'next/link';

export function BuildingList() {
  const buildings = data.buildings

  return(
    <section className={style.container}>
        <h2 className={style.header}>빌딩 정보</h2>
        <div className={style.infoContainer}>
          { buildings.map(i=>{
            return(
              <Link href={`/building/${i.no}`}>  
                <div className={style.infoWrapper} key={i.no}>
                    <div className={style.imgContainer}>
                    <Image 
                        className={style.thumnail}
                        src={i.src}
                        alt='빌딩썸네일'
                        width={502}
                        height={502}
                        >
                    </Image>
                    </div>
                    <div className={style.innerInfoWrapper}>
                    <div className={style.statusContainer}>
                        <div className={style.status} status={i.type}>
                        {
                            {
                            '공모예정': '공모 예정',
                            '상장': '상장',
                            '매각완료': '매각 완료'
                            }[i.type]
                        }
                        </div>
                    </div>  
                    <div>
                        <h1 className={style.buildingName}>{i.name}</h1>
                        <address className={style.buildingAddress}>
                            <MdLocationOn className={style.locationIcon} />
                            {i.address}
                        </address>
                        <div className={style.detailOptionWrapper}>
                            <StatusUi data={i} />
                        </div>
                    </div>
                    </div>
                </div>
              </Link>
            )
          })}
        </div>
        
        <div className={style.helpContainer}>
          <h2 className={style.helpHeader}>거래 방법 알아보기</h2>
          <div className={style.cardWrapper}>
            <div className={style.leftCard}>
              <div className={style.cardTitle}>DABS 거래는 <br /> 어떻게 하는건가요?</div>
            </div>
            <div className={style.rightCard}>
              <div className={style.cardTitle}>왜 직투에서 <br /> 거래해야 할까요?</div>
            </div>
          </div>
        </div>
    </section>
  )
}
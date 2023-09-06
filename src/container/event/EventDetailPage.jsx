'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import style from '../../styles/css/eventDetail.module.css'
import data from '/public/data.json'

function EventDetailPage() {
  const pathname = usePathname()
  const index = pathname.slice(-1)
  const eventDetail = data.eventDetail[index-1]
  
  return (
    <>
        <div className={style.mainImgContainer}>
            <Image src={eventDetail.mainImg} className={style.mainImg} width={1280} height={520} alt='메인이미지'></Image>
        </div>
        <section className={style.section}>
        <div>
            {eventDetail.detailImg ?
            <Image src={eventDetail.detailImg} width={337} height={836}  alt='상세이미지'></Image>
            :
            <div>
                친구가 직투에 가입하면 5천원을 드려요!<br/>
                추천받은 친구도 계좌연결하면 5천원을 받아요!
            </div>
            }
        </div>
        </section>
    </>
  ) 
}

export default EventDetailPage
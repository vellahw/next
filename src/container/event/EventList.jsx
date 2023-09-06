'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import data from '/public/data.json'
import style from '../../styles/css/eventList.module.css' 

function EventList() {
  const eventData = data.events
  const router = useRouter()

  const isEnd = (target)=> {
    if(target === '종료') {
      return true
    }
  }
  const showAlert = () => {
    alert('종료된 이벤트입니다.')
  }

  return (
  <section className={style.container}>
    <h2 className={style.header}>이벤트</h2>

  <ul className={style.list}>
    {eventData.map(i => {
      return (
        <li className={style.item} key={i.no}>
          <div className={style.itemContainer}
            onClick={() => {
              isEnd(i.status)
              ? showAlert()
              : router.push(`/event/${i.no}`)
             }}
           >
            <div className={style.thumnailContainer}>
              { isEnd(i.status) ?
                <div className={style.endInfo}>종료된 이벤트입니다</div>
                :
                <></>
              }
              <Image
                alt='썸네일 이미지'
                src={i.src}
                className={
                  isEnd(i.status)
                  ? style.thumnail_end
                  : style.thumnail
                }
                width={476}
                height={246}
              ></Image>
            </div>
            <div className={style.title}>{i.title}</div>
            <div className={
              isEnd(i.status)
              ? style.status_end
              : style.status
            }>
              {i.status}
            </div>
          </div> 
        </li>
      )
    })}
  </ul>
  </section>
  )
}

export default EventList
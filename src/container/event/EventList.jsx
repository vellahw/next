'use client'
 
import Image from 'next/image'
import Link from 'next/link'
import data from '/public/data.json'
import style from '../../styles/css/eventList.module.css' 

function EventList(props) {
  const eventData = data.events
  const content = props.props

  return (
  <section className={style.container}>
  <h2 className={style.header}>이벤트</h2>

  <ul className={style.list}>
    {eventData.map(i => {
      return (
        <li className={style.item} key={i.no}>
          <div className={style.itemContainer}>
            <Link
              href={`/event/${i.no}`}
            >
              <div className={style.thumnailContainer}>
                  <Image
                    alt='썸네일 이미지'
                    src={i.src}
                    className={
                      i.status === '종료'
                      ? style.thumnail_end
                      : style.thumnail
                    }
                    width={476}
                    height={246}
                  ></Image>
              </div>
              <div className={style.title}>{i.title}</div>
              <div className={
                i.status === '종료'
                ? style.status_end
                : style.status
              }>
                {i.status}
              </div>
            </Link>
          </div> 
        </li>
      )
    })}
  </ul>
  </section>
  )
}

export default EventList
import Image from 'next/image'
import Link from 'next/link'
import data from '/public/data.json'
import style from '../../styles/css/eventList.module.css' 

function EventList(props) {
  const eventData = data.events

  return (
  <section className={style.container}>
  <h2 className={style.header}>이벤트</h2>

  <ul className={style.list}>
    {eventData.map(i => {
      return (
        <Link href={`/event/${i.no}`} key={i.no}>
        <li className={style.item}>
          <div className={style.itemContainer}>
            <div className={style.thumnailContainer}>
                <Image
                  src={i.src}
                  className={
                    i.status === '종료'
                    ? style.thumnail_end
                    : style.thumnail
                  }
                  alt='썸네일 이미지'
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
          </div> 
        </li>
        </Link>
      )
    })}
  </ul>
  </section>
  )
}

export default EventList
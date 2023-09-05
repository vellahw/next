import Image from 'next/image'
import data from '/public/data.json'
import style from '../../styles/css/eventList.module.css' 

function EventList() {
  const eventData = data.events

  return (
  <section className={style.container}>
  <h2 className={style.header}>이벤트</h2>

  <ul className={style.list}>
    {eventData.map(i => {
      return (
        <li className={style.item} key={i.no}>
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
      )
    })}
  </ul>
  </section>
  )
}

export default EventList
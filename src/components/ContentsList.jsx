import style from '../styles/css/news.module.css'
import data from '/public/data.json'
import Link from 'next/link';

function ContentsList() {
    const news = data.news;
  return (
    <>
    {news.map(index=>{
      return(
        <Link href={index.url} target='_blank' key={index.no}>
          <li className={style.item}>
            <h2 className={style.title}>{index.title}</h2>
            <div className={style.info}>
              <span className={style.press}>{index.press}</span>
              <span className={style.line}>|</span>
              <span className={style.date}>{index.date}</span>
          </div>
          </li>
        </Link>
      )
    })}
    </>
  )
}

export default ContentsList
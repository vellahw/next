import style from '../styles/css/main/news.module.css'
import data from '/public/data.json'

function ContentsList() {
    const news = data.news

  return (
    <>
    {news.map(i=>{
        <li className={style.item}>
        <h2 className={style.title}>{news.title}</h2>
        <div className={style.info}>
            <span className={style.press}></span>
            <span className={style.line}>|</span>
            <span className={style.date}></span>
        </div>
        </li>
    })}
    </>
  )
}

export default ContentsList
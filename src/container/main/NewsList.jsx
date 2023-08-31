import ContentsList from "@/components/ContentsList"
import style from '../../styles/css/news.module.css'

function NewsList() {
  return(
    <section className={style.container}>
      <div className={style.wrapper}>
        <h2 className={style.sectionHeader}>직투 소식</h2>

        <div className={style.contentsWrap}>
          <div className={style.headerWrapper}>
            <p className={style.header}>보도자료</p>

            <div className={style.viewAllWrap}>
              <div className={style.viewAll}>전체보기</div>
              <div className={style.arrow}>화살표</div>
            </div>
          </div>

          <ul className={style.list}>
            <ContentsList />
          </ul>
        </div>
      </div>
    </section>
  )
  }
  
export default NewsList
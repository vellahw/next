import style from '../../styles/css/info.module.css'

function CompanyCardTitle(
  {
    title,
    description1,
    description2,
    description3
  }
) {
  return(
    <>
      <h2 className={style.cardTitle}>{title}</h2>
      <p className={style.cardDescription}>{description1}</p>
      <p className={style.cardDescription}>{description2}</p>
      <p className={style.cardDescription}>{description3}</p>
    </>
  )
}

export default CompanyCardTitle
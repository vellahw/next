import style from '../styles/css/info.module.css'

export function SectionHeader({
  title,
  isCorp, 
  isFlat,
  header1, 
  header2, 
  header3
}){
  const isTrue = 0 === isCorp
  const isFlatform = 0 === isFlat

  return (
    <>
      <h2 className={style.title}>
        {title}
      </h2>
      <div className={style.headerWrapper}>
        <p className={isTrue ? style.header_corph : style.header}>
          {header1}
        </p>
        <p className={isTrue ? style.header_corph : style.header}>
          {header2}
        </p>
        <p className={isTrue ? style.header_corph : style.header}>
          {header3}
        </p>
      </div>
    </>
  )
}
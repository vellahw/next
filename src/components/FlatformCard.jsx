import Image from "next/image"
import style from '../styles/css/flatform-info.module.css'

export function FlatformCard(
    {title,
    src,
    change}
    ){
    
    const isChange = change === 1
    return(
          <div className={
            isChange ? 
            style.card_dark : style.card
          }>
            <p className={
                isChange ? 
                style.cardTitle_white : style.cardTitle
            }>
                {title}
            </p>
            <Image className={style.cardSubImg} src={src} alt={'카드 이미지'} ></Image>
          </div>
    )
}
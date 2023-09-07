import style from '../../styles/css/list.module.css'

export default function BuildingOption(props) {
  const data = props.data;
  const checkChange = props.change;
  const isDetail = !checkChange;
  const type = data.type;
  
  if(type === '공모예정') {
    return(
      <>
        <div className={style.detailOption_first}>
          <div className={style.optionTitle}>공모일정</div>
          <div className={style.option}>{data.date}</div>
        </div>
        <div className={style.detailOption}>
          <div className={style.optionTitle}>공모대상</div>
          <div className={style.option}>{data.name}</div>
        </div>
        <div className={style.detailOption}>
          <div className={style.optionTitle}>공모금액</div>
          <div className={style.option}>{data.totalPrice}</div>
        </div>
        <div className={style.detailOption}>
          <div className={style.optionTitle}>공모가</div>
          <div className={style.option}>{data.price}</div>
        </div>
      </>
    )
  } else if(type === '상장') {
    return (
      <>
        <div className={style.detailOption_first}>
          <div className={style.optionTitle}>상장일</div>
          <div className={style.option}>{data.publicDate}</div>
        </div>
        <div className={style.detailOption}>
          <div className={style.optionTitle}>다음 배당 기준일</div>
          <div className={style.option}>{data.dividendDate}</div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className={style.detailOption_first}>
          <div className={style.optionTitle}>공모기간</div>
          <div className={style.option}>{data.date}</div>
        </div>
        <div className={style.detailOption}>
          <div className={style.optionTitle}>상장일</div>
          <div className={style.option}>{data.publicDate}</div>
        </div>
        <div className={style.detailOption}>
          <div className={style.optionTitle}>매각일</div>
          <div className={style.option}>{data.saleDate}</div>
        </div>
        <div className={style.detailOption}>
          <div className={style.optionTitle}>공모금액</div>
          <div className={style.option}>{data.totalPrice}</div>
        </div>
        <div className={style.detailOption}>
          <div className={style.optionTitle}>매각금액</div>
          <div className={style.option}>{data.salePrice}</div>
        </div>
      </>
    )
  }
}
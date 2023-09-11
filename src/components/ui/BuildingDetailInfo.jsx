import {MdLocationOn} from 'react-icons/md';
import style from '../../styles/css/list.module.css'
import BuildingDetailOption from './BuildingDetailOption';

function BuildingDetailInfo(props) {
  const buildings = props.data
  const checkChange = props.change
  const isDetail = !checkChange

  return (
    <div className={style.innerInfoWrapper}>
      <div className={style.statusContainer}>
        <div className={
            buildings.type === '공모예정'
            ? style.status 
            : style.status_done
        }>
          {
            {
            '공모예정': '공모 예정',
            '상장': '상장',
            '매각완료': '매각 완료'
            }[buildings.type]
          }
        </div>
      </div>  
      <div>
        <h1 className={style.buildingName}>{buildings.name}</h1>
        <address
          className={
            isDetail
            ? style.buildingAddress
            : style.buildingAddress_white
          }
        >
          <MdLocationOn
            className={
              isDetail
              ? style.locationIcon
              : style.locationIcon_white} />

          {buildings.address}
        </address>
        <div className={style.detailOptionWrapper}>
          <BuildingDetailOption data={buildings} />
        </div>
      </div>
    </div>
  )
}

export default BuildingDetailInfo
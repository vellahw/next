import style from '../../styles/main/info.module.css'

function CorpInfo() {
    return (
        <div className={`${style.infoContainer} ${style.corp}`}>
            <h2 className={style.title}>법인 회원</h2>

            <div className={style.headerWrapper}>
                <p className={`${style.header} ${style.corph}`}>
                    법인회원으로 가입을 원하시는 경우,
                </p>
                <p className={`${style.header} ${style.corph}`}>
                    법인 고객 상담팀(support@ziktu.com)으로 요청 주시면 도움 드리겠습니다.
                </p>
            </div>

            <div className={style.btnWrap}>
                <button type="button" className={style.helpBtn}>
                    <a href='mailto:"support@ziktu.com"'>문의하기</a>
                </button>
                <a href='https://static.kr.kasa.exchange/corp/%EB%B2%95%EC%9D%B8%EC%83%81%ED%92%88%EC%84%A4%EB%AA%85%EC%84%9C.pdf' target="_blank" rel="noreferrer">
                    <p className={style.goDL}>법인 상품설명서 다운로드</p>
                </a>
            </div>
        </div>
    )
}

export default CorpInfo
'use client';

import style from '../../styles/css/info.module.css'
import Button from '@/components/ui/Button'
import { SectionHeader } from '../../components/SectionHeader';
import Link from 'next/link';

function CorpInfo() {
  return (
    <section className={style.infoContainer_corp}>
      <SectionHeader 
          title={'법인 회원'}
          isCorp={0}
          header1={'법인회원으로 가입을 원하시는 경우,'}
          header2={'법인 고객 상담팀(support@ziktu.com)으로 요청 주시면 도움 드리겠습니다.'}
      />
      
      <div className={style.btnWrap}>
        <Link href='mailto:"support@ziktu.com"'>
          <Button
            className={style.helpBtn}
            title='문의하기'
          />
        </Link>
        <a href='https://static.kr.kasa.exchange/corp/%EB%B2%95%EC%9D%B8%EC%83%81%ED%92%88%EC%84%A4%EB%AA%85%EC%84%9C.pdf' target="_blank" rel="noreferrer">
          <p className={style.downloadText}>법인 상품설명서 다운로드</p>
        </a>
      </div>
    </section>
  )
}

export default CorpInfo
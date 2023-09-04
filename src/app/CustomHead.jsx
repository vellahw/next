import Head from 'next/head';

function CustomHead({ data }) {
  return (
    <div>
      <Head>
        <title>{data.title ? data.title : '누구나 쉽게, 부동산 조각투자 플랫폼 직투'}</title>
        <meta property="og:title" content={data.title ? data.title : '직투(ziktu) 부동산 가상자산 플랫폼'} />
        <meta property="og:description" content={`${data.description}`} />
        <meta property="og:image" content={data.image} />
        <meta property="og:url" content={data.url} />
      </Head>
    </div>
  );
}

export async function getServerSideProps() {
  // 데이터를 서버에서 가져오는 로직
  const data = {
    title: '동적 페이지 제목',
    description: '동적 페이지 설명',
    image: '이미지 URL',
    url: '페이지 URL',
  };

  return {
    props: { data },
  };
}

export default CustomHead;
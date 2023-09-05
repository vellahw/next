import data from '/public/data.json'
import BuildingDetailPage from '../../../../container/building/BuildingDetailPage'

export const metadata = {
    title: '직투 - 빌딩 정보',
    description: '빌딩 정보 페이지',
    openGraph: {
      title: '직투 - 빌딩 정보',
      description: '빌딩 정보 페이지입니다.',
      images: '/og_image.png'
    },
  }

export default function DetailPage() {
    return(
        <>
            <BuildingDetailPage />
        </>
    )
}
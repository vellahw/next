import { BuildingList } from "../../../container/building/BuildingList"

export const metadata = {
  title: '직투 - 빌딩 정보',
  description: '빌딩 정보 페이지',
  openGraph: {
    title: '직투 - 빌딩 정보',
    description: '빌딩 정보 페이지입니다.',
    images: '/og_image.png'
  },
}

export default function BuildingPage() {
    return (
      <>
        <BuildingList />
      </>
    )
  }
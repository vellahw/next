import EventList from "../../../container/event/EventList"
import data from '/public/data.json'

export const metadata = {
  title: '직투 - 이벤트 목록',
  openGraph: {
    title: '직투 - 이벤트 목록',
    description: '이벤트 목록 페이지입니다.',
    images: '/og_image.png'
  },
}

export default function EventPage() {
    return (
      <EventList />
      )
  }
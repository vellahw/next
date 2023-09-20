import EventDetailPage from "../../../../container/event/EventDetailPage";
import data from '/public/data.json'

export const metadata = {
  title: data.eventDetail[0].title + ' | 카사 - 이벤트',
  openGraph: {
    title: data.eventDetail[0].title + ' | 카사 - 이벤트',
    description: '이벤트 페이지입니다.',
    images: data.eventDetail[0].mainImg
  },
}

export default function EventPage() {
    return (
        <EventDetailPage />
    )
}
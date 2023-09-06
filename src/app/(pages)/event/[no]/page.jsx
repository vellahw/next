import EventDetailPage from "../../../../container/event/EventDetailPage";
import data from '/public/data.json'

export const metadata = {
  title: '직투 | 이벤트 - ' + data.eventDetail[0].title,
  openGraph: {
    title: '직투 | 이벤트 - ' + data.eventDetail[0].title,
    description: '이벤트 페이지입니다.',
    images: data.eventDetail[0].mainImg
  },
}

export default function EventPage() {
    return (
        <EventDetailPage />
    )
}
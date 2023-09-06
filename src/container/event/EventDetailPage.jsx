'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import data from '/public/data.json'

function EventDetailPage() {
    const pathname = usePathname()
    const index = pathname.slice(-1)
    const eventDetail = data.eventDetail[index-1]
    
    return (
        <div style={{height: '500px'}}>
            <h1 style={{paddingTop: '200px'}}>{eventDetail.status}</h1>
            <Image src={eventDetail.mainImg} width={300} height={200} alt='메인이미지'></Image>
            {eventDetail.detailImg ?
             <>
              <Image src={eventDetail.detailImg} width={300} height={700}  alt='상세이미지'></Image>
             </>
             :
             <>
             </>
             }
            
        </div>
    )
}

export default EventDetailPage
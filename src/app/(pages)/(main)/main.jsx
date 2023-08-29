import TopBanner from '@/container/main/Banner-Top'
import CompanyInfo from '@/container/main/Info-Company'
import MiddleBanner from '@/container/main/Banner-Middle'
import FlatformInfo from '@/container/main/Info-Flatform'
import NewsList from '@/container/main/NewsList'
import BottomBanner from '@/container/main/Banner-Bottom'
import CorpInfo from '@/container/main/Info-Corp'

function MainPage() {
    return(
      <>
        <TopBanner />
        <CompanyInfo />
        <MiddleBanner />
        <FlatformInfo />
        <NewsList />
        <BottomBanner />
        <CorpInfo />
      </>
    )
}

export default MainPage
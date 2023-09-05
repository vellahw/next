import TopBanner from "../../../container/main/Banner-Top";
import CompanyInfo from "../../../container/main/Info-Company";
import MiddleBanner from "../../../container/main/Banner-Middle";
import FlatformInfo from "../../../container/main/Info-Flatform";
import NewsList from "../../../container/main/NewsList";
import BottomBanner from "../../../container/main/Banner-Bottom";
import CorpInfo from "../../../container/main/Info-Corp";
import MobileFloatButton from "../../../components/ui/MobileFloatButton";

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
      <MobileFloatButton />
    </>
  )
}

export default MainPage
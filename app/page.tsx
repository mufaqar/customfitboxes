import Banner from "@/components/Home/Banner";
import CustomIndustry from "@/components/Home/CustomIndustry";
import FinishingOptions from "@/components/Home/FinishingOptions";
import PackagingProcess from "@/components/Home/PackagingProcess";
import RequestQuote from "@/components/Home/RequestQuote";
import WhoWeAre from "@/components/Home/WhoWeAre";

export default function Home() {
  return (
    <main>
      <Banner />
      <CustomIndustry />
      <PackagingProcess />
      <FinishingOptions />
      <WhoWeAre />
      <RequestQuote />
    </main>
  );
}

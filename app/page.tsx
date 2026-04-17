import Banner from "@/components/Home/Banner";
import CallBack from "@/components/Home/CallBack";
import CustomIndustry from "@/components/Home/CustomIndustry";
import Faqs from "@/components/Home/Faqs";
import FinishingOptions from "@/components/Home/FinishingOptions";
import PackagingProcess from "@/components/Home/PackagingProcess";
import RequestQuote from "@/components/Home/RequestQuote";
import ScrollContent from "@/components/Home/ScrollContent";
import TestimonialSlider from "@/components/Home/TestimonialSlider";
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
      <ScrollContent />
      <Faqs />
      <TestimonialSlider />
      <CallBack />
    </main>
  );
}

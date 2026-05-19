import { sanityFetch } from "@/sanity/lib/live";
import { ALL_TESTIMONIALS_QUERY, ALL_FAQS_QUERY } from "@/sanity/queries";
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

export default async function Home() {
  const [{ data: testimonials }, { data: faqs }] = await Promise.all([
    sanityFetch({ query: ALL_TESTIMONIALS_QUERY, perspective: "published" }),
    sanityFetch({ query: ALL_FAQS_QUERY, perspective: "published" }),
  ]) as { data: any }[];

  return (
    <main>
      <Banner />
      <CustomIndustry />
      <PackagingProcess />
      <FinishingOptions />
      <WhoWeAre />
      <RequestQuote />
      <ScrollContent />
      <Faqs faqs={faqs || null} />
      <TestimonialSlider testimonials={testimonials || []} />
      <CallBack />
    </main>
  );
}

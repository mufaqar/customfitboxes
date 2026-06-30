import { sanityFetch } from "@/sanity/lib/live";
import { CATEGORY_BY_SLUG_QUERY } from "@/sanity/queries";
import Banner from "@/components/Category/Banner";
import CatProducts from "@/components/Category/CatProducts";
import HeadingSection from "@/components/Category/HeadingSection";
import InstantQuote from "@/components/Category/InstantQuote";
import Faqs from "@/components/Home/Faqs";
import ScrollContent from "@/components/Home/ScrollContent";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }: any) {
  const { slug } = await params;

  const { data: category } = await sanityFetch({
    query: CATEGORY_BY_SLUG_QUERY,
    params: { slug },
    perspective: "published",
  }) as { data: any };

  if (!category) return notFound();

  return (
    <main>
      <Banner data={category} />
      <InstantQuote data={category}  />
      {/* <HeadingSection data={category} /> */}
      <CatProducts products={category.products || []} />
      <ScrollContent content={category.content} />
      <Faqs faqs={category.faqs || null} />
    </main>
  );
}

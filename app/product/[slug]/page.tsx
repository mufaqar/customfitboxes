import { sanityFetch } from "@/sanity/lib/live";
import { PRODUCT_BY_SLUG_QUERY } from "@/sanity/queries";
import Faqs from "@/components/Home/Faqs";
import ScrollContent from "@/components/Home/ScrollContent";
import CTA from "@/components/products/CTA";
import Feature from "@/components/products/Feature";
import ProBanner from "@/components/products/ProBanner";
import RelatedPRoducts from "@/components/products/RelatedPRoducts";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: any) {
  const { slug } = await params;

  const { data: product } = await sanityFetch({
    query: PRODUCT_BY_SLUG_QUERY,
    params: { slug },
    perspective: "published",
  }) as { data: any };

  if (!product) return notFound();

  return (
    <main>
      <ProBanner data={product} />
      <Feature
        heading={product.productFeatureHeading}
        details={product.productFeatureDetails}
      />
      {product.content && <ScrollContent content={product.content} />}
      <Faqs faqs={product.faqs || null} />
      <RelatedPRoducts currentSlug={product.slug} />
      <CTA />
    </main>
  );
}

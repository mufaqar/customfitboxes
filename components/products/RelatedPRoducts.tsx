import { sanityFetch } from "@/sanity/lib/live";
import { ALL_PRODUCTS_QUERY } from "@/sanity/queries";
import ProductBox from './ProductBox';

const RelatedPRoducts = async ({ currentSlug }: { currentSlug?: string }) => {
  const { data: products } = await sanityFetch({
    query: ALL_PRODUCTS_QUERY,
    perspective: "published",
  }) as { data: any };

  const filtered = (Array.isArray(products) ? products : []).filter((p: any) => p.slug !== currentSlug).slice(0, 4);

  return (
    <section className='pt-5 pb-16'>
      <div className="container mx-auto">
        <h3 className="lg:text-4xl text-3xl leading-tight font-semibold text-center text-primary">
          Related Products
        </h3>
        <div className='container mx-auto grid md:grid-cols-4 grid-cols-1 gap-5 mt-5'>
          {filtered.length > 0 ? (
            filtered.map((product: any) => (
              <ProductBox key={product._id} data={product} view='grid' />
            ))
          ) : (
            [1, 2, 3, 4].map((item, idx) => (
              <ProductBox key={idx} data={item} view='grid' />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default RelatedPRoducts

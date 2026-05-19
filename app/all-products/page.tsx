import { sanityFetch } from "@/sanity/lib/live";
import { ALL_PRODUCTS_QUERY } from "@/sanity/queries";
import ProductBox from '@/components/products/ProductBox'

export default async function Products() {
  const { data: products } = await sanityFetch({
    query: ALL_PRODUCTS_QUERY,
    perspective: "published",
  }) as { data: any };

  return (
    <main>
      <section className='py-16'>
        <div className='container mx-auto'>
          <h1 className='text-3xl sm:text-2xl md:text-4xl text-title text-center font-semibold leading-tight'>
            All Products
          </h1>
          <p className='text-base leading-5 text-center mt-4 max-w-[650px] mx-auto'>
            Choose a packaging style for your custom boxes, start designing with us, and get your
            boxes with the most advanced printing techniques.
          </p>
        </div>
      </section>
      <section className='pt-5 pb-16'>
        <div className='container mx-auto grid md:grid-cols-4 grid-cols-1 gap-5'>
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product: any) => (
              <ProductBox key={product._id} data={product} view='grid' />
            ))
          ) : (
            [1, 2, 3, 4].map((item, idx) => (
              <ProductBox key={idx} data={item} view='grid' />
            ))
          )}
        </div>
      </section>
    </main>
  )
}

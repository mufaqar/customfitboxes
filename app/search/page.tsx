import SearchForm from '@/components/Header/SearchForm'
import ProductBox from '@/components/products/ProductBox'

import { sanityFetch } from '@/sanity/lib/live'
import { SEARCH_PRODUCTS_QUERY } from '@/sanity/queries'

async function getSearchResults(search: string) {

    try {

        if (!search) {
            return []
        }

        const { data } = await sanityFetch({
            query: SEARCH_PRODUCTS_QUERY,
            params: {
                search,
            },
            perspective: 'published',
        }) as { data: any[] }

        return data || []

    } catch (error) {

        console.log(error)

        return []
    }
}

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ name?: string }>
}) {

    const params = await searchParams

    const query = params?.name || ''

    const products = await getSearchResults(query)

    return (
        <>
            <section className='bg-background h-32 sm:h-60 flex items-center justify-center px-4'>
                <div className='max-w-[530px] w-full mx-auto flex items-center justify-center px-4'>
                    <div className='w-full'>
                        <SearchForm />
                    </div>
                </div>
            </section>

            <section className='py-16'>

                <div className='container mx-auto'>

                    <h1 className='text-3xl sm:text-2xl md:text-4xl text-title text-center font-semibold leading-tight'>

                        {products.length} Search Results for: {query}

                    </h1>

                    <p className='text-base leading-5 text-center mt-4 max-w-[700px] mx-auto'>

                        Choose a packaging style for your custom boxes,
                        start designing with us, and get your
                        <br className='md:block hidden' />
                        boxes with the most advanced printing techniques.

                    </p>
                </div>
            </section>

            <section className='pt-5 pb-16'>

                <div className='container mx-auto grid md:grid-cols-4 grid-cols-1 gap-5'>

                    {Array.isArray(products) && products.length > 0 ? (

                        products.map((product: any) => (
                            <ProductBox
                                key={product._id}
                                data={product}
                                view='grid'
                            />
                        ))

                    ) : (

                        <div className='md:col-span-4 text-center py-10'>
                            <h2 className='text-2xl font-semibold'>
                                No Products Found
                            </h2>

                            <p className='mt-2 text-sm text-gray-500'>
                                Try searching with another keyword.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
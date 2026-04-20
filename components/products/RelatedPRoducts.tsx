import React from 'react'
import ProductBox from './ProductBox'

const RelatedPRoducts = () => {
    return (
        <section className='pt-5 pb-16'>
            <div className="container mx-auto md:px-0 px-4">
                <h3 className="lg:text-4xl text-3xl leading-tight font-semibold text-center text-primary">
                    Related Products
                </h3>
                <div className='container mx-auto md:px-0 px-4 grid md:grid-cols-4 grid-cols-1 gap-5 mt-5'>
                    {[1, 2, 3, 4].map((item, idx) => (
                        <ProductBox key={idx} data={item} view='grid' />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RelatedPRoducts
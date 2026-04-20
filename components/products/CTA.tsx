import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
    return (
        <section className='pt-10 bg-background'>
            <div className='container mx-auto md:px-0 px-4 flex md:flex-row flex-col gap-10 items-center'>
                <div className='md:w-1/2 w-full'>
                    <Image src="/images/banner2.png" alt='banner2' width={827} height={697} className='w-full h-full' />
                </div>
                <div className='md:w-1/2 w-full'>
                    <h2 className='md:text-5xl text-4xl leading-tight font-semibold text-primary'>
                        Packaging that protects
                        the environment.
                    </h2>
                    <p className='lg:text-lg text-base font-normal text-desc mt-6'>
                        Ecological properties are a set of characteristics
                        related to the sustainability of packaging.
                    </p>
                    <div className='flex md:flex-row flex-col gap-5 items-center mt-10'>
                        <Link href="#" className='text-base font-semibold text-white hover:text-primary border border-white hover:border-primary bg-primary hover:bg-transparent rounded-md md:w-60 w-full whitespace-nowrap h-12 duration-300 inline-flex items-center justify-center gap-2.5'>
                          Order Now
                        </Link>
                        <Link href="tel:+13322541272" className='text-base font-semibold text-white hover:text-primary border border-white hover:border-primary bg-primary hover:bg-transparent rounded-md md:w-60 w-full whitespace-nowrap h-12 duration-300 inline-flex items-center justify-center gap-2.5'>
                           Call Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
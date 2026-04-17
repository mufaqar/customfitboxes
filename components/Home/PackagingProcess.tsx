import Image from 'next/image'
import React from 'react'

const PackagingProcess = () => {
    return (
        <section className='py-16'>
            <div className='container mx-auto md:px-0 px-4'>
                <h2 className='text-3xl sm:text-2xl md:text-4xl xl:text-5xl text-primary text-center font-semibold leading-tight'>
                    Our Packaging Process
                </h2>
                <p className='text-base leading-5 text-center mt-1'>
                    We follow a streamlined process to ensure you get the perfect custom packaging for your products. From selecting the right box style to finalizing artwork
                    and shipping, we make the journey simple and hassle-free.
                </p>
            </div>
            <div className='container mx-auto md:px-0 px-4 grid md:grid-cols-4 grid-cols-1 gap-5 mt-10 '>
                {[1, 2, 3, 4].map((item, idx) => (
                    <div key={idx} className='rounded-3xl bg-[#f5f5f5] px-4 pt-12 pb-8'>
                        <Image src="/images/p1.svg" alt='p1' width={114} height={80} className='w-fit mx-auto' />
                        <h3 className='text-xl font-semibold text-title text-center mt-6'>
                            Choose Box Style
                        </h3>
                        <p className='text-base lg:text-sm xl:text-base leading-6 text-center text-desc mt-4'>
                            Select from a variety of custom box styles that suit your brand and product requirements. Whether you need retail boxes, mailers, or luxury rigid boxes, we’ve got the perfect fit for you.
                        </p>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default PackagingProcess
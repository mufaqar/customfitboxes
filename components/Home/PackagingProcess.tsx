import Image from 'next/image'
import React from 'react'

const PackagingProcess = () => {
    return (
        <section className='py-16'>
            <div className='container mx-auto  '>
                <h2 className='text-3xl sm:text-2xl md:text-4xl xl:text-5xl text-primary text-center font-semibold leading-tight'>
                    Our Packaging Process
                </h2>
                <p className='text-base leading-5 text-center mt-1'>
                    We follow a streamlined process to ensure you get the perfect custom packaging for your products. From selecting the right box style to finalizing artwork <br className='hidden sm:block' />
                    and shipping, we make the journey simple and hassle-free.
                </p>
            </div>
            <div className='container mx-auto grid md:grid-cols-4 grid-cols-1 gap-5 mt-10 '>
                {processData.map((item, idx) => (
                    <div key={idx} className='rounded-3xl bg-[#f5f5f5] px-4 pt-12 pb-8'>
                        <Image src={item?.img} alt='p1' width={114} height={80} className='w-fit mx-auto' />
                        <h3 className='text-xl font-semibold text-title text-center mt-6'>
                            {item?.name}
                        </h3>
                        <p className='text-base lg:text-sm xl:text-base leading-6 text-desc mt-4'>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default PackagingProcess

const processData = [
    {
        img: "/images/p1.svg",
        name: "Choose Box Style",
        description:
            "Select from a variety of custom box styles that suit your brand and product requirements. Whether you need retail boxes, mailers, or luxury rigid boxes, we’ve got the perfect fit for you.",
    },
    {
        img: "/images/p2.svg",
        name: "Get Quote",
        description:
            "Receive a competitive quote instantly! Share your packaging specifications, and our team will provide you with the best pricing based on your needs and order volume.",
    },
    {
        img: "/images/p3.svg",
        name: "Finilize Art Work",
        description:
            "Work with our expert designers to refine your packaging artwork. We ensure high-quality printing and premium finishing options to make your packaging stand out.",
    },
    {
        img: "/images/p4.svg",
        name: "Ready for Shipment",
        description:
            "Once your design is approved, we move to production with precision and efficiency. Your custom packaging is then carefully packed and shipped to your doorstep, ready for use.",
    },
];
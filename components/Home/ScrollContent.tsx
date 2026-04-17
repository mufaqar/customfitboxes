import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ScrollContent = () => {
    return (
        <section className='py-16'>
            <div className='container mx-auto md:px-0 px-4 flex md:flex-row flex-col-reverse gap-10 items-center'>
                <div className='md:w-2/3 w-full'>
                    <div className='scrollDiv overflow-y-auto pl-3 md:pl-5 h-[480px]'>
                        <div className='scrollContent'>
                            <h2 className=''>
                                Create Custom Boxes That Elevate Your Brand
                            </h2>
                            <p className=''>
                                Looking for the perfect packaging to showcase your brand? At Custom Fit Boxes, we provide tailor-made packaging solutions designed to meet your unique product needs. We offer the ideal packaging solutions regardless of whether you need minimalistic or premium designs.
                            </p>
                            <h3 className=''>
                                Why Are Custom Boxes Essential for Product Marketing?
                            </h3>
                            <p>
                                Using custom packaging designs helps your business stand out and gives your products a unique edge in the market. Custom-printed boxes attract shoppers because they look appealing, making people more likely to buy your products. When customers like what they see, they share their positive experiences with others, helping spread the word about your brand. This natural promotion can boost your brand's reputation and value in the market. There is a wide range of custom printing services to make your packaging look great. Advanced printing machines are used to turn your ideas into reality and ensure your orders are delivered quickly. With high-quality machines, your custom boxes will look exactly how you envision them.
                            </p>
                            <p>
                                By buying custom boxes wholesale, you can save money and invest in other parts of your business. Attractive packaging catches customers' attention in stores, leading to more loyal customers and higher sales.
                            </p>
                            <ul>
                                <li>
                                    <b>Consultation:</b> Share your packaging vision and requirements.
                                </li>
                                <li>
                                    <Link href="#">
                                        Custom CBD Packaging
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        Cosmetic Packaging Boxes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        Mailer Boxes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        Food Boxes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        Soap Boxes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        Bakery Boxes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        Apparel Boxes
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 w-full'>
                    <div className='h-[480px] rounded-md overflow-hidden'>
                        <Image src="/images/contenimg.png" alt='contenimg' width={504} height={504} className='w-full object-cover object-center scale-105' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ScrollContent
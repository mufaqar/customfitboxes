import Image from 'next/image'
import Link from 'next/link'
import { IoMdArrowForward } from 'react-icons/io'

const Banner = () => {
    return (
        <section className='pb-8 pt-5 md:py-10 lg:py-16 bg-background'>
            <div className='container mx-auto md:px-6 px-4 flex md:flex-row flex-col gap-10 justify-between'>
                <div className='md:w-1/2 w-full'>
                    <Link href="#" className='text-base font-semibold text-primary hover:text-white border border-primary bg-transparent hover:bg-primary rounded-md px-4 whitespace-nowrap h-12 duration-300 inline-flex items-center justify-center'>
                        Customer Packaging Boxes
                    </Link>
                    <h1 className='font-semibold text-3xl sm:text-2xl leading-tight md:text-4xl xl:text-5xl mt-8'>
                        Eco-Friendly, Premium,
                        and Customizable
                        Packaging Solutions
                    </h1>
                    <Link href="#" className='text-base font-semibold text-white hover:text-primary border border-white hover:border-primary bg-primary hover:bg-transparent rounded-md px-4 whitespace-nowrap h-12 duration-300 inline-flex items-center justify-center gap-2.5 md:mt-14 mt-8'>
                        Customize Products <IoMdArrowForward className='border w-7 h-7 rounded-full p-1' />
                    </Link>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-8 md:mt-14 mt-8'>
                        <div className='flex items-start gap-2'>
                            <Image src="/images/shippingIcon.svg" alt='shippingIcon' width={32} height={32} />
                            <div>
                                <p className='font-semibold text-sm 2xl:text-base'>FREE SHIPPING & RETURN</p>
                                <p className='text-xs 2xl:text-sm'>Free shipping on all orders over $99.</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-2'>
                            <Image src="/images/brushIcon.svg" alt='brushIcon' width={32} height={32} />
                            <div>
                                <p className='font-semibold text-sm 2xl:text-base'>FREE DESIGN SUPPORT</p>
                                <p className='text-xs 2xl:text-sm'>Get advice from our expert designers.</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-2'>
                            <Image src="/images/dollarIcon.svg" alt='dollarIcon' width={32} height={32} />
                            <div>
                                <p className='font-semibold text-sm 2xl:text-base'>NO HIDDEN CHARGES</p>
                                <p className='text-xs 2xl:text-sm'>100% secure payment & no extra penny.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='md:w-1/2 w-full flex md:justify-end'>
                    <Image src="/images/headerImg1.png" alt='headerImg1' width={480} height={558} />
                </div>
            </div>
        </section>
    )
}

export default Banner
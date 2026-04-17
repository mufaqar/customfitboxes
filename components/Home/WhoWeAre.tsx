import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

const WhoWeAre = () => {
    return (
        <section className='pb-14 pt-5'>
            <div className='container mx-auto md:px-0 px-4'>
                <h2 className='text-3xl sm:text-2xl md:text-4xl xl:text-5xl text-primary text-center font-semibold leading-tight'>
                    Who We Are
                </h2>
                <p className='text-base leading-5 text-center mt-1'>
                    At Custom Fit Boxes, we specialize in crafting innovative, high-quality packaging solutions that enhance brand identity.
                    Our focus on sustainability, precision, and creativity ensures your packaging leaves a lasting impact in the competitive market.
                </p>
            </div>
            <div className='container mx-auto md:px-0 px-4 flex md:flex-row flex-col gap-8 items-center mt-10'>
                <div className='md:w-1/2 w-full text-lg text-desc/80'>
                    <p className='mt-3'>
                        Custom Fit Boxes is a USA-based company dedicated to providing high-quality custom packaging solutions to businesses across the USA and worldwide. We specialize in crafting unique, durable, and visually appealing packaging that enhances your brand’s identity. Our expertise spans across various industries, ensuring that each packaging solution meets the highest standards of quality and design.
                    </p>
                    <p className='mt-3'>
                        We offer a wide range of custom packaging options, including retail boxes, mailer boxes, food packaging, luxury rigid boxes, and more. Our solutions are tailored to fit your specific needs, with premium printing, eco-friendly materials, and endless customization possibilities. Whether you're looking for eye-catching designs or sustainable packaging, we have the perfect fit for you.
                    </p>
                    <p className='mt-3'>
                        At Custom Fit Boxes, customer satisfaction is our top priority. We combine creativity, precision, and innovation to help businesses create a strong market presence. With our cost-effective and high-end packaging solutions, we ensure that your brand stands out and leaves a lasting impression.
                    </p>
                    <Link href="#" className='text-base font-semibold text-white hover:text-primary border border-white hover:border-primary bg-primary hover:bg-transparent rounded-md px-4 whitespace-nowrap h-12 duration-300 inline-flex items-center justify-center gap-2.5 md:mt-14 mt-8'>
                        About Us <FaChevronRight className='border w-7 h-7 rounded-full p-1' />
                    </Link>
                </div>
                <div className='md:w-1/2 w-full'>
                    <Image src="/images/workbanner.png" alt='workbanner' width={600} height={598} className='w-full h-full' />
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre
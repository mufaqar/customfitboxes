import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className='container mx-auto md:px-6 px-4 grid md:grid-cols-4 grid-cols-1 gap-y-14 border-b border-zinc-200 pb-14 pt-10 md:gap-y-0 gap-x-0 md:gap-x-5 lg:gap-x-8'>
                <div className='md:col-span-1'>
                    <Link href="/" className="inline-flex">
                        <Image src="/images/logofooter.png" alt="logo" width={160} height={70} />
                    </Link>
                    <div className='flex flex-row md:flex-col flex-wrap sm:flex-nowrap gap-y-10 sm:gap-y-0 gap-x-10 md:gap-y-10 mt-10'>
                        <ul className='flex flex-row md:flex-col flex-wrap sm:flex-nowrap gap-y-10 sm:gap-y-0 gap-x-10 md:gap-y-10 font-normal'>
                            <li className='flex flex-col items-start gap-y-1 -mt-3'>
                                <span className='whitespace-nowrap font-bold'>Phone</span>
                                <Link href="tel:+1(332)2529988" className='text-title text-[15px] font-medium'>
                                    +1(332) 252 9988
                                </Link>
                            </li>
                            <li className='flex flex-col items-start gap-y-1 -mt-3'>
                                <span className='whitespace-nowrap font-bold'>Email Us</span>
                                <Link href="mailto:sales@customfitboxes.com" className='text-title text-[15px] font-medium'>
                                    sales@customfitboxes.com
                                </Link>
                            </li>
                        </ul>
                        <ul className='flex items-center gap-x-4  md:items-start justify-center sm:!justify-start w-full md:w-auto'>
                            <li>
                                <Link href="#" className='text-2xl text-primary inline-flex'>
                                    <FaLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='text-2xl text-primary inline-flex'>
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='text-2xl text-primary inline-flex'>
                                    <FaFacebook />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='md:col-span-3 grid md:grid-cols-4 grid-cols-1 gap-y-14 md:gap-y-0 gap-x-0 md:gap-x-5 lg:gap-x-8'>
                    <div className=''>
                        <h6 className='font-semibold text-xl text-title sm:text-2xl'>Explore</h6>
                        <ul className='mt-8 flex flex-col gap-y-5'>
                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    Why Us
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    Request Sample Pack
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    Get A Quote
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <h6 className='font-semibold text-xl text-title sm:text-2xl'>Solutions</h6>
                        <ul className='mt-8 flex flex-col gap-y-5'>
                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    Rigid Boxes
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    CBD Boxes
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    Mailer Boxes
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    Cosmetic Boxes
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    Soap Boxes
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <h6 className='font-semibold text-xl text-title sm:text-2xl'>Products</h6>
                        <ul className='mt-8 flex flex-col gap-y-5'>
                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    Candle Boxes
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    Retail Boxes
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    Food Boxes
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    Bakery Boxes
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    Apparel Boxes
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <h6 className='font-semibold text-xl text-title sm:text-2xl'>Legals</h6>
                        <ul className='mt-8 flex flex-col gap-y-5'>
                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    Return Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className='font-normal cursor-pointer text-title hover:underline'>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container mx-auto md:px-6 px-4 flex flex-col items-center justify-between gap-y-3 py-12 md:flex-row md:gap-y-0 md:gap-x-4'>
                <p className='text-sm sm:text-base text-title font-normal'>© 2024 Customfitboxes.All rights reserved.</p>
                <div className='md:w-60'>
                    <Image src="/images/paymentImg.jpg" alt='paymentImg' width={897} height={96} />
                </div>
            </div>
        </footer>
    )
}

export default Footer
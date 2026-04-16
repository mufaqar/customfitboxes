import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className='container mx-auto md:px-6 px-4 '>
                <div>
                    <Link href="/" className="inline-flex">
                        <Image src="/images/logofooter.png" alt="logo" width={160} height={70} />
                    </Link>
                    <div className='flex flex-row md:flex-col flex-wrap sm:flex-nowrap gap-y-10 sm:gap-y-0 gap-x-10 md:gap-y-10 mt-10'>
                        <ul className='flex flex-row md:flex-col flex-wrap sm:flex-nowrap gap-y-10 sm:gap-y-0 gap-x-10 md:gap-y-10 font-normal mt-10'>
                            <li className='flex flex-col items-start gap-y-1 -mt-3'>
                                <span className='whitespace-nowrap font-bold'>Phone</span>
                                <Link href="tel:+1(332)2529988" className='text-black text-[15px] font-medium'>
                                    +1(332) 252 9988
                                </Link>
                            </li>
                            <li className='flex flex-col items-start gap-y-1 -mt-3'>
                                <span className='whitespace-nowrap font-bold'>Email Us</span>
                                <Link href="mailto:sales@customfitboxes.com" className='text-black text-[15px] font-medium'>
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
            </div>
        </footer>
    )
}

export default Footer
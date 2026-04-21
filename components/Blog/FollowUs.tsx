import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const FollowUs = () => {
    return (
        <div>
            <div>
                <h3 className='md:text-2xl text-xl font-semibold text-primary'>
                    Follow Us:
                </h3>
                <div className='w-full p-3 bg-background rounded-xl mt-3 flex flex-col gap-4'>
                    <ul className='bg-white rounded-xl px-6 py-5 flex items-center gap-5'>
                        <li>
                            <Link href="#" className='inline-flex md:text-3xl text-2xl text-title hover:text-primary transition-all ease-in-out'>
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='inline-flex md:text-3xl text-2xl text-title hover:text-primary transition-all ease-in-out'>
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='inline-flex md:text-3xl text-2xl text-title hover:text-primary transition-all ease-in-out'>
                                <FaLinkedinIn />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='inline-flex md:text-3xl text-2xl text-title hover:text-primary transition-all ease-in-out'>
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className='inline-flex md:text-3xl text-2xl text-title hover:text-primary transition-all ease-in-out'>
                                <FaYoutube />
                            </Link>
                        </li>
                    </ul>
                    <div className='bg-white rounded-xl px-6 py-5'>
                        <p className='text-xl font-semibold text-primary  text-center'>
                            Want <span className='text-[#2cafa6]'>10% off</span> your first order?
                        </p>
                        <p className='text-center text-sm mt-3'>
                            Type your email address and we’ll send you the discount code directly to your inbox.
                        </p>
                        <form className='flex items-center mt-5'>
                            <input type="email" name='email' className="bg-white w-full h-12 outline-none" placeholder="Email Address" />
                            <button className='rounded-tr-xl text-white px-4 h-12 text-sm ml-2 whitespace-nowrap bg-[#2cafa6]'>
                                Get Code
                            </button>
                        </form>
                        <p className='text-[10px] font-semibold text-primary mt-8 text-center'>
                            JOIN 10000S OF OTHER. Yes, IT’S COMPLETELY FREE.
                        </p>
                        <p className='text-[10px] font-semibold text-primary mt-8 text-center'>
                            By submitting this form you agree to our <Link href="#" className='underline'>Terms of Service</Link> and <Link href="#" className='underline'>Privacy Policy</Link>.
                        </p>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden rounded-xl drop-shadow-xl w-full'>
                <h3 className='text-xl lg:text-2xl bg-primary flex py-4 items-center justify-center text-white'>
                    Get an Instant Quote
                </h3>
                <form className='bg-[#f5f5f5] flex flex-col gap-6 pt-3 pb-5 px-3 lg:p-5'>
                    <input type="text" name='name' required placeholder="Name" className="h-10 w-full border-b border-primary bg-transparent text-base outline-none" />
                    <input type="tel" name='phone' required placeholder="Phone number" className="h-10 w-full border-b border-primary bg-transparent text-base outline-none" />
                    <input type="email" name='email' required placeholder="Email" className="h-10 w-full border-b border-primary bg-transparent text-base outline-none" />
                    <input type="text" name='description' required placeholder="Description" className="h-10 w-full border-b border-primary bg-transparent text-base outline-none" />
                    <input type="text" name='message' required placeholder="Enter your message" className="h-10 w-full border-b border-primary bg-transparent text-base outline-none" />
                    <button type="submit" className="text-base font-normal uppercase text-white bg-primary hover:scale-105 transition-all duration-200 h-12 px-10 rounded-md w-full">
                        Submit Quote
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FollowUs
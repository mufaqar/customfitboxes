import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'

const CallBack = () => {
    return (
        <section className='py-16 bg-background'>
            <div className='container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-10 gap-8 items-center justify-between'>
                <div className='md:w-1/2 w-full'>
                    <Image src="/images/callback.svg" alt='callback' width={625} height={365} />
                </div>
                <div className='md:w-1/2 w-full'>
                    <h3 className='text-base sm:text-lg font-semibold text-center'>
                        Just drop your contact number
                    </h3>
                    <h2 className='text-4xl sm:text-5xl 2xl:text-6xl font-semibold text-primary text-center mt-2'>
                        We’ll Call You Back
                    </h2>
                    <form className='grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-4 mt-10'>
                        <div>
                            <input
                                type='text'
                                name='name'
                                placeholder='Enter your name'
                                className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none' />
                        </div>
                        <div>
                            <input
                                type='tel'
                                name='phone'
                                placeholder='+1 123-123-1234'
                                className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none' />
                        </div>
                        <div>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none' />
                        </div>
                        <div className='md:col-span-3 mt-10 lg:mt-20'>
                            <button type='submit' className='text-base font-normal text-white bg-primary hover:scale-105 transition-all duration-200 w-fit mx-auto h-12 px-8 rounded-md flex gap-4 items-center'>
                                <span> Send Now </span><FaChevronRight />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CallBack
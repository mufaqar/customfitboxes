import Image from 'next/image'

const InstantQuote = () => {
    return (
        <section className='py-16'>
            <div className='container mx-auto   grid md:grid-cols-2 grid-cols-1 gap-10'>
                <div className='bg-[#f5f5f5] p-4 overflow-hidden hidden md:flex items-center rounded-2xl justify-center'>
                    <Image src="/images/instant.png" alt='instant' width={450} height={450} className='h-full w-full' />
                </div>
                <div className='rounded-xl drop-shadow-xl w-full overflow-hidden'>
                    <div className='bg-primary flex py-4 items-center justify-center'>
                        <h2 className='lg:text-2xl text-xl font-semibold text-white text-center'>
                            Get an Instant Quote
                        </h2>
                    </div>
                    <div className='bg-[#f5f5f5] p-4'>
                        <form className='grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-4 sm:p-3'>
                            <div>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Enter your name'
                                    className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none' />
                            </div>
                            <div>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
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
                                    type='number'
                                    name='quantity'
                                    placeholder='Quantity'
                                    className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none' />
                            </div>
                            <div className='md:col-span-2 flex flex-row gap-6 md:gap-4'>
                                <input
                                    type='number'
                                    name='length'
                                    placeholder='Length'
                                    className='h-10 w-1/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none' />
                                <input
                                    type='number'
                                    name='width'
                                    placeholder='Width'
                                    className='h-10 w-1/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none' />
                                <input
                                    type='number'
                                    name='depth'
                                    placeholder='Depth'
                                    className='h-10 w-1/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none' />
                            </div>
                            <div className='md:col-span-2'>
                                <label htmlFor="message" className='text-base font-normal'>
                                    Description
                                </label>
                                <textarea name="message"
                                    placeholder='Write your message'
                                    rows={6}
                                    className='w-full mx-auto border border-black/50 px-2 py-1 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none shadow-none'></textarea>
                            </div>
                            <div>
                                <input type="file"
                                    className="h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none" />
                            </div>
                            <div className=''>
                                <button type='submit' className='text-base font-normal uppercase text-white bg-primary hover:scale-105 transition-all duration-200 h-12 px-10 rounded-md w-full'>
                                    Get a Quote
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InstantQuote
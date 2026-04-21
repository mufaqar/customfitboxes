import React from 'react'

export default function RequestSamplePack() {
    return (
        <section>
            {/* Banner */}
            <div className='container mx-auto md:px-0 px-4 my-8'>
                <div className='pb-8 pt-5 md:py-10 lg:py-14 bg-background h-64 sm:h-80 md:h-96'>
                    <div className='md:w-1/2 w-full mx-auto px-4'>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-primary'>
                            Request a sample pack
                        </h1>
                        <p className='text-center py-3 text-sm sm:text-base'>
                            Fill the form below and we reply with a custom quote for your needs.
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className='bg-white -mt-30 sm:-mt-40 md:-mt-55 shadow-lg rounded-xl px-4 sm:px-8 md:px-10 pt-6 sm:pt-10 py-10 relative w-full lg:w-9/12 mx-auto'>
                    <form className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4'>

                        <div className='flex flex-col gap-1'>
                            <label className='text-md  text-title py-1 font-light'>Enter your Name</label>
                            <input
                                type='text'
                                name='name'
                                placeholder='Full Name'
                                className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='text-md  text-title py-1 font-light'>Email</label>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm  outline-none' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='text-md  text-title py-1 font-light'>Phone</label>
                            <input
                                type='tel'
                                name='phone'
                                placeholder='Phone'
                                className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm  outline-none' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='text-md  text-title py-1 font-light'>Company</label>
                            <input
                                type='text'
                                name='company'
                                placeholder='Company'
                                className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm  outline-none' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='text-md  text-title py-1 font-light'>Website</label>
                            <input
                                type='url'
                                name='website'
                                placeholder='Website'
                                className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm  outline-none' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='text-md  text-title py-1 font-light'>Physical Address</label>
                            <input
                                type='text'
                                name='address'
                                placeholder='Physical Address'
                                className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm  outline-none' />
                        </div>

                        <div className='flex flex-col gap-1 md:col-span-2'>
                            <label className='text-md  text-title py-1 font-light'>Quantity</label>
                            <input
                                type='number'
                                name='quantity'
                                placeholder='Quantity'
                                className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm  outline-none' />
                        </div>

                        <div className='flex flex-col gap-1 md:col-span-2'>
                            <textarea
                                name='message'
                                placeholder='Write your message'
                                rows={6}
                                className='w-full border px-3 py-3 border-[#d4d5d4] rounded-md bg-transparent text-sm sm:text-base outline-none shadow-none resize-none' />
                        </div>

                        <div className='md:col-span-2'>
                            <button
                                type='submit'
                                className='text-sm sm:text-base font-normal cursor-pointer uppercase text-white bg-primary transition-all duration-200 h-12 px-10 rounded-md w-full'>
                                Get Inquiry
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}
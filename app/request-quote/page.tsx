import React from 'react'

export default function RequestQuote() {
    return (
        <section>
            {/* Banner */}
            <div className='container mx-auto md:px-0 px-4 my-8'>
                <div className='pb-8 pt-5 md:py-10 lg:py-14 bg-background h-64 sm:h-80 md:h-96'>
                    <div className='md:w-1/2 w-full mx-auto px-4'>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-primary'>
                            Request a Quote
                        </h1>
                        <p className='text-center py-3 text-sm sm:text-base'>
                            Fill the form below and we reply with a custom quote for your needs.
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className='bg-white border border-primary -mt-30 sm:-mt-40 md:-mt-55 shadow-lg rounded-xl px-4 sm:px-8 md:px-10 pt-6 sm:pt-10 py-10 relative w-full lg:w-9/12 mx-auto'>
                    <form className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4'>

                        {/* Name */}
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm text-title font-light'>Enter your Name <span className='text-red-500'>*</span></label>
                            <input
                                type='text'
                                name='name'
                                placeholder='Full Name'
                                className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none' />
                        </div>

                        {/* Email */}
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm text-title font-light'>Email <span className='text-red-500'>*</span></label>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none' />
                        </div>

                        {/* Phone */}
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm text-title font-light'>Phone Number <span className='text-red-500'>*</span></label>
                            <input
                                type='tel'
                                name='phone'
                                placeholder='Phone number'
                                className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none' />
                        </div>

                        {/* Select Product */}
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm text-title font-light'>Select Product</label>
                            <select
                                name='product'
                                className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none bg-white'>
                                <option>Scissors Boxes</option>
                                <option>Custom Boxes</option>
                                <option>Mailer Boxes</option>
                                <option>Rigid Boxes</option>
                                <option>Kraft Boxes</option>
                            </select>
                        </div>

                        {/* Color */}
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm text-title font-light'>Color</label>
                            <select
                                name='color'
                                className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none bg-white'>
                                <option>Color</option>
                                <option>1-Color</option>
                                <option>2-Color</option>
                                <option>3-Color</option>
                                <option>4-Color</option>
                                <option>4/1-Color</option>
                                <option>4/2-Color</option>
                                <option>4/3-Color</option>
                                <option>4/4-Color</option>
                            </select>
                        </div>

                        {/* Quantity */}
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm text-title font-light'>Quantity</label>
                            <input
                                type='number'
                                name='quantity'
                                placeholder='Quantity'
                                className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none' />
                        </div>

                        {/* Length, Width, Depth */}
                        <div className='flex flex-col gap-1 md:col-span-2'>
                            <div className='grid grid-cols-3 gap-4'>
                                <input
                                    type='number'
                                    name='length'
                                    placeholder='Length'
                                    className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none' />
                                <input
                                    type='number'
                                    name='width'
                                    placeholder='Width'
                                    className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none' />
                                <input
                                    type='number'
                                    name='depth'
                                    placeholder='Depth'
                                    className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none' />
                            </div>
                        </div>

                        {/* Select Unit */}
                        <div className='flex flex-col gap-1 md:col-span-2'>
                            <div className='grid grid-cols-3 gap-4'>
                            <div className='flex flex-col gap-1'>
                                <label className='text-sm text-title font-light'>Select Unit</label>
                                <select
                                    name='unit'
                                    className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none bg-white'>
                                    <option>Inches</option>
                                    <option>CM</option>
                                    <option>MM</option>
                                </select>
                            </div>

                            {/* Delivery Deadline */}
                            <div className='flex flex-col gap-1'>
                                <label className='text-sm text-title font-light'>Delivery Deadline</label>
                                <input
                                    type='date'
                                    name='deadline'
                                    className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none text-gray-400' />
                            </div>

                            {/* Attachment */}
                            <div className='flex flex-col gap-1'>
                                <label className='text-sm text-title font-light'>Attachment</label>
                                <input
                                    type='file'
                                    name='attachment'
                                    className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none pt-3' />
                            </div>
                            </div>
                        </div>
                        {/* Message */}
                        <div className='flex flex-col gap-1 md:col-span-2'>
                            <textarea
                                name='message'
                                placeholder='Write your message'
                                rows={5}
                                className='w-full border px-3 py-3 border-[#d4d5d4] rounded-md bg-transparent text-sm outline-none shadow-none resize-none' />
                        </div>

                        {/* Submit Button */}
                        <div className='md:col-span-2'>
                            <button
                                type='submit'
                                className='text-sm sm:text-base font-normal cursor-pointer uppercase text-white bg-primary transition-all duration-200 h-12 px-10 rounded-md w-full'>
                                Submit
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}
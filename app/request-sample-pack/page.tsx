'use client'

import React, { useState } from 'react'

export default function RequestSamplePack() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        address: '',
        quantity: '',
        message: '',
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()

        setLoading(true)

        try {

            const res = await fetch('/api/request-sample-pack', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await res.json()

            if (data.success) {

                alert('Request submitted successfully')

                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    website: '',
                    address: '',
                    quantity: '',
                    message: '',
                })

            } else {
                alert(data.message)
            }

        } catch (error) {

            console.log(error)
            alert('Something went wrong')

        } finally {
            setLoading(false)
        }
    }

    return (
        <section>

            {/* Banner */}
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

                <form
                    onSubmit={handleSubmit}
                    className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4'
                >

                    <div className='flex flex-col gap-1'>
                        <label className='text-md text-title py-1 font-light'>
                            Enter your Name
                        </label>

                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Full Name'
                            className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none'
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-md text-title py-1 font-light'>
                            Email
                        </label>

                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Email'
                            className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none'
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-md text-title py-1 font-light'>
                            Phone
                        </label>

                        <input
                            type='tel'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='Phone'
                            className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none'
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-md text-title py-1 font-light'>
                            Company
                        </label>

                        <input
                            type='text'
                            name='company'
                            value={formData.company}
                            onChange={handleChange}
                            placeholder='Company'
                            className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none'
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-md text-title py-1 font-light'>
                            Website
                        </label>

                        <input
                            type='url'
                            name='website'
                            value={formData.website}
                            onChange={handleChange}
                            placeholder='Website'
                            className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none'
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-md text-title py-1 font-light'>
                            Physical Address
                        </label>

                        <input
                            type='text'
                            name='address'
                            value={formData.address}
                            onChange={handleChange}
                            placeholder='Physical Address'
                            className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none'
                        />
                    </div>

                    <div className='flex flex-col gap-1 md:col-span-2'>
                        <label className='text-md text-title py-1 font-light'>
                            Quantity
                        </label>

                        <input
                            type='number'
                            name='quantity'
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder='Quantity'
                            className='h-12 w-full border px-3 border-[#d4d5d4] rounded-md text-sm outline-none'
                        />
                    </div>

                    <div className='flex flex-col gap-1 md:col-span-2'>
                        <textarea
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Write your message'
                            rows={6}
                            className='w-full border px-3 py-3 border-[#d4d5d4] rounded-md bg-transparent text-sm sm:text-base outline-none shadow-none resize-none'
                        />
                    </div>

                    <div className='md:col-span-2'>
                        <button
                            type='submit'
                            disabled={loading}
                            className='text-sm sm:text-base font-normal cursor-pointer uppercase text-white bg-primary transition-all duration-200 h-12 px-10 rounded-md w-full'
                        >
                            {loading ? 'Submitting...' : 'Get Inquiry'}
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}
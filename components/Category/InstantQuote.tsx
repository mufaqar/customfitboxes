'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const InstantQuote = ({data}:any) => {

    const [formData, setFormData] = useState({
        title: data?.name,
        name: '',
        email: '',
        phone: '',
        quantity: '',
        length: '',
        width: '',
        depth: '',
        message: '',
    })

    const [file, setFile] = useState<File | null>(null)

    const [loading, setLoading] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault()

        setLoading(true)

        try {

            const data = new FormData()

            Object.entries(formData).forEach(([key, value]) => {
                data.append(key, value)
            })

            if (file) {
                data.append('file', file)
            }

            const res = await fetch('/api/instant-quote', {
                method: 'POST',
                body: data,
            })

            const response = await res.json()

            if (response.success) {

                alert('Quote request sent successfully')

                setFormData({
                    title: '',
                    name: '',
                    email: '',
                    phone: '',
                    quantity: '',
                    length: '',
                    width: '',
                    depth: '',
                    message: '',
                })

                setFile(null)

            } else {

                alert(response.message)
            }

        } catch (error) {

            console.log(error)
            alert('Something went wrong')

        } finally {

            setLoading(false)
        }
    }

    return (
        <section className='py-16'>
            <div className='container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10'>

                <div className='bg-[#f5f5f5] p-4 overflow-hidden hidden md:flex items-center rounded-2xl justify-center'>
                    <Image
                        src="/images/instant.png"
                        alt='instant'
                        width={450}
                        height={450}
                        className='h-full w-full'
                    />
                </div>

                <div className='rounded-xl drop-shadow-xl w-full overflow-hidden'>

                    <div className='bg-primary flex py-4 items-center justify-center'>
                        <h2 className='lg:text-2xl text-xl font-semibold text-white text-center'>
                            Get an Instant Quote
                        </h2>
                    </div>

                    <div className='bg-[#f5f5f5] p-4'>

                        <form
                            onSubmit={handleSubmit}
                            className='grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-4 sm:p-3'
                        >

                            <div>
                                <input
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Enter your name'
                                    className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none'
                                />
                            </div>

                            <div>
                                <input
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Email'
                                    className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none'
                                />
                            </div>

                            <div>
                                <input
                                    type='tel'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder='+1 123-123-1234'
                                    className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none'
                                />
                            </div>

                            <div>
                                <input
                                    type='number'
                                    name='quantity'
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    placeholder='Quantity'
                                    className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none'
                                />
                            </div>

                            <div className='md:col-span-2 flex flex-row gap-6 md:gap-4'>

                                <input
                                    type='number'
                                    name='length'
                                    value={formData.length}
                                    onChange={handleChange}
                                    placeholder='Length'
                                    className='h-10 w-1/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none'
                                />

                                <input
                                    type='number'
                                    name='width'
                                    value={formData.width}
                                    onChange={handleChange}
                                    placeholder='Width'
                                    className='h-10 w-1/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none'
                                />

                                <input
                                    type='number'
                                    name='depth'
                                    value={formData.depth}
                                    onChange={handleChange}
                                    placeholder='Depth'
                                    className='h-10 w-1/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none'
                                />
                            </div>

                            <div className='md:col-span-2'>
                                <label
                                    htmlFor="message"
                                    className='text-base font-normal'
                                >
                                    Description
                                </label>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Write your message'
                                    rows={6}
                                    className='w-full mx-auto border border-black/50 px-2 py-1 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none shadow-none'
                                />
                            </div>

                            <div>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none"
                                />
                            </div>

                            <div>
                                <button
                                    type='submit'
                                    disabled={loading}
                                    className='text-base font-normal uppercase text-white bg-primary hover:scale-105 transition-all duration-200 h-12 px-10 rounded-md w-full'
                                >
                                    {loading ? 'Sending...' : 'Get a Quote'}
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
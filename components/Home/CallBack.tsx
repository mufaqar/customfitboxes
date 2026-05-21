'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'

const CallBack = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { name, phone, email } = formData

        if (!name || !phone || !email) {
            alert('Please fill all fields')
            return
        }

        setLoading(true)

        try {
            const res = await fetch('/api/callback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await res.json()

            if (data.success) {
                alert('Request sent successfully')

                setFormData({
                    name: '',
                    phone: '',
                    email: '',
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
        <section className='py-16 bg-background'>
            <div className='container mx-auto flex md:flex-row flex-col md:gap-10 gap-8 items-center justify-between'>
                <div className='md:w-1/2 w-full'>
                    <Image
                        src="/images/callback.svg"
                        alt='callback'
                        width={625}
                        height={365}
                    />
                </div>

                <div className='md:w-1/2 w-full'>
                    <h3 className='text-base sm:text-lg font-semibold text-center'>
                        Just drop your contact number
                    </h3>

                    <h2 className='text-4xl sm:text-5xl 2xl:text-6xl font-semibold text-primary text-center mt-2'>
                        We’ll Call You Back
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className='grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-4 mt-10'
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
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email'
                                className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none'
                            />
                        </div>

                        <div className='md:col-span-3 mt-10 lg:mt-20'>
                            <button
                                type='submit'
                                disabled={loading}
                                className='text-base font-normal text-white bg-primary hover:scale-105 transition-all duration-200 w-fit mx-auto h-12 px-8 rounded-md flex gap-4 items-center'
                            >
                                <span>
                                    {loading ? 'Sending...' : 'Send Now'}
                                </span>

                                <FaChevronRight />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CallBack
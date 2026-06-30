'use client'

import React, { useState } from 'react'
import BreadCrumb from '../BreadCrumb'
import ProductGallery from './ProductGallery'
import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/navigation'

const ProBanner = ({ data }: any) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        quantity: '',
        length: '',
        width: '',
        depth: '',
        unit: '',
        color: '',
        stock: '',
        message: '',
    })

    const [file, setFile] = useState<File | null>(null)

    const [loading, setLoading] = useState(false)

    const { addItem } = useCart()
    const router = useRouter()

    const pricePerBox = 0.85
    const minOrderQty = 100

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >
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

            const submitData = new FormData()

            submitData.append('productName', data?.name || '')

            Object.entries(formData).forEach(([key, value]) => {
                submitData.append(key, value)
            })

            if (file) {
                submitData.append('file', file)
            }

            const res = await fetch('/api/product-quote', {
                method: 'POST',
                body: submitData,
            })

            const response = await res.json()

            if (response.success) {

                alert('Quote request submitted successfully')

                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    quantity: '',
                    length: '',
                    width: '',
                    depth: '',
                    unit: '',
                    color: '',
                    stock: '',
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

    const handleAddToCart = () => {
        const qty = parseInt(formData.quantity) || 100
        const id = `${data?.slug}-${formData.color || 'default'}-${formData.stock || 'default'}`

        addItem({
            id,
            name: data?.name || 'Custom Box',
            slug: data?.slug || '',
            image: data?.images?.[0]?.image || '',
            quantity: qty,
            pricePerBox,
            color: formData.color || '1-Color',
            stock: formData.stock || '12 PT',
            dimensions: {
                length: parseFloat(formData.length) || 0,
                width: parseFloat(formData.width) || 0,
                depth: parseFloat(formData.depth) || 0,
                unit: formData.unit || 'Inches',
            },
        })

        router.push('/checkout')
    }

    return (
        <section className='py-10'>
            <div className='container mx-auto grid md:grid-cols-2 grid-cols-1 gap-10'>

                <ProductGallery images={data?.images || []} />

                <div className='flex flex-col justify-between'>
                    <div>
                        <BreadCrumb title={data?.name} />

                        <h1 className='text-3xl lg:text-4xl font-semibold my-3 text-primary'>
                            {data?.name}
                        </h1>

                        <p className='text-base'>
                            {data?.shortDescription || 'Custom packaging solution'}
                        </p>
                    </div>

                    <div className='mt-5'>

                        <div className='border border-gray-200 rounded-lg p-5 mb-6 bg-gray-50'>
                            <div className='space-y-3 mb-5'>
                                <div className='flex items-center justify-between'>
                                    <span className='text-sm text-gray-600'>Starting Price:</span>
                                    <span className='text-2xl font-bold text-primary'>${pricePerBox.toFixed(2)}</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='text-sm text-gray-600'>Availability:</span>
                                    <span className='flex items-center gap-1.5 text-sm font-medium text-green-600'>
                                        <span className='w-2 h-2 rounded-full bg-green-500 inline-block'></span>
                                        In Stock
                                    </span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='text-sm text-gray-600'>Minimum Order Quantity:</span>
                                    <span className='text-sm font-semibold text-gray-800'>{minOrderQty.toLocaleString()} units</span>
                                </div>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className='text-base font-normal uppercase text-white bg-primary hover:scale-105 transition-all duration-200 h-12 px-10 rounded-md w-full'
                            >
                                Add to Cart
                            </button>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className='grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-4'
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

                            <div className='md:col-span-2 flex flex-row gap-6 md:gap-4'>

                                <select
                                    name='unit'
                                    value={formData.unit}
                                    onChange={handleChange}
                                    className="h-10 w-1/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 outline-none"
                                >
                                    <option value=''>Select Unit</option>
                                    <option value='Inches'>Inches</option>
                                    <option value='CM'>CM</option>
                                    <option value='MM'>MM</option>
                                </select>

                                <select
                                    name='color'
                                    value={formData.color}
                                    onChange={handleChange}
                                    className="h-10 w-1/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 outline-none"
                                >
                                    <option value=''>Color</option>
                                    <option value='1-Color'>1-Color</option>
                                    <option value='2-Color'>2-Color</option>
                                    <option value='3-Color'>3-Color</option>
                                    <option value='4-Color'>4-Color</option>
                                    <option value='4/1-Color'>4/1-Color</option>
                                    <option value='4/2-Color'>4/2-Color</option>
                                    <option value='4/3-Color'>4/3-Color</option>
                                    <option value='4/4-Color'>4/4-Color</option>
                                </select>

                                <select
                                    name='stock'
                                    value={formData.stock}
                                    onChange={handleChange}
                                    className="h-10 w-1/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 outline-none"
                                >
                                    <option value=''>Select Stock</option>
                                    <option value='12 PT'>12 PT</option>
                                    <option value='14 PT'>14 PT</option>
                                    <option value='16 PT'>16 PT</option>
                                    <option value='18 PT'>18 PT</option>
                                    <option value='20 PT'>20 PT</option>
                                    <option value='Kraft Stock'>Kraft Stock</option>
                                    <option value='Corrugated Stock'>Corrugated Stock</option>
                                    <option value='Rigid Stock'>Rigid Stock</option>
                                </select>
                            </div>

                            <div className='md:col-span-2'>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Write your message'
                                    rows={6}
                                    className='h-10 w-full mx-auto border-b border-black/50 px-2 py-1 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none shadow-none'
                                />
                            </div>

                            <div>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 outline-none"
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

export default ProBanner
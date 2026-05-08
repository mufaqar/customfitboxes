"use client"
import { useState } from "react"

const RequestQuote = () => {

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setLoading(true)

        const formData = new FormData(e.currentTarget)

        try {
            const res = await fetch("/api/request-quote", {
                method: "POST",
                body: formData,
            })

            const data = await res.json()

            if (data.success) {
                alert("Quote request submitted successfully")
                e.currentTarget.reset()
            } else {
                alert(data.message)
            }
        } catch (error) {
            console.log(error)
            alert("Something went wrong")
        } finally {
            setLoading(false)
        }
    }
    return (
        <section className='py-16 bg-background'>
            <div className='container mx-auto  '>
                <h2 className='text-3xl sm:text-2xl md:text-4xl xl:text-5xl text-primary text-center font-semibold leading-tight'>
                    Request a Quote
                </h2>
                <p className='text-base leading-5 text-center mt-1 max-w-[870px] mx-auto'>
                    Get a custom packaging quote tailored to your needs. Share your specifications, and our experts will provide
                    a fast, competitive estimate. Let’s create something amazing!
                </p>
            </div>
            <div className='container mx-auto   mt-10'>
                <div className='border border-black/50 rounded-xl px-4 sm:px-8 lg:px-10 pt-6 sm:pt-8 pb-16 relative w-full lg:w-11/12 mx-auto'>
                    <form onSubmit={handleSubmit}
                        className='grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-4 sm:p-3'>
                        <div className='flex flex-row gap-6 md:gap-4'>
                            <input
                                type='number'
                                name='length'
                                placeholder='Length'
                                className='h-10 w-2/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title placeholder:text-title outline-none' />
                            <input
                                type='number'
                                name='width'
                                placeholder='Width'
                                className='h-10 w-1/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title placeholder:text-title outline-none' />
                        </div>
                        <div className='flex flex-row gap-6 md:gap-4'>
                            <input
                                type='number'
                                name='depth'
                                placeholder='Depth'
                                className='h-10 w-2/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title placeholder:text-title outline-none' />
                            <select
                                name='unit'
                                className="h-10 w-1/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title placeholder:text-title outline-none">
                                <option>Select Unit</option>
                                <option>Inches</option>
                                <option>CM</option>
                                <option>MM</option>
                            </select>
                        </div>
                        <div>
                            <select required
                                name='product'
                                className="h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title placeholder:text-title outline-none">
                                <option>Scissors Boxes</option>
                                <option> 5ml Bottle Boxes</option>
                                <option>Swirl Jewelry Boxes</option> 
                                <option>Pet Food Serving Boxes</option>
                            </select>
                        </div>
                        <div>
                            <select
                                name='color'
                                className="h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title placeholder:text-title outline-none">
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
                        <div>
                            <input
                                type='number'
                                name='quantity'
                                placeholder='Quantity'
                                className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title placeholder:text-title outline-none' />
                        </div>
                        <div>
                            <input
                                type='text'
                                name='name'
                                placeholder='Enter your name'
                                className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title placeholder:text-title outline-none' />
                        </div>
                        <div>
                            <input
                                type='tel'
                                name='phone'
                                placeholder='+1 123-123-1234'
                                className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title placeholder:text-title outline-none' />
                        </div>
                        <div>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title placeholder:text-title outline-none' />
                        </div>
                        <div>
                            <input type="file"
                                className="h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title placeholder:text-title outline-none" />
                        </div>
                        <div>
                            <textarea name="message"
                                placeholder='Write your message'
                                className='h-10 w-full mx-auto border-b border-zinc-800 py-1 bg-transparent text-sm sm:text-base text-title placeholder:text-title outline-none shadow-none'></textarea>
                        </div>
                        <div className='absolute -bottom-4 flex justify-center left-0 w-full z-10'>
                            <button type='submit' className='text-base font-normal uppercase text-white bg-primary hover:scale-105 transition-all duration-200 h-12 px-10 rounded-md'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default RequestQuote
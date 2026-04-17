'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { FaPlus, FaMinus } from 'react-icons/fa6'

const faqsData = [
    {
        question: 'What materials are used in your packaging?',
        answer:
            'We use premium quality cardboard, kraft, and corrugated materials with eco-friendly inks.'
    },
    {
        question: 'Can I customize my box design?',
        answer:
            'Yes, we offer full customization including size, shape, printing, and finishing options.'
    },
    {
        question: 'What is your minimum order quantity?',
        answer:
            'Our MOQ is flexible depending on the product type and customization requirements.'
    },
    {
        question: 'How long does production take?',
        answer:
            'Production usually takes 7–12 working days after design approval.'
    }
]

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null) // 👈 all closed by default

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className='py-16'>
            <div className='container mx-auto md:px-0 px-4'>
                <h2 className='text-3xl sm:text-2xl md:text-4xl xl:text-5xl text-primary text-center font-semibold leading-tight'>
                    Frequently Asked Question
                </h2>
                <p className='text-base leading-5 text-center mt-1'>
                    Have questions about our packaging solutions? Find answers to the most common queries about our custom boxes, materials, printing options, and more.
                    Still If you have any questions, let us know!
                </p>
            </div>
            <div className="container mx-auto px-4 md:px-0 mt-10 flex md:flex-row flex-col gap-10">
                <div className="md:w-1/2 w-full">
                    {faqsData.map((faq, index) => (
                        <div
                            key={index}
                            className={`overflow-hidden border-b border-black shadow-md`}>
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between px-4 py-5 text-left">
                                <span className="text-base font-normal text-title">
                                    {faq.question}
                                </span>
                                <span className="">
                                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </button>
                            {/* Answer */}
                            <div
                                className={`px-4 transition-all duration-300 ease-in-out ${activeIndex === index
                                    ? 'max-h pb-4 opacity-100'
                                    : 'max-h-0 opacity-0 overflow-hidden'
                                    }`}>
                                <p className="text-sm sm:text-base pb-4 pt-2">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="md:w-1/2 w-full">
                    <Image src="/images/faq.png" alt='faq' width={616} height={601} />
                    <form className='border border-primary rounded-md flex items-center gap-3 p-2 mt-5'>
                        <input
                            type='text'
                            name='askQuestion'
                            placeholder='What else would you like to know?'
                            className='bg-transparent p-0 outline-none border-none w-full text-sm sm:text-base px-3' />
                        <button type='submit' className='bg-primary text-white w-24 py-2 sm:text-base text-sm rounded-md'>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Faqs
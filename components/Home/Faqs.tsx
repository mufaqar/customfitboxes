'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Faqs = ({ faqs }: { faqs?: any[] | null }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [question, setQuestion] = useState("")
  const [loading, setLoading] = useState(false)
  const faqsData = faqs && faqs.length > 0 ? faqs : [
    {
      question: 'What materials are used in your packaging?',
      answer: 'We use premium quality cardboard, kraft, and corrugated materials with eco-friendly inks.'
    },
    {
      question: 'Can I customize my box design?',
      answer: 'Yes, we offer full customization including size, shape, printing, and finishing options.'
    },
    {
      question: 'What is your minimum order quantity?',
      answer: 'Our MOQ is flexible depending on the product type and customization requirements.'
    },
    {
      question: 'How long does production take?',
      answer: 'Production usually takes 7–12 working days after design approval.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!question.trim()) {
      alert("Please enter your question")
      return
    }

    setLoading(true)

    try {
      const res = await fetch("/api/ask-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      })

      const data = await res.json()

      if (data.success) {
        alert("Question sent successfully")
        setQuestion("")
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
    <section className='py-10'>
      <div className='container mx-auto'>
        <h2 className='text-3xl sm:text-2xl md:text-4xl xl:text-5xl text-primary text-center font-semibold leading-tight'>
          Frequently Asked Question
        </h2>
        <p className='text-base leading-5 text-center mt-1'>
          Have questions about our packaging solutions? Find answers to the most common queries about our custom boxes, materials, printing options, and more.
        </p>
      </div>
      <div className="container mx-auto px-4 md:px-0 mt-10 flex md:flex-row flex-col gap-10">
        <div className="md:w-1/2 w-full">
          {faqsData.slice(0, 10).map((faq: any, index: number) => (
            <div key={index} className={`overflow-hidden border-b border-black/50 shadow-md`}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-4 py-5 text-left"
              >
                <span className="text-base font-normal text-title">{faq.question}</span>
                <span>{activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}</span>
              </button>
              <div className={`px-4 transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h pb-4 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-sm sm:text-base pb-4 pt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 w-full">
          <Image src="/images/faq.png" alt='faq' width={616} height={601} />
          <form onSubmit={handleSubmit} className='border border-primary rounded-md flex items-center gap-3 p-2 mt-5'>
            <input
              type='text'
              name='askQuestion'
              placeholder='What else would you like to know?'
              className='bg-transparent p-0 outline-none border-none w-full text-sm sm:text-base px-3' />
            <button type='submit' className='bg-primary text-white w-24 py-2 sm:text-base text-sm rounded-md'>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Faqs

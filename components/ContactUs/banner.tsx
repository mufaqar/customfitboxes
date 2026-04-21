"use client"

import Image from 'next/image'
import React, { useState } from 'react'

export default function  Banner() {
    const [answer, setAnswer] = useState('')
  return (
    <section>
               <div className='pb-8 pt-5 md:py-10 lg:py-14 bg-background'>
                   <div className='container mx-auto md:px-0 px-4'>
                       <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
   
                           {/* Left - Image */}
                           <div className='flex items-center justify-center'>
                               <Image
                                   src="/images/contactImg.webp"
                                   alt='contactImg'
                                   width={500}
                                   height={500}
                                   className='' />
                           </div>
   
                           {/* Right - Form */}
                           <div>
                               <p className='text-lg sm:text-xl md:text-2xl xl:text-3xl'>Feel Free to Drop up a Line Below</p>
                               <h1 className='text-3xl sm:text-2xl md:text-4xl xl:text-5xl text-primary font-semibold py-4'>
                                   GET IN TOUCH
                               </h1>
   
                               {/* First Name & Last Name */}
                               <div className='flex flex-row gap-6 py-4'>
                                   <input
                                       type='text'
                                       name='firstName'
                                       placeholder='First Name'
                                       className='h-10 w-full border-b border-[#a1a1aa] bg-transparent text-sm text-title placeholder:text-[#a1a1aa] outline-none' />
                                   <input
                                       type='text'
                                       name='lastName'
                                       placeholder='Last Name'
                                       className='h-10 w-full border-b border-[#a1a1aa] bg-transparent text-sm text-title placeholder:text-[#a1a1aa] outline-none' />
                               </div>
   
                               {/* Email & Phone */}
                               <div className='flex flex-row gap-6 py-4'>
                                   <input
                                       type='email'
                                       name='email'
                                       placeholder='Email'
                                       className='h-10 w-full border-b border-[#a1a1aa] bg-transparent text-sm text-title placeholder:text-[#a1a1aa] outline-none' />
                                   <input
                                       type='tel'
                                       name='phone'
                                       placeholder='Phone Number'
                                       className='h-10 w-full border-b border-[#a1a1aa] bg-transparent text-sm text-title placeholder:text-[#a1a1aa] outline-none' />
                               </div>
   
                               {/* Message */}
                               <div className='py-4'>
                                   <input
                                       type='text'
                                       name='message'
                                       placeholder='Write your message'
                                       className='h-10 w-full border-b border-[#a1a1aa] bg-transparent text-sm text-title placeholder:text-[#a1a1aa] outline-none' />
                               </div>
   
                               {/* Captcha + Button */}
                               <div className='flex flex-row items-center gap-4 mt-4'>
                                   <div className='flex items-center gap-2 text-md text-title font-medium whitespace-nowrap'>
                                       <span>2 + 10 =</span>
                                   </div>
                                   <input
                                       type='text'
                                       value={answer}
                                       onChange={(e) => setAnswer(e.target.value)}
                                       placeholder='Answer'
                                       className='h-10 w-32 border-b border-[#a1a1aa] bg-transparent text-sm text-title placeholder:text-[#a1a1aa] outline-none' />
                                   <button
                                       type='submit'
                                       className='flex items-center gap-2 bg-primary text-white text-sm font-normal uppercase px-6 h-11 rounded-md whitespace-nowrap cursor-pointer transition-all duration-200 hover:opacity-90'>
                                       Get Your Quote
                                   </button>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
  )
}


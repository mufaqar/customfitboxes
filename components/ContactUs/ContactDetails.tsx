import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaShareAlt } from 'react-icons/fa'

const cards = [
    {
        icon: <FaPhone className='text-primary text-2xl' />,
        title: 'Our Contact Details',
        content: (
            <a href='tel:+13322529988' className='text-primary text-sm hover:underline'>
                +1(332) 252 9988
            </a>
        ),
    },
    {
        icon: <FaEnvelope className='text-primary text-2xl' />,
        title: 'Our Email Address',
        content: (
            <a href='mailto:sales@customfitboxes.com' className='text-primary text-sm hover:underline'>
                sales@customfitboxes.com
            </a>
        ),
    },
    {
        icon: <FaMapMarkerAlt className='text-primary text-2xl' />,
        title: 'Our Office Address',
        content: (
            <p className=' text-sm text-center'>
                401 North Michigan Avenue, Suite 1200, Chicago, Illinois, 60611
            </p>
        ),
    },
    {
        icon: <FaShareAlt  className='text-primary text-2xl' />,
        title: 'Our Social Media',
        content: (
            <div className='flex gap-2 text-sm text-primary'>
                <a href='https://www.facebook.com/customfitboxes/' className='hover:underline'>Fb ,</a>
                <a href='https://www.instagram.com/customfitboxes_usa/' className='hover:underline'>Insta ,</a>
                <a href='https://www.linkedin.com/company/custom-fit-boxes/' className='hover:underline'>LinkedIn</a>
            </div>
        ),
    },
]

export default function ContactDetails() {
    return (
        <section className='container mx-auto px-4 md:px-0 py-10'>

            {/* Heading */}
            <div className='mb-8'>
                <p className='text-2xl sm:text-3xl '>
                    Our Contact Details
                </p>
                <h2 className='text-3xl sm:text-4xl font-semibold text-primary mt-2'>CONTACT US</h2>
            </div>

            {/* Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-4 mt-15'>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className='relative border-2 border-primary rounded-xl px-6 p-6 flex flex-col items-center text-center shadow-sm'>

                        {/* Icon Circle - overlapping top border */}
                        <div className='absolute -top-8 left-1/2 -translate-x-1/2 w-17 h-17  rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm'>
                            {card.icon}
                        </div>

                        <p className=' font-medium mt-6 mb-1'>{card.title}</p>
                        {card.content}
                    </div>
                ))}
            </div>
        </section>
    )
}
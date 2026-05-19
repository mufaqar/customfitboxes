'use client'

import { useRef } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'

const TestimonialSlider = ({ testimonials }: { testimonials: any[] }) => {
  const sliderRef = useRef<any>(null)

  const goNext = () => sliderRef.current?.slickNext()
  const goPrev = () => sliderRef.current?.slickPrev()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  }

  return (
    <section className='py-10'>
      <div className='container mx-auto'>
        <h2 className='text-3xl sm:text-2xl md:text-4xl xl:text-5xl text-primary text-center font-semibold leading-tight'>
          Testimonials
        </h2>
        <h3 className='text-xl sm:text-2xl leading-5 font-normal text-primary text-center mt-4'>
          See Why Customers Love Custom Fit Boxes
        </h3>
        <p className='text-base leading-5 text-center mt-3'>
          We're dedicated to creating remarkable and distinctive custom packaging boxes that make a great first impression.
        </p>
      </div>
      <div className='container mx-auto mt-10'>
        <div>
          <Slider ref={sliderRef} {...settings}>
            {testimonials && testimonials.length > 0 ? (
              testimonials.map((item: any, idx: number) => (
                <div key={item._id || idx} className='px-2 sm:px-3 pt-10'>
                  <div className='rounded-xl px-5 py-5 relative h-72 bg-[#f5f5f5]'>
                    {item.userImage ? (
                      <Image src={item.userImage} alt={item.reviewerName || 'Reviewer'} width={50} height={50} className='h-20 w-20 rounded-full object-cover absolute -top-8 transform -translate-x-1/2 left-1/2' />
                    ) : (
                      <Image src="/images/author.svg" alt='author' width={50} height={50} className='h-20 w-20 rounded-full object-cover absolute -top-8 transform -translate-x-1/2 left-1/2' />
                    )}
                    <div className='pt-14 flex flex-col gap-10'>
                      <div>
                        <h3 className='text-xs text-center font-semibold mb-2'>{item.reviewerName}</h3>
                        <p className='text-xs text-center'>{item.review}</p>
                      </div>
                      <h3 className='text-lg font-semibold text-primary text-center'>{item.reviewerName}</h3>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              [1, 2, 3].map((_, idx) => (
                <div key={idx} className='px-2 sm:px-3 pt-10'>
                  <div className='rounded-xl px-5 py-5 relative h-72 bg-[#f5f5f5]'>
                    <Image src="/images/author.svg" alt='author' width={50} height={50} className='h-20 w-20 rounded-full object-cover absolute -top-8 transform -translate-x-1/2 left-1/2' />
                    <div className='pt-14 flex flex-col gap-10'>
                      <div>
                        <h3 className='text-xs text-center font-semibold mb-2'>Customer</h3>
                        <p className='text-xs text-center'>Great service and quality products!</p>
                      </div>
                      <h3 className='text-lg font-semibold text-primary text-center'>Customer</h3>
                    </div>
                  </div>
                </div>
              ))
            )}
          </Slider>
          <div className='flex items-center justify-center gap-10 mt-10'>
            <button onClick={goPrev} className="text-primary text-2xl flex items-center justify-center scale-100 hover:scale-110 transition-all duration-100">
              <FaChevronLeft />
            </button>
            <button onClick={goNext} className="text-primary text-2xl flex items-center justify-center scale-100 hover:scale-110 transition-all duration-100">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider

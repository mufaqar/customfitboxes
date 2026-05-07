'use client'

import { useRef } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import CategoryBox from '../Category/CategoryBox'

const IndustrySlider = () => {
    const sliderRef = useRef<any>(null)

    const goNext = () => {
        sliderRef.current?.slickNext()
    }

    const goPrev = () => {
        sliderRef.current?.slickPrev()
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false, // IMPORTANT: disable default arrows
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } }
        ]
    }
    return (
        <div className='container mx-auto mt-14'>
            <div className=''>
                <Slider ref={sliderRef} {...settings}>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <CategoryBox key={item} data={item} />
                    ))}
                </Slider>
                {/* Custom Buttons */}
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
    )
}

export default IndustrySlider
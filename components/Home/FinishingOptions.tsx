'use client'
import Image from 'next/image'
import { useRef } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const FinishingOptions = () => {
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
        autoplay: true,
        arrows: false, // IMPORTANT: disable default arrows
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } }
        ]
    }
    return (
        <section className='pt-16 pb-10'>
            <div className='container mx-auto  '>
                <h2 className='text-3xl sm:text-2xl md:text-4xl xl:text-5xl text-primary text-center font-semibold leading-tight'>
                    Luxury Finishing Options
                </h2>
                <p className='text-base leading-5 text-center mt-1'>
                    Elevate your packaging with stunning premium finishes that enhance appeal and sophistication. From gold and silver foils to holographic effects,<br className='hidden sm:block' />
                    our high-quality finishing options ensure a luxurious, eye-catching presentation that leaves a lasting impression.
                </p>
            </div>
            <div className='container mx-auto   mt-10 relative'>
                <Slider ref={sliderRef} {...settings}>
                    {PremiumFinishesData.map((item, idx) => (
                        <div key={idx} className='px-3'>
                            <Image src={item?.img} alt='feature' width={305} height={320} className='rounded-md' />
                            <h3 className='text-lg font-medium mt-2'>
                                {item?.name}
                            </h3>
                        </div>
                    ))}
                </Slider>
                {/* Custom Buttons */}
                <div className='flex items-center justify-center gap-10 '>
                    <button onClick={goPrev} className="text-white text-2xl flex items-center justify-center w-[42px] h-[43px] absolute top-1/2 -translate-y-1/2 left-6 bg-black/50 rounded-full scale-100 hover:scale-110 transition-all duration-100">
                        <FaChevronLeft />
                    </button>

                    <button onClick={goNext} className="text-white text-2xl flex items-center justify-center w-[42px] h-[43px] absolute top-1/2 -translate-y-1/2 right-6 bg-black/50 rounded-full scale-100 hover:scale-110 transition-all duration-100">
                        <FaChevronRight />
                    </button>
                </div>

            </div>
        </section >
    )
}

export default FinishingOptions

const PremiumFinishesData = [
    { name: "Gold Foil", img: "/images/p1.jpg" },
    { name: "Silver Foil", img: "/images/p2.jpg" },
    { name: "Holographic Foil", img: "/images/p3.jpg" },
    { name: "Rose Gold Foil", img: "/images/p4.jpg" },
    { name: "Copper Foil", img: "/images/p5.jpg" },
    { name: "Soft Touch", img: "/images/p6.jpg" },
    { name: "Matt Lamination", img: "/images/p7.jpg" },
    { name: "Gloss Lamination", img: "/images/p8.jpg" },
    { name: "Aqueous Coating", img: "/images/p9.jpg" },
    { name: "Spot UV", img: "/images/p10.jpg" },
    { name: "Embosing", img: "/images/p11.jpg" },
    { name: "Debosing", img: "/images/p12.jpg" },
    { name: "Varnish", img: "/images/p13.jpg" },
];
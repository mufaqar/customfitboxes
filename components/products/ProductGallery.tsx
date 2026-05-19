"use client";

import Slider from "react-slick";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function ProductGallery({ images }: { images: any[] }) {
  const sliderRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => sliderRef.current?.slickPrev();
  const goNext = () => sliderRef.current?.slickNext();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    beforeChange: (_: number, next: number) => setActiveIndex(next),
  };

  if (!images || images.length === 0) {
    return (
      <div className="flex gap-4 h-full">
        <div className="flex gap-3">
          {[1, 2, 3, 4].map((_, index) => (
            <Image key={index} src="/images/gallery1.png" alt="gallery" width={111} height={123} className="w-full h-full object-cover rounded-md" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4 h-full">
      <div className="md:w-1/5 flex flex-col gap-3">
        {images.map((img: any, index: number) => (
          <Image
            key={index}
            src={img.image}
            alt={img.alt || "thumb"}
            width={111}
            height={123}
            onClick={() => sliderRef.current.slickGoTo(index)}
            className={`w-full h-full object-cover rounded-md cursor-pointer border-2 transition ${activeIndex === index ? "border-primary" : "border-transparent"}`}
          />
        ))}
      </div>
      <div className="relative md:w-4/5 z-1">
        <Slider ref={sliderRef} {...settings}>
          {images.map((img: any, index: number) => (
            <div key={index} className="h-full">
              <Image
                src={img.image}
                alt={img.alt || "feature"}
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-lg bg-[#f5f5f5]"
              />
            </div>
          ))}
        </Slider>
        <button onClick={goPrev} className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/50 text-white w-[42px] h-[43px] rounded-full flex items-center justify-center hover:scale-110 transition">
          <FaChevronLeft />
        </button>
        <button onClick={goNext} className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/50 text-white w-[42px] h-[43px] rounded-full flex items-center justify-center hover:scale-110 transition">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

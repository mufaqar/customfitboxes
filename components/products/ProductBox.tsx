import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductBox = ({ data }: any) => {
  return (
    <div className='cursor-pointer rounded-3xl overflow-hidden bg-[#f5f5f5] hover:drop-shadow-md duration-300'>
      <div className='rounded-md flex items-center justify-center h-92 lg:h-96'>
        <Image src="/images/essential-oil.jpg" alt='feature' width={310} height={384} className='w-full h-full object-cover object-center' />
      </div>
      <div className='px-6 py-8 flex flex-col gap-y-4'>
        <Link href="#" className='md:text-base font-semibold text-center text-title flex w-full justify-center items-center'>
          Essential Oil Boxes
        </Link>
      </div>
    </div>
  )
}

export default ProductBox
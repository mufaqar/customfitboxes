import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryBox = ({ data }: any) => {
  return (
    <div className='px-2'>
      <div className='cursor-pointer rounded-3xl overflow-hidden bg-[#f5f5f5]'>
        <div className='p-3 h-72 sm:h-60 md:h-80 rounded-md flex items-center justify-center bg-background'>
          <Image src="/images/candlebox.png" alt='feature' width={310} height={232} className='w-full' />
        </div>
        <div className='px-6 py-8 flex flex-col gap-y-4'>
          <Link href="#" className='text-lg md:text-base lg:text-lg font-semibold text-center text-primary flex w-full justify-center items-center'>
            Candle Boxes
          </Link>
          <p className='text-sm text-center'>
            Manufactured using premium materials, printed with long-lasting inks, customized in any size and...
          </p>
        </div>
      </div>
    </div>
  )
}

export default CategoryBox
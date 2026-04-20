import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  data: any;
  view: "grid" | "list";
}

const ProductBox = ({ data, view }: Props) => {
  if (view === "list") {
    return (
      <div className='flex md:flex-row flex-col items-center rounded-3xl overflow-hidden bg-[#f5f5f5] hover:drop-shadow-md duration-300'>
        <div className='md:w-1/5 w-full rounded-md h-60 flex items-center justify-center bg-background overflow-hidden'>
          <Image src="/images/essential-oil.jpg" alt='feature' width={310} height={384} className='w-full h-full object-cover object-center' />
        </div>
        <div className='md:w-4/5 w-full px-6 py-8 flex flex-col gap-y-4'>
          <Link href="/product/corrugated-mailer-boxes" className='md:text-base font-semibold text-title'>
            Corrugated Mailer Boxes
          </Link>
          <p className='text-sm text-desc'>
            Custom corrugated mailer boxes are lightweight yet strong shipping boxes, equipped with fluted cardboard that provides additional protection. They are entirely customizable with your logo, colors, and design, so you can use them to ship products through the mail smoothly, start subscriptions, brand opportunities when they reach the customer, and so on.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='rounded-3xl overflow-hidden bg-[#f5f5f5] hover:drop-shadow-md duration-300'>
      <div className='rounded-md flex items-center justify-center h-92 lg:h-96'>
        <Image src="/images/essential-oil.jpg" alt='feature' width={310} height={384} className='w-full h-full object-cover object-center' />
      </div>
      <div className='px-6 py-8 flex flex-col gap-y-4'>
        <Link href="/product/corrugated-mailer-boxes" className='md:text-base font-semibold text-center text-title flex w-full justify-center items-center'>
          Corrugated Mailer Boxes
        </Link>
      </div>
    </div>
  );
};

export default ProductBox;
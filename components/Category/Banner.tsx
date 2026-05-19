import Image from 'next/image'
import Link from 'next/link'
import BreadCrumb from '../BreadCrumb'

const Banner = ({ data }: any) => {
  return (
    <section className='py-16 bg-background'>
      <div className='container mx-auto flex md:flex-row flex-col gap-10'>
        <div className='md:w-1/2 w-full'>
          <BreadCrumb title={data?.title} />
          <h1 className='md:text-5xl text-4xl leading-tight font-semibold mt-8'>
            {data?.title}
          </h1>
          <p className='text-base mb-4 mt-8'>
            {data?.description || data?.productInfo?.productDescription || 'Get superior protection for shipping, retail, and storage packaging with durable and versatile custom boxes.'}
          </p>
          <div className='flex md:flex-row flex-col gap-5 items-center mt-10'>
            <Link href="#" className='text-base font-semibold text-white hover:text-primary border border-white hover:border-primary bg-primary hover:bg-transparent rounded-md md:w-60 w-full whitespace-nowrap h-12 duration-300 inline-flex items-center justify-center gap-2.5'>
              Request a Quote
            </Link>
            <Link href="#" className='text-base font-semibold text-white hover:text-primary border border-white hover:border-primary bg-primary hover:bg-transparent rounded-md md:w-60 w-full whitespace-nowrap h-12 duration-300 inline-flex items-center justify-center gap-2.5'>
              Choose Packaging Style
            </Link>
          </div>
        </div>
        <div className='md:w-1/2 w-full'>
          {data?.imageWithAlt?.image ? (
            <Image src={data.imageWithAlt.image} alt={data.imageWithAlt.alt || data.title} width={450} height={450} className='w-full h-full' />
          ) : (
            <Image src="/images/corrugfeat.png" alt='corrugfeat' width={450} height={450} className='w-full h-full' />
          )}
        </div>
      </div>
    </section>
  )
}

export default Banner

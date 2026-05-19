import Image from 'next/image'
import Link from 'next/link'

const CategoryBox = ({ data }: any) => {
  const name = data?.name || data?.title || 'Category';
  const slug = data?.slug || '#';
  const mainImage = data?.mainImage || data?.image || '';
  const description = data?.shortDescription || data?.description || '';

  return (
    <div className='px-2'>
      <div className='cursor-pointer rounded-3xl overflow-hidden bg-[#f5f5f5]'>
        <div className='p-3 h-72 sm:h-60 md:h-80 rounded-md flex items-center justify-center bg-background'>
          {mainImage ? (
            <Image src={mainImage} alt={name} width={310} height={232} className='w-full' />
          ) : (
            <Image src="/images/candlebox.png" alt={name} width={310} height={232} className='w-full' />
          )}
        </div>
        <div className='px-6 py-8 flex flex-col gap-y-4'>
          <Link href={`/category/${slug}`} className='text-lg md:text-base lg:text-lg font-semibold text-center text-primary flex w-full justify-center items-center'>
            {name}
          </Link>
          <p className='text-sm text-center'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default CategoryBox

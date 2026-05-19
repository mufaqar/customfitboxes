import Image from 'next/image'
import Link from 'next/link'

const PostBanner = ({ data }: any) => {
  return (
    <section className='py-16 bg-background'>
      <div className='container mx-auto flex flex-col md:flex-row items-center gap-2 md:gap-8'>
        <div className='flex-1'>
          <ul className='bg-primary p-2 text-white rounded-md text-[10px] flex gap-3 items-center w-fit'>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>/</li>
            <li>
              <span>{data?.title}</span>
            </li>
          </ul>
          <h1 className='text-2xl sm:text-3xl xl:text-4xl font-semibold text-title mt-4'>
            {data?.title}
          </h1>
          <div className='flex items-center gap-x-3 my-5'>
            {data?.author?.image && (
              <Image src={data.author.image} alt={data.author.name || 'Author'} width={32} height={32} className='h-8 w-8 rounded-full object-cover' />
            )}
            <p className='text-[10px] sm:text-xs'>
              {data?.author?.name || 'Anonymous'}
              {data?.publishedAt && <><br />Last Updated: {new Date(data.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</>}
            </p>
          </div>
        </div>
        <div className='flex-1 xl:max-w-[550px] w-full relative'>
          {data?.mainImage && (
            <Image src={data.mainImage} alt={data?.imageAlt || data?.title} width={530} height={350} className='w-full md:max-w-[530px] max-h-[350px] z-[2] relative h-full rounded-md mt-5' />
          )}
          <Image src="/images/singleblog-shape.svg" alt='shape' width={436} height={332} className='absolute -bottom-24 z-[1] -left-32' />
        </div>
      </div>
    </section>
  )
}

export default PostBanner

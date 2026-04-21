import Image from 'next/image'
import Link from 'next/link'

const PostBox = ({ data }: any) => {
    return (
        <div className='bg-[#f5f5f5] h-full flex flex-col rounded'>
            <Image src={`${data.img}`}
                alt="feature"
                width={385}
                height={320}
                className='object-cover object-center w-full h-full rounded-t' />
            <div className='pt-3 md:pb-8 px-2 sm:px-4'>
                <Link href={`/blog/${data?.slug}`} className='text-sm sm:text-lg xl:text-xl font-semibold text-primary text-center md:text-left  mt-3'>
                    {data?.title}
                </Link>
                <div className='flex items-center gap-2 my-5'>
                    <Image src="/images/author.svg" alt='author' width={32} height={32} className='h-8 w-8 rounded-full object-cover' />
                    <p className='text-[10px] sm:text-xs'>
                        Amanda Jane Rivera, Last Updated: May 07, 2024
                    </p>
                </div>
                <p className='text-sm xl:text-base line-clamp-4'>
                    {data?.excerpt}
                </p>
            </div>
        </div>
    )
}

export default PostBox
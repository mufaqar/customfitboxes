import Image from 'next/image'
import Link from 'next/link'
import FollowUs from './FollowUs'

const SideBar = ({ posts, cat }: any) => {
    return (
        <div className='md:w-1/3 w-full flex flex-col gap-8'>
            <div>
                <h3 className='md:text-2xl text-xl font-semibold text-primary'>
                    Most Popular Posts:
                </h3>
                <div className='w-full p-3 bg-background rounded-xl mt-3 flex flex-col gap-4'>
                    {posts.slice(0, 3).map((post: any, idx: number) => (
                        <div key={idx} className='flex items-center gap-5 bg-white rounded-xl p-4'>
                            <div className='md:w-1/3 w-full h-20 rounded-lg overflow-hidden'>
                                <Image src={`${post?.img}`} alt='feature' width={99} height={80} className='h-full w-full object-cover object-center' />
                            </div>
                            <Link href={`/blog/${post?.slug}`} className='md:w-2/3 w-full text-sm md:text-base font-semibold text-primary flex'>
                                {post?.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className='md:text-2xl text-xl font-semibold text-primary'>
                    Featured Categories:
                </h3>
                <div className='w-full p-3 bg-background rounded-xl mt-3 flex flex-col gap-4'>
                    {cat.map((item: any, idx: number) => (
                        <div key={idx} className='flex items-center gap-x-5 justify-between bg-white rounded-xl px-6 py-5'>
                            <Link href={`/blog/${item?.slug}`} className='md:w-2/3 w-full text-sm md:text-base font-semibold text-primary flex'>
                                {item?.name}
                            </Link>
                            <p className='text-sm md:text-base font-semibold text-primary flex'>
                                {item.count}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <FollowUs />
        </div>
    )
}

export default SideBar
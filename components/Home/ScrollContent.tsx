import Image from 'next/image'
import { PortableText } from '@portabletext/react'

const ScrollContent = ({ content }: { content?: any }) => {
  return (
    <section className='py-16'>
      <div className='container mx-auto flex md:flex-row flex-col-reverse gap-10 items-center'>
        <div className='md:w-2/3 w-full'>
          <div className='scrollDiv overflow-y-auto pl-3 md:pl-5 h-[480px]'>
            <div className='scrollContent'>
              {content?.contentDetails ? (
                <PortableText value={content.contentDetails} />
              ) : (
                <>
                  <h2>Create Custom Boxes That Elevate Your Brand</h2>
                  <p>
                    Looking for the perfect packaging to showcase your brand? At Custom Fit Boxes, we provide tailor-made packaging solutions designed to meet your unique product needs.
                  </p>
                  <h3>Why Are Custom Boxes Essential for Product Marketing?</h3>
                  <p>
                    Using custom packaging designs helps your business stand out and gives your products a unique edge in the market.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className='md:w-1/3 w-full'>
          <div className='h-[480px] rounded-md overflow-hidden'>
            {content?.contentImage?.image ? (
              <Image src={content.contentImage.image} alt={content.contentImage.alt || 'content'} width={504} height={504} className='w-full object-cover object-center scale-105' />
            ) : (
              <Image src="/images/contenimg.png" alt='contenimg' width={504} height={504} className='w-full object-cover object-center scale-105' />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScrollContent

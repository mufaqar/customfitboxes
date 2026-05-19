import Image from "next/image"

const Feature = ({ heading, details }: { heading?: string; details?: string }) => {
  return (
    <section className='py-16'>
      <div className="container mx-auto">
        <h3 className="lg:text-4xl text-3xl leading-tight font-semibold text-center text-primary">
          {heading || 'Product Features'}
        </h3>
        {details && <p className="text-center text-base mt-3 max-w-2xl mx-auto">{details}</p>}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-10">
          <div className="rounded-2xl pt-6 px-6 pb-10">
            <Image src="/images/msgIcon.svg" alt="msgIcon" width={60} height={60} />
            <h3 className="lg:text-3xl text-2xl font-semibold text-primary mt-4">Instant quote</h3>
            <p className="text-sm lg:text-base mt-3">Buy more than 2,500 units and see the order price directly on the screen.</p>
          </div>
          <div className="rounded-2xl pt-6 px-6 pb-10 bg-primary">
            <Image src="/images/touchIcon.svg" alt="touchIcon" width={60} height={60} />
            <h3 className="lg:text-3xl text-2xl font-semibold text-white mt-4">An original touch</h3>
            <p className="text-sm lg:text-base mt-3 text-white">The multicolored sash brings security and style to your postal box.</p>
          </div>
          <div className="rounded-2xl pt-6 px-6 pb-10">
            <Image src="/images/lifecycle.svg" alt="lifecycle" width={60} height={60} />
            <h3 className="lg:text-3xl text-2xl font-semibold text-primary mt-4">Ecological option</h3>
            <p className="text-sm lg:text-base mt-3">This box is reusable and made with recycled content.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature

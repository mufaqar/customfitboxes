const HeadingSection = ({ data }: any) => {
  return (
    <section>
      <div className='container mx-auto'>
        <h2 className='text-3xl sm:text-2xl md:text-4xl xl:text-5xl leading-tight font-semibold text-primary text-center'>
          {data?.productInfo?.productTitle || data?.title || 'Category'}
        </h2>
        <p className='text-base leading-5 text-center mt-2 opacity-70'>
          {data?.productInfo?.productDescription || ''}
        </p>
      </div>
    </section>
  )
}

export default HeadingSection

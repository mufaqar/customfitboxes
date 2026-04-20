import BreadCrumb from '../BreadCrumb'
import ProductGallery from './ProductGallery'

const ProBanner = ({ data }: any) => {
    return (
        <section className='py-10'>
            <div className='container mx-auto md:px-0 px-4 grid md:grid-cols-2 grid-cols-1 gap-10'>
                <ProductGallery />
                <div>
                    <BreadCrumb title={data.name} />
                    <h1 className='text-3xl lg:text-4xl font-semibold my-3 text-primary'>
                        {data.name}
                    </h1>
                    <p className='text-base'>
                        Custom corrugated mailer boxes are lightweight yet strong shipping boxes, equipped with fluted cardboard that provides additional protection. They are entirely customizable with your logo, colors, and design, so you can use them to ship products through the mail smoothly, start subscriptions, brand opportunities when they reach the customer, and so on.
                    </p>
                    <div className='mt-5'>
                        <form className='grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-4'>
                            <div>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Enter your name'
                                    className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none' />
                            </div>
                            <div>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none' />
                            </div>
                            <div>
                                <input
                                    type='tel'
                                    name='phone'
                                    placeholder='+1 123-123-1234'
                                    className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none' />
                            </div>
                            <div>
                                <input
                                    type='number'
                                    name='quantity'
                                    placeholder='Quantity'
                                    className='h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none' />
                            </div>
                            <div className='md:col-span-2 flex flex-row gap-6 md:gap-4'>
                                <input
                                    type='number'
                                    name='length'
                                    placeholder='Length'
                                    className='h-10 w-1/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none' />
                                <input
                                    type='number'
                                    name='width'
                                    placeholder='Width'
                                    className='h-10 w-1/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none' />
                                <input
                                    type='number'
                                    name='depth'
                                    placeholder='Depth'
                                    className='h-10 w-1/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none' />
                            </div>
                            <div className='md:col-span-2 flex flex-row gap-6 md:gap-4'>
                                <select
                                    name='unit'
                                    className="h-10 w-1/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none">
                                    <option>Select Unit</option>
                                    <option>Inches</option>
                                    <option>CM</option>
                                    <option>MM</option>
                                </select>
                                <select
                                    name='color'
                                    className="h-10 w-1/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none">
                                    <option>Color</option>
                                    <option>1-Color</option>
                                    <option>2-Color</option>
                                    <option>3-Color</option>
                                    <option>4-Color</option>
                                    <option>4/1-Color</option>
                                    <option>4/2-Color</option>
                                    <option>4/3-Color</option>
                                    <option>4/4-Color</option>
                                </select>
                                <select
                                    name='stock'
                                    className="h-10 w-1/3 border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none">
                                    <option>Select Stock</option>
                                    <option>12 PT</option>
                                    <option>14 PT</option>
                                    <option>16 PT</option>
                                    <option>18 PT</option>
                                    <option>20 PT</option>
                                    <option>Kraft Stock</option>
                                    <option>Corrugated Stock</option>
                                    <option>Rigid Stock</option>
                                </select>
                            </div>
                            <div className='md:col-span-2'>
                                <textarea name="message"
                                    placeholder='Write your message'
                                    rows={6}
                                    className='h-10 w-full mx-auto border-b border-black/50 px-2 py-1 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none shadow-none'></textarea>
                            </div>
                            <div>
                                <input type="file"
                                    className="h-10 w-full border-b border-black/50 bg-transparent text-sm sm:text-base text-title/60 placeholder:text-title/60 outline-none" />
                            </div>
                            <div className=''>
                                <button type='submit' className='text-base font-normal uppercase text-white bg-primary hover:scale-105 transition-all duration-200 h-12 px-10 rounded-md w-full'>
                                    Get a Quote
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProBanner
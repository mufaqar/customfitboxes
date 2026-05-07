import { FaSearch } from 'react-icons/fa'

const Banner = () => {
    return (
        <section className='pt-16 bg-background '>
            <div className='max-w-[900px] mx-auto   relative pb-16'>
                <h1 className='text-3xl sm:text-2xl md:text-4xl xl:text-5xl leading-tight font-semibold text-primary text-center'>
                    Behind the Box
                </h1>
                <p className='text-base leading-5 text-center opacity-70 mt-5 xl:mt-3 max-w-[833px] mx-auto'>
                    Unpack expert insights with a range of content from our packaging wizards, featuring in-depth guides, custom packaging tips and inspiring customer stories. Grow from beginner to pro with step-by-step articles on paper options, spot UV, Adobe Illustrator, image resolution, subscription boxes, digital proof guidelines, die-cutting, full color print techniques, ink coverage, corrugated cardboard, shipping strategy, box templates, and more from a trusted packaging industry leader.
                </p>
                <div className="absolute -mt-6 left-1/2 shadow-xl transform -translate-x-1/2 w-5/6 top-full">
                    <form className="rounded-md border border-black/10 bg-white flex items-center gap-x-3 pr-3 pl-4 h-12 shadow-[0_0_10px_-3px_rgb(211,211,211)] ">
                        <input
                            id="search"
                            name="search"
                            placeholder="Search by title..."
                            className="w-full outline-none traking-wider text-xs sm:text-sm h-full text-black" />
                        <button className="text-white bg-primary p-2 rounded-full">
                            <FaSearch />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Banner
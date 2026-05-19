"use client";
import { useState } from 'react'
import ViewToggle from './ViewToggle'
import ProductBox from '../products/ProductBox';
import { FaSearch } from 'react-icons/fa';

const CatProducts = ({ products }: { products: any[] }) => {
  const [view, setView] = useState<"grid" | "list">("grid");
  return (
    <section>
      <div className='container mx-auto flex items-center justify-between mt-14 gap-y-5 gap-x-10 flex-wrap'>
        <div>
          <form className='bg-[#f5f5f5] h-12 w-80 items-center gap-x-3 rounded-md px-3 flex'>
            <button className="text-title/50">
              <FaSearch />
            </button>
            <input type="text"
              placeholder="Search"
              className="w-full border-none bg-transparent text-base shadow-none outline-none" />
          </form>
        </div>
        <ViewToggle view={view} setView={setView} />
      </div>
      <div className={`container mx-auto mt-10 ${view === "grid"
        ? "grid md:grid-cols-4 grid-cols-1 gap-5"
        : "flex flex-col gap-5"
      }`}
      >
        {products.length > 0 ? (
          products.map((product: any, idx: number) => (
            <ProductBox key={product._id || idx} data={product} view={view} />
          ))
        ) : (
          [1, 2, 3, 4].map((item, idx) => (
            <ProductBox key={idx} data={item} view={view} />
          ))
        )}
      </div>
    </section>
  )
}

export default CatProducts

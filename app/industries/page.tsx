import { sanityFetch } from "@/sanity/lib/live";
import { ALL_CATEGORIES_QUERY } from "@/sanity/queries";
import Image from "next/image";
import Link from "next/link";

export default async function Industries() {
  const [{ data: categories }] = (await Promise.all([
    sanityFetch({ query: ALL_CATEGORIES_QUERY, perspective: "published" }),
  ])) as { data: any }[];

  console.log(categories, "categories");

  return (
    <main>
      <section className="py-16">
        <div className="container mx-auto  ">
          <h1 className="text-3xl sm:text-2xl md:text-4xl text-title text-center font-semibold leading-tight">
            All Industries
          </h1>
          <p className="text-base leading-5 text-center mt-4 max-w-[650px] mx-auto">
            Choose a packaging style for your custom boxes, start designing with
            us, and get your boxes with the most advanced printing techniques.
          </p>
        </div>
      </section>
      <section className="pt-5 pb-16">
        <div className="container mx-auto   grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 gap-5">
          {categories.map((item: any, idx: number) => (
            <div key={idx}>
              <div className="flex flex-col items-center justify-center gap-x-3 cursor-pointer group rounded-lg shadow-md hover:shadow-lg px-3 h-40 border border-black/5">
                <Image
                  src={item?.iconWithAlt?.icon}
                  alt={item?.iconWithAlt?.alt}
                  width={60}
                  height={60}
                  className="w-auto h-auto mx-auto"
                />
                <Link
                  href={`/category/${item?.slug}`}
                  className="text-sm md:text-base font-normal text-center group-hover:font-bold"
                >
                  {item?.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

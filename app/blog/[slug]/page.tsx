import FollowUs from "@/components/Blog/FollowUs";
import PostBanner from "@/components/Blog/PostBanner";
import { blogs } from "@/data/Blog";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SlSocialFacebook, SlSocialTwitter } from "react-icons/sl";
import { TbBrandLinkedin } from "react-icons/tb";


export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetail({ params }: any) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <main>
      <PostBanner data={blog} />
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-[64px_1fr_480px] gap-8">
          <div className="md:sticky top-24 self-start">
            <h4 className="text-base font-semibold text-primary text-center mb-2">
              Share
            </h4>
            <ul className="p-2 bg-background flex md:flex-col flex-row gap-3">
              <li>
                <Link href="#" className="bg-white w-10 h-10 sm:h-12 sm:w-12 flex justify-center items-center border-b-2 border-white hover:border-primary">
                  <SlSocialFacebook size={24} />
                </Link>
              </li>
              <li>
                <Link href="#" className="bg-white w-10 h-10 sm:h-12 sm:w-12 flex justify-center items-center border-b-2 border-white hover:border-primary">
                  <SlSocialTwitter size={24} />
                </Link>
              </li>
              <li>
                <Link href="#" className="bg-white w-10 h-10 sm:h-12 sm:w-12 flex justify-center items-center border-b-2 border-white hover:border-primary">
                  <TbBrandLinkedin size={24} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="blogSingle">
            <p>
              A homemade soap isn't just a cleaning product; it shows the story and the creativity of the brand. We live in a world where sustainability and style are prioritized, which is why the way you package your handmade soap plays an important role. It makes or breaks the image of your brand at first glance to your customer. A reliable and solid packaging shows the true personality of your homemade soap. This is why the appropriate eco-friendly packaging for your handmade soaps is crucial.
            </p>
            <p>
              A homemade soap isn't just a cleaning product; it shows the story and the creativity of the brand. We live in a world where sustainability and style are prioritized, which is why the way you package your handmade soap plays an important role. It makes or breaks the image of your brand at first glance to your customer. A reliable and solid packaging shows the true personality of your homemade soap. This is why the appropriate eco-friendly packaging for your handmade soaps is crucial.
            </p>
            <h2>
              Creative And Eco-Friendly Ways To Package Your Handmade Soaps
            </h2>
            <p>
              A homemade soap isn't just a cleaning product; it shows the story and the creativity of the brand. We live in a world where sustainability and style are prioritized, which is why the way you package your handmade soap plays an important role. It makes or breaks the image of your brand at first glance to your customer. A reliable and solid packaging shows the true personality of your homemade soap. This is why the appropriate eco-friendly packaging for your handmade soaps is crucial.
            </p>
            <p>
              A homemade soap isn't just a cleaning product; it shows the story and the creativity of the brand. We live in a world where sustainability and style are prioritized, which is why the way you package your handmade soap plays an important role. It makes or breaks the image of your brand at first glance to your customer. A reliable and solid packaging shows the true personality of your homemade soap. This is why the appropriate eco-friendly packaging for your handmade soaps is crucial.
            </p>
            <h3>
              Creative And Eco-Friendly Ways To Package Your Handmade Soaps
            </h3>
            <p>
              A homemade soap isn't just a cleaning product; it shows the story and the creativity of the brand. We live in a world where sustainability and style are prioritized, which is why the way you package your handmade soap plays an important role. It makes or breaks the image of your brand at first glance to your customer. A reliable and solid packaging shows the true personality of your homemade soap. This is why the appropriate eco-friendly packaging for your handmade soaps is crucial.
            </p>
            <p>
              A homemade soap isn't just a cleaning product; it shows the story and the creativity of the brand. We live in a world where sustainability and style are prioritized, which is why the way you package your handmade soap plays an important role. It makes or breaks the image of your brand at first glance to your customer. A reliable and solid packaging shows the true personality of your homemade soap. This is why the appropriate eco-friendly packaging for your handmade soaps is crucial.
            </p>
          </div>
          <div className="sticky top-24 self-start">
            <FollowUs />
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container mx-auto  ">
          <h3 className='md:text-2xl text-xl font-semibold text-primary'>
            Related Posts:
          </h3>
          <div className="w-full p-3 bg-background rounded-xl mt-3 flex flex-col gap-4">
            <div className='flex items-center gap-5 bg-white rounded-xl p-4'>
              <div className='w-40 h-20 rounded-lg overflow-hidden'>
                <Image src="/images/blog1.png" alt='feature' width={99} height={80} className='h-full w-full object-cover object-center' />
              </div>
              <Link href={`/blog/${blog?.slug}`} className='md:w-2/3 w-full text-sm md:text-base font-semibold text-primary flex'>
                Candle Packaging: Student Design Elements, Tips and ideasitle
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
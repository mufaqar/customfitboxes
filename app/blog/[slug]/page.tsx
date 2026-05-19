import { sanityFetch } from "@/sanity/lib/live";
import { BLOG_BY_SLUG_QUERY } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import FollowUs from "@/components/Blog/FollowUs";
import PostBanner from "@/components/Blog/PostBanner";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SlSocialFacebook, SlSocialTwitter } from "react-icons/sl";
import { TbBrandLinkedin } from "react-icons/tb";

export default async function BlogDetail({ params }: any) {
  const { slug } = await params;

  const { data: blog } = await sanityFetch({
    query: BLOG_BY_SLUG_QUERY,
    params: { slug },
    perspective: "published",
  }) as { data: any };

  if (!blog) return notFound();

  return (
    <main>
      <PostBanner data={blog} />
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-[64px_1fr_480px] gap-8">
          <div className="md:sticky top-24 self-start">
            <h4 className="text-base font-semibold text-primary text-center mb-2">Share</h4>
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
            {blog.description && (
              <PortableText value={blog.description} />
            )}
          </div>
          <div className="sticky top-24 self-start">
            <FollowUs />
          </div>
        </div>
      </section>
      {blog.relatedPosts && blog.relatedPosts.length > 0 && (
        <section className="pb-16">
          <div className="container mx-auto">
            <h3 className="md:text-2xl text-xl font-semibold text-primary">Related Posts:</h3>
            <div className="w-full p-3 bg-background rounded-xl mt-3 flex flex-col gap-4">
              {blog.relatedPosts.map((post: any) => (
                <div key={post.slug} className="flex items-center gap-5 bg-white rounded-xl p-4">
                  <div className="w-40 h-20 rounded-lg overflow-hidden shrink-0">
                    {post.mainImage && (
                      <Image src={post.mainImage} alt={post.title} width={160} height={80} className="h-full w-full object-cover object-center" />
                    )}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-sm md:text-base font-semibold text-primary">
                    {post.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

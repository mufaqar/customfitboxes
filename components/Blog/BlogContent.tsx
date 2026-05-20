"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PostBox from "./PostBox";
import SideBar from "./SideBar";

type BlogContentProps = {
  initialBlogs: any[];
  categoriesWithCount: { name: string; count: number }[];
};

export default function BlogContent({ initialBlogs, categoriesWithCount }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter blogs based on active category
  const filteredBlogs =
    activeCategory === "All"
      ? initialBlogs
      : initialBlogs.filter((blog) => blog.category === activeCategory);

  const featuredPost = filteredBlogs[0];
  const restPosts = filteredBlogs.slice(1);
  const allCategories = ["All", ...categoriesWithCount.map((cat) => cat.name)];

  return (
    <>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-lg py-2 px-4 text-sm sm:text-base transition-all ease-in-out
              ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-zinc-200 text-black hover:bg-primary hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex md:flex-row flex-col gap-8">
        {/* Posts Grid */}
        <div className="md:w-full w-full grid md:grid-cols-2 gap-6">
          {/* Featured Post */}
          {featuredPost && (
            <div className="bg-[#f5f5f5] rounded h-full flex flex-col md:col-span-2">
              {featuredPost.mainImage && (
                <Image
                  src={featuredPost.mainImage}
                  alt={featuredPost.title}
                  width={802}
                  height={335}
                  className="object-cover w-full h-full rounded-t"
                />
              )}
              <div className="p-5">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="md:text-2xl text-xl font-semibold text-primary mt-3 hover:underline"
                >
                  {featuredPost.title}
                </Link>
                <div className="flex items-center gap-2 mt-5">
                  {featuredPost.author?.image && (
                    <Image
                      src={featuredPost.author.image}
                      alt={featuredPost.author.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  )}
                  <p className="text-xs">
                    {featuredPost.author?.name || "Anonymous"}, Last Updated:{" "}
                    {featuredPost.publishedAt
                      ? new Date(featuredPost.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )
                      : "Recent"}
                  </p>
                </div>
                <p className="text-base mt-5 line-clamp-4">
                  {featuredPost.excerpt}
                </p>
              </div>
            </div>
          )}

          {/* Rest of Posts */}
          {restPosts.map((post: any) => (
            <PostBox key={post._id} data={post} />
          ))}
        </div>

        <SideBar posts={initialBlogs} cat={categoriesWithCount} />
      </div>
    </>
  );
}
"use client";

import Banner from "@/components/Blog/Banner";
import PostBox from "@/components/Blog/PostBox";
import SideBar from "@/components/Blog/SideBar";
import { blogs } from "@/data/Blog";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
        "All",
        ...new Set(blogs.map((post) => post.category)),
    ];
    const filteredPosts =
        activeCategory === "All"
            ? blogs
            : blogs.filter((post) => post.category === activeCategory);

    // ✅ Featured + Rest
    const featuredPost = filteredPosts[0];
    const restPosts = filteredPosts.slice(1);
    const categoryWithCount = [
        ...new Set(blogs.map((post) => post.category)),
    ].map((category) => ({
        name: category,
        count: blogs.filter((post) => post.category === category).length,
    }));
    return (
        <main>
            <Banner />

            <section className="py-16">
                <div className="container mx-auto md:px-0 px-4 py-10">
                    {/* Tabs */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={` rounded-lg py-2 px-4 text-sm sm:text-base transition-all ease-in-out
                                    ${activeCategory === cat
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
                        <div className="md:w-2/3 w-full grid md:grid-cols-2 gap-6">
                            {/* ✅ Featured Post */}
                            {featuredPost && (
                                <div className="bg-[#f5f5f5] rounded h-full flex flex-col md:col-span-2">
                                    <Image
                                        src="/images/blog1.png"
                                        alt="feature"
                                        width={802}
                                        height={335}
                                        className="object-cover w-full h-full rounded-t"
                                    />
                                    <div className="p-5">
                                        <Link href={`/blog/${featuredPost?.slug}`} className="md:text-2xl text-xl font-semibold text-primary mt-3">
                                            {featuredPost.title}
                                        </Link>
                                        <div className="flex items-center gap-2 mt-5">
                                            <Image
                                                src="/images/author.svg"
                                                alt="author"
                                                width={32}
                                                height={32}
                                                className="h-8 w-8 rounded-full"
                                            />
                                            <p className="text-xs">
                                                Amanda Jane Rivera, Last Updated: May 07, 2024
                                            </p>
                                        </div>
                                        <p className="text-base mt-5 line-clamp-4">
                                            {featuredPost.excerpt}
                                        </p>
                                    </div>
                                </div>
                            )}
                            {/* ✅ Rest of Posts */}
                            {restPosts.map((post, idx) => (
                                <PostBox key={idx} data={post} />
                            ))}
                        </div>
                      <SideBar posts={blogs} cat={categoryWithCount} />
                    </div>
                </div>
            </section>
        </main>
    );
}
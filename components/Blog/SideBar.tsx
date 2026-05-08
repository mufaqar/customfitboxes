"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type SideBarProps = {
  posts: any[];
  cat: { name: string; count: number }[];
};

export default function SideBar({ posts, cat }: SideBarProps) {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  // Get latest 5 posts
  const latestPosts = posts.slice(0, 5);

  return (
    <div className="md:w-1/3 w-full space-y-8">
      {/* Search Box */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Search</h3>
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <ul className="space-y-2">
          {cat.map((category) => (
            <li key={category.name}>
              <Link
                href={`/blog/category/${category.name.toLowerCase()}`}
                className="flex justify-between items-center text-gray-600 hover:text-primary transition"
              >
                <span>{category.name}</span>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {latestPosts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="flex gap-3 group"
            >
              {post.mainImage && (
                <Image
                  src={post.mainImage}
                  alt={post.title}
                  width={60}
                  height={60}
                  className="w-14 h-14 object-cover rounded"
                />
              )}
              <div>
                <h4 className="font-medium group-hover:text-primary transition line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString()
                    : "Recent"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-primary/10 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
        <p className="text-sm text-gray-600 mb-4">
          Get the latest updates and articles delivered to your inbox.
        </p>
        <form onSubmit={handleSubscribe} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
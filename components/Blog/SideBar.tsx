"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

type SideBarProps = {
  posts: any[];
  cat: { name: string; count: number }[];
};

export default function SideBar({ posts, cat }: SideBarProps) {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      description: formData.get("description"),
      message: formData.get("message"),
    };

    try {
      setLoading(true);

      const res = await fetch("/api/get-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        alert("Quote submitted successfully");
        e.currentTarget.reset();
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Get latest 5 posts
  const latestPosts = posts.slice(0, 3);

  return (
    <div className='md:min-w-[30rem] sm:w-[30rem] w-full flex flex-col gap-8'>
      <div>
        <h3 className='md:text-2xl text-xl font-semibold text-primary'>
          Most Popular Posts:
        </h3>
        <div className='w-full p-3 bg-background rounded-xl mt-3 flex flex-col gap-4'>
          {latestPosts?.map((post: any, idx: number) => (
            <Link key={idx} href={`/blog/${post.slug}`} className='flex items-center gap-5 bg-white rounded-xl p-4'>
              <div className='md:w-1/3 w-full h-20 rounded-lg overflow-hidden'>
                <Image src={`${post?.mainImage}`} alt='feature' width={99} height={80} className='h-full w-full object-cover object-center' />
              </div>
              <Link href={`/blog/${post?.slug}`} className='md:w-2/3 w-full text-sm md:text-base font-semibold text-primary flex'>
                {post?.title}
              </Link>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className='md:text-2xl text-xl font-semibold text-primary'>
          Featured Categories:
        </h3>
        <div className='w-full p-3 bg-background rounded-xl mt-3 flex flex-col gap-4'>
          {cat.map((item: any, idx: number) => (
            <div key={idx} className='flex items-center gap-x-5 justify-between bg-white rounded-xl px-6 py-5'>
              <p className='md:w-2/3 w-full text-sm md:text-base font-semibold text-primary flex'>
                {item?.name}
              </p>
              <p className='text-sm md:text-base font-semibold text-primary flex'>
                {item.count}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className='md:text-2xl text-xl font-semibold text-primary'>
          Follow Us:
        </h3>
        <div className='w-full p-3 bg-background rounded-xl mt-3 flex flex-col gap-4'>
          <ul className='bg-white rounded-xl px-6 py-5 flex items-center gap-5'>
            <li>
              <Link href="https://www.instagram.com/customfitboxes_usa/" target="_blank" className='inline-flex md:text-3xl text-2xl text-title hover:text-primary transition-all ease-in-out'>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/customfitboxes/" target="_blank" className='inline-flex md:text-3xl text-2xl text-title hover:text-primary transition-all ease-in-out'>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/custom-fit-boxes/" target="_blank" className='inline-flex md:text-3xl text-2xl text-title hover:text-primary transition-all ease-in-out'>
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" className='inline-flex md:text-3xl text-2xl text-title hover:text-primary transition-all ease-in-out'>
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank" className='inline-flex md:text-3xl text-2xl text-title hover:text-primary transition-all ease-in-out'>
                <FaYoutube />
              </Link>
            </li>
          </ul>
          <div className='bg-white rounded-xl px-6 py-5'>
            <p className='text-xl font-semibold text-primary  text-center'>
              Want <span className='text-[#2cafa6]'>10% off</span> your first order?
            </p>
            <p className='text-center text-sm mt-3'>
              Type your email address and we’ll send you the discount code directly to your inbox.
            </p>
            <form className='flex items-center mt-5'>
              <input type="email" name='email' className="bg-white w-full h-12 outline-none" placeholder="Email Address" />
              <button className='rounded-tr-xl text-white px-4 h-12 text-sm ml-2 whitespace-nowrap bg-[#2cafa6]'>
                Get Code
              </button>
            </form>
            <p className='text-[10px] font-semibold text-primary mt-8 text-center'>
              JOIN 10000S OF OTHER. Yes, IT’S COMPLETELY FREE.
            </p>
            <p className='text-[10px] font-semibold text-primary mt-8 text-center'>
              By submitting this form you agree to our <Link href="#" className='underline'>Terms of Service</Link> and <Link href="#" className='underline'>Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
      <div className='overflow-hidden rounded-xl drop-shadow-xl w-full'>
        <h3 className='text-xl lg:text-2xl bg-primary flex py-4 items-center justify-center text-white'>
          Get an Instant Quote
        </h3>
        <form
          onSubmit={handleSubscribe}
          className='bg-[#f5f5f5] flex flex-col gap-6 pt-3 pb-5 px-3 lg:p-5'>
          <input type="text" name='name' required placeholder="Name" className="h-10 w-full border-b border-primary bg-transparent text-base outline-none" />
          <input type="tel" name='phone' required placeholder="Phone number" className="h-10 w-full border-b border-primary bg-transparent text-base outline-none" />
          <input type="email" name='email' required placeholder="Email" className="h-10 w-full border-b border-primary bg-transparent text-base outline-none" />
          <input type="text" name='description' required placeholder="Description" className="h-10 w-full border-b border-primary bg-transparent text-base outline-none" />
          <input type="text" name='message' required placeholder="Enter your message" className="h-10 w-full border-b border-primary bg-transparent text-base outline-none" />
          <button type="submit" className="text-base font-normal uppercase text-white bg-primary hover:scale-105 transition-all duration-200 h-12 px-10 rounded-md w-full">
            Submit Quote
          </button>
        </form>
      </div>
    </div>
  );
}
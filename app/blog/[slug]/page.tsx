import { notFound } from "next/navigation";

const blogs = [
  {
    slug: "how-to-choose-box",
    title: "How to Choose the Right Box",
    content: "Full blog content goes here...",
  },
  {
    slug: "custom-packaging-guide",
    title: "Custom Packaging Guide",
    content: "Detailed guide content...",
  },
];

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
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-3xl font-bold">{blog.title}</h1>

      <p className="mt-6 text-gray-700 leading-7">{blog.content}</p>
    </div>
  );
}
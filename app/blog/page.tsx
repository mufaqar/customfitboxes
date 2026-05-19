import { sanityFetch } from "@/sanity/lib/live";
import { ALL_BLOGS_QUERY } from "@/sanity/queries";
import Banner from "@/components/Blog/Banner";
import BlogContent from "@/components/Blog/BlogContent";

export const metadata = {
  title: "Behind the Box | CustomFitBox Blog",
  description: "Unpack expert insights with a range of content from our packaging wizards, featuring in-depth guides, custom packaging tips and inspiring customer stories.",
};

export default async function BlogPage() {
  const { data: blogs } = await sanityFetch({
    query: ALL_BLOGS_QUERY,
    perspective: "published",
  }) as { data: any };

  // Extract unique categories with counts
  const categoryMap = new Map();
  (blogs as any[])?.forEach((blog: any) => {
    if (blog.category) {
      categoryMap.set(
        blog.category,
        (categoryMap.get(blog.category) || 0) + 1
      );
    }
  });

  const categoriesWithCount = Array.from(categoryMap.entries()).map(
    ([name, count]) => ({
      name,
      count,
    })
  );

  return (
    <main>
      <Banner />
      <section className="py-16">
        <div className="container mx-auto py-10">
          <BlogContent 
            initialBlogs={(blogs as any[]) || []} 
            categoriesWithCount={categoriesWithCount}
          />
        </div>
      </section>
    </main>
  );
}
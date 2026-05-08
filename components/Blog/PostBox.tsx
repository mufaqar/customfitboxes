import Image from "next/image";
import Link from "next/link";

type PostBoxProps = {
  data: {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    mainImage?: string;
    publishedAt?: string;
    author?: {
      name: string;
      image?: string;
    };
    category?: string;
  };
};

export default function PostBox({ data }: PostBoxProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      {data.mainImage && (
        <Image
          src={data.mainImage}
          alt={data.title}
          width={400}
          height={250}
          className="object-cover w-full h-48"
        />
      )}
      <div className="p-4">
        {data.category && (
          <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
            {data.category}
          </span>
        )}
        <Link href={`/blog/${data.slug}`}>
          <h3 className="text-xl font-semibold mt-2 hover:text-primary transition">
            {data.title}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mt-3">
          {data.author?.image && (
            <Image
              src={data.author.image}
              alt={data.author.name}
              width={24}
              height={24}
              className="h-6 w-6 rounded-full object-cover"
            />
          )}
          <p className="text-xs text-gray-500">
            {data.author?.name || "Anonymous"} •{" "}
            {data.publishedAt
              ? new Date(data.publishedAt).toLocaleDateString()
              : "Recent"}
          </p>
        </div>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{data.excerpt}</p>
      </div>
    </div>
  );
}
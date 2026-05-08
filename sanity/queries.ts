import { defineQuery } from 'next-sanity'

// Get all blog posts
export const ALL_BLOGS_QUERY = defineQuery(`
  *[_type == "blogs" && defined(slug.current)] | order(publishedAt desc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    "mainImage": mainImage.asset->url,
    publishedAt,
    category,
    popular,
    "author": author->{
      name,
      "image": image.asset->url
    },
    seoTitle,
    seoDescription
  }
`)

// Get single blog post by slug
export const BLOG_BY_SLUG_QUERY = defineQuery(`
  *[_type == "blogs" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    "mainImage": mainImage.asset->url,
    publishedAt,
    category,
    popular,
    "author": author->{
      name,
      "image": image.asset->url,
      bio
    },
    seoTitle,
    seoDescription,
    "relatedPosts": *[_type == "blogs" && category == ^.category && slug.current != $slug][0...3] {
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      publishedAt
    }
  }
`)

// Get unique categories with post counts
export const BLOG_CATEGORIES_QUERY = defineQuery(`
  *[_type == "blogs" && defined(category)] {
    "category": category
  }
`)

// Get popular posts
export const POPULAR_BLOGS_QUERY = defineQuery(`
  *[_type == "blogs" && popular == true] | order(publishedAt desc)[0...5] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "mainImage": mainImage.asset->url
  }
`)

// Get latest posts for sidebar
export const LATEST_BLOGS_QUERY = defineQuery(`
  *[_type == "blogs"] | order(publishedAt desc, _createdAt desc)[0...5] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "mainImage": mainImage.asset->url
  }
`)
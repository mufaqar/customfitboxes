import { defineQuery } from 'next-sanity'

// ────────────────────── BLOG QUERIES ──────────────────────

export const ALL_BLOGS_QUERY = defineQuery(`
  *[_type == "blogs" && defined(slug.current)] | order(date desc, _createdAt desc) {
    _id,
    "title": name,
    "slug": slug.current,
    "excerpt": pt::text(description),
    "mainImage": imageWithAlt.image.asset->url,
    "publishedAt": date,
    "category": blogCatetgory,
    popular,
    "author": {
      "name": username,
      "image": userImage.image.asset->url
    },
    metaTitle,
    metaDescription
  }
`)

export const BLOG_BY_SLUG_QUERY = defineQuery(`
  *[_type == "blogs" && slug.current == $slug][0] {
    _id,
    "title": name,
    "slug": slug.current,
    "excerpt": pt::text(description),
    description,
    "mainImage": imageWithAlt.image.asset->url,
    "imageAlt": imageWithAlt.alt,
    "publishedAt": date,
    "category": blogCatetgory,
    popular,
    "author": {
      "name": username,
      "image": userImage.image.asset->url
    },
    metaTitle,
    metaDescription,
    metaTags,
    "relatedPosts": *[_type == "blogs" && blogCatetgory == ^.blogCatetgory && slug.current != $slug][0...3] {
      "title": name,
      "slug": slug.current,
      "mainImage": imageWithAlt.image.asset->url,
      "publishedAt": date
    }
  }
`)

export const BLOG_CATEGORIES_QUERY = defineQuery(`
  *[_type == "blogs" && defined(blogCatetgory)] {
    "category": blogCatetgory
  }
`)

export const POPULAR_BLOGS_QUERY = defineQuery(`
  *[_type == "blogs" && popular == true] | order(date desc)[0...5] {
    _id,
    "title": name,
    "slug": slug.current,
    "publishedAt": date,
    "mainImage": imageWithAlt.image.asset->url
  }
`)

export const LATEST_BLOGS_QUERY = defineQuery(`
  *[_type == "blogs"] | order(date desc, _createdAt desc)[0...5] {
    _id,
    "title": name,
    "slug": slug.current,
    "publishedAt": date,
    "mainImage": imageWithAlt.image.asset->url
  }
`)

// ────────────────────── PRODUCT QUERIES ──────────────────────

export const ALL_PRODUCTS_QUERY = defineQuery(`
  *[_type == "product" && defined(slug.current)] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    shortDescription,
    "mainImage": images[0].image.asset->url,
    "imageAlt": images[0].alt
  }
`)

export const PRODUCT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    metaTitle,
    metaDescription,
    metaTags,
    shortDescription,
    details,
    productFeatureHeading,
    productFeatureDetails,
    "images": images[] {
      "image": image.asset->url,
      alt,
      caption,
      description
    },
    "faqs": faqs[]->{question, answer},
    content {
      contentImage {
        "image": image.asset->url,
        alt,
        caption,
        description
      },
      contentDetails
    }
  }
`)

// ────────────────────── CATEGORY QUERIES ──────────────────────

export const ALL_CATEGORIES_QUERY = defineQuery(`
  *[_type == "category" && defined(slug.current)] | order(_createdAt desc) {
    _id,
    name,
    "title": name,
    "slug": slug.current,
    description,
    featured,
    "image": imageWithAlt.image.asset->url,
    "imageAlt": imageWithAlt.alt
  }
`)

export const CATEGORY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    name,
    "title": name,
    "slug": slug.current,
    metaTitle,
    metaDescription,
    metaTags,
    description,
    featured,
    "imageWithAlt": {
      "image": imageWithAlt.image.asset->url,
      alt,
      caption,
      description
    },
    "imageWithAlt2": {
      "image": imageWithAlt2.image.asset->url,
      alt,
      caption,
      description
    },
    "iconWithAlt": {
      "icon": iconWithAlt.icon.asset->url,
      alt,
      caption,
      description
    },
    productInfo,
    "products": products[]->{
      _id,
      name,
      "slug": slug.current,
      shortDescription,
      "mainImage": images[0].image.asset->url
    },
    "faqs": faqs[]->{question, answer},
    content {
      contentImage {
        "image": image.asset->url,
        alt,
        caption,
        description
      },
      contentDetails
    }
  }
`)

// ────────────────────── FAQ QUERIES ──────────────────────

export const ALL_FAQS_QUERY = defineQuery(`
  *[_type == "faqs"] {
    _id,
    question,
    answer
  }
`)

// ────────────────────── TESTIMONIAL QUERIES ──────────────────────

export const ALL_TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] {
    _id,
    title,
    review,
    rating,
    reviewerName,
    reviewerDesignation,
    "userImage": userImage.image.asset->url,
    "userImageAlt": userImage.alt
  }
`)

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      required: true,
    },
    {
      name: 'metaTitle',
      type: 'string',
      title: 'Meta Title',
      required: true,
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    },
    {
      name: 'metaTags',
      title: 'Meta Tags',
      type: 'text',
      description: "Please seprate tag with ','",
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name', // Specify the field to use for generating the slug
        maxLength: 200, // Maximum length of the generated slug
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'featured',
      title: 'Featured Category',
      type: 'boolean',
    },
    {
      name: 'imageWithAlt',
      type: 'object',
      title: 'Feature Image 1',
      required: true,
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          required: true,
          options: {
            hotspot: true,
          },
        },
        {
          name: 'alt',
          type: 'string',
          required: true,
          title: 'Alt',
          description: 'Alternative text for the image',
        },
        {
          name: 'caption',
          type: 'string',
          required: true,
          title: 'Caption',
          description: 'Caption text for the image',
        },
        {
          name: 'description',
          type: 'string',
          required: true,
          title: 'Description',
          description: 'Description text for the image',
        },
      ],
    },
    {
      name: 'imageWithAlt2',
      type: 'object',
      title: 'Feature Image 2',
      required: true,
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          required: true,
          options: {
            hotspot: true,
          },
        },
        {
          name: 'alt',
          type: 'string',
          required: true,
          title: 'Alt',
          description: 'Alternative text for the image',
        },
        {
          name: 'caption',
          type: 'string',
          required: true,
          title: 'Caption',
          description: 'Caption text for the image',
        },
        {
          name: 'description',
          type: 'string',
          required: true,
          title: 'Description',
          description: 'Description text for the image',
        },
      ],
    },
    {
      name: 'iconWithAlt',
      type: 'object',
      title: 'Feature Icon',
      required: true,
      fields: [
        {
          name: 'icon',
          type: 'image',
          title: 'Icon',
          required: true,
          options: {
            hotspot: true,
          },
        },
        {
          name: 'alt',
          type: 'string',
          required: true,
          title: 'Alt',
          description: 'Alternative text for the image',
        },
        {
          name: 'caption',
          type: 'string',
          required: true,
          title: 'Caption',
          description: 'Caption text for the image',
        },
        {
          name: 'description',
          type: 'string',
          required: true,
          title: 'Description',
          description: 'Description text for the image',
        },
      ],
    },

    {
      name: 'productInfo',
      type: 'object',
      title: 'Product Info',
      required: true,
      fields: [
        {
          name: 'productTitle',
          type: 'string',        
          title: 'productTitle',
        },
        {
          name: 'productDescription',
          type: 'string',       
          title: 'Product Description',
        },
      ],
    },

    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}],
        },
      ],
    },
    {
      title: 'Faqs',
      name: 'faqs',
      type: 'array',
      unique: true,
      of: [
        {
          type: 'reference',
          to: [{type: 'faqs'}],
        },
      ],
    },

    {
      name: 'content',
      type: 'object',
      title: 'Content Section',
      required: true,
      fields: [
        {
          name: 'contentImage',
          type: 'object',
          title: 'Content Image',
          required: true,
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              required: true,
              options: {
                hotspot: true,
              },
            },
            {
              name: 'alt',
              type: 'string',
              required: true,
              title: 'Alt',
              description: 'Alternative text for the image',
            },
            {
              name: 'caption',
              type: 'string',
              required: true,
              title: 'Caption',
              description: 'Caption text for the image',
            },
            {
              name: 'description',
              type: 'string',
              required: true,
              title: 'Description',
              description: 'Description text for the image',
            },
          ],
        },
        {
          title: 'Content Details',
          name: 'contentDetails',
          type: 'array',
          of: [{type: 'block'}],
        },
      ],
    },
  ],
}

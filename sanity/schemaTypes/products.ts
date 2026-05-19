export default {
  name: 'product',
  type: 'document',
  title: 'Product',
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
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'block'}],
    },

    {
      name: 'productFeatureHeading',
      title: 'Product Feature Heading',
      type: 'string',
    },
    {
      name: 'productFeatureDetails',
      title: 'Product Feature Details',
      type: 'text',
    },

    {
      name: 'images',
      title: 'Images',
      type: 'array',
      required: true,
      of: [
        {
          name: 'imageWithAlt',
          type: 'object',
          title: 'Images',
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
      ],
      validation: (Rule: any) =>
        Rule.custom((images: any) => {
          if (!images || images.length !== 4) {
            return 'You must provide exactly 4 images.'
          }
          return true
        }).max(4),
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

export default {
  name: 'blogs',
  type: 'document',
  title: 'Blogs',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
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
      name: 'date',
      type: 'date',
      title: 'Date',
    },
    {
      title: 'Category',
      name: 'blogCatetgory',
      type: 'string',
      options: {
        list: [
          {title: 'Featured', value: 'Featured'},
          {title: 'Step-By-Step Guides', value: 'Step-By-Step Guides'},
          {title: 'Retail Packaging', value: 'Retail Packaging'},
          {title: 'Box Customization', value: 'Box Customization'},
          {title: 'Packaging Glossary', value: 'Packaging Glossary'},
          {title: 'Inspiration', value: 'Inspiration'},
        ],
      },
    },
    {
      name: 'popular',
      title: 'Popular',
      type: 'boolean',
    },
    {
      name: 'username',
      type: 'string',
      title: 'Username',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'imageWithAlt',
      type: 'object',
      title: 'Feature Image',
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
      name: 'userImage',
      type: 'object',
      title: 'User Image',
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
}

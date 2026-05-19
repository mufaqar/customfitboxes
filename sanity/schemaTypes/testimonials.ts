export default {
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      required: true,
    },
    {
      name: 'review',
      title: 'Review',
      type: 'text',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Rating must be between 1 and 5',
      validation: (Rule: any) =>
        Rule.required().min(1).max(5).error('Rating must be between 1 and 5'),
      initialValue: 1,
    },
    {
      name: 'reviewerName',
      type: 'string',
      title: 'Reviewer Name',
      required: true,
    },
    {
      name: 'reviewerDesignation',
      type: 'string',
      title: 'Reviewer Designation',
      required: true,
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

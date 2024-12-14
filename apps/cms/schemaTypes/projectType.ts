
import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Project Title',
      description: 'The name or title of the project.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      type: 'string',
      title: 'Project Summary',
      description: 'A brief overview of the project to be displayed on the projects list page.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      type: 'string',
      title: 'Role',
      description: 'The role or position you held during the project.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'period',
      type: 'string',
      title: 'Project Period',
      description: 'The time frame or duration of the project.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Project Description',
      description: 'A description of the project.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'A URL-friendly version of the project title, typically used for linking.',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'webUrl',
      title: 'Web URL',
      type: 'string',
      description: 'The URL of the project’s website.',
    }),
    defineField({
      name: 'androidUrl',
      title: 'Android URL',
      type: 'string',
      description: 'The URL of the project on the Android store.',
    }),
    defineField({
      name: 'iosUrl',
      title: 'iOS URL',
      type: 'string',
      description: 'The URL of the project on the iOS App Store.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'The main cover image representing the project.',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'The main logo representing the project.',
    }),
    defineField({
      name: 'sampleImages',
      title: 'Sample images',
      type: 'array',
      of: [
        defineField({
          name: 'imageWithDescription',
          title: 'Image with Description',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              type: 'image',
              title: 'Image',
              description: 'An additional image related to the project.',
            }),
            defineField({
              name: 'description',
              type: 'text',
              title: 'Description',
              description: 'A brief description of the image or what it represents.',
            }),
          ],
        }),
      ],
      description: 'A collection of images showcasing different aspects of the project, such as screenshots or visuals.',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      description: 'List of tags related to the project, such as technologies used or project themes.',
    }),
    defineField({
      name: 'sortOrder',
      type: 'number',
      title: 'Sort Order',
      description: 'Controls the order in which projects are displayed. Lower numbers appear first.',
      initialValue: 0,
      validation: (rule) => rule.integer().min(0),
    }),
  ],
})


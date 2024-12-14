
import { defineField, defineType } from 'sanity'

export const bioType = defineType({
  name: 'bio',
  title: 'Bio',
  type: 'document',
  fields: [
    defineField({
      name: 'bioImage',
      title: 'Bio Image',
      type: 'image',
      description: 'Upload an image to accompany your bio (e.g., a profile picture or portrait).',
    }),
    defineField({
      name: 'bioContent',
      title: 'Bio Content',
      type: 'text',
      description: 'Provide a written bio here. This can be a short paragraph or a more detailed description of who you are.',
    }),
  ],
})


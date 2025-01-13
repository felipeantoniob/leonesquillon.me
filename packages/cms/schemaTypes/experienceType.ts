
import { defineField, defineType } from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      description: 'The job title or role held by the individual in the company.',
      validation: Rule => Rule.required().error('Position is required')
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'The name of the company or organization where the individual worked.',
      validation: Rule => Rule.required().error('Company is required')
    }),
    defineField({
      name: 'period',
      title: 'Period',
      type: 'string',
      description: 'The year or period during which the individual held the position at the company.',
      validation: Rule => Rule.required().error('Period is required')
    }),
    defineField({
      name: 'sortOrder',
      type: 'number',
      title: 'Sort Order',
      description: 'Controls the order in which items are displayed. Lower numbers appear first.',
      initialValue: 0,
      validation: (rule) => rule.integer().min(0),
    }),
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'position'
    }
  }
})



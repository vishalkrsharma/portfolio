import { defineField, defineType } from 'sanity';

export const tech = defineType({
  name: 'tech',
  title: 'Tech',
  type: 'document',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\./g, '')
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, ''),
        source: 'name',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (Rule) => Rule.required().error('Slug is required'),
    }),
  ],
});

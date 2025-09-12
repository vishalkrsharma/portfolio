import { defineField, defineType } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (Rule) => Rule.required().error('Slug is required'),
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required().error('Description is required'),
    }),
    defineField({
      name: 'repositoryUrls',
      type: 'array',
      of: [{ type: 'url' }],
      validation: (Rule) =>
        Rule.custom((urls: string[] | undefined) => {
          if (!urls) return true;

          const uniqueUrls = new Set(urls);
          return urls.length === uniqueUrls.size ? true : 'Repository URLs must be unique';
        }),
    }),
    defineField({
      name: 'liveUrls',
      type: 'array',
      of: [{ type: 'url' }],
      validation: (Rule) =>
        Rule.custom((urls: string[] | undefined) => {
          if (!urls) return true;

          const uniqueUrls = new Set(urls);
          return urls.length === uniqueUrls.size ? true : 'Live URLs must be unique';
        }),
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required().error('Category is required'),
    }),
    defineField({
      name: 'tech',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tech' }] }],

      validation: (Rule) =>
        Rule.custom((techArray: { _ref: string }[] | undefined) => {
          if (!techArray) return true;

          const ids = techArray.map((tech) => tech._ref);
          const uniqueIds = new Set(ids);

          return ids.length === uniqueIds.size ? true : 'Tech items must be unique';
        }),
    }),
  ],
});

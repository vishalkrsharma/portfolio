import { category } from '@/sanity/schemaTypes/category';
import { project } from '@/sanity/schemaTypes/project';
import { tech } from '@/sanity/schemaTypes/tech';
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, tech, category],
};

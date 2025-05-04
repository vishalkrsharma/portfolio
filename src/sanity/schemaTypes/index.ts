import { categoryType } from '@/sanity/schemaTypes/category';
import { projectType } from '@/sanity/schemaTypes/project';
import { techType } from '@/sanity/schemaTypes/tech';
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, techType, categoryType],
};

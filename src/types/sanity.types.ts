export type SanityDocument = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export type Slug = {
  _type: 'slug';
  current: string;
};

export type ImageAsset = {
  _ref: string;
  _type: 'reference';
};

export type SanityImage = {
  _type: 'image';
  asset: ImageAsset;
};

export type Reference<T = unknown> = {
  _ref: string;
  _type: 'reference';
} & Partial<T>;

export type Span = {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
};

export type Block = {
  _key: string;
  _type: 'block';
  children: Span[];
  markDefs: Array<{
    _key: string;
    _type: string;
    [key: string]: unknown;
  }>;
  style: string;
};

export type Tech = SanityDocument & {
  _type: 'tech';
  icon: SanityImage;
  name: string;
  slug: Slug;
  value: number;
};

export type Category = SanityDocument & {
  _type: 'category';
  slug: Slug;
  title: string;
};

export type Project = SanityDocument & {
  _type: 'project';
  category: Reference<Category>;
  description: Block[];
  heroImage: SanityImage;
  images: SanityImage[];
  liveUrls: string[];
  repositoryUrls: string[];
  slug: Slug;
  tech: Array<Reference<Tech>>;
  title: string;
};

export type Exp = SanityDocument & {
  _type: 'exp';
  companyName: string;
  role: string;
  startDate: string; // ISO date string (YYYY-MM-DD)
  isPresent: boolean;
  endDate?: string | null; // ISO date string or null when present
  location: string;
  description: Block[];
};

export const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt asc){
  ...,
  category->,
  tech[]->
}`;

export const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]{
  ...,
  category->,
  tech[]->
}`;

export const TECH_QUERY = `*[_type == "tech"]`;

export const EXP_QUERY = `*[_type == "exp"] | order(startDate desc)`;

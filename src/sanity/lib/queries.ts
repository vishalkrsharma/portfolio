export const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt desc){
  ...,
  category->,
  tech[]->
}`;

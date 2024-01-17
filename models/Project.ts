interface Link {
  link: string;
  label: string;
}

interface Project {
  title: string;
  info: string[];
  projectLink: Link[];
  githubLinks: Link[];
  techTags: string[];
  isFeatured: boolean;
}

export default Project;

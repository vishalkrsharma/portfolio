class Project {
  title: string;
  info: string;
  projectLink: string;
  githubLinks: string[];
  techTags: string[];
  isFeatured: boolean;

  constructor(title: string, info: string, projectLink: string, githubLinks: string[], techTags: string[], isFeatured: boolean) {
    this.title = title;
    this.info = info;
    this.projectLink = projectLink;
    this.githubLinks = githubLinks;
    this.techTags = techTags;
    this.isFeatured = isFeatured;
  }
}

export default Project;

import { sanityFetch } from '@/sanity/lib/live';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';

const ProjectsShowcase = async () => {
  const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY });

  console.log(projects);

  return <section className='min-h-screen flex flex-col justify-center items-center'>ProjectsShowcase</section>;
};

export default ProjectsShowcase;

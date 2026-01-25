import ProjectDescription from '@/app/(root)/projects/[slug]/_section/project-description';
import ProjectHeader from '@/app/(root)/projects/[slug]/_section/project-header';
import ProjectImages from '@/app/(root)/projects/[slug]/_section/project-images';
import ProjectTech from '@/app/(root)/projects/[slug]/_section/project-tech';
import { sanityFetch } from '@/sanity/lib/live';
import { PROJECT_QUERY } from '@/sanity/lib/queries';
import { Project } from '@/types/sanity.types';
import { notFound } from 'next/navigation';

const ProjectPage = async ({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) => {
  const { slug } = await params;

  const {
    data: project,
  }: {
    data: Project;
  } = await sanityFetch({ query: PROJECT_QUERY, params: { slug } });

  if (!project) notFound();

  console.dir(project, { depth: null });

  return (
    <main className='mx-auto min-h-screen container px-4 py-10 space-y-8'>
      <ProjectHeader
        title={project.title}
        liveUrls={project.liveUrls}
        repositoryUrls={project.repositoryUrls}
      />
      <ProjectTech tech={project.tech} />
      <ProjectImages images={[project.heroImage]} />
      <ProjectDescription description={project.description} />
    </main>
  );
};

export default ProjectPage;

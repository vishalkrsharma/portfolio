import AllProjects from '@/app/(root)/projects/all-projects/_sections/all-projects-showcase';
import { notFound } from 'next/navigation';

const ProjectPage = async ({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) => {
  const { slug } = await params;

  if (!slug) notFound();

  return <main className='mx-auto min-h-screen'></main>;
};

export default ProjectPage;

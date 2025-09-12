import AllProjectsShowcase from '@/app/(root)/projects/all-projects/_sections/all-projects-showcase';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

const ProjectPage = () => {
  return (
    <main className='mx-auto min-h-screen flex flex-col items-stretch gap-8 py-16 container px-4'>
      <div className='flex justify-start items-center gap-4'>
        <h1 className='text-2xl font-black'>All projects</h1>
        <Tooltip>
          <TooltipTrigger>
            <Info />
          </TooltipTrigger>
          <TooltipContent className='w-72'>
            <p>All the projects listed below are GitHub repositories and may not be complete or fully functional.</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <AllProjectsShowcase />
    </main>
  );
};

export default ProjectPage;

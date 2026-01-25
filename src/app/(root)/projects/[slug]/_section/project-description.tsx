import { Project } from '@/types/sanity.types';
import { PortableText } from '@portabletext/react';

interface ProjectDescriptionProps {
  description: Project['description'];
}

const ProjectDescription = ({ description }: ProjectDescriptionProps) => {
  return (
    <div className='prose prose-sm max-w-none prose-invert'>
      <PortableText value={description} />
    </div>
  );
};

export default ProjectDescription;

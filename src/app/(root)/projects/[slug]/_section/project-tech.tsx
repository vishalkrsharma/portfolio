import { Badge } from '@/components/ui/badge';
import { Tech } from '@/types/sanity.types';

const ProjectTech = ({ tech }: { tech: Tech[] }) => {
  return <div className='flex gap-2'>{tech?.map((techItem) => <Badge key={techItem.slug.current}></Badge>)}</div>;
};

export default ProjectTech;

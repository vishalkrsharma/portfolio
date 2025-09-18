import { Badge } from '@/components/ui/badge';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { urlFor } from '@/sanity/lib/image';
import { Category, Project, Tech } from '@/types/sanity.types';
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }: { project: Project }) => {
  const tech = project.tech as unknown as Tech[];
  const category = project.category as unknown as Category;

  return (
    <Link
      href={'/projects/' + project.slug.current}
      className='min-h-[14rem] group'
    >
      <div className='relative bg-neutral-100 dark:bg-neutral-900 h-full rounded-2xl border p-2 md:rounded-3xl group-hover:bg-neutral-200 dark:group-hover:bg-neutral-900 transition-colors duration-700'>
        <div className='relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl p-3 bg-background'>
          <div className='relative flex justify-center items-center min-h-32 group overflow-hidden rounded-2xl'>
            {project.heroImage?.asset ? (
              <Image
                src={urlFor(project.heroImage.asset).url()}
                alt={project.title}
                height={200}
                width={300}
                className='w-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out'
              />
            ) : (
              <ImageIcon />
            )}
            <Badge className='absolute top-2 right-2'>{category.title}</Badge>
          </div>
          <h3 className='text-2xl font-semibold text-balance'>{project.title}</h3>
          <div className='flex flex-wrap justify-start items-center gap-2'>
            {tech?.map((tech) => (
              <Badge
                variant='secondary'
                key={tech.slug.current}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
      </div>
    </Link>
  );
};

export default ProjectCard;

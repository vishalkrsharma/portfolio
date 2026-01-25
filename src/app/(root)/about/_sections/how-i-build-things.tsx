import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { TECH_QUERY } from '@/sanity/lib/queries';
import { Tech } from '@/types/sanity.types';
import Image from 'next/image';

const HowIBuildThings = async () => {
  const {
    data: techs,
  }: {
    data: Tech[];
  } = await sanityFetch({ query: TECH_QUERY });

  return (
    <div className='space-y-4'>
      <h2 className='font-doto text-3xl'>How I Build Things</h2>
      <p>I craft digital experiences that are fast, responsive, and user-focused — from backend logic to the final pixel on screen.</p>
      <div className='flex justify-center items-center gap-10 flex-wrap max-w-4xl mx-auto'>
        {techs.map((tech) => (
          <Tooltip key={tech.slug.current}>
            <TooltipTrigger>
              <Image
                src={urlFor(tech.icon.asset).url()}
                alt={tech.name}
                width={48}
                height={48}
              />
            </TooltipTrigger>
            <TooltipContent side='bottom'>{tech.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default HowIBuildThings;

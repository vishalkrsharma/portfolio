import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { PLATFORMS_DATA } from '@/data/platforms.data';
import Link from 'next/link';

const Platforms = () => {
  return (
    <div className='flex justify-center items-center gap-4 flex-wrap'>
      {PLATFORMS_DATA.map((platform) => (
        <Tooltip key={platform.title}>
          <TooltipTrigger asChild>
            <Link
              key={platform.title}
              href={platform.href}
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col justify-center items-center gap-2 p-4 hover:scale-105 transition-transform'
            >
              <platform.icon size={48} />
            </Link>
          </TooltipTrigger>
          <TooltipContent side='bottom'>{platform.title}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default Platforms;

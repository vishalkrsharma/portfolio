import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';

const Devtools = ({ className }: { className?: string }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className={cn('rounded-full', className)}
        >
          <Info />
        </Button>
      </TooltipTrigger>
      <TooltipContent
        side='right'
        className='max-w-[200px]'
      >
        Loosely designed in <b>pen and paper</b>. Built with <b>Next.js</b>, <b>TypeScript</b> and <b>tailwindcss</b>, deployed with Vercel. All text is set in
        the <b>Doto</b> and
        <b> Fire Code</b> typeface.
      </TooltipContent>
    </Tooltip>
  );
};

export default Devtools;

import { cn } from '@/lib/utils';
import { HashLoader } from 'react-spinners/';

const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex justify-center items-center', className)}>
      <HashLoader
        color='#ffffff'
        className='text-white'
      />
    </div>
  );
};

export default Loader;

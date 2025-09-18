import { Avatar } from '@/components/ui/avatar';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='w-full fixed top-0 left-0 right-0 z-10 bg-card border-b shadow'>
      <nav className='h-16 mx-auto px-2 flex justify-between items-center gap-4'>
        <Link
          href='/'
          className='flex items-center gap-4'
        >
          <Avatar
            name={process.env.NEXT_PUBLIC_USERNAME || '-'}
            size={40}
          />
          <h1 className='text-xl font-medium'>vishalkrsharma</h1>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

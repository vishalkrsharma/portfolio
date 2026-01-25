'use client';

import { Frown } from 'lucide-react';

const ErrorPage = ({ error }: { error: Error }) => {
  console.log(error);

  return (
    <main className='min-h-screen flex flex-col justify-center items-center gap-8'>
      <Frown size={100} />
      <div className='text-center space-y-4'>
        <h1 className='text-4xl font-black'>Something went wrong!</h1>
        <p className='text-muted-foreground'>{error.message}</p>
      </div>
    </main>
  );
};

export default ErrorPage;

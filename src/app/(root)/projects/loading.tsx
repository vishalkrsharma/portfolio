import Loader from '@/components/ui/loader';

const LoadingPage = () => {
  return (
    <main className='mx-auto min-h-screen space-y-8 py-16 flex justify-center items-center'>
      <Loader />
    </main>
  );
};

export default LoadingPage;

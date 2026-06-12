import BlogCard from '@/app/(root)/blogs/_components/blog-card';
import { getBlogs } from '@/services/blogs.services';

const BlogsShowcase = async () => {
  const { data: blogs, success, message } = await getBlogs();

  return (
    <section className='snap-start snap-always min-h-screen container mx-auto px-4 py-10 relative flex flex-col justify-center items-center gap-8'>
      <div className='flex justify-between items-center gap-4 w-full'>
        <h2 className='md:text-3xl lg:text-4xl font-semibold'>My Articles</h2>
      </div>
      {!success ? (
        <p className='text-muted-foreground text-sm'>{message}</p>
      ) : blogs.length === 0 ? (
        <p className='text-muted-foreground text-sm'>No articles found.</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
          {blogs.map((blog) => (
            <BlogCard
              key={blog.guid}
              blog={blog}
            />
          ))}
        </div>
      )}
      <div className='absolute bottom-0 h-px w-full snap-end pointer-events-none' />
    </section>
  );
};

export default BlogsShowcase;

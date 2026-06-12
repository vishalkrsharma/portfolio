import Hero from './_sections/hero';
import BlogsShowcase from './_sections/blogs-showcase';

export const metadata = {
  title: '@vishalkrsharma | Blogs',
  description: 'Articles and write-ups by Vishal Kumar Sharma on software engineering, web development, and technology.',
};

export default function BlogsPage() {
  return (
    <main className='h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth'>
      <Hero />
      <BlogsShowcase />
    </main>
  );
}

import { Badge } from '@/components/ui/badge';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { MediumBlogItem } from '@/types/blog.types';
import { CalendarDays, ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ blog }: { blog: MediumBlogItem }) => {
  const formattedDate = new Date(blog.pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link
      href={blog.link}
      target='_blank'
      rel='noopener noreferrer'
      className='min-h-[14rem] group'
    >
      <div className='relative bg-neutral-100 dark:bg-neutral-900 h-full rounded-2xl border p-2 md:rounded-3xl group-hover:bg-neutral-200 dark:group-hover:bg-neutral-800 transition-colors duration-700'>
        <div className='relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-2xl p-3 bg-background'>
          <div className='relative flex justify-center items-center min-h-40 overflow-hidden rounded-2xl bg-muted'>
            {blog.thumbnail ? (
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                fill
                className='object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out'
              />
            ) : (
              <ImageIcon className='text-muted-foreground' />
            )}
          </div>
          <div className='flex flex-col gap-2 flex-1'>
            <h3 className='text-lg font-semibold text-balance leading-tight line-clamp-2'>{blog.title}</h3>
            <div className='flex items-center gap-1 text-xs text-muted-foreground'>
              <CalendarDays size={12} />
              <span>{formattedDate}</span>
            </div>
          </div>
          {blog.categories.length > 0 && (
            <div className='flex flex-wrap gap-1.5'>
              {blog.categories.slice(0, 3).map((cat) => (
                <Badge
                  variant='secondary'
                  key={cat}
                >
                  {cat}
                </Badge>
              ))}
            </div>
          )}
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

export default BlogCard;

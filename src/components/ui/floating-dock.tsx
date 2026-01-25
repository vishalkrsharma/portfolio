'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { TFloatingDockItem } from '@/types/ui.types';
import { IconLayoutNavbarCollapse } from '@tabler/icons-react';
import { LucideProps } from 'lucide-react';
import { AnimatePresence, MotionValue, motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ForwardRefExoticComponent, RefAttributes, useRef, useState } from 'react';

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: TFloatingDockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  const pathname = usePathname();

  if (pathname.includes('studio')) return null;

  return (
    <div className='fixed bottom-4 left-0 right-0 z-50 flex w-full items-center justify-center'>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
      />
      <FloatingDockMobile
        items={items}
        className={mobileClassName}
      />
    </div>
  );
};

const FloatingDockMobile = ({ items, className }: { items: TFloatingDockItem[]; className?: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn('relative block md:hidden w-full', className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId='nav'
            className='absolute right-4 bottom-12 mb-2 flex flex-col gap-2'
          >
            {items.map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  <Link
                    href={item.href}
                    key={item.title}
                    className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900'
                    onClick={() => setOpen(false)}
                  >
                    <Icon />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        onClick={() => setOpen(!open)}
        className='absolute right-4 bottom-0 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800'
      >
        <IconLayoutNavbarCollapse className='h-5 w-5 text-neutral-500 dark:text-neutral-400' />
      </Button>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className }: { items: TFloatingDockItem[]; className?: string }) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn('mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 md:flex dark:bg-neutral-900', className)}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          {...item}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  const Icon = icon;

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className='relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800'
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 2, x: '-50%' }}
              className='absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white'
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className='flex items-center justify-center'
        >
          <Icon />
        </motion.div>
      </motion.div>
    </Link>
  );
}

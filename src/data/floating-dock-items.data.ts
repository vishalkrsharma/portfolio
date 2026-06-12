'use client';

import { TFloatingDockItem } from '@/types/ui.types';
import { FolderGit2, Home, Info, NotebookPen, UserRoundSearch } from 'lucide-react';

export const FLOATING_DOCK_DATA: TFloatingDockItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: Home,
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: FolderGit2,
  },
  {
    title: 'Blogs',
    href: '/blogs',
    icon: NotebookPen,
  },
  {
    title: 'Profiles',
    href: '/profiles',
    icon: UserRoundSearch,
  },
  {
    title: 'About',
    href: '/about',
    icon: Info,
  },
];

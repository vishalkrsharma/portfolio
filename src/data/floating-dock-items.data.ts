'use client';

import { TFloatingDockItem } from '@/types/ui.types';
import { FolderRoot, Home, MessageCircleDashed } from 'lucide-react';

export const FLOATING_DOCK_DATA: TFloatingDockItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: Home,
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: FolderRoot,
  },

  {
    title: 'Socials',
    href: '/socials',
    icon: MessageCircleDashed,
  },
  {
    title: 'About',
    href: '/about',
    icon: MessageCircleDashed,
  },
];

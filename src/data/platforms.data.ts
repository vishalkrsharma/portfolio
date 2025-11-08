import { TPlatform } from '@/types/ui.types';
import { IconBrandLeetcode } from '@tabler/icons-react';
import { Github, Linkedin } from 'lucide-react';

export const PLATFORMS_DATA: TPlatform[] = [
  {
    title: 'GitHub',
    href: 'https://github.com/vishalkrsharma',
    icon: Github,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vishalkrsharma/',
    icon: Linkedin,
  },
  {
    title: 'LeetCode',
    href: 'https://leetcode.com/vishalkrsharma/',
    icon: IconBrandLeetcode as unknown as any,
  },
];

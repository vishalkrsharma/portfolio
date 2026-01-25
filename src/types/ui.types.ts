import { Icon, IconProps } from '@tabler/icons-react';
import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type TFloatingDockItem = {
  title: string;
  icon: ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;
  href: string;
};

export type TPlatform = {
  title: string;
  href: string;
  icon: ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>> | ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
};

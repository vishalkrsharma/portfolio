import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type FloatingDockItem = {
  title: string;
  icon: ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;
  href: string;
};

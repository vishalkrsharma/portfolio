import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type TFloatingDockItem = {
  title: string;
  icon: ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;
  href: string;
};

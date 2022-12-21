import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

export interface HeroCardLinkProps {
  to: string;
  label: ReactNode;
  children: ReactNode;
}

export function HeroCardLink({ to, label, children }: HeroCardLinkProps) {
  return (
    <Link
      to={to}
      className={clsx(
        'block rounded-lg border bg-stone-600 p-4 text-white transition md:p-8',
        'hover:bg-stone-700 hover:text-white hover:shadow-lg',
        'dark:bg-stone-300 dark:text-black dark:hover:bg-stone-400'
      )}
    >
      <h5 className="mb-4 text-lg">{label}</h5>
      {children}
    </Link>
  );
}

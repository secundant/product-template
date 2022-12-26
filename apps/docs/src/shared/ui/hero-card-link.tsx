import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

export interface HeroCardLinkProps {
  to: string;
  icon: ReactNode;
  label: ReactNode;
  children: ReactNode;
  className?: string;
}

export function HeroCardLink({ to, icon, label, children, className }: HeroCardLinkProps) {
  return (
    <Link
      to={to}
      className={clsx(
        'block rounded-xl border bg-zinc-200 p-4 shadow-sm transition md:p-8',
        'hover:scale-105 hover:bg-zinc-300 hover:no-underline hover:shadow-2xl active:scale-100',
        'dark:bg-zinc-800 dark:hover:bg-zinc-700',
        className
      )}
    >
      <h5 className="mb-4 text-xl">{label}</h5>
      <div className="flex gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-stone-400 text-2xl dark:bg-stone-900">
          {icon}
        </div>
        {children}
      </div>
    </Link>
  );
}

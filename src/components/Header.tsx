'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav } from '@/content/site';
import { Button } from './ui';

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="spectrum-line" />
      <div className="glass border-x-0 border-t-0">
        <div className="container-x flex h-[76px] items-center justify-between gap-6">
          <a href="#top" className="flex items-center" aria-label="ARM Tech home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/arm-tech-logo.png" alt="ARM Tech" width={1087} height={433} className="h-12 w-auto sm:h-14" />
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="rounded-full px-3.5 py-2 text-[15px] font-medium text-muted transition-colors hover:text-brand">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button href="#prototype" className="hidden min-h-11 sm:inline-flex">Try the prototype</Button>
            <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="grid size-11 place-items-center rounded-full border border-line bg-white lg:hidden">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <nav aria-label="Mobile" className="container-x flex flex-col gap-1 border-t border-line pb-4 pt-2 lg:hidden">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base font-medium text-text hover:bg-mist">
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

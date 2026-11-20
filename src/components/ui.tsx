'use client';

import { motion, useReducedMotion } from 'motion/react';
import clsx from 'clsx';
import type { ReactNode, PointerEvent } from 'react';

export function Button({ href, children, variant = 'primary', className }: { href: string; children: ReactNode; variant?: 'primary' | 'secondary' | 'ghost-dark' | 'light'; className?: string }) {
  const styles = {
    primary: 'btn-glow text-white',
    secondary: 'glass text-text hover:border-brand/40',
    'ghost-dark': 'glass text-white hover:border-white/30',
    light: 'bg-white text-ink hover:bg-mist',
  }[variant];
  return (
    <a href={href} className={clsx('inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium transition-all duration-200 ease-standard', styles, className)}>
      {children}
    </a>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <p className={clsx('mb-4 font-mono text-[13px] font-medium uppercase tracking-[0.14em]', dark ? 'text-brand-hi' : 'text-brand')}>{children}</p>;
}

export function H2({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return <h2 id={id} className={clsx('t-h2 font-display font-semibold text-balance', className)}>{children}</h2>;
}

export function Aurora({ intensity = 0.5 }: { intensity?: number }) {
  return (
    <div aria-hidden className="aurora" style={{ opacity: intensity }}>
      <span style={{ width: 520, height: 520, left: '-8%', top: '-20%', background: '#00b8e6' }} />
      <span style={{ width: 600, height: 600, right: '-10%', top: '-10%', background: '#1f5fe0' }} />
      <span style={{ width: 420, height: 420, left: '38%', bottom: '-30%', background: '#7fb0ff' }} />
    </div>
  );
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Writes pointer position to CSS vars so .spotlight can draw its glow and gradient border.
export function SpotCard({ children, className }: { children: ReactNode; className?: string }) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return <div onPointerMove={onMove} className={clsx('spotlight card rounded-3xl', className)}>{children}</div>;
}

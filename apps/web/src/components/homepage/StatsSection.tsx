'use client';

import * as React from 'react';

import { Section } from '@cosmas/ui';
import { cn } from '@cosmas/ui';

export interface StatsSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, inView);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 text-center">
      <span className="font-[Fraunces,serif] text-4xl font-medium text-white sm:text-5xl">
        {count}
        {suffix}
      </span>
      <span className="font-[IBM_Plex_Mono,monospace] text-[11px] uppercase tracking-[0.14em] text-[#A1A1AA]">
        {label}
      </span>
    </div>
  );
}

/**
 * StatsSection — TODO: replace placeholder values with verified figures
 * before this ships. These numbers are unverified placeholders.
 */
export const StatsSection = function StatsSection({ className, ...props }: StatsSectionProps) {
  const stats = [
    { value: 5, suffix: '+', label: 'Years Experience' },
    { value: 500, suffix: '+', label: 'Vehicles Delivered' },
    { value: 100, suffix: '%', label: 'Verified Vehicles' },
    { value: 36, suffix: '', label: 'States Delivered To' },
  ];

  return (
    <Section as="section" spacing="md" className={cn(className)}>
      <div
        {...props}
        className="mx-auto max-w-7xl border-y border-white/10 px-6 py-12 lg:px-8 xl:px-10"
      >
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </Section>
  );
};

StatsSection.displayName = 'StatsSection';

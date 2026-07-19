import * as React from 'react';

import { Container, Heading, Section, Text } from '@cosmas/ui';
import { Stack } from '@cosmas/ui';
import { cn } from '@cosmas/ui';

export interface BrowseByBrandProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BrowseByBrand = function BrowseByBrand({ className, ...props }: BrowseByBrandProps) {
  const brands = [
    'Toyota',
    'Honda',
    'Lexus',
    'Mercedes-Benz',
    'BMW',
    'Ford',
    'Hyundai',
    'Kia',
    'Nissan',
  ];

  return (
    <Section as="section" spacing="md" className={cn(className)}>
      <div {...props} className="mx-auto max-w-7xl px-6 lg:px-8 xl:px-10">
        <Stack direction="vertical" gap="lg" align="stretch">
          <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
            <span className="font-[IBM_Plex_Mono,monospace] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF3B4E]">
              Trusted Marques
            </span>
            <Heading
              as="h2"
              className="font-[Fraunces,serif] text-3xl font-medium text-[#F5F5F5] sm:text-4xl"
            >
              Browse by Brand
            </Heading>
            <Text as="p" className="max-w-xl text-[#A1A1AA]">
              The marques we source and deliver most often, from everyday reliability to executive
              comfort.
            </Text>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9">
            {brands.map((name) => (
              <a
                key={name}
                href="#"
                className="group relative flex flex-col items-center gap-3 rounded-[3px] border border-black/10 bg-white p-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C8102E]/60 hover:shadow-[0_14px_30px_-18px_rgba(0,0,0,0.5)]"
              >
                <span className="pointer-events-none absolute right-2 top-2 h-3 w-3 border-r-2 border-t-2 border-[#C8102E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-[#C8102E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C8102E]/30 bg-black/[0.03] text-xl">
                  🚗
                </div>
                <span className="font-[IBM_Plex_Mono,monospace] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#14161A]">
                  {name}
                </span>
              </a>
            ))}
          </div>
        </Stack>
      </div>
    </Section>
  );
};

import * as React from 'react';

import { Heading, Section, Stack, Text, cn } from '@cosmas/ui';
import { VehicleImage } from '../common/VehicleImage';

interface Brand {
  name: string;
  logo: string | null;
}

export interface BrowseByBrandProps extends React.HTMLAttributes<HTMLDivElement> {}

const brands: Brand[] = [
  { name: 'Toyota', logo: '/images/brands/toyota.png' },
  { name: 'Honda', logo: '/images/brands/honda.png' },
  { name: 'Lexus', logo: '/images/brands/lexus.png' },
  { name: 'Mercedes-Benz', logo: '/images/brands/mercedes-benz.png' },
  { name: 'BMW', logo: '/images/brands/bmw.png' },
  { name: 'Ford', logo: '/images/brands/ford.png' },
  { name: 'Hyundai', logo: '/images/brands/hyundai.png' },
  { name: 'Kia', logo: '/images/brands/kia.png' },
  { name: 'Nissan', logo: '/images/brands/nissan.png' },
];

export const BrowseByBrand = function BrowseByBrand({
  className,
  ...props
}: BrowseByBrandProps) {
  return (
    <Section as="section" spacing="md" className={cn(className)}>
      <div
        {...props}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
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
              The marques we source and deliver most often, from everyday
              reliability to executive comfort.
            </Text>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9">
            {brands.map((brand) => (
              <a
                key={brand.name}
                href="#"
                className="group relative flex flex-col items-center gap-3 rounded-[3px] border border-black/10 bg-white p-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C8102E]/60 hover:shadow-[0_14px_30px_-18px_rgba(0,0,0,0.5)]"
              >
                <span className="pointer-events-none absolute right-2 top-2 h-3 w-3 border-r-2 border-t-2 border-[#C8102E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-[#C8102E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#C8102E]/30 bg-black/[0.03]">
                  {brand.logo !== null ? (
                    <div className="relative h-8 w-8">
                      <VehicleImage
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        priority={false}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <span className="font-[Fraunces,serif] text-lg font-medium text-[#14161A]">
                      {brand.name.charAt(0)}
                    </span>
                  )}
                </div>

                <span className="font-[IBM_Plex_Mono,monospace] text-[10px] font-semibold uppercase tracking-[0.08em] text-[#14161A]">
                  {brand.name}
                </span>
              </a>
            ))}
          </div>
        </Stack>
      </div>
    </Section>
  );
};

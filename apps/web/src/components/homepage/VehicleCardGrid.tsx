import * as React from 'react';

import { Heading, Section, Text, Card, cn } from '@cosmas/ui';

import { Stack } from '@cosmas/ui';
import { VehicleImage } from '../common/VehicleImage';

export interface FeaturedVehicle {
  title: string;
  brand: string;
  price: string;
  conditionBadgeLabel: string;
  ratingValue: string;
  stockLabel: string;
  compatibleLabel: string;
  transmission: string;
  fuelType: string;
  mileage: string;
  year: string;
  location: string;
  imageSrc: string;
}

export function VehicleCardGrid({
  vehicles,
  heading,
  description,
  className,
}: {
  vehicles: FeaturedVehicle[];
  heading: string;
  description: string;
  className?: string;
}) {
  return (
    <Section as="section" spacing="md" className={cn(className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 xl:px-10">
        <Stack direction="vertical" gap="lg" align="stretch">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-2">
              <span className="font-[IBM_Plex_Mono,monospace] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF3B4E]">
                Current Inventory
              </span>
              <Heading
                as="h2"
                className="font-[Fraunces,serif] text-3xl font-medium text-[#F5F5F5] sm:text-4xl"
              >
                {heading}
              </Heading>
              <Text as="p" className="max-w-xl text-[#A1A1AA]">
                {description}
              </Text>
            </div>
            <span className="font-[IBM_Plex_Mono,monospace] text-[11px] uppercase tracking-[0.14em] text-[#A1A1AA]">
              {vehicles.length.toString().padStart(2, '0')} vehicles listed
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => (
              <Card
                key={v.title}
                className="group relative overflow-hidden rounded-[3px] border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C8102E]/60 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.5)]"
              >
                <a href="#" className="block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <VehicleImage
                      src={v.imageSrc}
                      alt={v.title}
                      priority={false}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    <span className="absolute left-0 top-4 bg-[#C8102E] px-3 py-1 font-[IBM_Plex_Mono,monospace] text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                      {v.conditionBadgeLabel}
                    </span>

                    <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/75 px-2 py-1 backdrop-blur-sm">
                      <span className="text-[10px] text-[#FF3B4E]">★</span>
                      <span className="font-[IBM_Plex_Mono,monospace] text-[10px] font-semibold text-white">
                        {v.ratingValue}
                      </span>
                    </span>

                    {/* signature: certification-frame brackets */}
                    <span className="pointer-events-none absolute right-3 top-14 h-4 w-4 border-r-2 border-t-2 border-[#C8102E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-[#C8102E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-[#C8102E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <Stack direction="vertical" gap="xs" className="flex flex-col gap-3 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Text
                          as="p"
                          className="font-[IBM_Plex_Mono,monospace] text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8F0B21]"
                        >
                          {v.brand}
                        </Text>
                        <Text
                          as="p"
                          className="mt-0.5 font-[Fraunces,serif] text-lg font-medium leading-snug text-[#14161A]"
                        >
                          {v.title}
                        </Text>
                      </div>
                      <Text
                        as="p"
                        className="whitespace-nowrap font-[IBM_Plex_Mono,monospace] text-sm font-semibold tabular-nums text-[#14161A]"
                      >
                        {v.price}
                      </Text>
                    </div>

                    <div className="h-px bg-black/10" />

                    <Text
                      as="p"
                      className="font-[IBM_Plex_Mono,monospace] text-[11px] uppercase tracking-wide text-[#52525B]"
                    >
                      {v.year} <span className="text-black/20">/</span> {v.mileage}{' '}
                      <span className="text-black/20">/</span> {v.transmission}{' '}
                      <span className="text-black/20">/</span> {v.fuelType}
                    </Text>

                    <div className="flex items-center gap-1.5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C8102E"
                        strokeWidth="3"
                        className="shrink-0"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <Text as="p" className="text-xs font-medium text-[#52525B]">
                        {v.stockLabel} · {v.compatibleLabel} · {v.location}
                      </Text>
                    </div>

                    <div className="mt-1 flex items-center justify-between gap-3 pt-1">
                      <button
                        aria-label="Add to wishlist"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/15 text-[#14161A] transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                        >
                          <path d="M12 21s-6.7-4.35-9.3-8.1C.8 9.8 1.9 6 5.4 5c2-.55 3.9.3 5 1.9L12 8l1.6-1.1c1.1-1.6 3-2.45 5-1.9 3.5 1 4.6 4.8 2.7 7.9C18.7 16.65 12 21 12 21Z" />
                        </svg>
                      </button>
                      <button className="flex-1 rounded-[2px] bg-[#14161A] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#C8102E]">
                        View Details
                      </button>
                    </div>
                  </Stack>
                </a>
              </Card>
            ))}
          </div>
        </Stack>
      </div>
    </Section>
  );
}

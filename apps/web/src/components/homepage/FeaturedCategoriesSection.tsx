import * as React from 'react';

import { Card, Heading, Section, Text } from '@cosmas/ui';
import { Stack } from '@cosmas/ui';
import { cn } from '@cosmas/ui';
import { VehicleImage } from '../common/VehicleImage';

export interface FeaturedCategoriesSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FeaturedCategoriesSection = function FeaturedCategoriesSection({
  className,
  ...props
}: FeaturedCategoriesSectionProps) {
  const categories = [
    {
      code: 'NEW',
      title: 'Brand New Cars',
      description: 'Latest model year vehicles with dealer warranty options.',
      image: '/images/categories/Toyota Camry-2022.jpg',
    },
    {
      code: 'TOKUNBO',
      title: 'Tokunbo Cars',
      description: 'Imported used cars sourced for condition and reliability.',
      image: '/images/categories/toyota-camry-white-2020-front.jpg',
    },
    {
      code: 'N-USED',
      title: 'Nigerian Used Cars',
      description: 'Locally used stock checked for roadworthiness.',
      image: '/images/categories/toyota-corolla-blue-2020-front.jpg',
    },
    {
      code: 'SUV',
      title: 'SUVs',
      description: 'Comfortable, spacious SUVs for family and business use.',
      image: '/images/categories/bmw-x5-2021-white-000.jpg',
    },
    {
      code: 'SEDAN',
      title: 'Sedans',
      description: 'Stylish sedans with great fuel economy and comfort.',
      image: '/images/categories/honda-accord-2022-black.jpg',
    },
    {
      code: 'PICKUP',
      title: 'Pickup Trucks',
      description: 'Work-ready pickups for hauling and heavy duty use.',
      image: '/images/categories/Toyota Highlander-red-2021-.jpg',
    },
    {
      code: 'LUXURY',
      title: 'Luxury Cars',
      description: 'Premium models with advanced comfort and performance.',
      image: '/images/categories/Mercedes-Benz GLC-Class.jpg',
    },
    {
      code: 'EV',
      title: 'Electric Vehicles',
      description: 'EV options with modern tech for cleaner drives.',
      image: '/images/categories/Honda.jpg',
    },
  ];

  return (
    <Section as="section" spacing="md" className={cn(className)}>
      <div {...props} className="mx-auto max-w-7xl px-6 lg:px-8 xl:px-10">
        <Stack direction="vertical" gap="lg" align="stretch">
          <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
            <span className="font-[IBM_Plex_Mono,monospace] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF3B4E]">
              Browse by Type
            </span>
            <Heading
              as="h2"
              className="font-[Fraunces,serif] text-3xl font-medium text-[#F5F5F5] sm:text-4xl"
            >
              Explore Vehicle Categories
            </Heading>
            <Text as="p" className="max-w-xl text-[#A1A1AA]">
              New, Tokunbo, and Nigerian used vehicles — plus SUVs, sedans, pickups, luxury, and
              electric options.
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Card
                key={cat.title}
                className="group relative overflow-hidden rounded-[3px] border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C8102E]/60 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.5)]"
              >
                <a href="#" className="block">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/[0.04]">
                    <span className="absolute left-0 top-4 z-10 bg-[#C8102E] px-3 py-1 font-[IBM_Plex_Mono,monospace] text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                      {cat.code}
                    </span>
                    <span className="pointer-events-none absolute right-3 top-3 z-10 h-4 w-4 border-r-2 border-t-2 border-[#C8102E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute bottom-3 left-3 z-10 h-4 w-4 border-b-2 border-l-2 border-[#C8102E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute bottom-3 right-3 z-10 h-4 w-4 border-b-2 border-r-2 border-[#C8102E] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {cat.image ? (
                      <VehicleImage
                        src={cat.image}
                        alt={cat.title}
                        priority={false}
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs font-medium uppercase tracking-wide text-[#52525B]">
                        Vehicle image
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5 p-4">
                    <Text
                      as="p"
                      className="font-[Fraunces,serif] text-lg font-medium text-[#14161A]"
                    >
                      {cat.title}
                    </Text>
                    <Text as="p" className="text-sm text-[#52525B]">
                      {cat.description}
                    </Text>
                  </div>
                </a>
              </Card>
            ))}
          </div>
        </Stack>
      </div>
    </Section>
  );
};

import * as React from 'react';

import Image from 'next/image';

import { cn } from '@cosmas/ui';
import { Container, PrimaryButton, SecondaryButton, Section } from '@cosmas/ui';

export interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function HeroSection({ className, ...props }: HeroSectionProps) {
  return (
    <Section as="section" className={cn(className)}>
      <div className="relative min-h-[90vh] overflow-hidden bg-[#0D0D0F]">
        {/* Background Logo */}
        <Image
          src="/images/hero/hero-banner.jpg"
          alt="Cosmas Autos"
          fill
          priority
          sizes="100vw"
          className="object-contain object-right opacity-65 scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />

        {/* Content */}
        <div className="relative z-10">
          <Container size="xl">
            <div {...props} className="flex min-h-[90vh] flex-col justify-between">
              {/* Hero Content */}
              <div className="pt-28 lg:pt-36">
                <div className="max-w-xl">
                  <span className="font-[IBM_Plex_Mono,monospace] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF3B4E]">
                    — Est. in Abuja, Nigeria
                  </span>

                  <h1 className="mt-6 mb-12 font-[Fraunces,serif] text-[2.8rem] font-medium leading-[1.03] text-white sm:text-6xl lg:text-7xl">
                    Buy new and Tokunbo vehicles with{' '}
                    <span className="border-b-2 border-[#C8102E] pb-1">real confidence</span>
                  </h1>

                  <p className="mb-12 max-w-lg text-base leading-8 text-white/75 sm:text-lg">
                    Brand new, Tokunbo, and Nigerian used vehicles, sourced with verified history,
                    professional inspection, and nationwide delivery.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <PrimaryButton className="!rounded-sm !bg-[#C8102E] !px-8 !py-3.5 !text-xs !font-semibold !uppercase !tracking-[0.12em] hover:!bg-[#9F1028]">
                      Browse Inventory
                    </PrimaryButton>

                    <SecondaryButton className="!rounded-sm !border !border-white/30 !bg-transparent !px-8 !py-3.5 !text-xs !font-semibold !uppercase !tracking-[0.12em] !text-white hover:!border-white">
                      Request a Vehicle
                    </SecondaryButton>
                  </div>
                </div>
              </div>

              {/* Bottom Feature Bar */}
              <div className="border-t border-white/10 bg-black/55 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 py-5 font-[IBM_Plex_Mono,monospace] text-[11px] uppercase tracking-[0.15em] text-white/70 sm:grid-cols-4">
                  <span>New · Tokunbo · Used</span>
                  <span className="hidden sm:block">Verified Vehicle History</span>
                  <span className="hidden sm:block">Professional Inspection</span>
                  <span>Nationwide Delivery</span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  );
}

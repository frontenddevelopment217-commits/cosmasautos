import * as React from 'react';

import { Card, Container, Heading, PrimaryButton, Section, Text } from '@cosmas/ui';
import { Stack } from '@cosmas/ui';
import { cn } from '@cosmas/ui';

export interface PromotionalBannerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PromotionalBanner = function PromotionalBanner({
  className,
  ...props
}: PromotionalBannerProps) {
  return (
    <Section as="section" spacing="md" className={cn(className)}>
      <div {...props} className="mx-auto max-w-7xl px-6 lg:px-8 xl:px-10">
        <Card className="relative overflow-hidden !rounded-[3px] !border !border-white/10 !bg-[#1A1A1D] !p-10 sm:!p-14">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#8F0B21] via-[#FF3B4E] to-[#8F0B21]" />
          <Stack
            direction="vertical"
            gap="md"
            align="stretch"
            className="mx-auto flex max-w-2xl flex-col gap-5"
          >
            <span className="font-[IBM_Plex_Mono,monospace] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF3B4E]">
              Can&apos;t find it in stock?
            </span>
            <Heading
              as="h2"
              className="font-[Fraunces,serif] text-3xl font-medium text-white sm:text-4xl"
            >
              Need a Specific Vehicle?
            </Heading>
            <Text as="p" className="text-white/70">
              We help customers source and import vehicles directly from trusted international
              partners.
            </Text>
            <div className="flex flex-wrap gap-3">
              <PrimaryButton className="!rounded-[2px] !bg-[#C8102E] !px-7 !py-3.5 !text-xs !font-semibold !uppercase !tracking-[0.1em] !text-white hover:!bg-[#8F0B21]">
                Request Vehicle
              </PrimaryButton>
            </div>
          </Stack>
        </Card>
      </div>
    </Section>
  );
};

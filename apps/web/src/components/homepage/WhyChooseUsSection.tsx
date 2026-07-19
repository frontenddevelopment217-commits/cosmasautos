import * as React from 'react';

import { Card, Container, Heading, Section, Text } from '@cosmas/ui';
import { Stack } from '@cosmas/ui';
import { cn } from '@cosmas/ui';

export interface WhyChooseUsSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const WhyChooseUsSection = function WhyChooseUsSection({
  className,
  ...props
}: WhyChooseUsSectionProps) {
  const features = [
    {
      title: 'Trusted Vehicle Sourcing',
      desc: 'We connect you to reliable supply for New, Tokunbo, and request-only imports.',
    },
    {
      title: 'Verified Vehicle History',
      desc: 'We support due diligence with documentation and condition checks.',
    },
    {
      title: 'Nationwide Delivery',
      desc: 'From Lagos to every state — secure handling and dependable delivery coordination.',
    },
    {
      title: 'Transparent Pricing',
      desc: 'Clear communication on costs, timelines, and what to expect next.',
    },
    {
      title: 'Professional Inspection',
      desc: 'Thorough inspection guidance before your vehicle is shipped.',
    },
    {
      title: 'Import Assistance',
      desc: 'We guide you through sourcing to delivery, so you stay in control.',
    },
  ] as const;

  return (
    <Section as="section" spacing="md" className={cn(className)}>
      <Container size="xl">
        <div {...props} className="mx-auto max-w-7xl px-6 lg:px-8 xl:px-10">
          <Stack direction="vertical" gap="lg" align="stretch">
            <div className="flex flex-col gap-2 border-b border-white/10 pb-6">
              <span className="font-[IBM_Plex_Mono,monospace] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF3B4E]">
                Why Cosmas Autos
              </span>
              <Heading
                as="h2"
                className="font-[Fraunces,serif] text-3xl font-medium text-[#F5F5F5] sm:text-4xl"
              >
                Built on Verification, Not Just Inventory
              </Heading>
              <Text as="p" className="max-w-xl text-[#A1A1AA]">
                Everything you need to buy confidently — before, during, and after import.
              </Text>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <Card
                  key={f.title}
                  className="relative overflow-hidden rounded-[3px] border border-black/10 bg-white p-6 transition-colors duration-300 hover:border-[#C8102E]/60"
                >
                  <span className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-[#C8102E]" />
                  <Stack
                    direction="vertical"
                    gap="xs"
                    align="stretch"
                    className="flex flex-col gap-2"
                  >
                    <Text
                      as="p"
                      className="font-[Fraunces,serif] text-lg font-medium text-[#14161A]"
                    >
                      {f.title}
                    </Text>
                    <Text as="p" className="text-sm text-[#52525B]">
                      {f.desc}
                    </Text>
                  </Stack>
                </Card>
              ))}
            </div>
          </Stack>
        </div>
      </Container>
    </Section>
  );
};

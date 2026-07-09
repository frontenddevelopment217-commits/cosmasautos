import * as React from 'react';

import { Card, Container, Heading, Input, PrimaryButton, SecondaryButton, Text } from '@cosmas/ui';
import { Grid } from '@cosmas/ui';
import { Stack } from '@cosmas/ui';
import { Section } from '@cosmas/ui';
import { cn } from '@cosmas/ui';

/**
 * HeroSection
 *
 * First fold homepage introduction.
 */
export interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HeroSection = function HeroSection({ className, ...props }: HeroSectionProps) {
  return (
    <Section as="section" spacing="lg" className={cn(className)}>
      <Container size="xl">
        <div {...props}>
          <Stack direction="vertical" gap="lg" align="stretch">
            <Stack direction="vertical" gap="sm">
              <Heading as="h1">Find Your Next Vehicle with Confidence</Heading>
              <Text as="p">
                Explore curated featured listings, discover categories, and get updates straight to
                your inbox.
              </Text>
            </Stack>

            <Stack direction="horizontal" gap="sm" wrap>
              <PrimaryButton>Explore Featured</PrimaryButton>
              <SecondaryButton>Browse Categories</SecondaryButton>
            </Stack>

            <Grid columns={3} gap="md">
              {(
                [
                  'Trusted sourcing',
                  'Transparent info',
                  'Fast discovery',
                  'Quality checks',
                  'Clear pricing',
                  'Simple steps',
                ] as const
              ).map((label) => (
                <Card key={label} outlined>
                  <Text as="p" className="">
                    {label}
                  </Text>
                </Card>
              ))}
            </Grid>
          </Stack>
        </div>
      </Container>
    </Section>
  );
};

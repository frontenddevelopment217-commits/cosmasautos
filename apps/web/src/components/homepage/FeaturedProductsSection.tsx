import * as React from 'react';

import { Card, Container, Grid, Heading, Section, Text } from '@cosmas/ui';
import { Stack } from '@cosmas/ui';
import { cn } from '@cosmas/ui';

/**
 * FeaturedProductsSection
 *
 * Placeholder grid of featured products.
 */
export interface FeaturedProductsSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FeaturedProductsSection = function FeaturedProductsSection({
  className,
  ...props
}: FeaturedProductsSectionProps) {
  const cards = ['Model A', 'Model B', 'Model C', 'Model D', 'Model E', 'Model F'];

  return (
    <Section as="section" spacing="md" className={cn(className)}>
      <Container>
        <div {...props}>
          <Stack direction="vertical" gap="md" align="stretch">
            <Stack direction="vertical" gap="xs">
              <Heading as="h2">Featured Vehicles</Heading>
              <Text as="p">A simple placeholder grid using Card and layout primitives.</Text>
            </Stack>

            <Grid columns={3} gap="md">
              {cards.map((title) => (
                <Card key={title} elevated>
                  <Stack direction="vertical" gap="sm" align="stretch">
                    <Text as="p">{title}</Text>
                    <Text as="p">Placeholder details</Text>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Stack>
        </div>
      </Container>
    </Section>
  );
};

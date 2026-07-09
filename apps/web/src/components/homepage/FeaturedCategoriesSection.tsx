import * as React from 'react';

import { Card, Container, Heading, Section, Text, Grid } from '@cosmas/ui';
import { Stack } from '@cosmas/ui';
import { cn } from '@cosmas/ui';

/**
 * FeaturedCategoriesSection
 *
 * Displays a placeholder grid of featured categories.
 */
export interface FeaturedCategoriesSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FeaturedCategoriesSection = function FeaturedCategoriesSection({
  className,
  ...props
}: FeaturedCategoriesSectionProps) {
  const cards = ['Sedans', 'SUVs', 'Trucks', 'EVs', 'Hybrids', 'Certified Pre-Owned'];

  return (
    <Section as="section" spacing="md" className={cn(className)}>
      <Container>
        <div {...props}>
          <Stack direction="vertical" gap="md" align="stretch">
            <Stack direction="vertical" gap="xs">
              <Heading as="h2">Featured Categories</Heading>
              <Text as="p">Browse placeholder category cards to explore what you might find.</Text>
            </Stack>

            <Grid columns={3} gap="md">
              {cards.map((title) => (
                <Card key={title} outlined>
                  <Text as="p">{title}</Text>
                </Card>
              ))}
            </Grid>
          </Stack>
        </div>
      </Container>
    </Section>
  );
};

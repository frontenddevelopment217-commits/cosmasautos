import * as React from 'react';

import { Card, Container, Grid, Heading, Section } from '@cosmas/ui';
import { Stack } from '@cosmas/ui';
import { Text } from '@cosmas/ui';
import { cn } from '@cosmas/ui';

/**
 * BrandLogos
 *
 * Placeholder logo strip.
 */
export interface BrandLogosProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BrandLogos = function BrandLogos({ className, ...props }: BrandLogosProps) {
  const logos = ['Brand One', 'Brand Two', 'Brand Three', 'Brand Four', 'Brand Five', 'Brand Six'];

  return (
    <Section as="section" spacing="md" className={cn(className)}>
      <Container>
        <div {...props}>
          <Stack direction="vertical" gap="sm" align="stretch">
            <Heading as="h2">Trusted By Drivers</Heading>
            <Text as="p">Placeholder brand logos rendered as simple labeled boxes.</Text>

            <Grid columns={3} gap="sm">
              {logos.map((name) => (
                <Card key={name} outlined>
                  <Stack direction="vertical" gap="xs" align="stretch">
                    <Text as="p">{name}</Text>
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

import * as React from 'react';

import { Card, Container, Grid, Heading, Section, Text } from '@cosmas/ui';
import { Stack } from '@cosmas/ui';
import { cn } from '@cosmas/ui';

/**
 * WhyChooseUsSection
 *
 * Four placeholder feature cards.
 */
export interface WhyChooseUsSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const WhyChooseUsSection = function WhyChooseUsSection({
  className,
  ...props
}: WhyChooseUsSectionProps) {
  const features = [
    { title: 'Curated Listings', desc: 'Placeholder value proposition text for clarity.' },
    { title: 'Transparent Process', desc: 'Simple steps designed to reduce surprises.' },
    { title: 'Expert Guidance', desc: 'Helpful placeholders for support and advice.' },
    { title: 'Fast Discovery', desc: 'Find what matters quickly with featured filters.' },
  ] as const;

  return (
    <Section as="section" spacing="md" className={cn(className)}>
      <Container>
        <div {...props}>
          <Stack direction="vertical" gap="md" align="stretch">
            <Stack direction="vertical" gap="xs">
              <Heading as="h2">Why Choose Us</Heading>
              <Text as="p">Four simple placeholder cards emphasizing key value points.</Text>
            </Stack>

            <Grid columns={2} gap="md">
              {features.map((f) => (
                <Card key={f.title} outlined>
                  <Stack direction="vertical" gap="xs" align="stretch">
                    <Text as="p">{f.title}</Text>
                    <Text as="p">{f.desc}</Text>
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

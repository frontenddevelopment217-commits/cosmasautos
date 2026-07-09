import * as React from 'react';

import { Card, Container, Heading, PrimaryButton, Section, Text } from '@cosmas/ui';
import { Stack } from '@cosmas/ui';
import { cn } from '@cosmas/ui';

/**
 * FooterCTA
 *
 * Final homepage CTA before the shared footer.
 */
export interface FooterCTAProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FooterCTA = function FooterCTA({ className, ...props }: FooterCTAProps) {
  return (
    <Section as="section" spacing="md" className={cn(className)}>
      <Container>
        <div {...props}>
          <Card outlined>
            <Stack direction="vertical" gap="md" align="stretch">
              <Heading as="h2">Ready to Find the Right Fit?</Heading>
              <Text as="p">Placeholder final CTA card with a single button.</Text>
              <Stack direction="horizontal" gap="sm" wrap>
                <PrimaryButton>Contact Sales</PrimaryButton>
              </Stack>
            </Stack>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

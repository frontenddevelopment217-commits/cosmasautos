import * as React from 'react';

import { Card, Container, Heading, PrimaryButton, Section, Text } from '@cosmas/ui';
import { Stack } from '@cosmas/ui';
import { cn } from '@cosmas/ui';

/**
 * PromotionalBanner
 *
 * Mid-page promotional callout.
 */
export interface PromotionalBannerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PromotionalBanner = function PromotionalBanner({
  className,
  ...props
}: PromotionalBannerProps) {
  return (
    <Section as="section" spacing="md" className={cn(className)}>
      <Container>
        <div {...props}>
          <Card elevated>
            <Stack direction="vertical" gap="md" align="stretch">
              <Heading as="h2">Special Offers This Week</Heading>
              <Text as="p">Placeholder promo copy with a single primary CTA button.</Text>
              <Stack direction="horizontal" gap="sm" wrap>
                <PrimaryButton>See Promotions</PrimaryButton>
              </Stack>
            </Stack>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

import * as React from 'react';

import { Stack } from '../layout/Stack';
import { Text } from '../typography/Text';

export type VehicleSpecsProps = {
  className?: string;
};

export function VehicleSpecs({ className }: VehicleSpecsProps) {
  return (
    <Stack className={className} gap="xs" direction="vertical">
      <Text as="p" style={{ margin: 0 } as any}>
        Vehicle specs
      </Text>
      <Text as="small" style={{ margin: 0, opacity: 0.85 } as any}>
        Placeholder details (Phase 2):
      </Text>
      <Stack gap="xs" direction="vertical">
        <Text as="small" style={{ margin: 0 } as any}>
          • Engine: —
        </Text>
        <Text as="small" style={{ margin: 0 } as any}>
          • Transmission: —
        </Text>
        <Text as="small" style={{ margin: 0 } as any}>
          • Drive: —
        </Text>
      </Stack>
    </Stack>
  );
}

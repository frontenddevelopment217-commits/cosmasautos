import * as React from 'react';

import { Pagination, Stack } from '@cosmas/ui';

export function CatalogPagination() {
  return (
    <Stack direction="horizontal" justify="flex-end" style={{ width: '100%' }}>
      <Pagination currentPage={1} totalPages={3} />
    </Stack>
  );
}


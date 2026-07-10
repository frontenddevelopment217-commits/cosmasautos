import * as React from 'react';

import { Price } from './Price';

export type PriceDisplayProps = {
  /** Displayed formatted price text (currency formatting is the caller's responsibility). */
  value?: string;
};

export function PriceDisplay(props: PriceDisplayProps) {
  return <Price value={props.value} />;
}

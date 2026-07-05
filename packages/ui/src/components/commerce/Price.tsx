import * as React from 'react';

export type PriceProps = {
  value?: string;
};

export function Price(props: PriceProps) {
  return <span>{props.value ?? ''}</span>;
}

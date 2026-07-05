import * as React from 'react';

export type VehicleCardProps = {
  children?: React.ReactNode;
};

export function VehicleCard(props: VehicleCardProps) {
  return <div>{props.children}</div>;
}

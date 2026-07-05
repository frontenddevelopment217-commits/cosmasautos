import * as React from 'react';

export type NavbarProps = {
  children?: React.ReactNode;
};

export function Navbar(props: NavbarProps) {
  return <nav>{props.children}</nav>;
}

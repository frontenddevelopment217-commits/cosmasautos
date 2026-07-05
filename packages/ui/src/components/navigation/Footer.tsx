import * as React from 'react';

export type FooterProps = {
  children?: React.ReactNode;
};

export function Footer(props: FooterProps) {
  return <footer>{props.children}</footer>;
}

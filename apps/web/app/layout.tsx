import './globals.css';
import type { Metadata } from 'next';

import { AppShell } from '../src/components/app-shell';

export const metadata: Metadata = {
  title: 'Cosmas Autos',
  description: 'Automotive ecommerce platform foundation',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

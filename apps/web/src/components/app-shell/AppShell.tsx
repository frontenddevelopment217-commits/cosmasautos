import * as React from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { PageContainer } from './PageContainer';

/**
 * Props for the AppShell component.
 */
export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content to render inside the shell. */
  children?: React.ReactNode;
}

/**
 * AppShell
 *
 * Reusable application shell for apps/web.
 *
 * Composes:
 * - Header
 * - Main page content container
 * - Footer
 */
export function AppShell({ children, ...props }: AppShellProps) {
  return (
    <div {...props}>
      <header>
        <Header />
      </header>

      <main>
        <PageContainer>{children}</PageContainer>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

AppShell.displayName = 'AppShell';

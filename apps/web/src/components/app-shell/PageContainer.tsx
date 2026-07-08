import * as React from 'react';

/**
 * Props for the PageContainer component.
 */
export interface PageContainerProps extends React.HTMLAttributes<HTMLElement> {
  /** Page content. */
  children?: React.ReactNode;
}

/**
 * PageContainer
 *
 * Wraps page-level content with layout constraints.
 */
export function PageContainer({ children, style, ...props }: PageContainerProps) {
  return (
    <main
      {...props}
      style={{
        width: '100%',
        maxWidth: 1280,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 24,
        paddingBottom: 24,
        ...style,
      }}
    >
      {children}
    </main>
  );
}

PageContainer.displayName = 'PageContainer';

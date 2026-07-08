import * as React from 'react';

import { cn } from '../../utils/cn';
import type { ClassValue } from '../../utils/cn';

/**
 * Lightweight tooltip.
 */
export type TooltipProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'role' | 'children' | 'content'
> & {
  /** Tooltip content. */
  content: React.ReactNode;
  /** Tooltip trigger children. */
  children: React.ReactElement;
  /** Controls whether tooltip is visible. */
  open?: boolean;
  /** Optional id for aria-describedby compatibility. */
  id?: string;
  /** Additional className for tooltip bubble. */
  className?: ClassValue;
};

/**
 * Consolidated tooltip component.
 */
export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(function Tooltip(
  { content, children, open, id, className, ...divProps },
  ref,
) {
  const tooltipId = id ?? React.useId();
  const [hovered, setHovered] = React.useState(false);

  const isOpen = open ?? hovered;

  const childProps = {
    onMouseEnter: (e: React.MouseEvent) => {
      // `children.props` is `unknown` under this project's React typing; treat it as a plain props bag.
      const props = (children.props ?? {}) as Record<string, unknown>;
      (props as { onMouseEnter?: (event: React.MouseEvent) => void }).onMouseEnter?.(e);
      setHovered(true);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      const props = (children.props ?? {}) as Record<string, unknown>;
      (props as { onMouseLeave?: (event: React.MouseEvent) => void }).onMouseLeave?.(e);
      setHovered(false);
    },
    'aria-describedby': isOpen
      ? tooltipId
      : (children.props as Record<string, unknown> | undefined)?.['aria-describedby'],
  } as const;

  return (
    <span style={styles.wrapper}>
      {React.cloneElement(children, childProps)}
      {isOpen ? (
        <div
          {...divProps}
          ref={ref}
          id={tooltipId}
          role="tooltip"
          className={cn(styles.bubble, className as unknown as string)}
          style={{ ...styles.bubbleInline, ...(divProps.style ?? {}) }}
        >
          {content}
        </div>
      ) : null}
    </span>
  );
});

Tooltip.displayName = 'Tooltip';

const styles = {
  wrapper: {
    position: 'relative',
    display: 'inline-flex',
  } as React.CSSProperties,
  bubble: 'cosmas-tooltip-bubble',
  bubbleInline: {
    position: 'absolute',
    left: '50%',
    bottom: '100%',
    transform: 'translateX(-50%)',
    marginBottom: 8,
    background: '#111827',
    color: '#FFFFFF',
    borderRadius: 8,
    padding: '8px 10px',
    fontSize: 12,
    lineHeight: 1.2,
    whiteSpace: 'nowrap',
    zIndex: 70,
  } as React.CSSProperties,
};

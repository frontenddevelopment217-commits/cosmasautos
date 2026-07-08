import * as React from 'react';

import { tokens } from '../../styles';
import { cn } from '../../utils';

/**
 * Tabs.
 *
 * Accessible tablist + panels implementation.
 */
export type TabsProps = React.ComponentPropsWithoutRef<'div'> & {
  /** Tab definitions */
  tabs: Array<{
    id: string;
    label: string;
    panel: React.ReactNode;
    disabled?: boolean;
  }>;
  /** Controlled selected tab id */
  value?: string;
  /** Default selected tab id (uncontrolled) */
  defaultValue?: string;
  /** Called when selection changes */
  onValueChange?: (value: string) => void;
};

function getFirstEnabledTabId(tabs: TabsProps['tabs']): string | null {
  return tabs.find((t) => !t.disabled)?.id ?? null;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  { className, style, tabs, value, defaultValue, onValueChange, ...rest },
  ref,
) {

  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = React.useState(() => {
    return defaultValue ?? getFirstEnabledTabId(tabs) ?? '';
  });

  const selectedValue = isControlled ? value! : uncontrolledValue;

  React.useEffect(() => {
    if (!isControlled) {
      // If selected tab becomes disabled or disappears, fall back.
      const exists = tabs.some((t) => t.id === selectedValue && !t.disabled);
      if (!exists) {
        const nextId = getFirstEnabledTabId(tabs) ?? '';
        setUncontrolledValue(nextId);
        if (nextId) onValueChange?.(nextId);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabs]);

  const setSelected = React.useCallback(
    (nextId: string) => {
      if (isControlled) {
        onValueChange?.(nextId);
      } else {
        setUncontrolledValue(nextId);
        onValueChange?.(nextId);
      }
    },
    [isControlled, onValueChange],
  );

  const selectedIndex = Math.max(
    0,
    tabs.findIndex((t) => t.id === selectedValue && !t.disabled),
  );

  const tabIds = tabs.map((t) => t.id);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key;
    const enabledIndices = tabs
      .map((t, idx) => (!t.disabled ? idx : -1))
      .filter((idx) => idx !== -1) as number[];

    if (enabledIndices.length === 0) return;

    const currentEnabledIndexInList = enabledIndices.indexOf(tabIds.indexOf(selectedValue));

    let nextEnabledIndex: number | null = null;

    if (key === 'ArrowRight') {
      const nextPos =
        currentEnabledIndexInList === -1
          ? 0
          : (currentEnabledIndexInList + 1) % enabledIndices.length;
      nextEnabledIndex = enabledIndices[nextPos];
    } else if (key === 'ArrowLeft') {
      const nextPos =
        currentEnabledIndexInList === -1
          ? enabledIndices.length - 1
          : (currentEnabledIndexInList - 1 + enabledIndices.length) % enabledIndices.length;
      nextEnabledIndex = enabledIndices[nextPos];
    } else if (key === 'Home') {
      nextEnabledIndex = enabledIndices[0];
    } else if (key === 'End') {
      nextEnabledIndex = enabledIndices[enabledIndices.length - 1];
    }

    if (nextEnabledIndex === null) return;

    event.preventDefault();
    const nextTab = tabs[nextEnabledIndex];
    if (!nextTab.disabled) {
      setSelected(nextTab.id);

      const tabEl = document.getElementById(`ui-tab-${nextTab.id}`);
      (tabEl as HTMLButtonElement | null)?.focus?.();
    }
  };

  return (
    <div
      ref={ref}
      className={cn('ui-tabs', className)}
      style={{
        fontFamily: tokens.typography.fontFamily.sans,
        ...style,
      }}
      {...rest}
    >
      <div
        role="tablist"
        aria-orientation="horizontal"
        onKeyDown={handleKeyDown}
        style={{
          display: 'flex',
          gap: tokens.spacing.sm,
          borderBottom: `1px solid ${tokens.colors.border.base}`,
          paddingBottom: tokens.spacing.sm,
        }}
      >
        {tabs.map((tab, idx) => {
          const isSelected = tab.id === selectedValue;
          const tabId = `ui-tab-${tab.id}`;
          const panelId = `ui-tabpanel-${tab.id}`;

          return (
            <button
              key={tab.id}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isSelected ? 'true' : 'false'}

              aria-controls={panelId}
              disabled={tab.disabled}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => {
                if (!tab.disabled) setSelected(tab.id);
              }}
              style={{
                cursor: tab.disabled ? 'not-allowed' : 'pointer',
                padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
                borderRadius: tokens.radius.sm,
                border: `1px solid ${
                  isSelected ? tokens.colors.primary.base : tokens.colors.border.base
                }`,
                backgroundColor: isSelected
                  ? tokens.colors.primary.base
                  : tokens.colors.surface.base,
                color: isSelected ? tokens.colors.primary.onBase : tokens.colors.text.secondary,
                fontWeight: tokens.typography.fontWeight.medium,
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab) => {
        const isSelected = tab.id === selectedValue;
        const panelId = `ui-tabpanel-${tab.id}`;
        const tabId = `ui-tab-${tab.id}`;
        return (
          <div
            key={tab.id}
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId}
            hidden={!isSelected}
            style={{
              paddingTop: tokens.spacing.lg,
            }}
          >
            {tab.panel}
          </div>
        );
      })}
    </div>
  );
});

Tabs.displayName = 'Tabs';

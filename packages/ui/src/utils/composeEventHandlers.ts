import type * as React from '../react';

/**
 * Compose two event handlers for React synthetic events.
 *
 * Calls the user handler first. If the event was prevented, skips the internal handler.
 */
export function composeEventHandlers<E extends { defaultPrevented: boolean }>(
  userHandler?: (event: E) => void,
  internalHandler?: (event: E) => void,
) {
  return (event: E) => {
    userHandler?.(event);

    if (event.defaultPrevented) return;

    internalHandler?.(event);
  };
}

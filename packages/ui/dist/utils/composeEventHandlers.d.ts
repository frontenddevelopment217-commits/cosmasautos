/**
 * Compose two event handlers for React synthetic events.
 *
 * Calls the user handler first. If the event was prevented, skips the internal handler.
 */
export declare function composeEventHandlers<E extends {
    defaultPrevented: boolean;
}>(userHandler?: (event: E) => void, internalHandler?: (event: E) => void): (event: E) => void;

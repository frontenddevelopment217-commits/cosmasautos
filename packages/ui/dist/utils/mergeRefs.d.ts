/**
 * Merge multiple refs into a single callback ref.
 */
export declare function mergeRefs<T>(...refs: Array<React.Ref<T> | undefined>): React.RefCallback<T>;

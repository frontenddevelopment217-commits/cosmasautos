/**
 * Merge multiple refs into a single callback ref.
 */
export function mergeRefs<T>(...refs: Array<React.Ref<T> | undefined>): React.RefCallback<T> {
  return (value: T) => {
    for (const ref of refs) {
      if (!ref) continue;

      if (typeof ref === 'function') {
        ref(value);
        continue;
      }

      // MutableRefObject
      (ref as { current: T }).current = value;
    }
  };
}

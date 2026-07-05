export type ClassValue = string | false | null | undefined | ClassValue[];

/**
 * Merge class values into a single className string.
 */
export function cn(...classes: ClassValue[]): string {
  const result: string[] = [];

  const visit = (value: ClassValue): void => {
    if (typeof value === 'string') {
      if (value !== '') result.push(value);
      return;
    }

    if (!value) return; // false | null | undefined

    // nested arrays
    for (const item of value) {
      visit(item);
    }
  };

  for (const cls of classes) visit(cls);
  return result.join(' ');
}

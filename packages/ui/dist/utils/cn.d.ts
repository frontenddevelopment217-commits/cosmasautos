export type ClassValue = string | false | null | undefined | ClassValue[];
/**
 * Merge class values into a single className string.
 */
export declare function cn(...classes: ClassValue[]): string;

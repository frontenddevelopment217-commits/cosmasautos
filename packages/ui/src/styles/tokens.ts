/**
 * @fileoverview Consolidated design tokens.
 *
 * This module aggregates all token groups into a single `tokens` object.
 */

import { animations } from './animations';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { radius } from './radius';
import { shadows } from './shadows';
import { spacing } from './spacing';
import { typography } from './typography';
import { zIndex } from './zIndex';

/**
 * Consolidated design token object.
 */
export const tokens = {
  colors,
  spacing,
  typography,
  radius,
  shadows,
  breakpoints,
  animations,
  zIndex,
} as const;

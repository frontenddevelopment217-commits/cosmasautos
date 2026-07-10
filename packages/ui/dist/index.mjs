import * as React8 from 'react';

// src/components/buttons/ButtonBase.tsx

// src/styles/colors.ts
var colors = {
  /** Brand primary actions and emphasis. */
  primary: {
    /** Solid primary base. */
    base: "#2563EB",
    /** Primary hover. */
    hover: "#1D4ED8",
    /** Primary active/pressed. */
    active: "#1E40AF",
    /** Primary text color on solid backgrounds. */
    onBase: "#FFFFFF"
  },
  /** Secondary actions (less prominent than primary). */
  secondary: {
    base: "#4F46E5",
    hover: "#4338CA",
    active: "#3730A3",
    onBase: "#FFFFFF"
  },
  /** Success state semantics. */
  success: {
    base: "#16A34A",
    hover: "#15803D",
    active: "#166534",
    onBase: "#FFFFFF"
  },
  /** Warning state semantics. */
  warning: {
    base: "#F59E0B",
    hover: "#D97706",
    active: "#B45309",
    onBase: "#111827"
  },
  /** Danger state semantics. */
  danger: {
    base: "#DC2626",
    hover: "#B91C1C",
    active: "#991B1B",
    onBase: "#FFFFFF"
  },
  /** Surface/background colors for cards/panels. */
  surface: {
    /** Default surface background. */
    base: "#FFFFFF",
    /** Elevated surface (e.g. dropdown, modal background). */
    elevated: "#F9FAFB",
    /** Muted surface used for subtle blocks. */
    muted: "#F3F4F6",
    /** Divider line color. */
    border: "#E5E7EB",
    /** Text color on surfaces. */
    onBase: "#111827"
  },
  /** Global page background semantics. */
  background: {
    base: "#F9FAFB",
    elevated: "#FFFFFF"
  },
  /** Text semantics. */
  text: {
    primary: "#111827",
    secondary: "#4B5563",
    muted: "#6B7280",
    inverse: "#FFFFFF"
  },
  /** Border semantics for focus rings, outlines, and separators. */
  border: {
    base: "#E5E7EB",
    subtle: "#F3F4F6",
    focus: "#2563EB"
  }
};

// src/styles/spacing.ts
var spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "2rem"
};

// src/styles/typography.ts
var typography = {
  /** Font family stacks. */
  fontFamily: {
    sans: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
  },
  /** Font size scale (CSS-ready rem strings). */
  fontSize: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "2rem"
  },
  /** Font weight scale. */
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  /** Line heights for readability and vertical rhythm. */
  lineHeight: {
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.75
  },
  /** Letter spacing scale (CSS-ready em strings). */
  letterSpacing: {
    tight: "-0.02em",
    normal: "0em",
    wide: "0.02em"
  }
};

// src/styles/radius.ts
var radius = {
  none: "0",
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  full: "9999px"
};

// src/styles/shadows.ts
var shadows = {
  none: "none",
  sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px rgba(0, 0, 0, 0.08)",
  lg: "0 10px 15px rgba(0, 0, 0, 0.12)",
  xl: "0 20px 25px rgba(0, 0, 0, 0.14)"
};

// src/styles/breakpoints.ts
var breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
};

// src/styles/animations.ts
var animations = {
  /** Duration scale (CSS-ready ms strings). */
  duration: {
    fast: "150ms",
    normal: "200ms",
    slow: "300ms"
  },
  /** Easing tokens. */
  easing: {
    /** Standard UI easing. */
    standard: "cubic-bezier(0.4, 0, 0.2, 1)",
    /** Emphasizes acceleration then deceleration. */
    emphasize: "cubic-bezier(0.2, 0, 0, 1)"
  },
  /** Transition presets that can be used as CSS transition values. */
  transitionPresets: {
    /** Common interactive transition. */
    interactive: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)",
    /** Focus / hover transition with easing. */
    focus: "box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms cubic-bezier(0.4, 0, 0.2, 1)",
    /** Modal enter/exit transition. */
    modal: "opacity 200ms cubic-bezier(0.2, 0, 0, 1), transform 200ms cubic-bezier(0.2, 0, 0, 1)"
  }
};

// src/styles/zIndex.ts
var zIndex = {
  base: 0,
  dropdown: 50,
  sticky: 60,
  overlay: 70,
  modal: 80,
  popover: 75,
  tooltip: 90,
  toast: 100
};

// src/styles/tokens.ts
var tokens = {
  colors,
  spacing,
  typography,
  radius,
  shadows,
  breakpoints,
  animations,
  zIndex
};

// src/utils/cn.ts
function cn(...classes) {
  const result = [];
  const visit = (value) => {
    if (typeof value === "string") {
      if (value !== "") result.push(value);
      return;
    }
    if (!value) return;
    for (const item of value) {
      visit(item);
    }
  };
  for (const cls of classes) visit(cls);
  return result.join(" ");
}

// src/utils/mergeRefs.ts
function mergeRefs(...refs) {
  return (value) => {
    for (const ref of refs) {
      if (!ref) continue;
      if (typeof ref === "function") {
        ref(value);
        continue;
      }
      ref.current = value;
    }
  };
}

// src/utils/composeEventHandlers.ts
function composeEventHandlers(userHandler, internalHandler) {
  return (event) => {
    userHandler?.(event);
    if (event.defaultPrevented) return;
    internalHandler?.(event);
  };
}

// src/utils/isBrowser.ts
var isBrowser = typeof window !== "undefined";

// src/utils/noop.ts
function noop() {
}

// src/components/buttons/ButtonBase.tsx
function getButtonStyles(variant, size) {
  const v = variant;
  ({
    sm: tokens.spacing.sm,
    md: tokens.spacing.md,
    lg: tokens.spacing.lg
  });
  ({
    sm: tokens.spacing.md,
    md: tokens.spacing.lg,
    lg: tokens.spacing.xl
  });
  ({
    sm: tokens.typography.fontSize.sm,
    md: tokens.typography.fontSize.md,
    lg: tokens.typography.fontSize.lg
  });
  ({
    sm: tokens.typography.lineHeight.normal,
    md: tokens.typography.lineHeight.normal,
    lg: tokens.typography.lineHeight.normal
  });
  ({
    sm: tokens.typography.fontWeight.medium,
    md: tokens.typography.fontWeight.semibold,
    lg: tokens.typography.fontWeight.semibold
  });
  if (v === "primary") {
    return {
      background: tokens.colors.primary.base,
      color: tokens.colors.primary.onBase,
      borderColor: tokens.colors.primary.base,
      hoverBackground: tokens.colors.primary.hover
    };
  }
  return {
    background: tokens.colors.secondary.base,
    color: tokens.colors.secondary.onBase,
    borderColor: tokens.colors.secondary.base,
    hoverBackground: tokens.colors.secondary.hover
  };
}
var ButtonBase = React8.forwardRef(function ButtonBase2({
  className,
  children,
  disabled,
  loading,
  size = "md",
  variant = "primary",
  type = "button",
  ...rest
}, ref) {
  const isDisabled = disabled || loading;
  const styles = getButtonStyles(variant);
  return /* @__PURE__ */ React8.createElement(
    "button",
    {
      ref,
      type,
      disabled: isDisabled,
      className: cn("ui-button", className),
      "data-variant": variant,
      "data-size": size,
      style: {
        // Note: style is used only to consume design tokens; it is not tailwind-dependent.
        // The appearance is token-derived and consistent with the design system.
        backgroundColor: styles.background,
        color: styles.color,
        borderColor: styles.borderColor,
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: tokens.radius.md,
        paddingTop: tokens.spacing.md,
        paddingBottom: tokens.spacing.md,
        paddingLeft: tokens.spacing.lg,
        paddingRight: tokens.spacing.lg,
        boxShadow: "none",
        fontFamily: tokens.typography.fontFamily.sans,
        fontSize: size === "sm" ? tokens.typography.fontSize.sm : size === "lg" ? tokens.typography.fontSize.lg : tokens.typography.fontSize.md,
        fontWeight: tokens.typography.fontWeight.semibold,
        lineHeight: tokens.typography.lineHeight.normal,
        letterSpacing: tokens.typography.letterSpacing.normal,
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 0.65 : 1
      },
      ...rest
    },
    loading ? /* @__PURE__ */ React8.createElement("span", { "aria-hidden": "true" }, "\u2026") : children
  );
});
var PrimaryButton = React8.forwardRef(
  function PrimaryButton2({ className, children, size = "md", loading, disabled, type, ...rest }, ref) {
    return /* @__PURE__ */ React8.createElement(
      ButtonBase,
      {
        ref,
        type: type ?? "button",
        variant: "primary",
        size,
        loading,
        disabled,
        className: cn("ui-button-primary", className),
        ...rest
      },
      children
    );
  }
);
var SecondaryButton = React8.forwardRef(
  function SecondaryButton2({ className, children, size = "md", loading, disabled, type, ...rest }, ref) {
    return /* @__PURE__ */ React8.createElement(
      ButtonBase,
      {
        ref,
        type: type ?? "button",
        variant: "secondary",
        size,
        loading,
        disabled,
        className: cn("ui-button-secondary", className),
        ...rest
      },
      children
    );
  }
);
var IconButton = React8.forwardRef(
  function IconButton2({ className, children, loading, disabled, type, "aria-label": ariaLabel, ...rest }, ref) {
    return /* @__PURE__ */ React8.createElement(
      ButtonBase,
      {
        ref,
        type: type ?? "button",
        variant: "primary",
        size: "md",
        loading,
        disabled,
        "aria-label": ariaLabel,
        className: cn("ui-icon-button", className),
        ...rest
      },
      children
    );
  }
);
var Input = React8.forwardRef(function Input2({ label, helperText, error, className, id: idProp, "aria-describedby": ariaDescribedBy, ...rest }, ref) {
  const id = idProp ?? void 0;
  const reactId = React8.useId();
  const labelId = id ? `${id}__label` : `ui-input-label__${reactId}`;
  const helperId = `${labelId}__helper`;
  const errorId = `${labelId}__error`;
  const describedByParts = [
    ariaDescribedBy,
    helperText ? helperId : void 0,
    error ? errorId : void 0
  ].filter(Boolean);
  const invalid = error != null && error !== false && error !== "";
  return /* @__PURE__ */ React8.createElement("div", { className: cn("ui-input-root", className) }, label ? /* @__PURE__ */ React8.createElement("label", { id: labelId, htmlFor: id, style: labelStyle }, label) : null, /* @__PURE__ */ React8.createElement(
    "input",
    {
      ...rest,
      id,
      ref: mergeRefs(ref),
      className: cn("ui-input", rest.className),
      "aria-invalid": invalid || Boolean(rest["aria-invalid"]),
      "aria-describedby": describedByParts.length ? describedByParts.join(" ") : void 0,
      style: inputStyle(invalid)
    }
  ), helperText ? /* @__PURE__ */ React8.createElement("div", { id: helperId, className: "ui-input-helper", style: helperStyle }, helperText) : null, invalid ? /* @__PURE__ */ React8.createElement("div", { id: errorId, className: "ui-input-error", style: errorStyle }, error) : null);
});
Input.displayName = "Input";
var labelStyle = {
  fontFamily: tokens.typography.fontFamily.sans,
  fontSize: tokens.typography.fontSize.sm,
  fontWeight: tokens.typography.fontWeight.medium,
  lineHeight: tokens.typography.lineHeight.normal,
  color: tokens.colors.text.secondary,
  marginBottom: tokens.spacing.xs,
  display: "block"
};
function inputStyle(invalid) {
  return {
    fontFamily: tokens.typography.fontFamily.sans,
    fontSize: tokens.typography.fontSize.md,
    lineHeight: tokens.typography.lineHeight.normal,
    paddingTop: tokens.spacing.md,
    paddingBottom: tokens.spacing.md,
    paddingLeft: tokens.spacing.lg,
    paddingRight: tokens.spacing.lg,
    borderRadius: tokens.radius.md,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: invalid ? tokens.colors.danger.base : tokens.colors.border.base,
    backgroundColor: tokens.colors.surface.base,
    color: tokens.colors.text.primary,
    boxShadow: "none",
    outline: "none"
  };
}
var helperStyle = {
  fontFamily: tokens.typography.fontFamily.sans,
  fontSize: tokens.typography.fontSize.sm,
  lineHeight: tokens.typography.lineHeight.normal,
  marginTop: tokens.spacing.xs,
  color: tokens.colors.text.muted
};
var errorStyle = {
  fontFamily: tokens.typography.fontFamily.sans,
  fontSize: tokens.typography.fontSize.sm,
  lineHeight: tokens.typography.lineHeight.normal,
  marginTop: tokens.spacing.xs,
  color: tokens.colors.danger.base
};
var TextArea = React8.forwardRef(function TextArea2({ label, helperText, error, className, id: idProp, "aria-describedby": ariaDescribedBy, ...rest }, ref) {
  const id = idProp ?? void 0;
  const reactId = React8.useId();
  const labelId = id ? `${id}__label` : `ui-textarea-label__${reactId}`;
  const helperId = `${labelId}__helper`;
  const errorId = `${labelId}__error`;
  const describedByParts = [
    ariaDescribedBy,
    helperText ? helperId : void 0,
    error ? errorId : void 0
  ].filter(Boolean);
  const invalid = error != null && error !== false && error !== "";
  return /* @__PURE__ */ React8.createElement("div", { className: cn("ui-textarea-root", className) }, label ? /* @__PURE__ */ React8.createElement("label", { id: labelId, htmlFor: id, style: labelStyle2 }, label) : null, /* @__PURE__ */ React8.createElement(
    "textarea",
    {
      ...rest,
      id,
      ref: mergeRefs(ref),
      className: cn("ui-textarea", rest.className),
      "aria-invalid": invalid || Boolean(rest["aria-invalid"]),
      "aria-describedby": describedByParts.length ? describedByParts.join(" ") : void 0,
      style: inputStyle2(invalid)
    }
  ), helperText ? /* @__PURE__ */ React8.createElement("div", { id: helperId, className: "ui-textarea-helper", style: helperStyle2 }, helperText) : null, invalid ? /* @__PURE__ */ React8.createElement("div", { id: errorId, className: "ui-textarea-error", style: errorStyle2 }, error) : null);
});
TextArea.displayName = "TextArea";
var labelStyle2 = {
  fontFamily: tokens.typography.fontFamily.sans,
  fontSize: tokens.typography.fontSize.sm,
  fontWeight: tokens.typography.fontWeight.medium,
  lineHeight: tokens.typography.lineHeight.normal,
  color: tokens.colors.text.secondary,
  marginBottom: tokens.spacing.xs,
  display: "block"
};
function inputStyle2(invalid) {
  return {
    fontFamily: tokens.typography.fontFamily.sans,
    fontSize: tokens.typography.fontSize.md,
    lineHeight: tokens.typography.lineHeight.normal,
    paddingTop: tokens.spacing.md,
    paddingBottom: tokens.spacing.md,
    paddingLeft: tokens.spacing.lg,
    paddingRight: tokens.spacing.lg,
    borderRadius: tokens.radius.md,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: invalid ? tokens.colors.danger.base : tokens.colors.border.base,
    backgroundColor: tokens.colors.surface.base,
    color: tokens.colors.text.primary,
    boxShadow: "none",
    outline: "none",
    resize: "vertical",
    minHeight: "6rem"
  };
}
var helperStyle2 = {
  fontFamily: tokens.typography.fontFamily.sans,
  fontSize: tokens.typography.fontSize.sm,
  lineHeight: tokens.typography.lineHeight.normal,
  marginTop: tokens.spacing.xs,
  color: tokens.colors.text.muted
};
var errorStyle2 = {
  fontFamily: tokens.typography.fontFamily.sans,
  fontSize: tokens.typography.fontSize.sm,
  lineHeight: tokens.typography.lineHeight.normal,
  marginTop: tokens.spacing.xs,
  color: tokens.colors.danger.base
};
var Select = React8.forwardRef(function Select2({ label, helperText, error, className, id, "aria-describedby": ariaDescribedBy, ...rest }, ref) {
  const reactId = React8.useId();
  const labelId = id ? `${id}__label` : `ui-select-label__${reactId}`;
  const helperId = `${labelId}__helper`;
  const errorId = `${labelId}__error`;
  const describedByParts = [
    ariaDescribedBy,
    helperText ? helperId : void 0,
    error ? errorId : void 0
  ].filter(Boolean);
  const invalid = error != null && error !== false && error !== "";
  return /* @__PURE__ */ React8.createElement("div", { className: cn("ui-select-root", className) }, label ? /* @__PURE__ */ React8.createElement("label", { id: labelId, htmlFor: id, style: labelStyle3 }, label) : null, /* @__PURE__ */ React8.createElement(
    "select",
    {
      ...rest,
      id,
      ref: mergeRefs(ref),
      className: cn("ui-select", rest.className),
      "aria-invalid": invalid || Boolean(rest["aria-invalid"]),
      "aria-describedby": describedByParts.length ? describedByParts.join(" ") : void 0,
      style: inputStyle3(invalid)
    }
  ), helperText ? /* @__PURE__ */ React8.createElement("div", { id: helperId, className: "ui-select-helper", style: helperStyle3 }, helperText) : null, invalid ? /* @__PURE__ */ React8.createElement("div", { id: errorId, className: "ui-select-error", style: errorStyle3 }, error) : null);
});
Select.displayName = "Select";
var labelStyle3 = {
  fontFamily: tokens.typography.fontFamily.sans,
  fontSize: tokens.typography.fontSize.sm,
  fontWeight: tokens.typography.fontWeight.medium,
  lineHeight: tokens.typography.lineHeight.normal,
  color: tokens.colors.text.secondary,
  marginBottom: tokens.spacing.xs,
  display: "block"
};
function inputStyle3(invalid) {
  return {
    fontFamily: tokens.typography.fontFamily.sans,
    fontSize: tokens.typography.fontSize.md,
    lineHeight: tokens.typography.lineHeight.normal,
    paddingTop: tokens.spacing.md,
    paddingBottom: tokens.spacing.md,
    paddingLeft: tokens.spacing.lg,
    paddingRight: tokens.spacing.lg,
    borderRadius: tokens.radius.md,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: invalid ? tokens.colors.danger.base : tokens.colors.border.base,
    backgroundColor: tokens.colors.surface.base,
    color: tokens.colors.text.primary,
    boxShadow: "none",
    outline: "none",
    appearance: "auto"
  };
}
var helperStyle3 = {
  fontFamily: tokens.typography.fontFamily.sans,
  fontSize: tokens.typography.fontSize.sm,
  lineHeight: tokens.typography.lineHeight.normal,
  marginTop: tokens.spacing.xs,
  color: tokens.colors.text.muted
};
var errorStyle3 = {
  fontFamily: tokens.typography.fontFamily.sans,
  fontSize: tokens.typography.fontSize.sm,
  lineHeight: tokens.typography.lineHeight.normal,
  marginTop: tokens.spacing.xs,
  color: tokens.colors.danger.base
};
var Checkbox = React8.forwardRef(function Checkbox2({ label, helperText, error, className, id, "aria-describedby": ariaDescribedBy, ...rest }, ref) {
  const reactId = React8.useId();
  const labelId = id ? `${id}__label` : `ui-checkbox-label__${reactId}`;
  const helperId = `${labelId}__helper`;
  const errorId = `${labelId}__error`;
  const describedByParts = [
    ariaDescribedBy,
    helperText ? helperId : void 0,
    error ? errorId : void 0
  ].filter(Boolean);
  const invalid = error != null && error !== false && error !== "";
  return /* @__PURE__ */ React8.createElement("div", { className: cn("ui-checkbox-root", className) }, /* @__PURE__ */ React8.createElement("div", { style: rowStyle }, /* @__PURE__ */ React8.createElement(
    "input",
    {
      ...rest,
      id,
      ref: mergeRefs(ref),
      type: "checkbox",
      className: cn("ui-checkbox", rest.className),
      "aria-invalid": invalid || Boolean(rest["aria-invalid"]),
      "aria-describedby": describedByParts.length ? describedByParts.join(" ") : void 0,
      style: inputStyle4(invalid)
    }
  ), label ? /* @__PURE__ */ React8.createElement("label", { id: labelId, htmlFor: id, style: labelTextStyle }, label) : null), helperText ? /* @__PURE__ */ React8.createElement("div", { id: helperId, className: "ui-checkbox-helper", style: helperStyle4 }, helperText) : null, invalid ? /* @__PURE__ */ React8.createElement("div", { id: errorId, className: "ui-checkbox-error", style: errorStyle4 }, error) : null);
});
Checkbox.displayName = "Checkbox";
var rowStyle = {
  display: "flex",
  alignItems: "center",
  gap: tokens.spacing.sm
};
function inputStyle4(invalid) {
  return {
    width: "1rem",
    height: "1rem",
    borderRadius: tokens.radius.sm,
    accentColor: invalid ? tokens.colors.danger.base : tokens.colors.primary.base
  };
}
var labelTextStyle = {
  fontFamily: tokens.typography.fontFamily.sans,
  fontSize: tokens.typography.fontSize.md,
  lineHeight: tokens.typography.lineHeight.normal,
  color: tokens.colors.text.primary,
  cursor: "pointer"
};
var helperStyle4 = {
  fontFamily: tokens.typography.fontFamily.sans,
  fontSize: tokens.typography.fontSize.sm,
  lineHeight: tokens.typography.lineHeight.normal,
  marginTop: tokens.spacing.xs,
  color: tokens.colors.text.muted
};
var errorStyle4 = {
  fontFamily: tokens.typography.fontFamily.sans,
  fontSize: tokens.typography.fontSize.sm,
  lineHeight: tokens.typography.lineHeight.normal,
  marginTop: tokens.spacing.xs,
  color: tokens.colors.danger.base
};
var maxWidthBySize = {
  sm: "28rem",
  md: "36rem",
  lg: "48rem",
  xl: "60rem",
  full: "100%"
};
var Container = React8.forwardRef(function Container2({ children, className, size = "md", ...rest }, ref) {
  return /* @__PURE__ */ React8.createElement(
    "div",
    {
      ref,
      className: cn("ui-container", className),
      style: {
        width: "100%",
        marginInline: "auto",
        maxWidth: maxWidthBySize[size],
        paddingInline: tokens.spacing.lg
      },
      ...rest
    },
    children
  );
});
Container.displayName = "Container";
var paddingYBySpacing = {
  none: "0",
  sm: tokens.spacing.sm,
  md: tokens.spacing.md,
  lg: tokens.spacing.lg
};
var Section = React8.forwardRef(function Section2({ children, className, as = "section", spacing: spacing2 = "md", ...rest }, ref) {
  const Element = as;
  return /* @__PURE__ */ React8.createElement(
    Element,
    {
      ref,
      className: cn("ui-section", className),
      style: {
        paddingTop: paddingYBySpacing[spacing2],
        paddingBottom: paddingYBySpacing[spacing2],
        ...rest.style
      },
      ...rest
    },
    children
  );
});
Section.displayName = "Section";
var gapByToken = {
  none: "0",
  xs: tokens.spacing.xs,
  sm: tokens.spacing.sm,
  md: tokens.spacing.md,
  lg: tokens.spacing.lg,
  xl: tokens.spacing.xl
};
var Stack = React8.forwardRef(function Stack2({ children, className, direction = "vertical", gap = "md", align, justify, wrap, ...rest }, ref) {
  return /* @__PURE__ */ React8.createElement(
    "div",
    {
      ref,
      className: cn("ui-stack", className),
      style: {
        display: "flex",
        flexDirection: direction === "horizontal" ? "row" : "column",
        gap: gapByToken[gap],
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? "wrap" : "nowrap"
      },
      ...rest
    },
    children
  );
});
Stack.displayName = "Stack";
var gapByToken2 = {
  none: "0",
  xs: tokens.spacing.xs,
  sm: tokens.spacing.sm,
  md: tokens.spacing.md,
  lg: tokens.spacing.lg,
  xl: tokens.spacing.xl
};
var Grid = React8.forwardRef(function Grid2({ children, className, columns = 1, gap = "md", ...rest }, ref) {
  return /* @__PURE__ */ React8.createElement(
    "div",
    {
      ref,
      className: cn("ui-grid", className),
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${columns},minmax(0,1fr))`,
        gap: gapByToken2[gap]
      },
      ...rest
    },
    children
  );
});
Grid.displayName = "Grid";
var Navbar = React8.forwardRef(function Navbar2({ className, style, ...rest }, ref) {
  return /* @__PURE__ */ React8.createElement(
    "nav",
    {
      ref,
      className: cn("ui-navbar", className),
      style: {
        padding: tokens.spacing.lg,
        backgroundColor: tokens.colors.background.base,
        borderBottom: `1px solid ${tokens.colors.border.base}`,
        fontFamily: tokens.typography.fontFamily.sans,
        ...style
      },
      ...rest
    }
  );
});
Navbar.displayName = "Navbar";
var Footer = React8.forwardRef(function Footer2({ className, style, ...rest }, ref) {
  return /* @__PURE__ */ React8.createElement(
    "footer",
    {
      ref,
      className: cn("ui-footer", className),
      style: {
        padding: tokens.spacing.lg,
        backgroundColor: tokens.colors.background.elevated,
        borderTop: `1px solid ${tokens.colors.border.base}`,
        fontFamily: tokens.typography.fontFamily.sans,
        ...style
      },
      ...rest
    }
  );
});
Footer.displayName = "Footer";
var Breadcrumb = React8.forwardRef(function Breadcrumb2({ className, style, items, ...rest }, ref) {
  const currentIndex = Math.max(-1, ...items.map((it, idx) => it.isCurrent ? idx : -1));
  return /* @__PURE__ */ React8.createElement(
    "nav",
    {
      ref,
      "aria-label": "Breadcrumb",
      className: cn("ui-breadcrumb", className),
      style: {
        padding: tokens.spacing.md,
        fontFamily: tokens.typography.fontFamily.sans,
        color: tokens.colors.text.secondary,
        ...style
      },
      ...rest
    },
    /* @__PURE__ */ React8.createElement(
      "ol",
      {
        style: {
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          gap: tokens.spacing.sm,
          alignItems: "center"
        }
      },
      items.map((item, idx) => {
        const isCurrent = idx === currentIndex || item.isCurrent === true;
        return /* @__PURE__ */ React8.createElement("li", { key: `${item.label}-${idx}`, "aria-current": isCurrent ? "page" : void 0 }, item.href && !isCurrent ? /* @__PURE__ */ React8.createElement(
          "a",
          {
            href: item.href,
            style: {
              color: tokens.colors.primary.base,
              textDecoration: "none"
            }
          },
          item.label
        ) : /* @__PURE__ */ React8.createElement("span", { style: { color: isCurrent ? tokens.colors.text.primary : "inherit" } }, item.label), idx < items.length - 1 ? /* @__PURE__ */ React8.createElement("span", { "aria-hidden": "true", style: { padding: `0 ${tokens.spacing.xs}` } }, "/") : null);
      })
    )
  );
});
Breadcrumb.displayName = "Breadcrumb";
var Pagination = React8.forwardRef(function Pagination2({ className, style, currentPage, totalPages, onPrevious, onNext, ...rest }, ref) {
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;
  return /* @__PURE__ */ React8.createElement(
    "nav",
    {
      ref,
      "aria-label": "Pagination",
      className: cn("ui-pagination", className),
      style: {
        padding: tokens.spacing.md,
        fontFamily: tokens.typography.fontFamily.sans,
        color: tokens.colors.text.primary,
        ...style
      },
      ...rest
    },
    /* @__PURE__ */ React8.createElement("div", { style: { display: "flex", alignItems: "center", gap: tokens.spacing.sm } }, /* @__PURE__ */ React8.createElement(
      "button",
      {
        type: "button",
        onClick: canGoPrev ? onPrevious : void 0,
        disabled: !canGoPrev,
        "aria-label": "Previous page",
        style: {
          cursor: canGoPrev ? "pointer" : "not-allowed",
          padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
          borderRadius: tokens.radius.sm,
          border: `1px solid ${tokens.colors.border.base}`,
          backgroundColor: tokens.colors.surface.base,
          color: tokens.colors.text.secondary
        }
      },
      "Previous"
    ), /* @__PURE__ */ React8.createElement("div", { "aria-live": "polite", style: { fontWeight: tokens.typography.fontWeight.medium } }, "Page ", currentPage, " of ", totalPages), /* @__PURE__ */ React8.createElement(
      "button",
      {
        type: "button",
        onClick: canGoNext ? onNext : void 0,
        disabled: !canGoNext,
        "aria-label": "Next page",
        style: {
          cursor: canGoNext ? "pointer" : "not-allowed",
          padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
          borderRadius: tokens.radius.sm,
          border: `1px solid ${tokens.colors.border.base}`,
          backgroundColor: tokens.colors.surface.base,
          color: tokens.colors.text.secondary
        }
      },
      "Next"
    ))
  );
});
Pagination.displayName = "Pagination";
function getFirstEnabledTabId(tabs) {
  return tabs.find((t) => !t.disabled)?.id ?? null;
}
var Tabs = React8.forwardRef(function Tabs2({ className, style, tabs, value, defaultValue, onValueChange, ...rest }, ref) {
  const isControlled = value !== void 0;
  const [uncontrolledValue, setUncontrolledValue] = React8.useState(() => {
    return defaultValue ?? getFirstEnabledTabId(tabs) ?? "";
  });
  const selectedValue = isControlled ? value : uncontrolledValue;
  React8.useEffect(() => {
    if (!isControlled) {
      const exists = tabs.some((t) => t.id === selectedValue && !t.disabled);
      if (!exists) {
        const nextId = getFirstEnabledTabId(tabs) ?? "";
        setUncontrolledValue(nextId);
        if (nextId) onValueChange?.(nextId);
      }
    }
  }, [tabs]);
  const setSelected = React8.useCallback(
    (nextId) => {
      if (isControlled) {
        onValueChange?.(nextId);
      } else {
        setUncontrolledValue(nextId);
        onValueChange?.(nextId);
      }
    },
    [isControlled, onValueChange]
  );
  Math.max(
    0,
    tabs.findIndex((t) => t.id === selectedValue && !t.disabled)
  );
  const tabIds = tabs.map((t) => t.id);
  const handleKeyDown = (event) => {
    const key = event.key;
    const enabledIndices = tabs.map((t, idx) => !t.disabled ? idx : -1).filter((idx) => idx !== -1);
    if (enabledIndices.length === 0) return;
    const currentEnabledIndexInList = enabledIndices.indexOf(tabIds.indexOf(selectedValue));
    let nextEnabledIndex = null;
    if (key === "ArrowRight") {
      const nextPos = currentEnabledIndexInList === -1 ? 0 : (currentEnabledIndexInList + 1) % enabledIndices.length;
      nextEnabledIndex = enabledIndices[nextPos];
    } else if (key === "ArrowLeft") {
      const nextPos = currentEnabledIndexInList === -1 ? enabledIndices.length - 1 : (currentEnabledIndexInList - 1 + enabledIndices.length) % enabledIndices.length;
      nextEnabledIndex = enabledIndices[nextPos];
    } else if (key === "Home") {
      nextEnabledIndex = enabledIndices[0];
    } else if (key === "End") {
      nextEnabledIndex = enabledIndices[enabledIndices.length - 1];
    }
    if (nextEnabledIndex === null) return;
    event.preventDefault();
    const nextTab = tabs[nextEnabledIndex];
    if (!nextTab.disabled) {
      setSelected(nextTab.id);
      const tabEl = document.getElementById(`ui-tab-${nextTab.id}`);
      tabEl?.focus?.();
    }
  };
  return /* @__PURE__ */ React8.createElement(
    "div",
    {
      ref,
      className: cn("ui-tabs", className),
      style: {
        fontFamily: tokens.typography.fontFamily.sans,
        ...style
      },
      ...rest
    },
    /* @__PURE__ */ React8.createElement(
      "div",
      {
        role: "tablist",
        "aria-orientation": "horizontal",
        onKeyDown: handleKeyDown,
        style: {
          display: "flex",
          gap: tokens.spacing.sm,
          borderBottom: `1px solid ${tokens.colors.border.base}`,
          paddingBottom: tokens.spacing.sm
        }
      },
      tabs.map((tab, idx) => {
        const isSelected = tab.id === selectedValue;
        const tabId = `ui-tab-${tab.id}`;
        const panelId = `ui-tabpanel-${tab.id}`;
        return /* @__PURE__ */ React8.createElement(
          "button",
          {
            key: tab.id,
            id: tabId,
            type: "button",
            role: "tab",
            "aria-selected": isSelected ? "true" : "false",
            "aria-controls": panelId,
            disabled: tab.disabled,
            tabIndex: isSelected ? 0 : -1,
            onClick: () => {
              if (!tab.disabled) setSelected(tab.id);
            },
            style: {
              cursor: tab.disabled ? "not-allowed" : "pointer",
              padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
              borderRadius: tokens.radius.sm,
              border: `1px solid ${isSelected ? tokens.colors.primary.base : tokens.colors.border.base}`,
              backgroundColor: isSelected ? tokens.colors.primary.base : tokens.colors.surface.base,
              color: isSelected ? tokens.colors.primary.onBase : tokens.colors.text.secondary,
              fontWeight: tokens.typography.fontWeight.medium
            }
          },
          tab.label
        );
      })
    ),
    tabs.map((tab) => {
      const isSelected = tab.id === selectedValue;
      const panelId = `ui-tabpanel-${tab.id}`;
      const tabId = `ui-tab-${tab.id}`;
      return /* @__PURE__ */ React8.createElement(
        "div",
        {
          key: tab.id,
          id: panelId,
          role: "tabpanel",
          "aria-labelledby": tabId,
          hidden: !isSelected,
          style: {
            paddingTop: tokens.spacing.lg
          }
        },
        tab.panel
      );
    })
  );
});
Tabs.displayName = "Tabs";
var Card = React8.forwardRef(function Card2({ children, className, elevated, outlined, ...rest }, ref) {
  return /* @__PURE__ */ React8.createElement(
    "div",
    {
      ref,
      className: cn("ui-card", className),
      style: {
        backgroundColor: tokens.colors.surface.base,
        borderRadius: tokens.radius.md,
        padding: tokens.spacing.lg,
        borderWidth: outlined ? "1px" : "0",
        borderStyle: outlined ? "solid" : "solid",
        borderColor: tokens.colors.border.base,
        boxShadow: elevated ? tokens.shadows.md : tokens.shadows.none,
        fontFamily: tokens.typography.fontFamily.sans,
        color: tokens.colors.surface.onBase
      },
      ...rest
    },
    children
  );
});
Card.displayName = "Card";
var getVariantTokens = (variant) => {
  return tokens.colors[variant];
};
var getSizeTokens = (size) => {
  switch (size) {
    case "sm":
      return {
        paddingX: tokens.spacing.sm,
        paddingY: tokens.spacing.xs,
        fontSize: tokens.typography.fontSize.sm,
        lineHeight: tokens.typography.lineHeight.normal,
        fontWeight: tokens.typography.fontWeight.semibold
      };
    case "md":
    default:
      return {
        paddingX: tokens.spacing.md,
        paddingY: tokens.spacing.sm,
        fontSize: tokens.typography.fontSize.md,
        lineHeight: tokens.typography.lineHeight.normal,
        fontWeight: tokens.typography.fontWeight.semibold
      };
  }
};
var Badge = React8.forwardRef(function Badge2({ children, className, variant = "primary", size = "md", ...rest }, ref) {
  const v = getVariantTokens(variant);
  const s = getSizeTokens(size);
  return /* @__PURE__ */ React8.createElement(
    "span",
    {
      ref,
      className: cn("ui-badge", className),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        verticalAlign: "middle",
        gap: tokens.spacing.xs,
        backgroundColor: v.base,
        color: v.onBase,
        borderRadius: tokens.radius.full,
        paddingLeft: s.paddingX,
        paddingRight: s.paddingX,
        paddingTop: s.paddingY,
        paddingBottom: s.paddingY,
        fontFamily: tokens.typography.fontFamily.sans,
        fontSize: s.fontSize,
        lineHeight: s.lineHeight,
        fontWeight: s.fontWeight,
        userSelect: "none",
        whiteSpace: "nowrap"
      },
      ...rest
    },
    children
  );
});
Badge.displayName = "Badge";
var Divider = React8.forwardRef(function Divider2({ className, orientation = "horizontal", ...rest }, ref) {
  return /* @__PURE__ */ React8.createElement(
    "hr",
    {
      ref,
      className: cn("ui-divider", className),
      style: {
        border: "0",
        backgroundColor: tokens.colors.border.base,
        width: orientation === "vertical" ? "1px" : "100%",
        height: orientation === "vertical" ? "100%" : "1px",
        margin: "0",
        flex: orientation === "vertical" ? "0 0 auto" : "0 0 auto",
        alignSelf: orientation === "vertical" ? "stretch" : "auto"
      },
      ...rest
    }
  );
});
Divider.displayName = "Divider";
function getHeadingTokens(as) {
  const t = tokens.typography;
  switch (as) {
    case "h1":
      return {
        fontSize: t.fontSize["3xl"],
        fontWeight: t.fontWeight.bold,
        lineHeight: t.lineHeight.relaxed
      };
    case "h2":
      return {
        fontSize: t.fontSize["2xl"],
        fontWeight: t.fontWeight.semibold,
        lineHeight: t.lineHeight.normal
      };
    case "h3":
      return {
        fontSize: t.fontSize.xl,
        fontWeight: t.fontWeight.semibold,
        lineHeight: t.lineHeight.normal
      };
    case "h4":
      return {
        fontSize: t.fontSize.lg,
        fontWeight: t.fontWeight.medium,
        lineHeight: t.lineHeight.normal
      };
    case "h5":
      return {
        fontSize: t.fontSize.md,
        fontWeight: t.fontWeight.medium,
        lineHeight: t.lineHeight.normal
      };
    case "h6":
      return {
        fontSize: t.fontSize.sm,
        fontWeight: t.fontWeight.normal,
        lineHeight: t.lineHeight.snug
      };
  }
}
var HeadingBase = React8.forwardRef(function HeadingBase2(props, ref) {
  const { as, children, className, ...rest } = props;
  const Element = as ?? "h2";
  const headingTokens = getHeadingTokens(Element);
  return /* @__PURE__ */ React8.createElement(
    Element,
    {
      ref,
      className: cn("ui-heading", className),
      style: {
        fontFamily: tokens.typography.fontFamily.sans,
        fontSize: headingTokens.fontSize,
        fontWeight: headingTokens.fontWeight,
        lineHeight: headingTokens.lineHeight,
        letterSpacing: tokens.typography.letterSpacing.normal
      },
      ...rest
    },
    children
  );
});
HeadingBase.displayName = "Heading";
var Heading = HeadingBase;
function getTextTokens(as) {
  const t = tokens.typography;
  switch (as) {
    case "small":
      return {
        fontSize: t.fontSize.sm,
        fontWeight: t.fontWeight.normal,
        lineHeight: t.lineHeight.snug
      };
    case "p":
    case "span":
    case "label":
      return {
        fontSize: t.fontSize.md,
        fontWeight: t.fontWeight.normal,
        lineHeight: t.lineHeight.normal
      };
  }
}
var TextBase = React8.forwardRef(function TextBase2(props, ref) {
  const { as, children, className, ...rest } = props;
  const Element = as ?? "p";
  const textTokens = getTextTokens(Element);
  return /* @__PURE__ */ React8.createElement(
    Element,
    {
      ref,
      className: cn("ui-text", className),
      style: {
        fontFamily: tokens.typography.fontFamily.sans,
        fontSize: textTokens.fontSize,
        fontWeight: textTokens.fontWeight,
        lineHeight: textTokens.lineHeight,
        letterSpacing: tokens.typography.letterSpacing.normal
      },
      ...rest
    },
    children
  );
});
TextBase.displayName = "Text";
var Text = TextBase;
var SectionHeading = React8.forwardRef(function SectionHeading2({ children, as = "h2", ...rest }, ref) {
  return /* @__PURE__ */ React8.createElement(Heading, { as, ref, ...rest }, children);
});
SectionHeading.displayName = "SectionHeading";
function Price(props) {
  return /* @__PURE__ */ React8.createElement("span", null, props.value ?? "");
}

// src/components/commerce/PriceDisplay.tsx
function PriceDisplay(props) {
  return /* @__PURE__ */ React8.createElement(Price, { value: props.value });
}
var StockBadge = React8.forwardRef(function StockBadge2({ label = "In stock", variant = "success" }, ref) {
  return /* @__PURE__ */ React8.createElement(Badge, { ref, variant }, label);
});
StockBadge.displayName = "StockBadge";
var BrandBadge = React8.forwardRef(function BrandBadge2({ brand }, ref) {
  return /* @__PURE__ */ React8.createElement(Badge, { ref, variant: "secondary" }, brand ?? "");
});
BrandBadge.displayName = "BrandBadge";
var CompatibilityBadge = React8.forwardRef(function CompatibilityBadge2({ label = "Compatible" }, ref) {
  return /* @__PURE__ */ React8.createElement(Badge, { ref, variant: "primary" }, label);
});
CompatibilityBadge.displayName = "CompatibilityBadge";
var Rating = React8.forwardRef(function Rating2({ value, variant = "warning", className }, ref) {
  return /* @__PURE__ */ React8.createElement(Badge, { ref, variant, className: cn(className) }, value ?? "");
});
Rating.displayName = "Rating";
function VehicleCard(props) {
  return /* @__PURE__ */ React8.createElement("div", null, props.children);
}

export { Badge, BrandBadge, Breadcrumb, ButtonBase, Card, Checkbox, CompatibilityBadge, Container, Divider, Footer, Grid, Heading, IconButton, Input, Navbar, Pagination, Price, PriceDisplay, PrimaryButton, Rating, SecondaryButton, Section, SectionHeading, Select, Stack, StockBadge, Tabs, Text, TextArea, VehicleCard, animations, breakpoints, cn, colors, composeEventHandlers, isBrowser, mergeRefs, noop, radius, shadows, spacing, tokens, typography, zIndex };

declare module "@material-ui/core/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false; // removes the `sm` breakpoint
    md: false; // removes the `md` breakpoint
    lg: false; // removes the `lg` breakpoint
    xl: false; // removes the `xl` breakpoint
    tablet: true; // adds the `tablet` breakpoint
    mobile: true; // adds the `mobile` breakpoint
    desktop: true; // adds the `desktop` breakpoint
  }
}

export {};

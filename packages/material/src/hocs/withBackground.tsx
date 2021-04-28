import React from "react";
import { BackgroundProvider, BackgroundProviderProps } from "..";

interface WithBackgroundProps {
  backgroundColor?: BackgroundProviderProps["backgroundColor"];
}

function withBackground<P extends WithBackgroundProps, RefType extends Element>(
  Component: React.ComponentType<P>,
  defaultBackgroundColor?: WithBackgroundProps["backgroundColor"]
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<RefType>
> {
  const WithBackground: React.ForwardRefRenderFunction<RefType, P> = (
    props,
    ref
  ) => (
    <BackgroundProvider
      backgroundColor={
        props.backgroundColor ?? defaultBackgroundColor ?? "level4"
      }
    >
      <Component {...props} ref={ref} />
    </BackgroundProvider>
  );

  return React.forwardRef(WithBackground);
}

export default withBackground;

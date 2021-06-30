import React from "react";
import { BackgroundProvider, BackgroundProviderProps } from "..";

interface WithBackgroundProps {
  backgroundColor?: BackgroundProviderProps["backgroundColor"];
  forwardedRef?: React.Ref<unknown>;
}

function withBackground<P extends WithBackgroundProps>(
  Component: React.ComponentType<P>,
  defaultBackgroundColor?: WithBackgroundProps["backgroundColor"]
): React.FunctionComponent<P> {
  const WithBackground: React.FunctionComponent<P> = (props) => (
    <BackgroundProvider
      backgroundColor={
        props.backgroundColor ?? defaultBackgroundColor ?? "level4"
      }
    >
      <Component {...props} ref={props.forwardedRef} />
    </BackgroundProvider>
  );

  return WithBackground;
}

export default withBackground;

import React from "react";
import { BackgroundProvider, BackgroundProviderProps } from "..";

interface WithBackgroundProps {
  backgroundColor?: BackgroundProviderProps["backgroundColor"];
}

function withBackground<P extends WithBackgroundProps>(
  Component: React.ComponentType<P>,
  defaultBackgroundColor?: WithBackgroundProps["backgroundColor"]
): React.FunctionComponent<P> {
  const WithBackground: React.FunctionComponent<P> = (props) => (
    <BackgroundProvider
      backgroundColor={
        props.backgroundColor ?? defaultBackgroundColor ?? "level3"
      }
    >
      <Component {...props} />
    </BackgroundProvider>
  );

  return WithBackground;
}

export default withBackground;

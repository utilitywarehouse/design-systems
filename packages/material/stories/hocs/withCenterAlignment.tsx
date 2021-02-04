import React from "react";
import { Box } from "../../src";

function withCenterAlignment<P>(
  Component: React.FunctionComponent<P>
): React.FunctionComponent<P> {
  const WithCenterAlignment: React.FunctionComponent<P> = (props) => (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Box>
          <Component {...props} />
        </Box>
      </Box>
    </Box>
  );

  return WithCenterAlignment;
}

export default withCenterAlignment;

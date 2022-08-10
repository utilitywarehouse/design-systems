import * as React from "react";
import { BackdropLevel, Background, Box } from "../../src";

const BackgroundStack: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const backgroundLevels = [5, 4, 3, 1, 0].map(
    (level) => `level${level}` as BackdropLevel
  );
  return (
    <Box>
      {backgroundLevels.map((level) => (
        <Background
          key={level}
          backgroundColor={level}
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 4,
          }}
        >
          {children}
        </Background>
      ))}
    </Box>
  );
};

export default BackgroundStack;

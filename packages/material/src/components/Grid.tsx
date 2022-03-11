import React from "react";
import { GridDirection, GridWrap } from "@mui/material/Grid";
import { Box, Breakpoint, styled } from "../";
import useDeviceSize from "../hooks/useDeviceSize";

type GridContextValue = StyleProps;

type GridConfiguration = {
  [key in Breakpoint]: {
    gutterSize: number;
    columns: number;
  };
};

const gridConfiguration: GridConfiguration = {
  desktop: {
    gutterSize: 3,
    columns: 12,
  },
  tablet: {
    gutterSize: 3,
    columns: 8,
  },
  mobile: {
    gutterSize: 2,
    columns: 4,
  },
};

const defaultGridContextValue: GridContextValue = {
  container: true,
  item: false,
  direction: {
    mobile: "row",
    tablet: "row",
    desktop: "row",
  },
  wrap: {
    mobile: "wrap",
    tablet: "wrap",
    desktop: "wrap",
  },
  mobile: "auto",
  tablet: "auto",
  desktop: "auto",
  breakpoint: "desktop",
};

const GridContext = React.createContext<GridContextValue>(
  defaultGridContextValue
);

const gutterSize = {
  mobile: gridConfiguration.mobile.gutterSize,
  tablet: gridConfiguration.tablet.gutterSize,
  desktop: gridConfiguration.desktop.gutterSize,
};

const maxColumns = {
  mobile: gridConfiguration.mobile.columns,
  tablet: gridConfiguration.tablet.columns,
  desktop: gridConfiguration.desktop.columns,
};

type GridSizeAuto = "auto";
type MobileGridSize = GridSizeAuto | 1 | 2 | 3 | 4;
type TabletGridSize = MobileGridSize | 5 | 6 | 7 | 8;
type DesktopGridSize = TabletGridSize | 9 | 10 | 11 | 12;

type Direction = {
  [key in Breakpoint]: GridDirection;
};

type Wrap = {
  [key in Breakpoint]: GridWrap;
};

export type GridProps = React.PropsWithChildren<{
  container?: boolean;
  item?: boolean;
  direction?: {
    [key in Breakpoint]?: GridDirection;
  };
  wrap?: {
    [key in Breakpoint]?: GridWrap;
  };
  mobile?: MobileGridSize;
  tablet?: TabletGridSize;
  desktop?: DesktopGridSize;
  forwardedRef?: React.Ref<HTMLDivElement>;
}>;

type StyleProps = {
  container: boolean;
  item: boolean;
  direction: Direction;
  wrap: Wrap;
  mobile: MobileGridSize;
  tablet: TabletGridSize;
  desktop: DesktopGridSize;
  breakpoint: Breakpoint;
};

const toPercentage = (n: number) => `${n * 100}%`;

interface StyledGridContainerProps {
  direction: Direction;
  wrap: Wrap;
  breakpoint: Breakpoint;
}

const StyledGridContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "direction" && prop !== "wrap" && prop !== "breakpoint",
})<StyledGridContainerProps>(({ theme, direction, wrap, breakpoint }) => ({
  width: `calc(100% + ${theme.spacing(gutterSize[breakpoint])})`,
  display: "flex",
  boxSizing: "border-box",
  flexDirection: direction[breakpoint],
  flexWrap: wrap[breakpoint],
  margin: theme.spacing(gutterSize[breakpoint] * -0.5),
}));

interface StyledGridItemProps {
  direction: Direction;
  breakpoint: Breakpoint;
  deviceSizes: {
    mobile?: MobileGridSize;
    tablet?: TabletGridSize;
    desktop?: DesktopGridSize;
  };
}

const StyledGridItem = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "direction" &&
    prop !== "wrap" &&
    prop !== "breakpoint" &&
    prop !== "deviceSizes",
})<StyledGridItemProps>(({ theme, direction, breakpoint, deviceSizes }) => {
  const size =
    deviceSizes[breakpoint] === "auto"
      ? 1
      : (deviceSizes[breakpoint] as number);

  const styles: Record<string, string | number> = {
    width: "100%",
    boxSizing: "border-box",
    padding: theme.spacing(gutterSize[breakpoint] / 2),
    flex: size,
  };

  const layout = direction[breakpoint].match(/^row/) ? "row" : "column";

  if (layout === "row" && deviceSizes[breakpoint] !== "auto") {
    styles.flexBasis = toPercentage(size / maxColumns[breakpoint]);
    styles.maxWidth = toPercentage(size / maxColumns[breakpoint]);
    styles.width = toPercentage(size / maxColumns[breakpoint]);
  }

  return styles;
});

const Grid: React.FunctionComponent<GridProps> = ({
  mobile = "auto",
  tablet = "auto",
  desktop = "auto",
  container = false,
  item = false,
  direction,
  wrap,
  children,
  forwardedRef,
}) => {
  const { deviceSize } = useDeviceSize();
  const containerStyleProps = React.useContext(GridContext);

  const resolvedDirection = React.useMemo<Direction>(() => {
    if (item) {
      return containerStyleProps.direction;
    }

    const resolvedDirection = direction ?? {};
    const keys: Breakpoint[] = ["desktop", "mobile", "tablet"];
    keys.forEach((key) => {
      resolvedDirection[key] = resolvedDirection[key] ?? "row";
    });

    return resolvedDirection as Direction;
  }, [direction, containerStyleProps, item]);

  const resolvedWrap = React.useMemo<Wrap>(() => {
    if (item) {
      return containerStyleProps.wrap;
    }

    const resolvedWrap = wrap ?? {};
    const keys: Breakpoint[] = ["desktop", "mobile", "tablet"];
    keys.forEach((key) => {
      resolvedWrap[key] = resolvedWrap[key] ?? "wrap";
    });

    return resolvedWrap as Wrap;
  }, [wrap, containerStyleProps, item]);

  const styleProps = React.useMemo<StyleProps>(() => {
    return {
      mobile,
      tablet,
      desktop,
      container,
      item,
      direction: resolvedDirection,
      wrap: resolvedWrap,
      breakpoint: deviceSize,
    };
  }, [
    mobile,
    tablet,
    desktop,
    container,
    item,
    resolvedDirection,
    resolvedWrap,
    deviceSize,
  ]);

  React.useEffect(() => {
    if (!container && !item) {
      console.warn(
        "Warning: Customer UI <Grid /> component expects at least 'container' or 'item' to be true. Setting both to false will result in rendering nothing."
      );
    }
  }, [container, item]);

  React.useEffect(() => {
    if (!container) {
      return;
    }

    React.Children.forEach(children, (child) => {
      if (
        typeof child === "object" &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (child as any).type !== Grid &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (child as any).props?.item !== true
      ) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const componentDisplayName = (child as any).type?.displayName;
        throw new Error(
          `Error: Only Grid item components should be rendered as direct descendants of Grid containers

Got ${
            componentDisplayName
              ? `<${componentDisplayName} />`
              : "unknown component"
          } instead.
`
        );
      }
    });
  }, [children, container]);

  if (container) {
    return (
      <GridContext.Provider value={styleProps}>
        <Box ref={forwardedRef} sx={{ width: "100%" }}>
          <StyledGridContainer
            direction={styleProps.direction}
            wrap={styleProps.wrap}
            breakpoint={styleProps.breakpoint}
          >
            {children}
          </StyledGridContainer>
        </Box>
      </GridContext.Provider>
    );
  } else if (item) {
    return (
      <StyledGridItem
        ref={forwardedRef}
        direction={styleProps.direction}
        breakpoint={styleProps.breakpoint}
        deviceSizes={{
          mobile: styleProps.mobile,
          tablet: styleProps.tablet,
          desktop: styleProps.desktop,
        }}
      >
        {children}
      </StyledGridItem>
    );
  } else {
    return null;
  }
};

export default Grid;

export interface GridSpacerProps {
  forwardedRef?: React.Ref<unknown>;
}

export const GridSpacer: React.FunctionComponent<GridSpacerProps> = ({
  forwardedRef,
}) => {
  const { deviceSize } = useDeviceSize();
  return <Box ref={forwardedRef} paddingBottom={gutterSize[deviceSize]} />;
};

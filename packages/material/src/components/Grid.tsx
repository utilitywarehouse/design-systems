import React from "react";
import { GridDirection, GridWrap } from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Breakpoint } from "@utilitywarehouse/customer-ui-theme";
import { useMediaQuery, useTheme, Box } from "../";
import { MuiTheme } from "../lib/theme";

type GridContextValue = StyleProps;

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

enum GutterSize {
  mobile = 2,
  tablet = 3,
  desktop = 3,
}

enum MaxColumns {
  mobile = 4,
  tablet = 8,
  desktop = 12,
}

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

export type GridProps = {
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
};

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

const useStyles = makeStyles<MuiTheme, StyleProps>((theme: MuiTheme) => ({
  root: {
    width: "100%",
    overflow: "hidden",
  },
  container: (props) => {
    if (!props.container) {
      return {};
    }

    const styles = {
      width: `calc(100% + ${theme.spacing(GutterSize[props.breakpoint])})`,
      display: "flex",
      boxSizing: "border-box",
      flexDirection: props.direction[props.breakpoint],
      flexWrap: props.wrap[props.breakpoint],
      margin: theme.spacing(GutterSize[props.breakpoint] * -1),
    };

    return styles;
  },
  item: (props) => {
    if (props.container) {
      return {};
    }

    const size =
      props[props.breakpoint] === "auto"
        ? 1
        : (props[props.breakpoint] as number);

    const styles: Record<string, string | number> = {
      width: "100%",
      boxSizing: "border-box",
      padding: theme.spacing(GutterSize[props.breakpoint] / 2),
      flex: size,
    };

    const layout = props.direction[props.breakpoint].match(/^row/)
      ? "row"
      : "column";

    if (layout === "row" && props[props.breakpoint] !== "auto") {
      styles.flexBasis = toPercentage(size / MaxColumns[props.breakpoint]);
      styles.maxWidth = toPercentage(size / MaxColumns[props.breakpoint]);
      styles.width = toPercentage(size / MaxColumns[props.breakpoint]);
    }

    return styles;
  },
}));

const Grid: React.FunctionComponent<GridProps> = ({
  mobile = "auto",
  tablet = "auto",
  desktop = "auto",
  container = false,
  item = false,
  direction,
  wrap,
  children,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("mobile"));
  const isTablet = useMediaQuery(theme.breakpoints.between("mobile", "tablet"));
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
      breakpoint: (isMobile
        ? "mobile"
        : isTablet
        ? "tablet"
        : "desktop") as Breakpoint,
    };
  }, [
    mobile,
    tablet,
    desktop,
    container,
    item,
    resolvedDirection,
    resolvedWrap,
    isMobile,
    isTablet,
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
        console.log({ child });
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

  const classes = useStyles(styleProps);
  const divClassName = container ? "container" : "item";

  if (container) {
    return (
      <GridContext.Provider value={styleProps}>
        <div className={classes.root}>
          <div className={classes[divClassName]}>{children}</div>
        </div>
      </GridContext.Provider>
    );
  } else if (item) {
    return <div className={classes[divClassName]}>{children}</div>;
  } else {
    return null;
  }
};

export default Grid;

export const GridSpacer: React.FunctionComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("mobile"));
  const isTablet = useMediaQuery(theme.breakpoints.between("mobile", "tablet"));
  const breakpoint = React.useMemo<Breakpoint>(() => {
    return (isMobile
      ? "mobile"
      : isTablet
      ? "tablet"
      : "desktop") as Breakpoint;
  }, [isMobile, isTablet]);

  return <Box paddingBottom={GutterSize[breakpoint]} />;
};

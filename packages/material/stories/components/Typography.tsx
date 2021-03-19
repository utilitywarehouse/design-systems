import {
  Typography as SrcTypography,
  TypographyProps as SrcTypographyProps,
} from "../../src";
import withTheme from "../hocs/withTheme";

const Typography = withTheme(SrcTypography);

export { Typography };
export type TypographyProps = SrcTypographyProps;

import { Button as SrcButton, ButtonProps as SrcButtonProps } from "../../src";
import withTheme from "../hocs/withTheme";

const Button = withTheme(SrcButton);

export { Button };
export type ButtonProps = SrcButtonProps;

import { useTheme } from '@mui/material/styles';
import { ResponsiveStyleValue } from '@mui/system/styleFunctionSx';
import { px } from '../utils';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';

export type SpacerProps<C extends React.ElementType = 'div'> = MuiBoxProps<
  C,
  {
    component?: C;
    /**
     * The direction of the Spacer axis
     */
    axis?: 'horizontal' | 'vertical';
    size: ResponsiveStyleValue<number>;
    inline?: boolean;
  }
>;

function Spacer<C extends React.ElementType>(props: SpacerProps<C>) {
  const { axis = 'vertical', size = 1, component, inline = false, sx, ...rest } = props;
  const theme = useTheme();
  const defaultElement = inline ? 'span' : 'div';

  const getSize = () => {
    if (Array.isArray(size)) {
      return size.map(s => theme.spacing(s as number));
    }
    if (typeof size === 'object') {
      return Object.keys(theme.breakpoints.values).reduce(
        (acc: { [key: string]: string }, breakpoint: string) => {
          if (size[breakpoint] !== null) {
            acc[breakpoint] = theme.spacing(size[breakpoint] as number);
          }
          return acc;
        },
        {}
      );
    }
    return theme.spacing(size);
  };

  const width = axis === 'vertical' ? px(1) : getSize();
  const height = axis === 'horizontal' ? px(1) : getSize();

  return (
    <MuiBox
      component={component || defaultElement}
      sx={{
        display: inline ? 'inline-block' : 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...sx,
      }}
      {...rest}
    />
  );
}

export default Spacer;

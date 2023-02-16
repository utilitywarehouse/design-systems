import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import type { OverrideProps } from '@mui/material/OverridableComponent';

type DefaultButtonComponent = 'button';

interface CustomButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
  disableCapitalizeFirstLetter?: boolean;
}

type ButtonTypeMap<P = {}, D extends React.ElementType = DefaultButtonComponent> = {
  props: Pick<MuiButtonProps<D, P>, 'sx' | 'classes' | 'fullWidth' | 'children' | 'href'> &
    CustomButtonProps;
  defaultComponent: D;
};

type ButtonProps<D extends React.ElementType = DefaultButtonComponent, P = {}> = OverrideProps<
  ButtonTypeMap<P, D>,
  D
>;

export type { DefaultButtonComponent, CustomButtonProps, ButtonTypeMap, ButtonProps };

import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { Box } from '../../Box';
import { PropsWithSx } from '../../types';
import { globalPrefix } from '../../utils';
import { ButtonProps } from './Button.props';
import clsx from 'clsx';

const baseClass = `${globalPrefix}-Button`;

export const Button = forwardRef<ElementRef<'button'>, PropsWithChildren<PropsWithSx<ButtonProps>>>(
  function Button({ sx, className, ...props }) {
    return (
      <Box
        component="button"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        boxSizing="border-box"
        flexShrink={0}
        // className={clsx(baseClass, className)}
        componentName="Button"
        sx={{
          userSelect: 'none',
          verticalAlign: 'top',
          ...sx,
        }}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

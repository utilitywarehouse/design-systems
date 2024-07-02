import React from 'react';
import { Spinner } from '../../Spinner';
import type { SpinnerProps } from '../../Spinner';

interface ButtonSpinnerProps extends Omit<SpinnerProps, 'size'> {}

const ButtonSpinner: React.FC<ButtonSpinnerProps> = ({ color = '' }) => (
  <Spinner size="xs" color={color} />
);

export default ButtonSpinner;

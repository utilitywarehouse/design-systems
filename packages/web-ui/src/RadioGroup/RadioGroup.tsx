import { useRadioGroupState } from 'react-stately';
import { useRadioGroup } from 'react-aria';
import { createContext } from 'react';
import type { ReactNode } from 'react';
import type { AriaRadioGroupProps } from 'react-aria';
import type { RadioGroupState } from 'react-stately';

export const RadioContext = createContext<RadioGroupState>({} as RadioGroupState);

export interface RadioGroupProps extends AriaRadioGroupProps {
  children: ReactNode;
}

export const RadioGroup = (props: RadioGroupProps) => {
  let { children, label, description, errorMessage, validationState } = props;
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps, descriptionProps, errorMessageProps } = useRadioGroup(
    props,
    state
  );

  return (
    <div {...radioGroupProps}>
      <span {...labelProps}>{label}</span>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
      {description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {description}
        </div>
      )}
      {errorMessage && validationState === 'invalid' && (
        <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

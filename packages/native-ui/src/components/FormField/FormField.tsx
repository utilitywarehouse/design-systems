import React, { createContext, useContext, FC, useMemo } from 'react';
import { createFormControl } from '@gluestack-ui/form-control';
import {
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText,
} from './styled-components';
import { useColorMode } from '@gluestack-style/react';

export const FormField = createFormControl({
  Root,
  Error,
  ErrorText,
  ErrorIcon,
  Label,
  LabelText,
  LabelAstrick,
  Helper,
  HelperText,
});

export type FormFieldProps = React.ComponentProps<typeof FormField>;

interface FormFieldContextType {
  validationStatus: 'valid' | 'invalid' | 'initial';
}

const FormFieldContext = createContext<FormFieldContextType | undefined>(undefined);

const FormFieldProvider: FC<FormFieldProps> = ({ children, ...props }) => {
  const colorMode = useColorMode();
  const value = useMemo(
    () => ({
      validationStatus: props.validationStatus || 'initial',
    }),
    [props.validationStatus]
  );

  return (
    <FormFieldContext.Provider value={value}>
      <FormField
        sx={
          colorMode === 'dark' // TODO: remove when https://github.com/gluestack/gluestack-ui/issues/2231 is fixed
            ? props.isDisabled
              ? {
                  _labelText: {
                    color: '$darkGrey400',
                  },

                  _helperText: {
                    color: '$darkGrey400',
                  },

                  _helperIcon: {
                    color: '$darkGrey400',
                  },

                  _invalidText: {
                    color: '$darkGrey400',
                  },

                  _validText: {
                    color: '$darkGrey400',
                  },

                  _invalidIcon: {
                    color: '$darkGrey400',
                  },

                  _validIcon: {
                    color: '$darkGrey400',
                  },
                }
              : {
                  _labelText: {
                    color: '$darkGrey1000',
                  },

                  _helperText: {
                    color: '$darkGrey800',
                  },

                  _helperIcon: {
                    color: '$darkGrey800',
                  },

                  _invalidText: {
                    color: '$darkRed700',
                  },

                  _validText: {
                    color: '$darkGreen700',
                  },

                  _invalidIcon: {
                    color: '$darkRed700',
                  },

                  _validIcon: {
                    color: '$darkGreen700',
                  },
                }
            : undefined
        }
        {...props}
      >
        {children}
      </FormField>
    </FormFieldContext.Provider>
  );
};

const useFormFieldContext = (): FormFieldContextType | undefined => useContext(FormFieldContext);

export { FormFieldProvider, useFormFieldContext };

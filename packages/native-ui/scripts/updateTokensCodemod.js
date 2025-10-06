/**
 * Comprehensive codemod to update design tokens from old system to new system
 *
 * This codemod handles:
 * 1. Box component props with token values (e.g., p="$3" -> p="150")
 * 2. StyleSheet.create theme destructuring renaming (fonts -> fontFamily, etc.)
 * 3. Member expression token value updates (space[3] -> space['150'])
 * 4. Direct property access updates (borderRadius.xl -> borderRadius.lg)
 * 5. References to renamed destructured variables
 */

const spaceTokenMapping = {
  // Old $ prefixed values to new values
  $0: '0',
  '$0.5': '25',
  $1: '50',
  '$1.5': '75',
  $2: '100',
  '$2.5': undefined,
  $3: '150',
  '$3.5': '175',
  $4: '200',
  '$4.5': undefined,
  $5: '250',
  $6: '300',
  $7: '350',
  $8: '400',
  $9: undefined,
  $10: '500',
  $11: undefined,
  $12: '600',
  $14: '700',
  $16: '800',
  $20: undefined,
  $24: undefined,
  $32: undefined,
  $40: undefined,
  $48: undefined,
  $56: undefined,
  $64: undefined,
  $72: '900',
  $80: '1000',
  $96: undefined,
  // Percentage values remain the same
  '$1/2': '1/2',
  '$1/3': '1/3',
  '$2/3': '2/3',
  '$1/4': '1/4',
  '$2/4': '2/4',
  '$3/4': '3/4',
  '$1/5': '1/5',
  '$2/5': '2/5',
  '$3/5': '3/5',
  '$4/5': '4/5',
  '$1/6': '1/6',
  '$2/6': '2/6',
  '$3/6': '3/6',
  '$4/6': '4/6',
  '$5/6': '5/6',
  $full: 'full',
  // String-based values
  0.5: '25',
  1: '50',
  1.5: '75',
  2: '100',
  2.5: undefined,
  3: '150',
  3.5: '175',
  4: '200',
  4.5: undefined,
  5: '250',
  6: '300',
  7: '350',
  8: '400',
  9: undefined,
  10: '500',
  11: undefined,
  12: '600',
  14: '700',
  16: '800',
  20: undefined,
  24: undefined,
  32: undefined,
  40: undefined,
  48: undefined,
  56: undefined,
  64: undefined,
  72: '900',
  80: '1000',
  96: undefined,

  // String-based percentage values
  '1/2': '1/2',
  '1/3': '1/3',
  '2/3': '2/3',
  '1/4': '1/4',
  '2/4': '2/4',
  '3/4': '3/4',
  '1/5': '1/5',
  '2/5': '2/5',
  '3/5': '3/5',
  '4/5': '4/5',
  '1/6': '1/6',
  '2/6': '2/6',
  '3/6': '3/6',
  '4/6': '4/6',
  '5/6': '5/6',
  full: 'full',
};

const fontSizeTokenMapping = {
  // Old $ prefixed values to new values
  $2xs: '50',
  $xs: '75',
  $sm: '90',
  $md: '100',
  $lg: '150',
  $xl: '200',
  $2xl: '300',
  $3xl: '400',
  $4xl: '500',
  $5xl: '600',
  $6xl: '700',
  $7xl: '800',
  $8xl: '900',
  $9xl: '1000',

  // String values for array access
  '2xs': '50',
  xs: '75',
  sm: '90',
  md: '100',
  lg: '150',
  xl: '200',
  '2xl': '300',
  '3xl': '400',
  '4xl': '500',
  '5xl': '600',
  '6xl': '700',
  '7xl': '800',
  '8xl': '900',
  '9xl': '1000',
};

const fontWeightTokenMapping = {
  // Old $ prefixed values to new values
  $thin: undefined,
  $extralight: undefined,
  $light: undefined,
  $normal: 'regular',
  $medium: 'medium',
  $semibold: 'semibold',
  $bold: 'bold',
  $extrabold: undefined,
  $black: 'heavy',

  // String values for array access
  thin: undefined,
  extralight: undefined,
  light: undefined,
  normal: 'regular',
  medium: 'medium',
  semibold: 'semibold',
  bold: 'bold',
  extrabold: undefined,
  black: 'heavy',
};

const lineHeightTokenMapping = {
  // Old $ prefixed values to new values
  $2xs: '100',
  $xs: '200',
  $sm: '300',
  $md: '400',
  $lg: '500',
  $xl: '600',
  $2xl: '700',
  $3xl: '900',
  $4xl: '1000',
  $5xl: '1100',
  $6xl: '1200',
  $7xl: undefined,

  // String values for array access
  '2xs': '100',
  xs: '200',
  sm: '300',
  md: '400',
  lg: '500',
  xl: '600',
  '2xl': '700',
  '3xl': '900',
  '4xl': '1000',
  '5xl': '1100',
  '6xl': '1200',
  '7xl': undefined,
};

const borderRadiusTokenMapping = {
  // Old $ prefixed values to new values - CORRECTED MAPPING
  $none: 'none',
  $xs: 'xs',
  $sm: 'xs',
  $md: 'sm',
  $lg: 'md',
  $xl: 'lg', // 12px -> 12px (exact match)
  $2xl: 'xl', // 16px -> 16px (exact match)
  $3xl: undefined,
  $4xl: undefined,
  $full: 'full',
  // String values for array access - CORRECTED MAPPING
  none: 'none',
  xs: 'xs',
  sm: 'xs',
  md: 'sm',
  lg: 'md',
  xl: 'lg', // This is the key mapping: xl -> lg
  '2xl': 'xl',
  '3xl': undefined,
  '4xl': undefined,
  full: 'full',
};

const borderWidthTokenMapping = {
  // Old $ prefixed values to new values
  $0: undefined,
  $1: '1',
  $2: '2',
  $4: '2',
  $8: '2',

  // Numeric string values for array access
  0: undefined,
  1: '1',
  2: '2',
  4: '2',
  8: '2',
};

// Box component props that use space tokens
const spaceProps = [
  'p',
  'px',
  'py',
  'pt',
  'pb',
  'pr',
  'pl',
  'm',
  'mx',
  'my',
  'mt',
  'mb',
  'mr',
  'ml',
  'padding',
  'paddingHorizontal',
  'paddingVertical',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingEnd',
  'paddingStart',
  'margin',
  'marginHorizontal',
  'marginVertical',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginEnd',
  'marginStart',
  'top',
  'bottom',
  'left',
  'right',
  'start',
  'end',
  'h',
  'w',
  'height',
  'width',
  'minHeight',
  'minWidth',
  'maxHeight',
  'maxWidth',
  'gap',
  'rowGap',
  'columnGap',
];

// Box component props that use border radius tokens
const borderRadiusProps = [
  'rounded',
  'borderRadius',
  'borderBottomEndRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderBottomStartRadius',
  'borderTopEndRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderTopStartRadius',
  'borderEndEndRadius',
  'borderEndStartRadius',
  'borderStartEndRadius',
  'borderStartStartRadius',
];

// Box component props that use border width tokens
const borderWidthProps = [
  'borderWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderEndWidth',
  'borderStartWidth',
];

function updateTokenInString(value, mapping) {
  if (mapping[value] !== undefined) {
    return mapping[value];
  }

  return value;
}

function updateBoxProps(j, root) {
  // Find all JSX attributes with string literal values that might contain tokens
  root.find(j.JSXAttribute).forEach(path => {
    const attr = path.value;

    if (attr.name && attr.name.name && attr.value) {
      const propName = attr.name.name;

      // Handle string literals
      if (
        (attr.value.type === 'Literal' || attr.value.type === 'StringLiteral') &&
        typeof attr.value.value === 'string'
      ) {
        let newValue = attr.value.value;
        let updated = false;

        // Check space props
        if (spaceProps.includes(propName)) {
          const mappedValue = updateTokenInString(newValue, spaceTokenMapping);
          if (mappedValue !== newValue && mappedValue !== undefined) {
            newValue = mappedValue;
            updated = true;
          }
        }

        // Check border radius props
        if (borderRadiusProps.includes(propName)) {
          const mappedValue = updateTokenInString(newValue, borderRadiusTokenMapping);
          if (mappedValue !== newValue && mappedValue !== undefined) {
            newValue = mappedValue;
            updated = true;
          }
        }

        // Check border width props
        if (borderWidthProps.includes(propName)) {
          const mappedValue = updateTokenInString(newValue, borderWidthTokenMapping);
          if (mappedValue !== newValue && mappedValue !== undefined) {
            newValue = mappedValue;
            updated = true;
          }
        }

        // Also check for any $ prefixed values regardless of prop type (covers all cases)
        if (!updated && newValue.startsWith('$')) {
          // Try all mappings to find a match
          const spaceValue = updateTokenInString(newValue, spaceTokenMapping);
          const radiusValue = updateTokenInString(newValue, borderRadiusTokenMapping);
          const borderValue = updateTokenInString(newValue, borderWidthTokenMapping);
          const fontSizeValue = updateTokenInString(newValue, fontSizeTokenMapping);
          const fontWeightValue = updateTokenInString(newValue, fontWeightTokenMapping);
          const lineHeightValue = updateTokenInString(newValue, lineHeightTokenMapping);

          if (spaceValue !== newValue && spaceValue !== undefined) {
            newValue = spaceValue;
            updated = true;
          } else if (radiusValue !== newValue && radiusValue !== undefined) {
            newValue = radiusValue;
            updated = true;
          } else if (borderValue !== newValue && borderValue !== undefined) {
            newValue = borderValue;
            updated = true;
          } else if (fontSizeValue !== newValue && fontSizeValue !== undefined) {
            newValue = fontSizeValue;
            updated = true;
          } else if (fontWeightValue !== newValue && fontWeightValue !== undefined) {
            newValue = fontWeightValue;
            updated = true;
          } else if (lineHeightValue !== newValue && lineHeightValue !== undefined) {
            newValue = lineHeightValue;
            updated = true;
          }
        }

        if (updated) {
          attr.value.value = newValue;
        }
      }

      // Handle JSX expression containers with string literals
      else if (
        attr.value.type === 'JSXExpressionContainer' &&
        (attr.value.expression.type === 'Literal' ||
          attr.value.expression.type === 'StringLiteral') &&
        typeof attr.value.expression.value === 'string'
      ) {
        let newValue = attr.value.expression.value;
        let updated = false;

        // Check space props
        if (spaceProps.includes(propName)) {
          const mappedValue = updateTokenInString(newValue, spaceTokenMapping);
          if (mappedValue !== newValue && mappedValue !== undefined) {
            newValue = mappedValue;
            updated = true;
          }
        }

        // Check border radius props
        if (borderRadiusProps.includes(propName)) {
          const mappedValue = updateTokenInString(newValue, borderRadiusTokenMapping);
          if (mappedValue !== newValue && mappedValue !== undefined) {
            newValue = mappedValue;
            updated = true;
          }
        }

        // Check border width props
        if (borderWidthProps.includes(propName)) {
          const mappedValue = updateTokenInString(newValue, borderWidthTokenMapping);
          if (mappedValue !== newValue && mappedValue !== undefined) {
            newValue = mappedValue;
            updated = true;
          }
        }

        // Also check for any $ prefixed values regardless of prop type
        if (!updated && newValue.startsWith('$')) {
          // Try all mappings to find a match
          const spaceValue = updateTokenInString(newValue, spaceTokenMapping);
          const radiusValue = updateTokenInString(newValue, borderRadiusTokenMapping);
          const borderValue = updateTokenInString(newValue, borderWidthTokenMapping);
          const fontSizeValue = updateTokenInString(newValue, fontSizeTokenMapping);
          const fontWeightValue = updateTokenInString(newValue, fontWeightTokenMapping);
          const lineHeightValue = updateTokenInString(newValue, lineHeightTokenMapping);

          if (spaceValue !== newValue && spaceValue !== undefined) {
            newValue = spaceValue;
            updated = true;
          } else if (radiusValue !== newValue && radiusValue !== undefined) {
            newValue = radiusValue;
            updated = true;
          } else if (borderValue !== newValue && borderValue !== undefined) {
            newValue = borderValue;
            updated = true;
          } else if (fontSizeValue !== newValue && fontSizeValue !== undefined) {
            newValue = fontSizeValue;
            updated = true;
          } else if (fontWeightValue !== newValue && fontWeightValue !== undefined) {
            newValue = fontWeightValue;
            updated = true;
          } else if (lineHeightValue !== newValue && lineHeightValue !== undefined) {
            newValue = lineHeightValue;
            updated = true;
          }
        }

        if (updated) {
          attr.value.expression.value = newValue;
        }
      }
    }
  });
}

function updateStyleSheets(j, root) {
  // Find StyleSheet.create calls
  root
    .find(j.CallExpression, {
      callee: {
        type: 'MemberExpression',
        object: { name: 'StyleSheet' },
        property: { name: 'create' },
      },
    })
    .forEach(path => {
      const arg = path.value.arguments[0];

      if (arg && arg.type === 'ArrowFunctionExpression') {
        // Track renamed variables to update their references
        const renamedVars = {};

        // Handle function parameter destructuring
        if (arg.params.length > 0 && arg.params[0].type === 'ObjectPattern') {
          arg.params[0].properties.forEach(prop => {
            if (prop.type === 'Property' || prop.type === 'ObjectProperty') {
              const { key } = prop;
              if (key && key.name === 'borderWidths') {
                renamedVars.borderWidths = 'borderWidth';
                key.name = 'borderWidth';
              }

              if (key && key.name === 'radii') {
                renamedVars.radii = 'borderRadius';
                key.name = 'borderRadius';
              }

              if (key && key.name === 'fontSizes') {
                renamedVars.fontSizes = 'fontSize';
                key.name = 'fontSize';
              }

              if (key && key.name === 'fontWeights') {
                renamedVars.fontWeights = 'fontWeight';
                key.name = 'fontWeight';
              }

              if (key && key.name === 'lineHeights') {
                renamedVars.lineHeights = 'lineHeight';
                key.name = 'lineHeight';
              }

              if (key && key.name === 'fonts') {
                renamedVars.fonts = 'fontFamily';
                key.name = 'fontFamily';
              }
            }
          });
        }

        // Update member expressions within the StyleSheet
        j(arg.body)
          .find(j.MemberExpression)
          .forEach(memberPath => {
            const obj = memberPath.value.object;
            const prop = memberPath.value.property;
            const isComputed = memberPath.value.computed;

            // Update references to renamed variables
            if (obj.name && renamedVars[obj.name]) {
              obj.name = renamedVars[obj.name];
            }

            // Handle theme.space[...] patterns
            if (
              obj.type === 'MemberExpression' &&
              obj.object.name === 'theme' &&
              obj.property.name === 'space' &&
              isComputed
            ) {
              let currentValue;
              if (
                prop.type === 'NumericLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'number')
              ) {
                currentValue = prop.value.toString();
              } else if (
                prop.type === 'StringLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'string')
              ) {
                currentValue = prop.value;
              }

              if (currentValue !== undefined) {
                const newValue = updateTokenInString(currentValue, spaceTokenMapping);
                if (newValue !== currentValue && newValue !== undefined) {
                  prop.type = 'StringLiteral';
                  prop.value = newValue;
                }
              }
            }

            // Handle theme.borderWidths[...] -> theme.borderWidth[...]
            if (
              obj.type === 'MemberExpression' &&
              obj.object.name === 'theme' &&
              obj.property.name === 'borderWidths' &&
              isComputed
            ) {
              obj.property.name = 'borderWidth';

              let currentValue;
              if (
                prop.type === 'NumericLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'number')
              ) {
                currentValue = prop.value.toString();
              } else if (
                prop.type === 'StringLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'string')
              ) {
                currentValue = prop.value;
              }

              if (currentValue !== undefined) {
                const newValue = updateTokenInString(currentValue, borderWidthTokenMapping);
                if (newValue !== currentValue && newValue !== undefined) {
                  prop.type = 'StringLiteral';
                  prop.value = newValue;
                }
              }
            }

            // Handle theme.borderWidth[...]
            if (
              obj.type === 'MemberExpression' &&
              obj.object.name === 'theme' &&
              obj.property.name === 'borderWidth' &&
              isComputed
            ) {
              let currentValue;
              if (
                prop.type === 'NumericLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'number')
              ) {
                currentValue = prop.value.toString();
              } else if (
                prop.type === 'StringLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'string')
              ) {
                currentValue = prop.value;
              }

              if (currentValue !== undefined) {
                const newValue = updateTokenInString(currentValue, borderWidthTokenMapping);
                if (newValue !== currentValue && newValue !== undefined) {
                  prop.type = 'StringLiteral';
                  prop.value = newValue;
                }
              }
            }

            // Handle theme.radii.* -> theme.borderRadius.*
            if (
              obj.type === 'MemberExpression' &&
              obj.object.name === 'theme' &&
              obj.property.name === 'radii' &&
              prop.type === 'Identifier'
            ) {
              obj.property.name = 'borderRadius';
              const newValue = updateTokenInString(prop.name, borderRadiusTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                prop.name = newValue;
              }
            }

            // Handle theme.borderRadius.*
            if (
              obj.type === 'MemberExpression' &&
              obj.object.name === 'theme' &&
              obj.property.name === 'borderRadius' &&
              prop.type === 'Identifier'
            ) {
              const newValue = updateTokenInString(prop.name, borderRadiusTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                prop.name = newValue;
              }
            }

            // Handle theme.fontSizes[...] -> theme.fontSize[...]
            if (
              obj.type === 'MemberExpression' &&
              obj.object.name === 'theme' &&
              obj.property.name === 'fontSizes' &&
              isComputed
            ) {
              obj.property.name = 'fontSize';

              let currentValue;
              if (
                prop.type === 'NumericLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'number')
              ) {
                currentValue = prop.value.toString();
              } else if (
                prop.type === 'StringLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'string')
              ) {
                currentValue = prop.value;
              }

              if (currentValue !== undefined) {
                const newValue = updateTokenInString(currentValue, fontSizeTokenMapping);
                if (newValue !== currentValue && newValue !== undefined) {
                  prop.type = 'StringLiteral';
                  prop.value = newValue;
                }
              }
            }

            // Handle theme.fontSizes.* -> theme.fontSize['*']
            if (
              obj.type === 'MemberExpression' &&
              obj.object.name === 'theme' &&
              obj.property.name === 'fontSizes' &&
              prop.type === 'Identifier' &&
              !isComputed
            ) {
              obj.property.name = 'fontSize';
              const newValue = updateTokenInString(prop.name, fontSizeTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                memberPath.value.computed = true;
                prop.type = 'StringLiteral';
                prop.name = undefined;
                prop.value = newValue;
              }
            }

            // Handle theme.fontSize[...]
            if (
              obj.type === 'MemberExpression' &&
              obj.object.name === 'theme' &&
              obj.property.name === 'fontSize' &&
              isComputed
            ) {
              let currentValue;
              if (
                prop.type === 'NumericLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'number')
              ) {
                currentValue = prop.value.toString();
              } else if (
                prop.type === 'StringLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'string')
              ) {
                currentValue = prop.value;
              }

              if (currentValue !== undefined) {
                const newValue = updateTokenInString(currentValue, fontSizeTokenMapping);
                if (newValue !== currentValue && newValue !== undefined) {
                  prop.type = 'StringLiteral';
                  prop.value = newValue;
                }
              }
            }

            // Handle theme.fontSize.* -> theme.fontSize['*']
            if (
              obj.type === 'MemberExpression' &&
              obj.object.name === 'theme' &&
              obj.property.name === 'fontSize' &&
              prop.type === 'Identifier' &&
              !isComputed
            ) {
              const newValue = updateTokenInString(prop.name, fontSizeTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                memberPath.value.computed = true;
                prop.type = 'StringLiteral';
                prop.name = undefined;
                prop.value = newValue;
              }
            }

            // Handle theme.fontWeights.* -> theme.fontWeight.*
            if (
              obj.type === 'MemberExpression' &&
              obj.object.name === 'theme' &&
              obj.property.name === 'fontWeights' &&
              prop.type === 'Identifier'
            ) {
              obj.property.name = 'fontWeight';
              const newValue = updateTokenInString(prop.name, fontWeightTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                prop.name = newValue;
              }
            }

            // Handle theme.fontWeight.*
            if (
              obj.type === 'MemberExpression' &&
              obj.object.name === 'theme' &&
              obj.property.name === 'fontWeight' &&
              prop.type === 'Identifier'
            ) {
              const newValue = updateTokenInString(prop.name, fontWeightTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                prop.name = newValue;
              }
            }

            // Handle theme.fonts.* -> theme.fontFamily.*
            if (
              obj.type === 'MemberExpression' &&
              obj.object.name === 'theme' &&
              obj.property.name === 'fonts' &&
              prop.type === 'Identifier'
            ) {
              obj.property.name = 'fontFamily';
            }

            // Handle theme.lineHeights[...] -> theme.lineHeight[...]
            if (
              obj.type === 'MemberExpression' &&
              obj.object.name === 'theme' &&
              obj.property.name === 'lineHeights' &&
              isComputed
            ) {
              obj.property.name = 'lineHeight';

              let currentValue;
              if (
                prop.type === 'NumericLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'number')
              ) {
                currentValue = prop.value.toString();
              } else if (
                prop.type === 'StringLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'string')
              ) {
                currentValue = prop.value;
              }

              if (currentValue !== undefined) {
                const newValue = updateTokenInString(currentValue, lineHeightTokenMapping);
                if (newValue !== currentValue && newValue !== undefined) {
                  prop.type = 'StringLiteral';
                  prop.value = newValue;
                }
              }
            }

            // Handle theme.lineHeights.* -> theme.lineHeight['*']
            if (
              obj.type === 'MemberExpression' &&
              obj.object.name === 'theme' &&
              obj.property.name === 'lineHeights' &&
              prop.type === 'Identifier' &&
              !isComputed
            ) {
              obj.property.name = 'lineHeight';
              const newValue = updateTokenInString(prop.name, lineHeightTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                memberPath.value.computed = true;
                prop.type = 'StringLiteral';
                prop.name = undefined;
                prop.value = newValue;
              }
            }

            // Handle theme.lineHeight[...]
            if (
              obj.type === 'MemberExpression' &&
              obj.object.name === 'theme' &&
              obj.property.name === 'lineHeight' &&
              isComputed
            ) {
              let currentValue;
              if (
                prop.type === 'NumericLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'number')
              ) {
                currentValue = prop.value.toString();
              } else if (
                prop.type === 'StringLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'string')
              ) {
                currentValue = prop.value;
              }

              if (currentValue !== undefined) {
                const newValue = updateTokenInString(currentValue, lineHeightTokenMapping);
                if (newValue !== currentValue && newValue !== undefined) {
                  prop.type = 'StringLiteral';
                  prop.value = newValue;
                }
              }
            }

            // Handle theme.lineHeight.* -> theme.lineHeight['*']
            if (
              obj.type === 'MemberExpression' &&
              obj.object.name === 'theme' &&
              obj.property.name === 'lineHeight' &&
              prop.type === 'Identifier' &&
              !isComputed
            ) {
              const newValue = updateTokenInString(prop.name, lineHeightTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                memberPath.value.computed = true;
                prop.type = 'StringLiteral';
                prop.name = undefined;
                prop.value = newValue;
              }
            }

            // Handle space[...] -> space['...'] with token value updates
            // Supports both space[2] and space['2']
            if (obj.name === 'space' && isComputed) {
              let currentValue;

              // Handle numeric literals (e.g., space[2])
              if (
                prop.type === 'NumericLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'number')
              ) {
                currentValue = prop.value.toString();
              }
              // Handle string literals (e.g., space['2'])
              else if (
                prop.type === 'StringLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'string')
              ) {
                currentValue = prop.value;
              }

              if (currentValue !== undefined) {
                const newValue = updateTokenInString(currentValue, spaceTokenMapping);
                if (newValue !== currentValue && newValue !== undefined) {
                  // Always convert to string literal for consistency
                  prop.type = 'StringLiteral';
                  prop.value = newValue;
                }
              }
            }

            // Handle radii.lg -> borderRadius.md, etc.
            if (obj.name === 'radii' && prop.type === 'Identifier') {
              obj.name = 'borderRadius';
              const newValue = updateTokenInString(prop.name, borderRadiusTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                prop.name = newValue;
              }
            }

            // Handle direct borderRadius.xl -> borderRadius.lg (for destructured borderRadius)
            if (obj.name === 'borderRadius' && prop.type === 'Identifier') {
              const newValue = updateTokenInString(prop.name, borderRadiusTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                prop.name = newValue;
              }
            }

            // Handle borderWidths[...] -> borderWidth[...] and update values
            // Supports both borderWidths[2] and borderWidths['2']
            if (obj.name === 'borderWidths' && isComputed) {
              obj.name = 'borderWidth';

              let currentValue;
              if (
                prop.type === 'NumericLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'number')
              ) {
                currentValue = prop.value.toString();
              } else if (
                prop.type === 'StringLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'string')
              ) {
                currentValue = prop.value;
              }

              if (currentValue !== undefined) {
                const newValue = updateTokenInString(currentValue, borderWidthTokenMapping);
                if (newValue !== currentValue && newValue !== undefined) {
                  prop.type = 'StringLiteral';
                  prop.value = newValue;
                }
              }
            }

            // Handle borderWidths.1 -> borderWidth.1 (dot notation)
            if (obj.name === 'borderWidths' && prop.type === 'Identifier') {
              obj.name = 'borderWidth';
              const newValue = updateTokenInString(prop.name, borderWidthTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                prop.name = newValue;
              }
            }

            // Handle borderWidth[...] with value updates (for already renamed variables)
            if (obj.name === 'borderWidth' && isComputed) {
              let currentValue;
              if (
                prop.type === 'NumericLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'number')
              ) {
                currentValue = prop.value.toString();
              } else if (
                prop.type === 'StringLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'string')
              ) {
                currentValue = prop.value;
              }

              if (currentValue !== undefined) {
                const newValue = updateTokenInString(currentValue, borderWidthTokenMapping);
                if (newValue !== currentValue && newValue !== undefined) {
                  prop.type = 'StringLiteral';
                  prop.value = newValue;
                }
              }
            }

            // Handle borderWidth.1 -> borderWidth.1 (dot notation, for already renamed variables)
            if (obj.name === 'borderWidth' && prop.type === 'Identifier') {
              const newValue = updateTokenInString(prop.name, borderWidthTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                prop.name = newValue;
              }
            }

            // Handle fontSizes[...] -> fontSize[...] and update values
            // Supports both fontSizes[2] and fontSizes['md']
            if (obj.name === 'fontSizes' && isComputed) {
              obj.name = 'fontSize';

              let currentValue;
              if (
                prop.type === 'NumericLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'number')
              ) {
                currentValue = prop.value.toString();
              } else if (
                prop.type === 'StringLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'string')
              ) {
                currentValue = prop.value;
              }

              if (currentValue !== undefined) {
                const newValue = updateTokenInString(currentValue, fontSizeTokenMapping);
                if (newValue !== currentValue && newValue !== undefined) {
                  prop.type = 'StringLiteral';
                  prop.value = newValue;
                }
              }
            }

            // Handle fontSizes.md -> fontSize['100'] (dot notation to bracket notation)
            if (obj.name === 'fontSizes' && prop.type === 'Identifier' && !isComputed) {
              obj.name = 'fontSize';
              const newValue = updateTokenInString(prop.name, fontSizeTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                memberPath.value.computed = true;
                prop.type = 'StringLiteral';
                prop.name = undefined;
                prop.value = newValue;
              }
            }

            // Handle fontSize[...] with value updates (for already renamed variables)
            if (obj.name === 'fontSize' && isComputed) {
              let currentValue;
              if (
                prop.type === 'NumericLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'number')
              ) {
                currentValue = prop.value.toString();
              } else if (
                prop.type === 'StringLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'string')
              ) {
                currentValue = prop.value;
              }

              if (currentValue !== undefined) {
                const newValue = updateTokenInString(currentValue, fontSizeTokenMapping);
                if (newValue !== currentValue && newValue !== undefined) {
                  prop.type = 'StringLiteral';
                  prop.value = newValue;
                }
              }
            }

            // Handle fontSize.md -> fontSize['100'] (dot notation to bracket notation, for already renamed variables)
            if (obj.name === 'fontSize' && prop.type === 'Identifier' && !isComputed) {
              const newValue = updateTokenInString(prop.name, fontSizeTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                memberPath.value.computed = true;
                prop.type = 'StringLiteral';
                prop.name = undefined;
                prop.value = newValue;
              }
            }

            // Handle fontWeights.normal -> fontWeight.regular, etc.
            if (obj.name === 'fontWeights' && prop.type === 'Identifier') {
              obj.name = 'fontWeight';
              const newValue = updateTokenInString(prop.name, fontWeightTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                prop.name = newValue;
              }
            }

            // Handle fontWeight with value updates (for already renamed variables)
            if (obj.name === 'fontWeight' && prop.type === 'Identifier') {
              const newValue = updateTokenInString(prop.name, fontWeightTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                prop.name = newValue;
              }
            }

            // Handle fonts.heading -> fontFamily.heading, etc.
            if (obj.name === 'fonts' && prop.type === 'Identifier') {
              obj.name = 'fontFamily';
              // No token value changes needed for font family
            }

            // Handle lineHeights[...] -> lineHeight[...] and update values
            // Supports both lineHeights[2] and lineHeights['md']
            if (obj.name === 'lineHeights' && isComputed) {
              obj.name = 'lineHeight';

              let currentValue;
              if (
                prop.type === 'NumericLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'number')
              ) {
                currentValue = prop.value.toString();
              } else if (
                prop.type === 'StringLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'string')
              ) {
                currentValue = prop.value;
              }

              if (currentValue !== undefined) {
                const newValue = updateTokenInString(currentValue, lineHeightTokenMapping);
                if (newValue !== currentValue && newValue !== undefined) {
                  prop.type = 'StringLiteral';
                  prop.value = newValue;
                }
              }
            }

            // Handle lineHeights.md -> lineHeight['400'] (dot notation to bracket notation)
            if (obj.name === 'lineHeights' && prop.type === 'Identifier' && !isComputed) {
              obj.name = 'lineHeight';
              const newValue = updateTokenInString(prop.name, lineHeightTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                memberPath.value.computed = true;
                prop.type = 'StringLiteral';
                prop.name = undefined;
                prop.value = newValue;
              }
            }

            // Handle lineHeight[...] with value updates (for already renamed variables)
            if (obj.name === 'lineHeight' && isComputed) {
              let currentValue;
              if (
                prop.type === 'NumericLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'number')
              ) {
                currentValue = prop.value.toString();
              } else if (
                prop.type === 'StringLiteral' ||
                (prop.type === 'Literal' && typeof prop.value === 'string')
              ) {
                currentValue = prop.value;
              }

              if (currentValue !== undefined) {
                const newValue = updateTokenInString(currentValue, lineHeightTokenMapping);
                if (newValue !== currentValue && newValue !== undefined) {
                  prop.type = 'StringLiteral';
                  prop.value = newValue;
                }
              }
            }

            // Handle lineHeight.md -> lineHeight['400'] (dot notation to bracket notation, for already renamed variables)
            if (obj.name === 'lineHeight' && prop.type === 'Identifier' && !isComputed) {
              const newValue = updateTokenInString(prop.name, lineHeightTokenMapping);
              if (newValue !== prop.name && newValue !== undefined) {
                memberPath.value.computed = true;
                prop.type = 'StringLiteral';
                prop.name = undefined;
                prop.value = newValue;
              }
            }
          });
      }
    });
}

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Update Box component props
  updateBoxProps(j, root);

  // Update StyleSheet.create usage
  updateStyleSheets(j, root);

  return root.toSource({
    quote: 'single',
    reuseParsers: true,
  });
};

module.exports.parser = 'tsx';

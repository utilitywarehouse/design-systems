/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { forwardRef, memo, useMemo } from 'react';
import { View, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import type BoxProps from './Box.props';

// Helper types for polymorphic components
type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];

type PolymorphicComponentProps<T extends React.ElementType, Props = {}> = Props &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Props | 'as'> & {
    as?: T;
  };

const propStyleMapping: { [key: string]: keyof ViewStyle } = {
  // Padding
  p: 'padding',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  pt: 'paddingTop',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  // Margin
  m: 'margin',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
  // Colors
  bg: 'backgroundColor',
  bgColor: 'backgroundColor',
  // Dimensions
  h: 'height',
  w: 'width',
  // Border
  rounded: 'borderRadius',
  // Spacing
  spacing: 'gap',
  space: 'gap',
};

const themeStyleMapping: { [key in keyof ViewStyle]?: string } = {
  // Space related
  top: 'space',
  bottom: 'space',
  left: 'space',
  right: 'space',
  padding: 'space',
  paddingHorizontal: 'space',
  paddingVertical: 'space',
  paddingTop: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingRight: 'space',
  paddingEnd: 'space',
  paddingStart: 'space',
  margin: 'space',
  marginHorizontal: 'space',
  marginVertical: 'space',
  marginTop: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginRight: 'space',
  marginEnd: 'space',
  marginStart: 'space',
  columnGap: 'space',
  gap: 'space',
  rowGap: 'space',
  height: 'space',
  width: 'space',
  minHeight: 'space',
  minWidth: 'space',
  maxWidth: 'space',
  maxHeight: 'space',
  start: 'space',
  end: 'space',
  // Colors
  backgroundColor: 'colors',
  borderColor: 'colors',
  borderBottomColor: 'colors',
  borderLeftColor: 'colors',
  borderRightColor: 'colors',
  borderTopColor: 'colors',
  borderBlockColor: 'colors',
  borderBlockEndColor: 'colors',
  borderBlockStartColor: 'colors',
  borderEndColor: 'colors',
  borderStartColor: 'colors',
  shadowColor: 'colors',
  // Border radii
  borderRadius: 'radii',
  borderBottomEndRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomStartRadius: 'radii',
  borderTopEndRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopStartRadius: 'radii',
  borderEndEndRadius: 'radii',
  borderEndStartRadius: 'radii',
  borderStartEndRadius: 'radii',
  borderStartStartRadius: 'radii',
  // Opacity
  opacity: 'opacity',
  // Border widths
  borderBottomWidth: 'borderWidths',
  borderEndWidth: 'borderWidths',
  borderLeftWidth: 'borderWidths',
  borderRightWidth: 'borderWidths',
  borderStartWidth: 'borderWidths',
  borderTopWidth: 'borderWidths',
  borderWidth: 'borderWidths',
};

const resolveThemeValue = (value: any, themeMapping: any): any => {
  if (
    typeof value === 'string' &&
    value.startsWith('$') &&
    themeMapping &&
    typeof themeMapping === 'object'
  ) {
    const key = value.slice(1);
    if (themeMapping[key] !== undefined) {
      return themeMapping[key];
    }
  }
  return value;
};

export const viewStyleProps = new Set<string>([
  'alignContent',
  'alignItems',
  'alignSelf',
  'aspectRatio',
  'backfaceVisibility',
  'borderCurve',
  'borderStyle',
  'cursor',
  'direction',
  'display',
  'elevation',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'justifyContent',
  'overflow',
  'pointerEvents',
  'position',
  'shadowOffset',
  'shadowOpacity',
  'shadowRadius',
  'transform',
  'transformOrigin',
  'zIndex',
  'backgroundColor',
  'borderBlockColor',
  'borderBlockEndColor',
  'borderBlockStartColor',
  'borderBottomColor',
  'borderBottomEndRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderBottomStartRadius',
  'borderBottomWidth',
  'borderColor',
  'borderEndColor',
  'borderEndEndRadius',
  'borderEndStartRadius',
  'borderEndWidth',
  'borderLeftColor',
  'borderLeftWidth',
  'borderRadius',
  'borderRightColor',
  'borderRightWidth',
  'borderStartColor',
  'borderStartEndRadius',
  'borderStartStartRadius',
  'borderStartWidth',
  'borderTopColor',
  'borderTopEndRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderTopStartRadius',
  'borderTopWidth',
  'borderWidth',
  'bottom',
  'boxShadow',
  'columnGap',
  'cursor',
  'direction',
  'display',
  'elevation',
  'end',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'gap',
  'height',
  'justifyContent',
  'left',
  'margin',
  'marginBottom',
  'marginEnd',
  'marginHorizontal',
  'marginLeft',
  'marginRight',
  'marginStart',
  'marginTop',
  'marginVertical',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'opacity',
  'overflow',
  'padding',
  'paddingBottom',
  'paddingEnd',
  'paddingHorizontal',
  'paddingLeft',
  'paddingRight',
  'paddingStart',
  'paddingTop',
  'outlineColor',
  'outlineOffset',
  'outlineStyle',
  'outlineWidth',
  'paddingVertical',
  'pointerEvents',
  'position',
  'right',
  'rowGap',
  'shadowColor',
  'start',
  'top',
  'transform',
  'transformOrigin',
  'width',
  'zIndex',
]);

// --- Box component definition ---
const BoxComponent = <T extends React.ElementType = typeof View>(
  { as, style, children, ...props }: PolymorphicComponentProps<T, BoxProps<T>>,
  ref: PolymorphicRef<T>
) => {
  const { computedProps } = useMemo(() => {
    const computedProps: Record<string, any> = {};

    Object.entries(props).forEach(([propName, propValue]) => {
      if (propValue === undefined) return;

      if (propStyleMapping[propName] || viewStyleProps.has(propName)) {
        return;
      }

      computedProps[propName] = propValue;
    });

    return { computedProps };
  }, [props]);

  const Component: React.ElementType = as || View;

  return (
    <Component ref={ref} style={[styles.computedStyles(props), style]} {...computedProps}>
      {children}
    </Component>
  );
};

const styles = StyleSheet.create(theme => ({
  computedStyles: (props: Record<string, any>) => {
    const computedStyles: Record<string, any> = {};

    Object.entries(props).forEach(([propName, propValue]) => {
      if (propValue === undefined) return;

      let stylePropName: keyof ViewStyle | undefined;

      // Handle shorthand props
      if (propStyleMapping[propName]) {
        stylePropName = propStyleMapping[propName];
      }
      // Handle direct style props
      else if (viewStyleProps.has(propName)) {
        stylePropName = propName as keyof ViewStyle;
      }

      if (!stylePropName) return;

      // Resolve theme value if needed
      const themeKey = themeStyleMapping[stylePropName] as keyof typeof theme;

      if (themeKey && theme[themeKey]) {
        computedStyles[stylePropName] = resolveThemeValue(propValue, theme[themeKey]);
      } else {
        computedStyles[stylePropName] = propValue;
      }
    });

    return computedStyles;
  },
}));

type BoxComponentType = <T extends React.ElementType = typeof View>(
  props: PolymorphicComponentProps<T, BoxProps<T>> & { ref?: PolymorphicRef<T> }
) => React.ReactElement | null;

const Box = memo(forwardRef(BoxComponent as any) as BoxComponentType & { displayName?: string });

Box.displayName = 'Box';

export default Box;

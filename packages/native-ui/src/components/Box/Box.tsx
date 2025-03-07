/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { forwardRef, memo } from 'react';
import { ViewStyle } from 'react-native';
import { UnistylesThemes, useUnistyles } from 'react-native-unistyles';
// @ts-expect-error - unistyles types are not exported
import View from 'react-native-unistyles/components/native/NativeView';
import type BoxProps from './Box.props';

const propStyleMapping: { [key: string]: keyof ViewStyle } = {
  p: 'padding',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  pt: 'paddingTop',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  m: 'margin',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
  bg: 'backgroundColor',
  bgColor: 'backgroundColor',
  h: 'height',
  w: 'width',
  rounded: 'borderRadius',
};

const themeStyleMapping: { [key in keyof ViewStyle]?: keyof UnistylesThemes['light'] } = {
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
  opacity: 'opacity',
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

const viewStyleProps = new Set<keyof ViewStyle>([
  'alignContent',
  'alignItems',
  'alignSelf',
  'aspectRatio',
  'backfaceVisibility',
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
  'borderCurve',
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
  'borderStyle',
  'borderTopColor',
  'borderTopEndRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderTopStartRadius',
  'borderTopWidth',
  'borderWidth',
  'bottom',
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
  'paddingVertical',
  'pointerEvents',
  'position',
  'right',
  'rowGap',
  'shadowColor',
  'shadowOffset',
  'shadowOpacity',
  'shadowRadius',
  'start',
  'top',
  'transform',
  'transformOrigin',
  'width',
  'zIndex',
]);

const directStyleProps: Array<keyof ViewStyle> = [
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
];

function isViewStyleProp(propName: string): propName is keyof ViewStyle {
  return viewStyleProps.has(propName as keyof ViewStyle);
}

const BoxComponent = <T extends React.ElementType = typeof View>(
  { as, style, children, ...props }: BoxProps<T>,
  ref: React.Ref<any>
) => {
  const { theme } = useUnistyles();

  const styles: Partial<ViewStyle> = {};
  const componentProps: Record<string, any> = {};

  // propStyleMapping
  for (const prop in propStyleMapping) {
    const stylePropName = propStyleMapping[prop];
    const propValue = props[prop as keyof Omit<BoxProps, 'children' | 'style'>];

    if (propValue !== undefined) {
      const themeKey = themeStyleMapping[stylePropName];
      if (themeKey) {
        const themeMapping = theme[themeKey];
        if (themeMapping && typeof themeMapping === 'object') {
          (styles as any)[stylePropName] = resolveThemeValue(propValue, themeMapping);
        } else {
          (styles as any)[stylePropName] = propValue;
        }
      } else {
        (styles as any)[stylePropName] = propValue;
      }
    }
  }

  // directStyleProps
  directStyleProps.forEach(stylePropName => {
    const propValue = props[stylePropName as keyof Omit<BoxProps, 'children' | 'style'>];
    if (propValue !== undefined) {
      (styles as any)[stylePropName] = propValue;
    }
  });

  // Remaining style props
  for (const propName in props) {
    // Skip if already handled
    if (
      Object.prototype.hasOwnProperty.call(propStyleMapping, propName) ||
      directStyleProps.includes(propName as keyof ViewStyle) ||
      Object.prototype.hasOwnProperty.call(styles, propName)
    ) {
      continue;
    }

    // Check if propName is a valid style property
    if (isViewStyleProp(propName)) {
      const stylePropName = propName;
      const propValue = props[propName as keyof Omit<BoxProps, 'children' | 'style'>];

      if (propValue !== undefined) {
        const themeKey = themeStyleMapping[stylePropName];
        if (themeKey) {
          const themeMapping = theme[themeKey];
          if (themeMapping && typeof themeMapping === 'object') {
            (styles as any)[stylePropName] = resolveThemeValue(propValue, themeMapping);
          } else {
            (styles as any)[stylePropName] = propValue;
          }
        } else {
          (styles as any)[stylePropName] = propValue;
        }
      }
    } else {
      // Non-style props, add to componentProps
      (componentProps as any)[propName] =
        props[propName as keyof Omit<BoxProps, 'children' | 'style'>];
    }
  }

  const Component = as || View;

  return (
    <Component ref={ref} style={[styles, style]} {...componentProps}>
      {children}
    </Component>
  );
};

const ForwardedBox = forwardRef<View, BoxProps>(BoxComponent);

ForwardedBox.displayName = 'Box';

export default memo(ForwardedBox);

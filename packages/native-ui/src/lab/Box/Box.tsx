/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef, memo } from 'react';
import { View, ViewStyle } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import type BoxProps from './Box.props';
import getStyleValue from '../../utils/getStyleValue';

const Box = forwardRef<View, BoxProps>(
  (
    {
      padding,
      p,
      paddingHorizontal,
      px,
      paddingVertical,
      py,
      paddingTop,
      pt,
      paddingBottom,
      pb,
      paddingLeft,
      pl,
      paddingRight,
      pr,
      paddingEnd,
      paddingStart,
      margin,
      m,
      marginHorizontal,
      mx,
      marginVertical,
      my,
      marginTop,
      mt,
      marginBottom,
      mb,
      marginLeft,
      ml,
      marginRight,
      mr,
      marginEnd,
      marginStart,
      height,
      h,
      width,
      w,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      backgroundColor,
      bg,
      bgColor,
      borderColor,
      borderTopColor,
      borderBottomColor,
      borderLeftColor,
      borderRightColor,
      borderBlockColor,
      borderBlockEndColor,
      borderBlockStartColor,
      borderEndColor,
      borderStartColor,
      borderRadius,
      rounded,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderBottomEndRadius,
      borderBottomStartRadius,
      borderTopEndRadius,
      borderTopStartRadius,
      borderEndEndRadius,
      borderEndStartRadius,
      borderStartEndRadius,
      borderStartStartRadius,
      borderWidth,
      borderTopWidth,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth,
      borderEndWidth,
      borderStartWidth,
      opacity,
      shadowColor,
      alignContent,
      alignItems,
      alignSelf,
      aspectRatio,
      bottom,
      display,
      end,
      flex,
      flexBasis,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      justifyContent,
      left,
      overflow,
      position,
      right,
      start,
      top,
      zIndex,
      direction,
      backfaceVisibility,
      borderStyle,
      elevation,
      shadowOffset,
      shadowOpacity,
      shadowRadius,
      transform,
      transformOrigin,
      gap,
      rowGap,
      columnGap,
      pointerEvents,
      cursor,
      style,
      children,
      ...restProps
    },
    ref
  ) => {
    const {
      theme: { space, colors, radii, borderWidths, opacity: themeOpacity },
    } = useStyles();

    const styles: ViewStyle = {};
    const assignStyle = (
      stylePropName: keyof ViewStyle,
      propValue: any,
      themeMapping?: Record<string, any>
    ) => {
      if (propValue !== undefined) {
        styles[stylePropName] = themeMapping ? getStyleValue(propValue, themeMapping) : propValue;
      }
    };

    // Spacing props
    assignStyle('padding', padding ?? p, space);
    assignStyle('paddingHorizontal', paddingHorizontal ?? px, space);
    assignStyle('paddingVertical', paddingVertical ?? py, space);
    assignStyle('paddingTop', paddingTop ?? pt, space);
    assignStyle('paddingBottom', paddingBottom ?? pb, space);
    assignStyle('paddingLeft', paddingLeft ?? pl, space);
    assignStyle('paddingRight', paddingRight ?? pr, space);
    assignStyle('paddingEnd', paddingEnd, space);
    assignStyle('paddingStart', paddingStart, space);

    assignStyle('margin', margin ?? m, space);
    assignStyle('marginHorizontal', marginHorizontal ?? mx, space);
    assignStyle('marginVertical', marginVertical ?? my, space);
    assignStyle('marginTop', marginTop ?? mt, space);
    assignStyle('marginBottom', marginBottom ?? mb, space);
    assignStyle('marginLeft', marginLeft ?? ml, space);
    assignStyle('marginRight', marginRight ?? mr, space);
    assignStyle('marginEnd', marginEnd, space);
    assignStyle('marginStart', marginStart, space);

    assignStyle('gap', gap, space);
    assignStyle('rowGap', rowGap, space);
    assignStyle('columnGap', columnGap, space);

    assignStyle('bottom', bottom, space);
    assignStyle('end', end, space);
    assignStyle('left', left, space);
    assignStyle('right', right, space);
    assignStyle('start', start, space);
    assignStyle('top', top, space);

    // Size props
    assignStyle('height', height ?? h, space);
    assignStyle('width', width ?? w, space);
    assignStyle('maxHeight', maxHeight, space);
    assignStyle('maxWidth', maxWidth, space);
    assignStyle('minHeight', minHeight, space);
    assignStyle('minWidth', minWidth, space);

    // Color props
    assignStyle('backgroundColor', backgroundColor ?? bg ?? bgColor, colors);
    assignStyle('borderColor', borderColor, colors);
    assignStyle('borderTopColor', borderTopColor, colors);
    assignStyle('borderBottomColor', borderBottomColor, colors);
    assignStyle('borderLeftColor', borderLeftColor, colors);
    assignStyle('borderRightColor', borderRightColor, colors);
    assignStyle('borderBlockColor', borderBlockColor, colors);
    assignStyle('borderBlockEndColor', borderBlockEndColor, colors);
    assignStyle('borderBlockStartColor', borderBlockStartColor, colors);
    assignStyle('borderEndColor', borderEndColor, colors);
    assignStyle('borderStartColor', borderStartColor, colors);
    assignStyle('shadowColor', shadowColor, colors);

    // Border radius props
    assignStyle('borderRadius', borderRadius ?? rounded, radii);
    assignStyle('borderTopLeftRadius', borderTopLeftRadius, radii);
    assignStyle('borderTopRightRadius', borderTopRightRadius, radii);
    assignStyle('borderBottomLeftRadius', borderBottomLeftRadius, radii);
    assignStyle('borderBottomRightRadius', borderBottomRightRadius, radii);
    assignStyle('borderBottomEndRadius', borderBottomEndRadius, radii);
    assignStyle('borderBottomStartRadius', borderBottomStartRadius, radii);
    assignStyle('borderTopEndRadius', borderTopEndRadius, radii);
    assignStyle('borderTopStartRadius', borderTopStartRadius, radii);
    assignStyle('borderEndEndRadius', borderEndEndRadius, radii);
    assignStyle('borderEndStartRadius', borderEndStartRadius, radii);
    assignStyle('borderStartEndRadius', borderStartEndRadius, radii);
    assignStyle('borderStartStartRadius', borderStartStartRadius, radii);

    // Border width props
    assignStyle('borderWidth', borderWidth, borderWidths);
    assignStyle('borderTopWidth', borderTopWidth, borderWidths);
    assignStyle('borderBottomWidth', borderBottomWidth, borderWidths);
    assignStyle('borderLeftWidth', borderLeftWidth, borderWidths);
    assignStyle('borderRightWidth', borderRightWidth, borderWidths);
    assignStyle('borderEndWidth', borderEndWidth, borderWidths);
    assignStyle('borderStartWidth', borderStartWidth, borderWidths);

    // Opacity
    assignStyle('opacity', opacity, themeOpacity);

    // Other style-related props
    assignStyle('alignContent', alignContent);
    assignStyle('alignItems', alignItems);
    assignStyle('alignSelf', alignSelf);
    assignStyle('aspectRatio', aspectRatio);
    assignStyle('display', display);
    assignStyle('flex', flex);
    assignStyle('flexBasis', flexBasis);
    assignStyle('flexDirection', flexDirection);
    assignStyle('flexGrow', flexGrow);
    assignStyle('flexShrink', flexShrink);
    assignStyle('flexWrap', flexWrap);
    assignStyle('justifyContent', justifyContent);
    assignStyle('overflow', overflow);
    assignStyle('position', position);
    assignStyle('zIndex', zIndex);
    assignStyle('direction', direction);
    assignStyle('backfaceVisibility', backfaceVisibility);
    assignStyle('borderStyle', borderStyle);
    assignStyle('elevation', elevation);
    assignStyle('shadowOffset', shadowOffset);
    assignStyle('shadowOpacity', shadowOpacity);
    assignStyle('shadowRadius', shadowRadius);
    assignStyle('transform', transform);
    assignStyle('transformOrigin', transformOrigin);
    assignStyle('pointerEvents', pointerEvents);
    assignStyle('cursor', cursor);

    return (
      <View ref={ref} {...restProps} style={[styles, style]}>
        {children}
      </View>
    );
  }
);

Box.displayName = 'Box';

export default memo(Box);

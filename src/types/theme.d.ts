import { type ObjectOrArray, type TLengthStyledSystem } from 'styled-system';
import type * as CSS from 'csstype';

export interface MyTheme<TLength = TLengthStyledSystem> {
  breakpoints?: ObjectOrArray<number | string | symbol> | undefined;
  mediaQueries?: Record<string, string> | undefined;
  space: any;
  fontSizes?: ObjectOrArray<CSS.Property.FontSize<number>> | undefined;
  colors: {
    white: string;
    white1: string;
    black: string;
    navy: string;
    orange: string;
    orange1: string;
    orange2: string;
    greys: string[];
    blues: string[];
    purple: string;
    calmGray: string;
    warmGrey: string;
    grayDisabled: string;
    grayPlaceholder: string;
    stepUnreached: string;
    stepReached: string;
    progressBg: string;
    eclipse1: string;
    eclipse2: string;
    eclipse3: string;
    eclipse4: string;
    eclipse5: string;
    eclipse6: string;
    eclipse7: string;
    eclipse8: string;
    eclipse9: string;
    transparent: string;
    eclipseBorder: string;
    locationIndicator: string;
    placeholder: string;
    inputText: string;
    midnight: string;
    popupBackground: string;
    charcoal: string;
    live: string;
    brown: string;
    noProgress: string;
    emphasis: string;
    lowOpacityGray: string;
    date: string;
  };
  fonts?: ObjectOrArray<CSS.Property.FontFamily> | undefined;
  fontWeights?: ObjectOrArray<CSS.Property.FontWeight> | undefined;
  lineHeights?: ObjectOrArray<CSS.Property.LineHeight<TLength>> | undefined;
  letterSpacings?:
    | ObjectOrArray<CSS.Property.LetterSpacing<TLength>>
    | undefined;
  sizes?:
    | ObjectOrArray<
        | CSS.Property.Height<Record<string, unknown>>
        | CSS.Property.Width<Record<string, unknown>>
      >
    | undefined;
  borders?:
    | ObjectOrArray<CSS.Property.Border<Record<string, unknown>>>
    | undefined;
  borderStyles?:
    | ObjectOrArray<CSS.Property.Border<Record<string, unknown>>>
    | undefined;
  borderWidths?: ObjectOrArray<CSS.Property.BorderWidth<TLength>> | undefined;
  radii?: ObjectOrArray<CSS.Property.BorderWidth<TLength>> | undefined;
  shadows?: ObjectOrArray<CSS.Property.BoxShadow> | undefined;
  zIndices?: ObjectOrArray<CSS.Property.ZIndex> | undefined;
  buttons?: ObjectOrArray<CSS.StandardProperties> | undefined;
  colorStyles?: ObjectOrArray<CSS.StandardProperties> | undefined;
  textStyles?: ObjectOrArray<CSS.StandardProperties> | undefined;
}

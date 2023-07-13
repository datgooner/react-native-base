import styled from 'styled-components/native';
import {
  border,
  color,
  flexbox,
  fontSize,
  layout,
  position,
  space,
  type BorderProps,
  type ColorProps,
  type FlexboxProps,
  type FontSizeProps,
  type LayoutProps,
  type PositionProps,
  type SpaceProps,
} from 'styled-system';
import { type MyTheme } from 'types/theme';

const View = styled.View<
  ColorProps<MyTheme> &
    SpaceProps<MyTheme> &
    LayoutProps<MyTheme> &
    PositionProps<MyTheme> &
    BorderProps<MyTheme> &
    FlexboxProps<MyTheme> &
    FontSizeProps<MyTheme>
>`
  ${color}
  ${space}
  ${layout}
  ${position}
  ${border}
  ${flexbox}
  ${fontSize}
`;
export default View;

import styled from 'styled-components/native';
import {
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  type BorderProps,
  type ColorProps,
  type FlexboxProps,
  type LayoutProps,
  type PositionProps,
  type SpaceProps,
} from 'styled-system';
import { type MyTheme } from 'types/theme';

const TouchableOpacity = styled.TouchableOpacity<
  ColorProps<MyTheme> &
    SpaceProps<MyTheme> &
    LayoutProps<MyTheme> &
    PositionProps<MyTheme> &
    BorderProps<MyTheme> &
    FlexboxProps<MyTheme>
>`
  ${color}
  ${space}
  ${layout}
  ${position}
  ${border}
  ${flexbox}
`;

export default TouchableOpacity;

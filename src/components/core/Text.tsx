import styled from 'styled-components/native';
import {
  color,
  layout,
  space,
  typography,
  type ColorProps,
  type LayoutProps,
  type SpaceProps,
  type TypographyProps,
} from 'styled-system';
import { Colors } from 'themes/colors';
import { type MyTheme } from 'types/theme';

const Text = styled.Text<
  ColorProps<MyTheme> &
    SpaceProps<MyTheme> &
    TypographyProps<MyTheme> &
    LayoutProps<MyTheme>
>`
  font-family: Epilogue-Medium;
  font-weight: 400;
  color: ${Colors.black};
  ${color}
  ${space}
  ${typography}
  ${layout}
`;

export default Text;

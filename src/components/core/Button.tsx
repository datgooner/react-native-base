import React, {
  type FC,
  type ReactNode,
  useMemo,
  useState,
  useCallback,
} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  type TextStyle,
  type TouchableOpacityProps,
} from 'react-native';
import TouchableOpacity from './TouchableOpacity';
import View from './View';
import Text from '../core/text';
import { useTheme } from 'styled-components';
import {
  type TLengthStyledSystem,
  type SpaceProps,
  type ThemeValue,
  type BorderProps,
} from 'styled-system';
import { type MyTheme } from '../../types/theme';

export type ButtonType = 'primary' | 'secondary' | 'emphasis' | 'brightWhite';

interface Props {
  textStyle?: TextStyle;
  loading?: boolean;
  variant?: ButtonType;
  full?: boolean;
  height?: number;
  width?: TLengthStyledSystem;
  rounded?: boolean;
  justifyStart?: boolean;
}
export type ButtonProps = Props &
  TouchableOpacityProps &
  SpaceProps &
  BorderProps<MyTheme>;

const Button: FC<ButtonProps> = ({
  justifyStart,
  children,
  textStyle,
  loading,
  variant = 'primary',
  height = 48,
  width,
  style,
  rounded = false,
  disabled,
  full,
  ...other
}) => {
  const theme = useTheme();
  const [isPress, setIsPress] = useState<boolean>(false);

  const getTextColor = useMemo<ThemeValue<'colors', MyTheme>>(() => {
    switch (variant) {
      case 'primary':
      case 'emphasis': {
        return 'white';
      }
      case 'secondary': {
        if (disabled ?? loading) {
          return 'grayDisabled';
        }
        if (isPress) {
          return 'orange1';
        } else {
          return 'calmGray';
        }
      }
      default: {
        return 'white';
      }
    }
  }, [disabled, isPress, loading, variant]);

  const getBackgroundColor = useMemo<ThemeValue<'colors', MyTheme>>(() => {
    switch (variant) {
      case 'primary': {
        if (disabled ?? loading) {
          return 'grayDisabled';
        }
        if (isPress) {
          return 'purple';
        } else {
          return 'calmGray';
        }
      }
      case 'secondary': {
        if (disabled ?? loading) {
          return 'white';
        }
        if (isPress) {
          return 'warmGrey';
        } else {
          return 'white';
        }
      }
      case 'emphasis': {
        if (disabled ?? loading) {
          return 'orange2';
        }
        if (isPress) {
          return 'orange1';
        } else {
          return 'orange';
        }
      }
      case 'brightWhite': {
        return 'white';
      }
      default: {
        return 'calmGray';
      }
    }
  }, [disabled, isPress, loading, variant]);

  const getBorderColor = useMemo<ThemeValue<'colors', MyTheme>>(() => {
    switch (variant) {
      case 'primary':
      case 'emphasis': {
        return getBackgroundColor;
      }
      case 'secondary': {
        if (disabled ?? loading) {
          return 'grayDisabled';
        }
        if (isPress) {
          return 'orange1';
        } else {
          return 'calmGray';
        }
      }
      case 'brightWhite': {
        if (isPress) {
          return 'orange';
        } else {
          return 'white';
        }
      }
      default: {
        return 'calmGray';
      }
    }
  }, [disabled, getBackgroundColor, isPress, loading, variant]);

  const onPressIn = useCallback(() => {
    setIsPress(true);
  }, []);

  const onPressOut = useCallback(() => {
    setIsPress(false);
  }, []);

  const renderChild = (child: ReactNode, key?: number) =>
    typeof child === 'string' ? (
      <Text
        fontSize={14}
        lineHeight="24px"
        fontWeight="bold"
        color={getTextColor}
        style={textStyle}
        key={String(key)}>
        {child}
      </Text>
    ) : (
      child
    );

  return (
    <TouchableOpacity
      disabled={disabled}
      flexShrink={1}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={justifyStart ? 'flex-start' : 'center'}
      width={full ? '100%' : width}
      borderRadius={rounded ? 99 : 0}
      backgroundColor={getBackgroundColor}
      borderColor={getBorderColor}
      borderWidth={1}
      paddingX={4}
      style={[style, { height }]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...other}>
      <View
        flexDirection={variant === 'brightWhite' ? 'column' : 'row'}
        justifyContent="center"
        alignItems="center">
        {Array.isArray(children)
          ? children.map(renderChild)
          : renderChild(children)}
      </View>

      {loading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          color={
            variant === 'primary' ? theme.colors.white : theme.colors.black
          }
          size="small"
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  activityIndicator: {
    marginLeft: 12,
  },
});

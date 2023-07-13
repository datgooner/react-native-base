import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import styled, { useTheme } from 'styled-components/native';
import {
  type NativeSyntheticEvent,
  Pressable,
  type TextInputFocusEventData,
  type StyleProp,
  type TextInputProps,
  type TextStyle,
} from 'react-native';
import Text from 'components/core/Text';
import View from 'components/core/View';
import {
  RightIcon,
  useTogglePasswordVisibility,
} from 'hooks/common/useTogglePasswordVisibility';
import ViewOnSVG from '../../assets/images/icons/view-on.svg';
import ViewOffSVG from '../../assets/images/icons/view-off.svg';
import { type ThemeValue } from 'styled-system';
import { type MyTheme } from '../../types/theme';

export interface InputFieldProps extends TextInputProps {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  label?: string;
  inputStyle?: StyleProp<TextStyle>;
  isOption?: boolean;
  placeholder?: string;
  description?: string;
  height?: number;
  error?: boolean;
  disabled?: boolean;
  centerInput?: boolean;
}
const InputField = forwardRef<any, InputFieldProps>((props, ref) => {
  const {
    centerInput = false,
    prefix,
    suffix,
    style,
    label,
    inputStyle,
    isOption,
    description,
    value,
    height = 48,
    error,
    secureTextEntry,
    disabled,
    ...other
  } = props;

  const theme = useTheme();
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const renderViewPassword = useCallback(() => {
    return (
      <Pressable onPress={handlePasswordVisibility}>
        {rightIcon === RightIcon.VIEW_ON ? <ViewOnSVG /> : <ViewOffSVG />}
      </Pressable>
    );
  }, [handlePasswordVisibility, rightIcon]);

  const customOnFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocus(true);
    },
    [],
  );

  const getBorderColor = useMemo<ThemeValue<'colors', MyTheme>>(() => {
    if (disabled) {
      return 'placeholder';
    } else if (error) {
      return 'locationIndicator';
    } else if (isFocus) {
      return 'calmGray';
    } else {
      return 'white';
    }
  }, [disabled, error, isFocus]);

  return (
    <View width="100%" style={style}>
      {!!label && (
        <View flexDirection="row" mb={8}>
          <Text textAlign="center" fontSize={16} color="calmGray">
            {label}
          </Text>
          {!!isOption && <Text> (optional)</Text>}
        </View>
      )}

      <View
        width="100%"
        px={16}
        backgroundColor="white"
        borderWidth={1}
        borderColor={getBorderColor}
        borderRadius={20}
        flexDirection="row"
        alignItems="center"
        justifyContent={centerInput ? 'center' : 'space-between'}
        pointerEvents={disabled ? 'none' : 'auto'}>
        {prefix && (
          <View alignItems="center" justifyContent="center">
            {prefix}
          </View>
        )}
        {centerInput ? (
          <CenterInput
            textAlignVertical={other.multiline ? 'top' : 'auto'}
            ref={ref}
            height={height}
            value={value}
            style={inputStyle}
            onFocus={customOnFocus}
            placeholderTextColor={theme.colors.grey}
            color={theme.colors.black}
            secureTextEntry={secureTextEntry && passwordVisibility}
            {...other}
          />
        ) : (
          <Input
            textAlignVertical={other.multiline ? 'top' : 'auto'}
            ref={ref}
            height={height}
            value={value}
            style={inputStyle}
            onFocus={customOnFocus}
            placeholderTextColor={theme.colors.grey}
            color={theme.colors.black}
            secureTextEntry={secureTextEntry && passwordVisibility}
            {...other}
          />
        )}
        {secureTextEntry && <View ml={5}>{renderViewPassword()}</View>}
        {suffix && (
          <View width={20} alignItems="center" justifyContent="center" ml={5}>
            {suffix}
          </View>
        )}
      </View>
      {!!description && (
        <Text color="midnight" mt={8}>
          {description}
        </Text>
      )}
    </View>
  );
});

InputField.displayName = 'InputField';

const CenterInput = styled.TextInput<{
  color?: string;
  height?: number;
}>`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  font-family: Epilogue-Medium;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  color: ${({ color }) => color};
`;

const Input = styled(CenterInput)`
  flex: 1;
`;

export default InputField;

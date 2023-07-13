/* eslint-disable no-self-assign */
import React, { forwardRef, useCallback, useState } from 'react';
import { useField, useFormikContext } from 'formik';
import {
  type NativeSyntheticEvent,
  type TextInputFocusEventData,
} from 'react-native';
import InputField, { type InputFieldProps } from 'components/core/Input';
import Text from 'components/core/Text';
import View from 'components/core/View';
import TouchableOpacity from 'components/core/TouchableOpacity';

interface Suggestion {
  value: string;
  label: string;
}
interface Props extends InputFieldProps {
  name: string;
  numericInput?: boolean;
  counterButton?: boolean;
  suggestions?: Suggestion[];
  onChangeText?: (text: string) => void;
}

const FormikInput = forwardRef(
  (
    {
      name,
      numericInput,
      counterButton,
      suggestions,
      onChangeText,
      ...other
    }: Props,
    ref,
  ) => {
    const [{ value }, { error, touched }] = useField(name);
    const [suggestedValue, setSuggestedValue] = useState<string>('');

    const { handleChange, handleBlur, setFieldTouched } = useFormikContext();
    const onBlur = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        other.onBlur?.(e);
        handleBlur(name)(e);
      },
      [handleBlur, name, other],
    );
    const customOnChangeText = useCallback(
      (v: string) => {
        onChangeText?.(v);
        let text = numericInput ? v.replace(',', '.') : v;
        if (numericInput && text.includes('.')) {
          const strAfterDot = text.split('.', 8)[1];
          if (strAfterDot.length <= 8) {
            text = text;
          } else {
            const strBeforeDot = text.split('.', 1)[0];
            text = strBeforeDot + '.' + strAfterDot.substring(0, 8);
          }
        }
        setFieldTouched(name, true, true);
        handleChange(name)(text.replace(/\n/g, ' '));
      },
      [onChangeText, numericInput, setFieldTouched, name, handleChange],
    );

    const renderError = () => {
      if (error && touched) {
        if (typeof error === 'string') {
          return (
            <Text mt={8} color="locationIndicator">
              {error}
            </Text>
          );
        } else {
          return <Text mt={1.5}>{error[0] || error[1]}</Text>;
        }
      } else {
        return null;
      }
    };

    const selectSuggestion = useCallback(
      (item: Suggestion) => {
        if (item.value === suggestedValue) {
          setSuggestedValue('');
          handleChange(name)('');
        } else {
          setSuggestedValue(item.value);
          handleChange(name)(item.value);
        }
      },
      [handleChange, name, suggestedValue],
    );

    const increaseValue = useCallback(() => {
      handleChange(name)((Number(value) + 1).toString());
    }, [handleChange, name, value]);

    const decreaseValue = useCallback(() => {
      if (Number(value) > 0) {
        handleChange(name)((Number(value) - 1).toString());
      }
    }, [handleChange, name, value]);

    return (
      <>
        <View flexDirection="row" alignItems="center">
          {counterButton ? (
            <TouchableOpacity
              mr={12}
              px={16}
              py={10}
              borderRadius={30}
              bg="white"
              onPress={decreaseValue}>
              <Text color="locationIndicator">-</Text>
            </TouchableOpacity>
          ) : null}
          <InputField
            value={value}
            {...other}
            ref={ref}
            onBlur={onBlur}
            onChangeText={customOnChangeText}
            error={error && touched}
          />
          {counterButton ? (
            <TouchableOpacity
              ml={12}
              px={16}
              py={10}
              borderRadius={30}
              bg="white"
              onPress={increaseValue}>
              <Text color="locationIndicator">+</Text>
            </TouchableOpacity>
          ) : null}
        </View>

        {renderError()}
        {suggestions?.length > 0 ? (
          <View flexDirection="row" mt={16} alignSelf="center">
            {suggestions.map(item => (
              <TouchableOpacity
                key={item.value}
                mx={4}
                py={8}
                px={16}
                borderRadius={32}
                activeOpacity={0.8}
                onPress={() => {
                  selectSuggestion(item);
                }}
                bg={
                  item.value === suggestedValue ? 'locationIndicator' : 'white'
                }>
                <Text
                  fontSize={14}
                  color={item.value === suggestedValue ? 'white' : 'calmGray'}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
      </>
    );
  },
);

FormikInput.displayName = 'FormikInput';

export default React.memo(FormikInput);

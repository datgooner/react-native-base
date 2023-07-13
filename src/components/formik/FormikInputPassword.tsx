import React, { forwardRef, useCallback } from 'react';
import { Pressable } from 'react-native';
import {
  RightIcon,
  useTogglePasswordVisibility,
} from 'hooks/common/useTogglePasswordVisibility';
import FormikInput from './FormikInput';
import { type InputFieldProps } from '../core/Input';
import ViewOnSVG from 'assets/images/icons/view-on.svg';
import ViewOffSVG from 'assets/images/icons/view-off.svg';

interface Props extends InputFieldProps {
  name: string;
  numericInput?: boolean;
}

const FormikInputPassword = forwardRef(({ ...other }: Props, ref) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const renderSuffix = useCallback(() => {
    return (
      <Pressable onPress={handlePasswordVisibility}>
        {rightIcon === RightIcon.VIEW_ON ? <ViewOnSVG /> : <ViewOffSVG />}
      </Pressable>
    );
  }, [handlePasswordVisibility, rightIcon]);

  return (
    <FormikInput
      ref={ref}
      {...other}
      secureTextEntry={passwordVisibility}
      suffix={renderSuffix()}
    />
  );
});

FormikInputPassword.displayName = 'FormikInputPassword';

export default React.memo(FormikInputPassword);

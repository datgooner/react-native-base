import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

export const useLoginValidation = () => {
  const { t } = useTranslation();
  return useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string()
          .required(t('Email is required'))
          .email('Email is invalid')
          .trim(),
        password: Yup.string().required('Password is required').min(4),
      }),
    [t],
  );
};

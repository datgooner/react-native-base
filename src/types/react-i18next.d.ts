import 'react-i18next';
import type common from 'translations/en/namespaces/common.json';

declare module 'react-i18next' {
  interface Resources {
    common: typeof common;
  }
}

import i18next, { type LanguageDetectorAsyncModule } from 'i18next';
import intervalPlural from 'i18next-intervalplural-postprocessor';
import { initReactI18next } from 'react-i18next';
import en from 'translations/en';

const detectLocale = async (callback: (lang: string) => void) => {
  // todo
  // eslint-disable-next-line n/no-callback-literal
  callback('en');
};
const languageDetector = {
  type: 'languageDetector' as LanguageDetectorAsyncModule['type'],
  async: true,
  detect: detectLocale,
  init: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .use(intervalPlural)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: {
      en: en as any,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;

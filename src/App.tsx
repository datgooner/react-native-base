import React, { type FC } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { I18nextProvider } from 'react-i18next';
import * as Sentry from '@sentry/react-native';
import i18n from 'translations/i18n';
import RootRoutes from 'routes/Root.routes';
import { bootstrapApp } from 'utils/bootstrapApp.util';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { queryClient } from 'utils/react-query';
import { QueryClientProvider } from '@tanstack/react-query';

bootstrapApp();

const App: FC = () => {
  return (
    <>
      <StatusBar
        backgroundColor="white"
        translucent={true}
        barStyle="dark-content"
      />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <I18nextProvider i18n={i18n}>
          <QueryClientProvider client={queryClient}>
            <SafeAreaProvider>
              <RootRoutes />
            </SafeAreaProvider>
          </QueryClientProvider>
        </I18nextProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default Sentry.wrap(App);

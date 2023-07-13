import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppRoutes from 'routes/App.routes';
import { navigationService } from 'utils/navigation.util';

const RootRoutes = () => {
  return (
    <NavigationContainer
      ref={nav => {
        navigationService.navigator = nav;
      }}>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default RootRoutes;

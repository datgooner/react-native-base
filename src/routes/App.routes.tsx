import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRouter } from 'constants/router.const';
import { type AppRootParams } from 'models/routes.model';
import React from 'react';
import Home from 'screens/home/Home';

const Stack = createNativeStackNavigator<AppRootParams>();

const AppRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppRouter.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AppRouter.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default AppRoutes;

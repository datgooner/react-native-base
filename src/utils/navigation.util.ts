import { type NavigationContainerRef } from '@react-navigation/core/lib/typescript/src/types';
import { type NavigationState } from '@react-navigation/native';

export const getActiveRouteName = (state: NavigationState): any => {
  const nextRoute = state.routes;
  if (nextRoute?.[state.index]?.state) {
    return getActiveRouteName(nextRoute[state.index].state as NavigationState);
  }
  return state.routes[state.index].name;
};

export const getActiveRoutes = (state: NavigationState): any => {
  const nextRoute = state.routes;
  if (nextRoute?.[state.index]?.state) {
    return getActiveRoutes(nextRoute[state.index].state as NavigationState);
  }
  return state.routes;
};

export const navigationService: {
  navigator?: NavigationContainerRef<any>;
} = {
  navigator: undefined,
};

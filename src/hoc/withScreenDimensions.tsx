import React, { type ComponentType, type FC } from 'react';
import { useWindowDimensions } from 'react-native';

export interface DimensionProps {
  screenWidth: number;
  screenHeight: number;
}

export default function withScreenDimensions<T>(
  Component: ComponentType<T & DimensionProps>,
) {
  const WithScreenDimensions: FC<T> = (props: T) => {
    const { height, width } = useWindowDimensions();
    return (
      <Component {...{ screenWidth: width, screenHeight: height }} {...props} />
    );
  };
  return WithScreenDimensions;
}

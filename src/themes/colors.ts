export const Colors = {
  primary: '#9E0F29',
  primaryLighter: '#F85654',
  secondary: '#FAB136',
  secondary2: '#FBA72D',
  background: '#141313',
  surfaceDark: '#252525',
  surface: '#F5F5FA',
  surfaceVariant: '#343434',
  text: '#FFFFFF',
  textSurface: withOpacity('#ffffff', 0.7),
  additionalOrange: '#B98C33',
  additionalBlue: '#33B1B9',
  additionalGray: '#A08C8C',
  error: '#FF4869',
  transparent: 'transparent',
  black: '#000000',
};

export function withOpacity(color: string, opacity: number): string {
  if ((__DEV__ && color.length !== 7) || opacity < 0 || opacity > 1) {
    return color;
  }
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

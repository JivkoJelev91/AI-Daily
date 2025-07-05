import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { GlobalStyles } from '../styles/globalStyles';

// Base Text component with default font
export const Text: React.FC<TextProps> = ({ style, ...props }) => (
  <RNText style={[GlobalStyles.text, style]} {...props} />
);

// Title Text component
export const TitleText: React.FC<TextProps> = ({ style, ...props }) => (
  <RNText style={[GlobalStyles.title, style]} {...props} />
);

// Small Text component
export const SmallText: React.FC<TextProps> = ({ style, ...props }) => (
  <RNText style={[GlobalStyles.small, style]} {...props} />
);

// Body Text component
export const BodyText: React.FC<TextProps> = ({ style, ...props }) => (
  <RNText style={[GlobalStyles.body, style]} {...props} />
);

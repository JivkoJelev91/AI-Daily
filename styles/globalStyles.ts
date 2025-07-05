import { Platform } from 'react-native';

// Color palette
export const Colors = {
  primary: '#80B4B8',
  secondary: '#b0c4de',
  background: '#101820',
  cardBackground: '#18222d',
  tagBackground: '#223344',
  border: '#80B4B8',
  text: '#80B4B8',
  textSecondary: '#b0c4de',
  imageBackground: '#222',
  separator: '#2a3441',
};

export const GlobalStyles = {
  fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
  
  // Common text styles with colors
  text: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    color: Colors.text,
  },
  
  title: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    fontWeight: 'bold' as const,
    color: Colors.text,
  },
  
  body: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    color: Colors.text,
  },
  
  small: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    fontSize: 11,
    color: Colors.text,
  },
};

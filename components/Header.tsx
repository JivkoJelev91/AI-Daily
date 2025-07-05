import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TitleText, Text } from './StyledText';
import { Colors } from '../styles/globalStyles';

const Header: React.FC = () => (
  <View style={styles.header}>
    <TitleText style={styles.title}>AI News</TitleText>
    <Text style={styles.icon}>⌕</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,    backgroundColor: Colors.background,
  },  title: {
    fontSize: 28,
  },  icon: {
    fontSize: 40,
    color: Colors.primary,
  },
});

export default Header;

import React from 'react';
import { StyleSheet, Text } from 'react-native';

const NormalText = ({ children, style }) => <Text style={[styles.normal, style]}>{children}</Text>;
const BoldText = ({ children, style }) => <Text style={[styles.normal, styles.bold, style]}>{children}</Text>;

const styles = StyleSheet.create({
  normal: {
    fontSize: 18,
    color: 'black'
  },
  bold: {
    fontWeight: 'bold'
  }
});

export { NormalText, BoldText };

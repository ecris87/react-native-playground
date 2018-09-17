import React from 'react';
import { StyleSheet, Text } from 'react-native';

const NormalText = ({ children, style }) => <Text style={[styles.normal, style]}>{children}</Text>;
const BoldText = ({ children, style }) => <Text style={[styles.normal, styles.bold, style]}>{children}</Text>;
const ErrorText = ({ children, style }) => <Text style={[styles.normal, styles.error, style]}>{children}</Text>;
const SuccessText = ({ children, style }) => <Text style={[styles.normal, styles.success, style]}>{children}</Text>;
const SmallText = ({ children, style }) => <Text style={[styles.normal, styles.small, style]}>{children}</Text>;

const styles = StyleSheet.create({
  normal: {
    fontSize: 18,
    color: 'black'
  },
  small: {
    fontSize: 14
  },
  bold: {
    fontWeight: 'bold'
  },
  error: {
    color: 'red'
  },
  success: {
    color: 'green'
  }
});

export { NormalText, SmallText, BoldText, ErrorText, SuccessText };

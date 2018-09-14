import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Heading1 = ({ children, style }) => <Text style={[styles.heading, styles.h1, style]}>{children}</Text>;
const Heading2 = ({ children, style }) => <Text style={[styles.heading, styles.h2, style]}>{children}</Text>;
const Heading3 = ({ children, style }) => <Text style={[styles.heading, styles.h3, style]}>{children}</Text>;
const Heading4 = ({ children, style }) => <Text style={[styles.heading, styles.h4, style]}>{children}</Text>;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingRight: 10,
    paddingLeft: 10
  },
  h1: {
    fontSize: 50,
    textShadowColor: 'white'
  },
  h2: {
    fontSize: 40
  },
  h3: {
    fontSize: 30
  },
  h4: {
    fontSize: 20
  }
});

export { Heading1, Heading2, Heading3, Heading4 };

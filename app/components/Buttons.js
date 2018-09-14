import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

const PrimaryButton = ({ onPress, title }) => (
  <View style={styles.primaryButton}>
    <Button title={title} onPress={onPress} />
  </View>
);

const styles = StyleSheet.create({
  primaryButton: {
    padding: 10,
    width: 280,
    borderRadius: 30,
    backgroundColor: 'white',
    margin: 5
  }
});

export { PrimaryButton };

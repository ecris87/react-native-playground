import React from 'react';
import { PickerIOS, Picker as PickerAndroid, StyleSheet, Platform } from 'react-native';

const Picker = Platform.select({
  ios: PickerIOS,
  android: PickerAndroid
});
console.log('>', Picker.displayName);

const StyledPicker = ({ children, style, itemStyle, ...restOfProps }) => {
  return (
    <Picker style={[styles.picker, style]} itemStyle={[styles.pickerItem, itemStyle]} {...restOfProps}>
      {children}
    </Picker>
  );
};

const StyledPickerItem = ({ children, ...restOfProps }) => {
  return <Picker.Item {...restOfProps}>{children}</Picker.Item>;
};

const styles = StyleSheet.create({
  picker: {
    width: 200,
    height: 200
  },
  pickerItem: {
    fontSize: 22,
    color: 'rebeccapurple',
    fontWeight: 'bold',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rebeccapurple',
    backgroundColor: 'lavender'
  }
});

export { StyledPicker, StyledPickerItem };

import React from 'react';
import { StyleSheet, Text } from 'react-native';

class NormalText extends React.Component {
  render() {
    return <Text style={styles.text}>{this.props.children}</Text>;
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black'
  }
});

export default NormalText;

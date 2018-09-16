import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NormalText } from '../../components/Text';

class HeaderView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NormalText>
          This is a list of the first ever Github accounts. Tap a username to see more information about that user.
        </NormalText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'white',
    padding: 10
  }
});

export default HeaderView;

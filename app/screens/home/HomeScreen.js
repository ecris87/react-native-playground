import React from 'react';
import { Heading1 } from '../../components/Headings';
import { PrimaryButton } from '../../components/Buttons';
import { StyleSheet, View } from 'react-native';
import routes from '../../constants/routes';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={styles.container}>
        <Heading1 style={styles.title}>Githubber</Heading1>
        <PrimaryButton title="First Github Users" onPress={() => this.props.navigation.navigate(routes.USERS)} />
        <PrimaryButton
          title="Most Popular Repos"
          onPress={() => this.props.navigation.navigate(routes.REPO_SELECTION)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue'
  },
  title: {
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: 'white',
    textShadowRadius: 2
  }
});

export default HomeScreen;

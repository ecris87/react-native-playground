import React from 'react';
import { StyleSheet, View } from 'react-native';
import axios from 'axios';
import UserProfileView from './UserProfileView';
const FALLBACK_NUMBER = 10000;

class UserScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('username', 'Github User')
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const username = navigation.getParam('username', 'FALLBACK-NO-USERNAME');
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.data) {
          throw new Error('No data received');
        }
        return response.data;
      })
      .then((data) => {
        this.setState({ user: data });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  render() {
    const { navigation } = this.props;
    const maxNumberOfRepos = navigation.getParam('maxNumberOfRepos', FALLBACK_NUMBER);
    const maxNumberOfFollowers = navigation.getParam('maxNumberOfRepos', FALLBACK_NUMBER);
    return (
      <View style={styles.container}>
        <UserProfileView
          user={this.state.user}
          maxNumberOfRepos={maxNumberOfRepos}
          maxNumberOfFollowers={maxNumberOfFollowers}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default UserScreen;

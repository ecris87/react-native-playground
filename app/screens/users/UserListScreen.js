import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderView from './HeaderView';
import UserListView from './UserListView';
import axios from 'axios';
import routes from '../../constants/routes';

class UserListScreen extends React.Component {
  static navigationOptions = {
    title: 'First Github Users'
  };

  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users?since=0')
      .then((response) => {
        if (!Array.isArray(response.data)) {
          throw new Error('No data received');
        }
        return response.data;
      })
      .then((data) => {
        let users = data.map((user, index) => ({
          id: user.id,
          login: user.login,
          avatar_url: user.avatar_url
        }));
        return users;
      })
      .then((users) => {
        this.setState({
          users: users
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  handleSelectUser = (username) => {
    const maxNumberOfRepos = this.state.users.reduce((accumulator, currentValue) =>
      Math.max(accumulator.public_repos, currentValue.public_repos)
    );
    const maxNumberOfFollowers = this.state.users.reduce((accumulator, currentValue) =>
      Math.max(accumulator.followers, currentValue.followers)
    );
    this.props.navigation.navigate(routes.USER, { username, maxNumberOfRepos, maxNumberOfFollowers });
  };

  render() {
    return (
      <View style={styles.container}>
        <HeaderView />
        <UserListView users={this.state.users} onPressUser={this.handleSelectUser} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default UserListScreen;

/**
 *   
 * componentDidMount() {
    axios
      .get('https://api.github.com/users?since=0')
      .then((response) => {
        if (!Array.isArray(response.data)) {
          throw new Error('No data received');
        }
        return response.data;
      })
      .then((data) => {
        let promisesArray = data.map((user) => axios.get(user.repos_url));

        Promise.all(promisesArray)
          .then((responses) => {
            let users = data.map((user, index) => ({
              id: user.id,
              login: user.login,
              avatar_url: user.avatar_url,
              public_repos: responses[index].data.length,
              followers: user.followers
            }));
            return users;
          })
          .then((users) => {
            this.setState({
              users: users
            });
          })
          .catch((e) => {
            console.error(e);
          });
      })
      .catch((e) => {
        console.error(e);
      });
  }
 */

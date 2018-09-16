import React from 'react';
import HomeScreen from './screens/home/HomeScreen';
import UserListScreen from './screens/users/UserListScreen';
import UserScreen from './screens/user/UserScreen';
import ReposScreen from './screens/repos/ReposScreen';
import RepoSelectionScreen from './screens/repoSelection/RepoSelectionScreen';
import { createStackNavigator } from 'react-navigation';
import routes from './constants/routes';
import client from './apollo/client';
import { ApolloProvider } from 'react-apollo';

const RootStack = createStackNavigator(
  {
    [routes.HOME]: HomeScreen,
    [routes.USERS]: UserListScreen,
    [routes.USER]: UserScreen,
    [routes.REPO_SELECTION]: RepoSelectionScreen,
    [routes.REPOS]: ReposScreen
  },
  {
    initialRouteName: routes.HOME
  }
);

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStack />
      </ApolloProvider>
    );
  }
}

export default App;

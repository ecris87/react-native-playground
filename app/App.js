import React from 'react';
import HomeScreen from './screens/home/HomeScreen';
import UserListScreen from './screens/users/UserListScreen';
import UserScreen from './screens/user/UserScreen';
import { createStackNavigator } from 'react-navigation';
import routes from './constants/routes';

const RootStack = createStackNavigator(
  {
    [routes.HOME]: HomeScreen,
    [routes.USERS]: UserListScreen,
    [routes.USER]: UserScreen
  },
  {
    initialRouteName: routes.HOME
  }
);

class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default App;

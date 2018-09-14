import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { Heading4 } from '../../components/Headings';

class UserItem extends React.PureComponent {
  handlePress = () => {
    this.props.onPressUser(this.props.login);
  };

  render() {
    const { login, avatar_url } = this.props;
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View style={styles.item}>
          <Image source={{ uri: avatar_url }} style={styles.avatar} />
          <Heading4>{login}</Heading4>
        </View>
      </TouchableOpacity>
    );
  }
}

class UserListView extends React.Component {
  render() {
    const { users, onPressUser } = this.props;
    return (
      <View style={styles.container}>
        {!users ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <FlatList
            renderItem={({ item, index }) => <UserItem {...item} onPressUser={onPressUser} />}
            data={users}
            keyExtractor={(user, index) => String(user.id)}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: 'skyblue',
    justifyContent: 'center'
  },
  item: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'white'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white'
  }
});

export default UserListView;

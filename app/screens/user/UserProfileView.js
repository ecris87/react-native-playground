import React from 'react';
import { StyleSheet, View, ActivityIndicator, Slider, Image } from 'react-native';
import { Heading3, Heading4 } from '../../components/Headings';
import { NormalText } from '../../components/Text';
const MAX_FOLLOWERS = 10000;
const MAX_REPOS = 1000;

const ContentItem = ({ info, value }) => {
  return (
    <View style={styles.contentItem}>
      <Heading4>{info}: </Heading4>
      <NormalText>{value}</NormalText>
    </View>
  );
};

class UserProfileView extends React.Component {
  render() {
    const { user } = this.props;
    const createdAt = user && new Date(user.created_at).toLocaleDateString();

    return (
      <View style={styles.container}>
        {!user ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <React.Fragment>
            <View style={styles.header}>
              <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
              <Heading3 style={{ color: 'white' }}>{user.name}</Heading3>
            </View>
            <View style={styles.content}>
              {user.company && <ContentItem info="Company" value={user.company} />}
              {user.location && <ContentItem info="Location" value={user.location} />}
              {user.bio && <ContentItem info="Bio" value={user.bio} />}
              {user.created_at && <ContentItem info="Created" value={createdAt} />}

              <ContentItem info="Followers" value={user.followers.toLocaleString()} />
              <Slider disabled value={user.followers} minimumValue={0} maximumValue={MAX_FOLLOWERS} />

              <ContentItem info="Public repos" value={user.public_repos.toLocaleString()} />
              <Slider disabled value={user.public_repos} minimumValue={0} maximumValue={MAX_REPOS} />
            </View>
          </React.Fragment>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'steelblue',
    alignItems: 'center'
  },
  content: {
    flex: 8,
    backgroundColor: 'powderblue',
    padding: 10
  },
  contentItem: {
    marginTop: 5,
    flexDirection: 'row'
  },
  sliderContainer: {
    marginTop: 5
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white'
  }
});

export default UserProfileView;

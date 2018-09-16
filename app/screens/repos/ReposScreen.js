import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Query } from 'react-apollo';
import { NormalText, BoldText } from '../../components/Text';
import { GET_LANGUAGE } from '../../apollo/client';
import languages from '../../constants/programmingLanguages';

class ReposScreen extends React.Component {
  static navigationOptions = {
    title: 'Popular Repos'
  };

  render() {
    return (
      <Query query={GET_LANGUAGE}>
        {({ data }) => (
          <View style={styles.container}>
            <NormalText>
              Popular <BoldText>{languages[data.language.value]}</BoldText> repos
            </NormalText>
          </View>
        )}
      </Query>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightcyan',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ReposScreen;

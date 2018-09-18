import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Query, graphql } from 'react-apollo';
import { ErrorText } from '../../components/Text';
import { GET_LANGUAGE, GET_REPOSITORIES } from '../../apollo/queries';
import languages from '../../constants/programmingLanguages';
import RepositoriesView from './RepositoriesView';

class ReposScreen extends React.Component {
  static navigationOptions = {
    title: 'Popular Repos'
  };

  render() {
    let languageString = 'language:' + this.props.selectedLanguage;
    return (
      <Query query={GET_REPOSITORIES} variables={{ byLanguage: languageString }}>
        {({ loading, error, data }) => {
          if (error) {
            return (
              <View style={styles.container}>
                <ErrorText>Failed to load repositories</ErrorText>
                <ErrorText>{error.message}</ErrorText>
              </View>
            );
          }

          let repositories = data.search ? data.search.nodes : null;
          return (
            <View style={styles.container}>
              {loading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <RepositoriesView repositories={repositories} selectedLanguage={this.props.selectedLanguage} />
              )}
            </View>
          );
        }}
      </Query>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightcyan',
    flex: 1
  }
});

export default graphql(GET_LANGUAGE, {
  props: ({ data }) => {
    return {
      selectedLanguage: languages[data.language.value]
    };
  }
})(ReposScreen);

import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Query } from 'react-apollo';
import { NormalText, BoldText } from '../../components/Text';
import { StyledPicker, StyledPickerItem } from '../../components/StyledPicker';
import client, { GET_LANGUAGE } from '../../apollo/client';
import languages from '../../constants/programmingLanguages';
import gql from 'graphql-tag';
import routes from '../../constants/routes';

class RepoSelectionScreen extends React.Component {
  static navigationOptions = {
    title: 'Repos'
  };

  handleLanguageSelection = (itemValue, itemIndex) => {
    client.mutate({
      mutation: gql`
        mutation SetLanguage($language: String!) {
          setLanguage(language: $language) @client {
            language
          }
        }
      `,
      variables: { language: itemValue }
    });
  };

  handlePress = () => {
    this.props.navigation.navigate(routes.REPOS);
  };

  render() {
    return (
      <Query query={GET_LANGUAGE}>
        {({ data }) => (
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <NormalText>Please select a programming language</NormalText>
            </View>
            <View style={styles.innerContainer}>
              <StyledPicker selectedValue={data.language.value} onValueChange={this.handleLanguageSelection}>
                {Object.keys(languages).map((key) => {
                  return <StyledPickerItem label={languages[key]} key={key} value={key} />;
                })}
              </StyledPicker>
            </View>
            <View style={styles.innerContainer}>
              <TouchableOpacity onPress={this.handlePress}>
                <NormalText style={styles.selectedLanguage}>
                  👉 Go to most popular <BoldText>{languages[data.language.value]}</BoldText> repos
                </NormalText>
              </TouchableOpacity>
            </View>
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
  },
  innerContainer: {
    padding: 10,
    alignItems: 'stretch'
  },
  selectedLanguage: {
    fontSize: 18,
    color: 'steelblue',
    padding: 10
  }
});

export default RepoSelectionScreen;

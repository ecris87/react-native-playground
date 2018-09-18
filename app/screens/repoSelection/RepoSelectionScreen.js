import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Query } from 'react-apollo';
import { NormalText, BoldText } from '../../components/Text';
import { StyledPicker, StyledPickerItem } from '../../components/StyledPicker';
import { ApolloConsumer } from 'react-apollo';
import { GET_LANGUAGE, SET_LANGUAGE } from '../../apollo/queries';
import languages from '../../constants/programmingLanguages';
import routes from '../../constants/routes';

const SelectLanguage = (props) => {
  return (
    <ApolloConsumer>
      {(client) => (
        <View style={styles.innerContainer}>
          <StyledPicker
            selectedValue={props.selectedValue}
            onValueChange={(newValue) => {
              client.mutate({
                mutation: SET_LANGUAGE,
                variables: { language: newValue }
              });
            }}
          >
            {Object.keys(languages).map((key) => {
              return <StyledPickerItem label={languages[key]} key={key} value={key} />;
            })}
          </StyledPicker>
        </View>
      )}
    </ApolloConsumer>
  );
};

class RepoSelectionScreen extends React.Component {
  static navigationOptions = {
    title: 'Programming Language'
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

            <SelectLanguage selectedValue={data.language.value} />

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

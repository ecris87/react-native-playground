import React from 'react';
import { StyleSheet, View, ScrollView, SectionList } from 'react-native';
import { BoldText, SmallText } from '../../components/Text';
import { Heading2 } from '../../components/Headings';

const NUMBER_ITEMS_TO_RENDER = 6; // how many items to render in the initial batch (enough to fill the screen)

const RepoHeader = ({ children }) => (
  <View style={styles.sectionHeader}>
    <BoldText style={styles.sectionTitle}>{children}</BoldText>
  </View>
);

const RepoItem = (props) => {
  return (
    <View style={styles.sectionItem}>
      <View style={styles.sectionItemInner}>
        <SmallText>⭐ Stars:</SmallText>
        <SmallText>{props.stargazers.totalCount.toLocaleString()}</SmallText>
      </View>
      <View style={styles.sectionItemInner}>
        <SmallText>🌐 URL:</SmallText>
        <SmallText style={styles.url} numberOfLines={1}>
          {props.url}
        </SmallText>
      </View>
      <ScrollView contentContainerStyle={styles.sectionScrollContent}>
        <SmallText>📝 Description:</SmallText>
        <SmallText style={styles.description}>{props.description}</SmallText>
      </ScrollView>
    </View>
  );
};

class RepositoriesView extends React.Component {
  render() {
    const { repositories, selectedLanguage } = this.props;
    if (!Array.isArray(repositories)) {
      return null;
    }

    let repositoriesAsSections = repositories.map((repo) => {
      return {
        title: repo.nameWithOwner,
        data: [repo]
      };
    });

    return (
      <View>
        <Heading2 style={styles.heading}>{selectedLanguage}</Heading2>
        <SectionList
          renderItem={({ item, index, section }) => <RepoItem {...item} />}
          renderSectionHeader={({ section: { title } }) => <RepoHeader>{title}</RepoHeader>}
          sections={repositoriesAsSections}
          initialNumToRender={NUMBER_ITEMS_TO_RENDER}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    color: 'steelblue',
    textAlign: 'center',
    paddingVertical: 10
  },
  sectionHeader: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderWidth: 0.5,
    borderColor: 'white',
    backgroundColor: 'steelblue'
  },
  sectionTitle: {
    color: 'white'
  },
  sectionItem: {
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  sectionItemInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5
  },
  sectionScrollContent: {
    justifyContent: 'flex-start'
  },
  description: {
    paddingTop: 5
  }
});

export default RepositoriesView;

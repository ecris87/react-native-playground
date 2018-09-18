import gql from 'graphql-tag';

const GET_LANGUAGE = gql`
  {
    language @client {
      value
    }
  }
`;

const SET_LANGUAGE = gql`
  mutation SetLanguage($language: String!) {
    setLanguage(language: $language) @client {
      language
    }
  }
`;

const GET_REPOSITORIES = gql`
  query GetRepositiories($byLanguage: String!) {
    search(type: REPOSITORY, query: $byLanguage, first: 10) {
      nodes {
        ... on Repository {
          id
          nameWithOwner
          url
          description
          forkCount
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

export { GET_LANGUAGE, SET_LANGUAGE, GET_REPOSITORIES };

import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import gql from 'graphql-tag';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
});

const cache = new InMemoryCache();

const defaults = {
  language: {
    value: 'JS',
    __typename: 'ProgrammingLanguage'
  }
};

const GET_LANGUAGE = gql`
  {
    language @client {
      value
    }
  }
`;

const resolvers = {
  Mutation: {
    setLanguage: (_, { language }, { cache }) => {
      const newLanguage = { value: language, __typename: 'ProgrammingLanguage' };
      const data = { language: newLanguage };
      cache.writeData({ data });
      return newLanguage;
    }
  }
};

const stateLink = withClientState({
  cache,
  defaults,
  resolvers
});

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, httpLink]), // order matters
  cache
});

export { GET_LANGUAGE };
export default client;

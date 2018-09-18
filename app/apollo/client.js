import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';

const cache = new InMemoryCache();

/**
 * FOR REMOTE DATA
 */
const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
});

const middlewareLink = new ApolloLink((operation, forward) => {
  const token = process.env.GITHUB_TOKEN;

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  });

  return forward(operation);
});

const networkLink = middlewareLink.concat(httpLink);

/**
 * FOR LOCAL DATA
 */
const defaults = {
  language: {
    value: 'JS',
    __typename: 'ProgrammingLanguage'
  }
};

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

/**
 * APOLLO CLIENT
 */
const client = new ApolloClient({
  link: ApolloLink.from([stateLink, networkLink]), // order matters
  cache
});

export default client;

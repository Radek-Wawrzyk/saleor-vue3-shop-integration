import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import config from '@/config';

const apolloClient = new ApolloClient({
  uri: config.apiURL,
  cache: new InMemoryCache(),
});

export default apolloClient;

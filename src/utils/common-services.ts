import {
  ApolloClient,
  FetchResult,
  gql,
  HttpLink,
  InMemoryCache
} from '@apollo/client';

export const getAPIData = async (
  _context: unknown,
  query: string,
  isMutation: boolean
): Promise<FetchResult> => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://countries.trevorblades.com/'
    }),
    cache: new InMemoryCache()
  });
  if (isMutation) {
    return await client.mutate({
      mutation: gql`
        ${query}
      `
    });
  }
  return await client.query({
    query: gql`
      ${query}
    `
  });
};

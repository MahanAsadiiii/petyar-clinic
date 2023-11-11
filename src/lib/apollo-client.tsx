import { ApolloClient, InMemoryCache } from "@apollo/client";

const client =  new ApolloClient({
    uri: "https://wp.petyar.clinic/gql",
    cache: new InMemoryCache(),
  });

export default client;
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const LENS_API = "https://api-mumbai.lens.dev/";

const httpLink = new HttpLink({ uri: LENS_API, fetch });

const getTokens = () => {
  try {
    return JSON.parse(localStorage.getItem("lens.tokens") || "{}");
  } catch (error) {
    return {};
  }
};

const authLink = new ApolloLink((operation, forward) => {
  const { accessToken } = getTokens();

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      "x-access-token": accessToken ? `Bearer ${accessToken}` : "",
    },
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function GraphQLProvider({ children }) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}

export default GraphQLProvider;

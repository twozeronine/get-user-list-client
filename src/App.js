import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetUsers from "./Components/GetUsers";
import Form from "./Components/Form";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, loaction, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://userlistgetwebapp.herokuapp.com/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      {""}
      <Form></Form>
      <GetUsers></GetUsers>
    </ApolloProvider>
  );
}

export default App;

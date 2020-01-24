import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "bootstrap/dist/css/bootstrap.min.css";

// Redux and Saga related imports
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import store from "./Store/configStore";

// Apollo related imports
import { ApolloClient } from "apollo-client";
import { baseURL } from "./Api";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import gql from "graphql-tag";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: baseURL
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link,
  cache
});

client
  .query({
    query: gql`
      query {
        foods {
          name
          imgUrl
        }
      }
    `
  })
  .then(console.log);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

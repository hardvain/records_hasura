import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import fetch from 'isomorphic-unfetch';
import { SubscriptionClient } from 'subscriptions-transport-ws';

let accessToken = null

const requestAccessToken = async () => {
  if (accessToken) return

  const res = await fetch(`/api/session`)
  if (res.ok) {
    const json = await res.json()
    accessToken = json.accessToken
  } else {
    accessToken = 'public'
  }
  return accessToken
}

// remove cached token on 401 from the server
const resetTokenLink = onError(({ networkError }) => {
  if (networkError && networkError.name === 'ServerError' && networkError.statusCode === 401) {
    accessToken = null
  }
})

const createHttpLink = (headers) => {
  return new HttpLink({
    uri: process.env.HASURA_GRAPHQL_URL,
    credentials: 'include',
    headers, // auth token is fetched on the server side
    fetch,
  });
}

const createWSLink = () => {
  let subscriptionClient = new SubscriptionClient(process.env.HASURA_GRAPHQL_URL_WSS, {
    reconnect: true,
    lazy:true,
    timeout: 30000,
    connectionParams: async () => {
      const token = await requestAccessToken()
      return {
        headers: {
          authorization: accessToken ? `Bearer ${token}` : '',
        },
      }
    },
  });
  subscriptionClient.maxConnectTimeGenerator.duration = () => subscriptionClient.maxConnectTimeGenerator.max
  return new WebSocketLink(
    subscriptionClient
  )
}

export default function createApolloClient(initialState, headers) {
  const ssrMode = typeof window === 'undefined'
  let link
  if (ssrMode) {
    link = createHttpLink(headers)
  } else {
    link = createWSLink()
  }
  return new ApolloClient({
    ssrMode,
    link,
    cache: new InMemoryCache().restore(initialState),
  })
}
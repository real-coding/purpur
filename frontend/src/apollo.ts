import ApolloClient from 'apollo-boost';

const API_URL = process.env.API_URL || 'http://localhost:4000';
export const GRAPHQL_URL = `${API_URL}/graphql`;

export const client = new ApolloClient({ uri: GRAPHQL_URL });

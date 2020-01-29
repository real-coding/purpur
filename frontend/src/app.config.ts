/* eslint-disable no-restricted-globals */

const { hostname, protocol } = location;

export const serverPort = 4000;
export const serverUri = `${protocol}//${hostname}:${serverPort}`;
export const graphQLUri = `${serverUri}/graphql`;

export enum routePaths {
  BASE = '/',
  SIGN_IN = '/sign_in',
  SIGN_UP = '/sign_up'
}

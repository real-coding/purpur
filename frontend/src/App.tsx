import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { graphQLUri as uri, routePaths } from './app.config';
import { BaseLayoutPage, NotFoundPage, SignInPage, SignUpPage } from './pages';

const client = new ApolloClient({ uri });

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path={routePaths.BASE}>
          <BaseLayoutPage />
        </Route>
        <Route path={routePaths.SIGN_IN}>
          <SignInPage />
        </Route>
        <Route path={routePaths.SIGN_UP}>
          <SignUpPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ApolloProvider } from '@apollo/react-hooks';
import { routePaths } from './app.config';
import { BaseLayoutPage, NotFoundPage, SignInPage, SignUpPage } from './pages';
import { client } from './apollo';

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path={routePaths.INDEX}>
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

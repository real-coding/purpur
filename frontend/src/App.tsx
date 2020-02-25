import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { ApolloProvider } from '@apollo/react-hooks';
import { routePaths } from './app.config';
import { BaseLayout, CenteredLayout, NotFound, SignIn, SignUp } from './pages';
import { client } from './apollo';
import Theme from './kit/theme';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  body {
    font-size: 1.6rem;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Router>
      <Theme>
        <GlobalStyle />
        <Switch>
          <Route exact path={routePaths.INDEX}>
            <BaseLayout />
          </Route>
          <CenteredLayout>
            <Route path={routePaths.SIGN_IN}>
              <SignIn />
            </Route>
            <Route path={routePaths.SIGN_UP}>
              <SignUp />
            </Route>
          </CenteredLayout>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Theme>
    </Router>
  </ApolloProvider>
);

export default App;

import React from "react";
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { useTranslation, Trans } from "react-i18next";
import logo from "./logo.svg";
import "./App.css";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});
const query = gql`
  {
    helloMessage
  }
`;

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  client.query({ query })
    .then(console.log, console.error);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Trans i18nKey="hrm-description" />
          </p>
          <button
            onClick={() => {
              i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
            }}
          >
            {t("Change language")}
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Learn React")}
          </a>
          <div>{t("Welcome to React")}</div>
        </header>
      </div>
    </ApolloProvider>
  );
};

export default App;

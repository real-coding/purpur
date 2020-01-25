import React from "react";
import { useTranslation, Trans } from "react-i18next";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
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
  );
};

export default App;

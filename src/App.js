import './reset.css';
import './style.css';
import React from 'react';
import { withTranslation } from "react-i18next";
import {Faq, Header, Table, GitSearch, User} from "./components";
import "./i18n";

function App() {
  return (
    <div className="App">
      <Header />
      <GitSearch/>
      <Table/>
      <Faq/>
      <User/>
    </div>
  );
}

export default withTranslation()(App);

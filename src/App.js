import './reset.css';
import './style.css';
import React from 'react';
import {Faq, Header, Table, GitSearch, User} from "./components";

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

export default App;

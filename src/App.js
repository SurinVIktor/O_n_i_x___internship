import './reset.css';
import './style.css';
import React from 'react';
import {Faq, Header, Table, User} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Faq/>
      <Table/>
      <User/>
    </div>
  );
}

export default App;

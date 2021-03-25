import './reset.css';
import './style.css';
import React from 'react';
import {GitSearch, User} from "./components";

function App() {
  return (
    <div className="App">
      <GitSearch/>
      <User/>
    </div>
  );
}

export default App;

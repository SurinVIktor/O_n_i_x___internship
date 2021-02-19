import './reset.css';
import './style.css';
import React from 'react';
import Header from './components/Header';
import Faq from './components/Faq';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Header />
      <Faq/>
      <User/>
    </div>
  );
}

export default App;

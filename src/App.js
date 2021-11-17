import React, {useState, useEffect} from 'react'
import List from './components/List';
import Hooks from './components/Hooks';

import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <div>
          <h1>Oh my React</h1>
        </div>
      </header>
      <div className="page">
        <main>
          {/* <List /> */}
          <Hooks />
        </main>
        <footer>
          KNI Kernel 2021
        </footer>
      </div>
    </div>
  );
}

export default App;

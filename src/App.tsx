import React from 'react';
import logo from './logo.svg';
import './App.css';

import { getFunctions, httpsCallable } from 'firebase/functions';
import { getApp } from 'firebase/app';

function App() {

  const getMessage = async () => {
    try {
      const functions = getFunctions(getApp(), 'asia-east2');
      const helloWorld = httpsCallable(functions, 'helloWorld');
      const res = await helloWorld({ data: 'asd' });
      const data = res.data;

      console.log(data);

    } catch (err) {
      throw err;
    }
  };

  React.useEffect(() => {
    getMessage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

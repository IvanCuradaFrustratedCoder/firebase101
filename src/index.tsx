import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from 'firebase/app';
import { getFunctions } from 'firebase/functions';

export const app = initializeApp({
  apiKey: "AIzaSyDjmhsg2w2GzRXHuj9FVnuzQovVwKGY5aw",
  authDomain: "ivan-labs.firebaseapp.com",
  databaseURL: "https://ivan-labs.firebaseio.com",
  projectId: "ivan-labs",
  storageBucket: "ivan-labs.appspot.com",
  messagingSenderId: "443977517502",
  appId: "1:443977517502:web:b79f39e2d5b058b55311ef"
});

export const functions = getFunctions(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

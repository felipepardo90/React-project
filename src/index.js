import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'

const firebaseConfig = {
  apiKey: "AIzaSyC4V_KL4DRAH8FWVVOoV0bIwC8XFmqXAIA",
  authDomain: "react-project-pardo.firebaseapp.com",
  projectId: "react-project-pardo",
  storageBucket: "react-project-pardo.appspot.com",
  messagingSenderId: "488552767472",
  appId: "1:488552767472:web:f1c415180e7824c19ac735",
  measurementId: "G-FX3EFQFY92"
};

initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
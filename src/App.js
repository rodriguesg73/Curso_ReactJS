// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import api from './services/api'
import Routes from './routes'

import './styles.css';

import Header from './Components/Header';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header/>
    <Routes/>
  </div>
);


export default App;

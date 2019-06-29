import React from 'react';
import AppNavbar from './components/AppNavbar';
import Header from './components/Header';
import Quote from './components/Quote';
import About from './components/About';
import Skills from './components/Skills';
import Spently from './components/Spently';
import Pricing from './components/Pricing';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <AppNavbar></AppNavbar>
        <Header></Header>
        <Quote></Quote>
        <About></About>
        <Skills></Skills>
        <Spently></Spently>
        <Pricing></Pricing>
      </div>
    </Provider>
  );
}

export default App;

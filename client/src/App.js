import React from 'react';
import AppNavbar from './components/AppNavbar';
import Header from './components/Header';
import Quote from './components/Quote';
import About from './components/About';
import Spently from './components/Spently';

import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar></AppNavbar>
      <Header></Header>
      <Quote></Quote>
      <About></About>
      <Spently></Spently>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;

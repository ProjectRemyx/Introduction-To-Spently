import React from 'react';
import AppNavbar from './components/AppNavbar';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar></AppNavbar>
      <Header></Header>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;

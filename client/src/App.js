import React from 'react';
import AppNavbar from './components/AppNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header-section">
        <AppNavbar></AppNavbar>

      </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Test</h1>
    </div>
  );
}

export default App;

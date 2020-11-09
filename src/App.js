import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import NavbarTwo from './components/Navbar2'
import Banner from './components/Banner'
import Hamburger from './components/Hamburger';

function App() {
  return (
    <div className="App">
      <Hamburger />
      {/* <NavbarTwo /> */}
      <Banner />
    </div>
  );
}

export default App;

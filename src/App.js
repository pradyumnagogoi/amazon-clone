import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/HeaderPart/Header';
import Home from './Components/HomePage/Home';
import Nav from './Components/NavBar/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;

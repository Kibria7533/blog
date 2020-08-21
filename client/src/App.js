import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidenav from './components/Sidenav';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div >
       <div className="container-fluid">
    <Header/>
    <Sidenav/>
  <Main/>
  <Footer/>
  </div>
</div>
   
    );
  }
}

export default App;

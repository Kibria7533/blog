import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div >
       <div className="container-fluid">
    <Header/>
  <Main/>
  </div>
</div>
   
    );
  }
}

export default App;

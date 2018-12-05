import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import navbar from './components/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <navbar />
      </div>
    );
  }
}

export default App;

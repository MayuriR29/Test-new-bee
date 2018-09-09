import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import PicOrderForm from './Component/PicOrderForm/PicOrderForm';


class App extends Component {
  constructor(){
    super();
    this.state={
      formElements:[{}]
    }
  }
  render() {
    return (
      <div className="App">
         <img src={logo} className="App-logo" alt="logo" />
         <PicOrderForm />
      </div>
    );
  }
}

export default App;

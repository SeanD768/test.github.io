import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Button from './components/button';
//import Autosuggest from 'react-autosuggest';
import Vehicle from './components/Vehicle';
import AutoMany from './components/AutoMany';
import Autocomplete from './components/autocomplete';
import Dropdown from './components/dropdown';



  class App extends React.Component {

    render() {


    return (
      <div className="App">


    {/* 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Testing Environment</h1>
        </header>


        <p className="App-intro">

        </p>

    */}




      <Vehicle />


        {/* <AutoMany/> */}

        </div>



    );
  }
}


export default App;

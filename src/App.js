import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';

class App extends Component 
{
  render() 
  {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Footer/>
      </div>
    );
  }
}
export default App;

import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js'
import Nav from './components/Nav.js';
import Features from './components/Features.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-1">
            <Nav />
            <Header></Header>
        </div>
         
            <Features />
            <Footer></Footer>
           </div>  
        
     
    
    );
  }
}

export default App;

import React from 'react';
import './css/App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App(props) {
  return (
    <div>
      <Menu/>
      <div className="container">
        { props.children }
      </div>
      <Footer/>
    </div>
    );
  }

export default App;
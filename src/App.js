import React from 'react';
import './css/App.css';
import Menu from './components/Menu';

function App(props) {
  return (
    <div>
      <Menu/>
      <div className="home">
        <div className="container-fluid">
          { props.children }
        </div>
      </div>
    </div>
    );
  }

export default App;
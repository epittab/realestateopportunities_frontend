import React from 'react';

// import {Switch, Route} from 'react-router-dom';
import './App.css';

import ValueContainer from './Values/ValueContainer';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
  
      < Nav />
      < ValueContainer />
  
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Dogs from './Dogs';

import {
  Link,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* link is what you use instead of anchor */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dogs">Dogs</Link>
        {/* <Home /> */}
        <Route exact path="/" component={Home} />
        {/* <About /> */}
        <Route path="/about" component={About} />
        {/* <Dogs />  */}
        <Route path="/dogs" component={Dogs} />
      </header>
    </div>
  );
}

export default App;

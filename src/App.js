import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Dogs from './Dogs';
import Dog from './Dog';
import PageNotFound from './PageNotFound';

import {
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* link is what you use instead of anchor (anchors only work locally, not on aws) */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dogs">Dogs</Link>
        <Link to="/nowhere">NOWHERE</Link>
        <Switch>
          {/* <Home /> */}
          <Route exact path="/" component={Home} />
          {/* <About /> */}
          <Route path="/about" component={About} />
          {/* <Dogs />  */}
          <Route path="/dogs" component={Dogs} />
          <Route component={PageNotFound} />
        </Switch>
        <Route path="/dogs/:dog" component={Dog} />
      </header>
    </div>
  );
}

export default App;

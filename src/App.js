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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
    this._incrementCount = this._incrementCount.bind(this)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.state.counter}</h1>
          <button onClick={this._incrementCountUsingArrow}>increment</button>
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

  _incrementCount() {
    console.log('app: increment count ');
    console.log(this);
    this.setState({
      counter: this.state.counter + 1
    })
  }
  _incrementCountUsingArrow = () => {
    console.log('app: increment count using arrow');
    console.log(this);
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

export default App;

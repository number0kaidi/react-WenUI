import React, { Component } from 'react';
import './Home.css';
import logo from '../../logo.svg';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="home">
        <div className="wrap">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    )
  }
}

export default Home;
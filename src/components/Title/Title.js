import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default Title;
import React, { Component } from 'react';
import './Col.css';

class Col extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  render() {
    const { text, span, offset, gutter } = this.props;
    return (
      <div
        className="col"
        style={{
          width: `${span / 24 * 100}%`,
          marginLeft: offset ? `${offset / 24 * 100}%` : '0%',
          padding: gutter ? `0 ${gutter / 2}px` : 0
        }}>
        <div>
          {text}
        </div>
      </div>
    )
  }
}

export default Col;
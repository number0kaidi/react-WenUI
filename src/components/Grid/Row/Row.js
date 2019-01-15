import React, { Component } from 'react';
import './Row.css';
import Col from '../Col/Col';

class Row extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  render() {
    const { children, type, justify, gutter } = this.props;
    return (
      <div
        className="row"
        style={{
          justifyContent: type === 'flex' && justify === 'end' ? 'flex-end' : type === 'flex' && justify === 'center' ? 'center' : type === 'flex' && justify === 'space-between' ? 'space-between' : type === 'flex' && justify === 'space-around' ? 'space-around' : 'flex-start'
        }}>
        {
          Object.prototype.toString.call(children) === '[object Array]' ? children.map((item, i) => (
            <Col
              span={item.props.span}
              offset={item.props.offset ? item.props.offset : null}
              gutter={gutter ? gutter : null}
              key={i}
              text={item.props.children}>
            </Col>
          )) :
            <Col
              span={children.props.span}
              offset={children.props.offset ? children.props.offset : null}
              gutter={gutter ? gutter : null}
              text={children.props.children}>
            </Col>
        }
      </div>
    )
  }
}

export default Row;
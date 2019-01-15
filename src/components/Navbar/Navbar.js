import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import routerList from '../../router'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routerList
    }
  }

  componentWillMount() {
    this.setNavData();
  }

  changeTitleName(item, i) {
    console.log(this.props);
    this.props.changeTitleName(item.title);
    this.setNavData();
  }

  setNavData() {
    const { routerList } = this.state;
    routerList.forEach(item => {
      item.isActive = false;
      if (item.path === window.location.pathname) {
        item.isActive = true;
      }
    })
    this.setState({
      routerList
    })
  }

  render() {
    const { routerList } = this.state;
    return (
      <ul className="navBar">
        {routerList.map((item, i) => <li className={item.isActive ? 'active' : ''} onClick={
          this.changeTitleName.bind(this, item, i)
        } key={i}><Link className="link" to={item.path}>{item.title}</Link></li>)}
      </ul>
    )
  }
}

export default Navbar;
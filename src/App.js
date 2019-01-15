import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux';
import routerList from './router'
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      tilteName: ''
    }
  }

  componentWillMount() {
    routerList.forEach(item => {
      if (item.path === window.location.pathname) {
        this.setState({
          tilteName: item.title
        })
      }
      if (item.path === '/') {
        this.setState({
          tilteName: '朱博文的 React UI 组件库'
        })
      }
    })
  }

  onChangeTitleName(newName) {
    this.setState({
      tilteName: newName
    })
    if (newName === 'Home') {
      this.setState({
        tilteName: '朱博文的 React UI 组件库'
      })
    }
  }

  render() {
    const { tilteName } = this.state;
    return (
      <Router>
        <div id="app">
          <Navbar changeTitleName={this.onChangeTitleName.bind(this)} />
          <div className="content">
            <Title title={tilteName} />
            {
              routerList.map(item => {
                return (
                  <Route key={item.path} exact={item.path === '/'} path={item.path} component={connect(mapStateToProps)(item.component)} />
                )
              })
            }
          </div>
        </div>
      </Router>
    );
  }
}


//映射Redux state到组件的属性
function mapStateToProps(state) {
  return { ...state }
}


export default App;

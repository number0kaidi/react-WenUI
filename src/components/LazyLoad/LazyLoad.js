import React, { Component } from 'react';
import './LazyLoad.css';

class LazyLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: this.props.imgList
    }
  }

  componentWillMount() {
    const { imgList } = this.state;
    let arr = [];
    imgList.forEach(item => {
      let obj = {
        url: item,
        isShow: false
      }
      arr.push(obj);
    })
    this.setState({
      imgList: arr
    })
  }

  componentDidMount() {
    this.setImgData(0);
    window.addEventListener('scroll', this.handleScroll.bind(this)) //监听滚动
  }

  componentWillUnmount() { //一定要最后移除监听器，以防多个组件之间导致this的指向紊乱
    this.setState = (state, callback) => { return; } // 防止react setState因为组件被销毁报错
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll = () => {
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    this.setImgData(scrollTop);
  }

  setImgData = (scrollTop) => {
    const { imgList } = this.state;
    const winHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    const imgs = document.getElementsByClassName('lazyLoad_li');
    Array.from(imgs).forEach((item, index) => {
      if (winHeight + scrollTop > item.offsetTop) {
        imgList.forEach((img, i) => {
          if (index === i) {
            img.isShow = true;
          }
        })
      }
    })
    this.setState({
      imgList
    })
  }

  render() {
    const { imgList } = this.state;
    return (
      <div className="lazyLoad">
        <ul>
          {
            imgList.map((item, i) => (
              <li className="lazyLoad_li" key={i}>
                <img src={item.isShow ? item.url : require('./img/bg.png')} alt="" />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default LazyLoad;
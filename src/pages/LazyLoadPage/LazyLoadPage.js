import React, { Component } from 'react';
import LazyLoad from '../../components/LazyLoad/LazyLoad';
import './LazyLoadPage.css';

class LazyLoadPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: [
        'http://zhubowen.cn/icon/1.png',
        'http://zhubowen.cn/icon/2.png',
        'http://zhubowen.cn/icon/3.png',
        'http://zhubowen.cn/icon/4.png',
        'http://zhubowen.cn/icon/5.png',
        'http://zhubowen.cn/icon/6.png',
        'http://zhubowen.cn/icon/7.png',
        'http://zhubowen.cn/icon/8.png',
        'http://zhubowen.cn/icon/9.png',
        'http://zhubowen.cn/icon/10.png',
        'http://zhubowen.cn/icon/11.png',
        'http://zhubowen.cn/icon/12.png',
        'http://zhubowen.cn/icon/13.png',
        'http://zhubowen.cn/icon/14.png',
        'http://zhubowen.cn/icon/15.png',
        'http://zhubowen.cn/icon/16.png',
        'http://zhubowen.cn/icon/17.png',
        'http://zhubowen.cn/icon/18.png',
        'http://zhubowen.cn/icon/19.png',
        'http://zhubowen.cn/icon/20.png',
        'http://zhubowen.cn/icon/21.png',
        'http://zhubowen.cn/icon/22.png',
        'http://zhubowen.cn/icon/23.png',
        'http://zhubowen.cn/icon/24.png',
        'http://zhubowen.cn/icon/25.png',
        'http://zhubowen.cn/icon/26.png',
        'http://zhubowen.cn/icon/27.png',
        'http://zhubowen.cn/icon/28.png',
        'http://zhubowen.cn/icon/29.png',
        'http://zhubowen.cn/icon/30.png',
      ]
    }
  }

  render() {
    const { imgList } = this.state;
    return (
      <div>
        <LazyLoad imgList={imgList} />
      </div>
    )
  }
}

export default LazyLoadPage;
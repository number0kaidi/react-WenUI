import React, { Component } from 'react';
import './Progress.css';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width || 200,
      lineWidth: null,
      circlePerimeter: null,
      progress: props.progress || 100,
      isShow: true
    }
  }

  componentDidMount() {
    const { type } = this.props;
    const { width } = this.state;
    if (type) {
      // 圆的周长 2πr 2r =  3 * width / 4
      this.setState({
        circlePerimeter: 3 * width / 4 * Math.PI
      })
    } else {
      // line 的长度是 svg 的长度 - 50
      this.setState({
        lineWidth: width - 50
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    // 每变化一次 progress 要改变 isShow 重新渲染一下 svg
    if (this.state.progress !== nextProps.progress) {
      this.setState({
        progress: nextProps.progress, // 永远是最新的进度
        oldProgress: this.state.progress,
        isShow: false
      }, () => {
        this.setState({
          isShow: true
        })
      })
    }
  }


  // circle 中 cx cy 圆心 r 半径 
  // line 中 x1 属性在 x 轴定义线条的开始
  // y1 属性在 y 轴定义线条的开始
  // x2 属性在 x 轴定义线条的结束
  // y2 属性在 y 轴定义线条的结束
  // stroke-dasharray 虚线 
  // stroke-dashoffset 周长(线的长度)为 200 进度为 80 那么 stroke-dashoffset = 200 * (100 - 80) / 100 = 40 就可以绘制进度 80 的圆环(直线)
  // animate 是控制动画的
  // progress 变化之后 svg 先渲染为 stroke-dashoffset = 周长(长度) * (1 - oldProgress / 100)
  // stroke-dashoffset 要从 周长(长度) * (1 - oldProgress / 100) 往新的 周长(长度) * (1 - progress / 100) 变化

  render() {
    const { type, color } = this.props;
    const { width, lineWidth, circlePerimeter, progress, oldProgress, isShow } = this.state;
    return (
      <div className="progress">
        {
          isShow ?
            type ?
              <div className="circleWrap" style={{ width: width, height: width }}>
                <svg id="circle" width={width} height={width}>
                  <circle cx={width / 2} cy={width / 2} r={3 * width / 8} fill="none" stroke="#e8e8e8" strokeWidth="12" />
                  <circle cx={width / 2} cy={width / 2} r={3 * width / 8} fill="none" stroke={color} strokeWidth="12" strokeLinecap="round" strokeDasharray={circlePerimeter} strokeDashoffset={oldProgress ? circlePerimeter * (1 - oldProgress / 100) : circlePerimeter} >
                    <animate attributeName="stroke-dashoffset" attributeType="XML" from={oldProgress ? circlePerimeter * (1 - oldProgress / 100) : circlePerimeter} to={circlePerimeter * (1 - progress / 100)} dur="1s" fill="freeze" />
                  </circle>
                </svg>
                <div>{progress}%</div>
              </div> :
              <div className="lineWrap" style={{ width: width, height: 20 }}>
                <svg width={width} height="20">
                  <line x1="10" y1="10" x2={width - 40} y2="10" fill="none" strokeWidth="12" stroke="#e8e8e8" strokeLinecap="round" />
                  <line x1="10" y1="10" x2={width - 40} y2="10" fill="none" strokeWidth="12" stroke={color} strokeLinecap="round" strokeDasharray={lineWidth} strokeDashoffset={oldProgress ? lineWidth * (1 - oldProgress / 100) : lineWidth}>
                    <animate attributeName="stroke-dashoffset" attributeType="XML" from={oldProgress ? lineWidth * (1 - oldProgress / 100) : lineWidth} to={lineWidth * (1 - progress / 100)} dur="1s" fill="freeze" />
                  </line>
                </svg>
                <div>{progress}%</div>
              </div> : null
        }
      </div>
    )
  }
}

export default Progress;
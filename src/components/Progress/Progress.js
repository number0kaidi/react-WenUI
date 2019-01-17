import React, { Component } from 'react';
import './Progress.css';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width || 200,
      lineWidth: null,
      circlePerimeter: null,
      percentage: props.percentage,
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
      // line 的长度是 svg 的长度 - 60
      this.setState({
        lineWidth: width - 60
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    // 每变化一次 percentage 要改变 isShow 重新渲染一下 svg
    if (this.state.percentage !== nextProps.percentage) {
      this.setState({
        percentage: nextProps.percentage, // 永远是最新的进度
        oldPercentage: this.state.percentage,
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
  // percentage 从 80 变为 60 svg 先渲染为 0 到 80 stroke-dashoffset 再从 80 的值往新的 60 的值变化
  // stroke-dashoffset = 周长 * (100 - 进度) / 100

  render() {
    const { type, color } = this.props;
    const { width, lineWidth, circlePerimeter, percentage, oldPercentage, isShow } = this.state;
    return (
      <div className="progress">
        {
          isShow ?
            type ?
              <div className="circleWrap" style={{ width: width, height: width }}>
                <svg id="circle" width={width} height={width}>
                  <circle cx={width / 2} cy={width / 2} r={3 * width / 8} fill="none" stroke="#e8e8e8" strokeWidth="12" />
                  <circle cx={width / 2} cy={width / 2} r={3 * width / 8} fill="none" stroke={color} strokeWidth="12" strokeLinecap="round" strokeDasharray={circlePerimeter} strokeDashoffset={oldPercentage ? circlePerimeter * (1 - oldPercentage / 100) : circlePerimeter} >
                    <animate attributeName="stroke-dashoffset" attributeType="XML" from={oldPercentage ? circlePerimeter * (1 - oldPercentage / 100) : circlePerimeter} to={circlePerimeter * (1 - percentage / 100)} dur="1s" fill="freeze" />
                  </circle>
                </svg>
                <div>{percentage}%</div>
              </div> :
              <div className="lineWrap" style={{ width: width, height: 20 }}>
                <svg width={width} height="20">
                  <line x1="10" y1="10" x2={width - 50} y2="10" fill="none" strokeWidth="12" stroke="#e8e8e8" strokeLinecap="round" />
                  <line x1="10" y1="10" x2={width - 50} y2="10" fill="none" strokeWidth="12" stroke={color} strokeLinecap="round" strokeDasharray={lineWidth} strokeDashoffset={oldPercentage ? lineWidth * (1 - oldPercentage / 100) : lineWidth}>
                    <animate attributeName="stroke-dashoffset" attributeType="XML" from={oldPercentage ? lineWidth * (1 - oldPercentage / 100) : lineWidth} to={lineWidth * (1 - percentage / 100)} dur="1s" fill="freeze" />
                  </line>
                </svg>
                <div>{percentage}%</div>
              </div> : null
        }
      </div>
    )
  }
}

export default Progress;
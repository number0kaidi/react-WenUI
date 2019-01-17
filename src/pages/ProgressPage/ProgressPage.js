import React, { Component } from 'react';
import Progress from '../../components/Progress/Progress';
import './ProgressPage.css';

class ProgressPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 80,
      autoPercentage: 66
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        autoPercentage: Math.floor(Math.random() * (1 - 100) + 100)
      })
    }, 2000);
  }

  changePercentage() {
    this.setState({
      percentage: Math.floor(Math.random() * (1 - 100) + 100)
    })
  }

  render() {
    const { percentage, autoPercentage } = this.state;
    return (
      <div className="ProgressPage">
        <div className="wrap">
          <Progress type="circle" percentage={100} color="#1890ff" />
          <Progress type="circle" percentage={percentage} color="orange" width={300} />
          <Progress type="circle" percentage={percentage} color="hotpink" width={300} />
          <Progress type="circle" percentage={32} color="red" />
          <Progress type="circle" percentage={autoPercentage} color="purple" width={450} />
        </div>
        <div style={{ marginTop: '40px' }}>
          <Progress percentage={48} color="#ff520e" />
          <Progress percentage={percentage} color="skyblue" width={500} />
          <Progress percentage={88} color="pink" width={350} />
        </div>
        <button onClick={this.changePercentage.bind(this)}>更改进度</button>
      </div>
    )
  }
}

export default ProgressPage;
import React, { Component } from 'react';
import Progress from '../../components/Progress/Progress';
import './ProgressPage.css';

class ProgressPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 80
    }
  }

  changeProgress() {
    this.setState({
      progress: Math.floor(Math.random() * (1 - 100) + 100)
    })
  }

  render() {
    const { progress } = this.state;
    return (
      <div className="ProgressPage">
        <div className="wrap">
          <Progress type="circle" progress={100} color="#1890ff" />
          <Progress type="circle" progress={progress} color="orange" width={300} />
          <Progress type="circle" progress={progress} color="hotpink" width={300} />
          <Progress type="circle" progress={32} color="red" />
        </div>
        <div style={{ marginTop: '40px' }}>
          <Progress progress={48} color="#ff520e" />
          <Progress progress={progress} color="skyblue" width={500} />
          <Progress progress={88} color="pink" width={350} />
        </div>
        <button onClick={this.changeProgress.bind(this)}>更改进度</button>
      </div>
    )
  }
}

export default ProgressPage;
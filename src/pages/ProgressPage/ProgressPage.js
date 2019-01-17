import React, { Component } from 'react';
import Progress from '../../components/Progress/Progress';
import './ProgressPage.css';

class ProgressPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 80,
      autoPercentage: 66,
      addPercentage: 0
    }
  }

  componentDidMount() {
    let num = 0;
    setInterval(() => {
      num += 10
      this.setState({
        autoPercentage: Math.floor(Math.random() * (1 - 100) + 100),
        addPercentage: num,
      }, () => {
        num === 100 ? num = -10 : num
      })
    }, 2000);
  }

  changePercentage() {
    this.setState({
      percentage: Math.floor(Math.random() * (1 - 100) + 100)
    })
  }

  render() {
    const { percentage, autoPercentage, addPercentage } = this.state;
    return (
      <div className="ProgressPage">
        <div className="wrap">
          <Progress type="circle" percentage={autoPercentage} color="#1890ff" />
          <Progress type="circle" percentage={percentage} color="orange" width={300} />
          <Progress type="circle" percentage={percentage} color="hotpink" width={300} />
          <Progress type="circle" percentage={32} color="red" />
          <Progress type="circle" percentage={autoPercentage} color="purple" width={450} />
          <Progress type="circle" percentage={addPercentage} color="gold" width={450} />
        </div>
        <div className="wrap" style={{ marginTop: '40px' }}>
          <div>
            <Progress percentage={48} color="#ff520e" />
            <Progress percentage={percentage} color="skyblue" width={500} />
            <Progress percentage={88} color="pink" width={300} />
            <Progress percentage={addPercentage} color="gold" width={400} />
          </div>
          <button onClick={this.changePercentage.bind(this)}>更改进度</button>
        </div>
      </div>
    )
  }
}

export default ProgressPage;
import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {
  constructor(props) {
    super(props);
    // 总页数
    const length = Math.ceil(props.total / props.pageSize);
    this.state = {
      current: props.defaultCurrent <= length ? props.defaultCurrent : length || 1,
      total: props.total,
      pageSize: props.pageSize || 10,
      pageArr: [],
    }
  }

  componentWillMount() {
    // console.log(this.props);
    const { current, total, pageSize } = this.state;
    // 页数
    const length = Math.ceil(total / pageSize);
    // 初始化展示 默认 defaultCurrent 等于 1
    const arr = this.initPage(length);
    this.setState({ pageArr: arr });
    // 初始化 defaultCurrent 不等于 1 的时候
    if (current !== 1) {
      this.handlePage(current);
    }
  }


  initPage(length) {
    let arr = [];
    if (length <= 6) {
      for (let i = 1; i <= length; i++) {
        arr.push(i)
      }
    } else {
      arr = [1, 2, 3, 4, 5, '•••', length]
    }
    return arr;
  }

  handlePage(item) {
    this.props.onChange(item);
    const { total, pageSize } = this.state;
    let arr = [];
    const length = Math.ceil(total / pageSize);
    if (item !== '•••') {
      if (length >= 7 && item >= 3) {
        if (item <= length - 4) {
          // 点击页数小于 length - 4 的时候 展示•••
          arr = [item - 2, item - 1, item, item + 1, item + 2, '•••', length]
        } else {
          // 点击页数大于 length - 4 的时候 而且页数大于等于 7 页数从 length - 6 开始
          const start = length - 6;
          for (let i = start; i <= length; i++) {
            arr.push(i);
          }
        }
      } else {
        // 点击 1和2 或 length < 7
        arr = this.initPage(length);
      }
    } else {
      return
    }
    this.setState({ pageArr: arr, current: item });
  }

  handlePrev() {
    const { current } = this.state;
    const num = current > 1 ? current - 1 : current
    this.setState({ current: num }, () => {
      this.handlePage(this.state.current);
    });
  }

  handleNext() {
    const { current, total, pageSize } = this.state;
    const length = Math.ceil(total / pageSize);
    const num = current < length ? current + 1 : current
    this.setState({ current: num }, () => {
      this.handlePage(this.state.current);
    });
  }

  select(e) {
    this.setState({
      pageSize: e.target.value,
      current: 1
    }, () => {
      const { current } = this.state;
      this.handlePage(current);
    })
  }

  render() {
    const { current, pageArr, total, pageSize } = this.state;
    const { sizeChange } = this.props;
    const length = Math.ceil(total / pageSize);
    return (
      <ul className="pagination">
        {
          current >= 4 ?
            <li className="first" onClick={this.handlePage.bind(this, 1)}>首页</li> : null
        }
        {
          current > 1 ?
            <li className="prev" onClick={this.handlePrev.bind(this)}>上一页</li> : null
        }
        {
          pageArr.map((item, i) => (
            <li key={i}
              className={item === '•••' ? 'omit' : item === current ? 'active' : ''}
              onClick={this.handlePage.bind(this, item)}>
              {item}
            </li>
          ))
        }
        {
          current < length ?
            <li className="next" onClick={this.handleNext.bind(this)}>下一页</li> : null
        }
        {
          sizeChange ?
            <select onChange={this.select.bind(this)}>
              {
                sizeChange.map((item, i) => (
                  <option value={item} key={i}>{item}条/页</option>
                ))
              }
            </select> : null
        }
      </ul>
    )
  }
}

export default Pagination;
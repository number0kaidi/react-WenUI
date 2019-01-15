import React, { Component } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import './PaginationPage.css';

class PaginationPage extends Component {
  constructor(props) {
    super(props);
  }

  pageChange(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="paginationPage">
        <div className="wrap">
          <Pagination
            defaultCurrent={1}
            total={20}
            pageSize={20}
            onChange={this.pageChange.bind(this)} />
          <div className="title">初始化一页</div>
        </div>

        <div className="wrap">
          <Pagination
            defaultCurrent={1}
            total={60}
            pageSize={20}
            onChange={this.pageChange.bind(this)} />
          <div className="title">初始化三页</div>
        </div>

        <div className="wrap">
          <Pagination
            defaultCurrent={1}
            total={90}
            pageSize={20}
            onChange={this.pageChange.bind(this)} />
          <div className="title">每页20条共90条,初始化五页</div>
        </div>

        <div className="wrap">
          <Pagination
            defaultCurrent={3}
            total={120}
            pageSize={20}
            onChange={this.pageChange.bind(this)} />
          <div className="title">初始化六页,默认第三页</div>
        </div>

        <div className="wrap">
          <Pagination
            defaultCurrent={1}
            total={140}
            pageSize={20}
            onChange={this.pageChange.bind(this)} />
          <div className="title">初始化七页</div>
        </div>

        <div className="wrap">
          <Pagination
            defaultCurrent={7}
            total={200}
            pageSize={20}
            onChange={this.pageChange.bind(this)} />
          <div className="title">初始化十页,默认第七页</div>
        </div>

        <div className="wrap">
          <Pagination
            sizeChange={[20, 10, 50]}
            defaultCurrent={1}
            total={990}
            pageSize={20}
            onChange={this.pageChange.bind(this)} />
          <div className="title">每页20条共990条,可更改每页条数</div>
        </div>
      </div>
    )
  }
}

export default PaginationPage;
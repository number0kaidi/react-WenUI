## 朱博文的React-UI组件

#### Lazyload 图片懒加载

```javascript
<LazyLoad imgList={imgList} />
```

#### Grid 栅格

```javascript
import Grid from '../../components/Grid';

const Row = Grid.Row;
const Col = Grid.Col;

// 基础用法
<Row>
  <Col span={12}>col-12</Col>
  <Col span={12}>col-12</Col>
</Row>

// flex布局 offset偏移
<Row type="flex" justify="space-around">
  <Col span={6} offset={6}>col-6</Col>
  <Col span={6}>col-6</Col>
</Row>

// 区块间隔
<Row gutter={16}>
  <Col span={6}>col-6</Col>
  <Col span={6}>col-6</Col>
  <Col span={6}>col-6</Col>
  <Col span={6}>col-6</Col>
</Row>
```

#### Pagination 分页

```javascript
<Pagination
  sizeChange={[20, 10, 50]} // 更改每页条数
  defaultCurrent={1} // 默认第几页
  total={990} // 总条数
  pageSize={20} // 每页多少条
  onChange={this.pageChange.bind(this)} />
```

#### 持续更新中...




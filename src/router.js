import Home from './pages/Home/Home';
import LazyLoadPage from './pages/LazyLoadPage/LazyLoadPage';
import GridPage from './pages/GridPage/GridPage';
import PaginationPage from './pages/PaginationPage/PaginationPage';
import ProgressPage from './pages/ProgressPage/ProgressPage';

export default [
  {
    title: 'Home',
    path: '/',
    component: Home,
  },
  {
    title: 'Lazyload 图片懒加载',
    path: '/LazyLoadPage',
    component: LazyLoadPage,
  },
  {
    title: 'Grid 栅格',
    path: '/Grid',
    component: GridPage,
  },
  {
    title: 'Pagination 分页',
    path: '/Pagination',
    component: PaginationPage,
  },
  {
    title: 'Progress 进度条',
    path: '/Progress',
    component: ProgressPage,
  },
]

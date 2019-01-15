import Home from './pages/Home/Home';
import LazyLoadPage from './pages/LazyLoadPage/LazyLoadPage';
import GridPage from './pages/GridPage/GridPage';
import PaginationPage from './pages/PaginationPage/PaginationPage';

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
    title: 'Modal 对话框',
    path: '/Modal',
    component: Home,
  },
  {
    title: 'Carousel 走马灯',
    path: '/Carousel',
    component: Home,
  },
]

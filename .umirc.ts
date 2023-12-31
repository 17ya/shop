import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
      layout: false,
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      layout: false,
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
      layout: false,
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
      layout: false,
    },
  ],
  npmClient: 'pnpm',
  qiankun: {
    slave: {},
  },
});

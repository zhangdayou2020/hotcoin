import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},

  // 👇 关键在这里，关闭默认布局（去除左侧菜单等）
  layout: false,

  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: './Home',
    },
  ],
  npmClient: 'npm',
});

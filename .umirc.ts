import routes from './config/routes';
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd:{},
  routes:routes,
  fastRefresh: {},
});
